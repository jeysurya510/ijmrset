const express = require('express');
const db = require('./db');

const router = express.Router();

router.get('/', (req, res) => {
  const sql = 'SELECT * FROM subcategory';
  db.execute(sql, (err, result) => {
    if (err) {
      return res.status(500).send('Error fetching subcategories');
    }
    res.status(200).json(result);
  });
});

router.post('/', (req, res) => {
  const { subcategory_name, category_id } = req.body;

  // Step 1: Check if subcategory already exists for the given category_id
  const checkSql = 'SELECT * FROM subcategory WHERE subcategory_name = ? AND category_id = ?';
  db.execute(checkSql, [subcategory_name, category_id], (err, results) => {
    if (err) {
      return res.status(500).send('Database error while checking subcategory');
    }

    if (results.length > 0) {
      // Subcategory already exists in the same category
      return res.status(400).send('Subcategory name already exists in this category');
    }

    // Step 2: If not found, insert new subcategory
    const insertSql = 'INSERT INTO subcategory (subcategory_name, category_id) VALUES (?, ?)';
    db.execute(insertSql, [subcategory_name, category_id], (err, result) => {
      if (err) {
        return res.status(500).send('Error creating subcategory');
      }
      res.status(201).send('Subcategory created successfully');
    });
  });
});


router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { subcategory_name, category_id } = req.body;

  // Step 1: Check if the updated name already exists for the same category (excluding current subcategory)
  const checkSql = 'SELECT * FROM subcategory WHERE subcategory_name = ? AND category_id = ? AND id != ?';
  db.execute(checkSql, [subcategory_name, category_id, id], (err, results) => {
    if (err) {
      return res.status(500).send('Database error while checking subcategory');
    }

    if (results.length > 0) {
      // Subcategory already exists in the same category
      return res.status(400).send('Subcategory name already exists in this category');
    }

    // Step 2: If unique, update the subcategory
    const updateSql = 'UPDATE subcategory SET subcategory_name = ?, category_id = ? WHERE id = ?';
    db.execute(updateSql, [subcategory_name, category_id, id], (err, result) => {
      if (err) {
        return res.status(500).send('Error updating subcategory');
      }
      res.status(200).send('Subcategory updated successfully');
    });
  });
});



router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM subcategory WHERE id = ?';
  db.execute(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).send('Error deleting subcategory');
    }
    res.status(200).send('Subcategory deleted successfully');
  });
});

module.exports = router;
