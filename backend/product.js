const express = require('express');
const db = require('./db');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const router = express.Router();

const uploadDir = path.join(__dirname, 'upload');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Function to handle duplicate filenames
const getUniqueFilename = (folder, filename) => {
  let ext = path.extname(filename); // File extension (.pdf)
  let name = path.basename(filename, ext); // File name without extension
  let newFilename = filename;
  let counter = 1;

  while (fs.existsSync(path.join(folder, newFilename))) {
    newFilename = `${name}(${counter})${ext}`; // Append (1), (2), etc.
    counter++;
  }

  return newFilename;
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const safeFilename = getUniqueFilename(uploadDir, file.originalname);
    cb(null, safeFilename);
  },
});

const upload = multer({ storage });

router.get('/', (req, res) => {
  const sql = 'SELECT * FROM product';
  db.execute(sql, (err, result) => {
    if (err) {
      return res.status(500).send('Error fetching products');
    }
    res.status(200).json(result);
  });
});

// Use Multer middleware to handle file upload
router.post('/', upload.single('pdf'), (req, res) => {
  const { title, description, category_id, subcategory_id } = req.body;
  const pdf = req.file ? req.file.filename : null; // Store the original filename or modified version

  if (!pdf) {
    return res.status(400).json({ msg: 'PDF file is required' });
  }

  const sql = 'INSERT INTO product (title, description, pdf, category_id, subcategory_id) VALUES (?, ?, ?, ?, ?)';
  db.execute(sql, [title, description, pdf, category_id, subcategory_id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ msg: 'Error creating product' });
    }
    res.status(201).json({ msg: 'Product created successfully', pdf });
  });
});



// UPDATE Product (Including PDF Replacement)
router.put("/:id", upload.single("pdf"), (req, res) => {
  const { id } = req.params;
  const { title, description, category_id, subcategory_id } = req.body;
  const newPdf = req.file ? req.file.filename : null; // This will now be the original name

  const getFileQuery = "SELECT pdf FROM product WHERE id = ?";
  db.execute(getFileQuery, [id], (err, result) => {
    if (err) return res.status(500).json({ msg: "Error fetching product" });

    if (result.length === 0) return res.status(404).json({ msg: "Product not found" });

    const oldFilePath = path.join(__dirname, "upload", result[0].pdf);

    if (newPdf && result[0].pdf) {
      fs.unlink(oldFilePath, (err) => {
        if (err && err.code !== "ENOENT") {
          console.error("Error deleting old file:", err);
          return res.status(500).json({ msg: "Error deleting old file" });
        }
      });
    }

    let sql =
      "UPDATE product SET title = ?, description = ?, category_id = ?, subcategory_id = ?";
    const params = [title, description, category_id, subcategory_id];

    if (newPdf) {
      sql += ", pdf = ?";
      console.log(newPdf)
      params.push(newPdf);
    }

    sql += " WHERE id = ?";
    params.push(id);

    db.execute(sql, params, (err, result) => {
      if (err) return res.status(500).json({ msg: "Error updating product" });
      res.status(200).json({ msg: "Product updated successfully" });
    });
  });
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;

  // First, retrieve the filename from the database
  const getFileQuery = 'SELECT pdf FROM product WHERE id = ?';

  db.execute(getFileQuery, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ msg: 'Error fetching product' });
    }

    if (result.length === 0) {
      return res.status(404).json({ msg: 'Product not found' });
    }

    const filePath = path.join(__dirname, 'upload', result[0].pdf);

    // Delete the file from the uploads directory
    fs.unlink(filePath, (err) => {
      if (err && err.code !== 'ENOENT') {
        console.error('Error deleting file:', err);
        return res.status(500).json({ msg: 'Error deleting file' });
      }

      // Proceed to delete from database
      const deleteQuery = 'DELETE FROM product WHERE id = ?';

      db.execute(deleteQuery, [id], (err, result) => {
        if (err) {
          return res.status(500).json({ msg: 'Error deleting product from database' });
        }

        res.status(200).json({ msg: 'Product and associated file deleted successfully' });
      });
    });
  });
});


router.get('/grouped', (req, res) => {
  const sql = `
    SELECT
      p.id,
      p.title,
      p.description,
      p.pdf,
      c.category_name,
      s.subcategory_name
    FROM
      product p
    JOIN
      category c ON p.category_id = c.id
    JOIN
      subcategory s ON p.subcategory_id = s.id
  `;

  db.execute(sql, (err, results) => {
    if (err) {
      return res.status(500).send('Error fetching grouped products');
    }

    const groupedData = {};

    results.forEach(product => {
      const categoryName = product.category_name;
      const subcategoryName = product.subcategory_name;

      if (!groupedData[categoryName]) {
        groupedData[categoryName] = {};
      }

      if (!groupedData[categoryName][subcategoryName]) {
        groupedData[categoryName][subcategoryName] = [];
      }

      groupedData[categoryName][subcategoryName].push({
        id: product.id,
        title: product.title,
        description: product.description,
        pdf: product.pdf,
        subcategoryName: product.subcategory_name,
        categoryName: product.category_name
      });
    });

    res.status(200).json(groupedData);
  });
});

module.exports = router;
