const express = require('express');
const db = require('./db');
const VerifyUser = require('./jwt')

const router = express.Router();

router.get('/', (req, res) => {
  const sql = 'SELECT * FROM category';
    db.execute(sql, (err, result) => {
    if (err) {
      return res.status(500).send('Error fetching categories');
    }
    res.status(200).json(result);
  });
});



router.post('/',VerifyUser, (req, res) => {
  const { category_name } = req.body;
  const sql = 'INSERT INTO category (category_name) VALUES (?)';
  db.execute(sql, [category_name], (err, result) => {
    if (err) {
      return res.status(500).json({msg:'Error creating category. Please verify that the name does not already exist, or refresh the browser and try again'});
    }
    res.status(201).send('Category created successfully');
  });
});

router.put('/:id',VerifyUser, (req, res) => {
  const { id } = req.params;
  const { category_name } = req.body;
  const sql = 'UPDATE category SET category_name = ? WHERE id = ?';
  db.execute(sql, [category_name, id], (err, result) => {
    if (err) {
      return res.status(500).send('Error updating category');
    }
    res.status(200).send('Category updated successfully');
  });
});

router.delete('/:id',VerifyUser, (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM category WHERE id = ?';
  db.execute(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).send('Error deleting category');
    }
    res.status(200).send('Category deleted successfully');
  });
});

module.exports = router;
