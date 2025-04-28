const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const authRoutes = require('./auth');
const categoryRoutes = require('./category');
const subcategoryRoutes = require('./subcategory');
const productRoutes = require('./product');


const app = express();
const port = 3000;

app.use(cors());

app.use("/upload", express.static("upload"));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/categories', categoryRoutes);
app.use('/subcategories', subcategoryRoutes);
app.use('/products', productRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
