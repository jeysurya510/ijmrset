import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cross from '../assets/cross.svg';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Typography } from '@mui/material';
import HandleUpdateProduct from './HandleUpdateProduct';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Products = ({ categoryDetails, subCategoryDetails, productDetails, ClearIntervalDB }) => {
  const quillRef = useRef(null);
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [Category, setCategory] = useState('');
  const [subCategory, setsubCategory] = useState('');
  const [isPdfLoading, setIsPdfLoading] = useState(false);

  const [updateProductID, setUpdateProductID] = useState('');
  const [updateProductCategoryID, setUpdateProductCategoryID] = useState('');
  const [UpdateProductSUBCategoryID, setUpdateProductSUBCategoryID] = useState('');
  const [onClickUpdate, setOnCLickUpdate] = useState(false);
  const [updateTitle, setUpdateTitle] = useState('');
  const [updateDescription, setUpdateDescription] = useState('');
  const [updateFile, setUpdateFile] = useState();

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['blockquote', 'code-block'],
      ['link'],
      ['clean'],
    ],
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile) {
      if (selectedFile.type === 'application/pdf') {
        setFile(selectedFile);
      } else {
        toast.error('Please upload a valid PDF file.');
        setFile(null);
      }
    } else {
      setFile(null);
    }
  };

  const handleViewPDF = () => {
    if (file) {
      window.open(URL.createObjectURL(file), '_blank');
    } else {
      toast.warn('Please select a PDF file first.');
    }
  };

  const handleUpload = async () => {
    if (!Category || !subCategory || !title || !description || !file) {
      toast.error('All fields are required!');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('category_id', Category);
    formData.append('subcategory_id', subCategory);
    formData.append('pdf', file);
    setIsPdfLoading(true);

    try {
      const res = await axios.post('http://localhost:3000/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${Cookies.get('Admin_Token')}`,
        },
      });

      toast.success('Product added successfully!');
      setTitle('');
      setDescription('');
      setFile(null);
      setCategory('');
      setsubCategory('');
    } catch (err) {
      toast.error(err.response?.data || 'Error adding product.');
    } finally {
      setIsPdfLoading(false);
    }
  };

  const handleSubmitDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get('Admin_Token')}`,
        },
      });
      toast.success('Product Deleted successfully! Refresh the page to see updates.');
    } catch (err) {
      console.error('Error:', err);
      toast.error('Error deleting Product. Try Again');
    }
  };

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', my: 2 }}>
        ADD PRODUCTS
      </Typography>

      <Grid container spacing={3} sx={{ maxWidth: '80%', margin: '0 auto' }}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth margin="normal">
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              id="category-select"
              value={Category}
              onChange={(e) => setCategory(e.target.value)}
              required
              label="Category"
            >
              {categoryDetails.map((each) => (
                <MenuItem key={each.id} value={each.id}>
                  {each.category_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl fullWidth margin="normal">
            <InputLabel id="subcategory-label">Sub Category</InputLabel>
            <Select
              labelId="subcategory-label"
              id="subcategory-select"
              value={subCategory}
              onChange={(e) => setsubCategory(e.target.value)}
              required
              label="Sub Category"
            >
              {subCategoryDetails
                .filter((each) => each.category_id === Category)
                .map((each) => (
                  <MenuItem key={each.id} value={each.id}>
                    {each.subcategory_name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="TITLE"
            variant="outlined"
            fullWidth
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <div className="p-3 shadow-md rounded-md">
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: 'semibold', mb: 1, textAlign: 'center' }}
            >
              Description
            </Typography>
            <ReactQuill
              ref={quillRef}
              value={description}
              onChange={setDescription}
              modules={modules}
              className="bg-white w-full border-gray-300 border-[1px] rounded-md min-h-[200px]"
            />
          </div>
        </Grid>

        <Grid item xs={12} container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              style={{ display: 'none' }}
              id="upload-pdf"
            />
            <label htmlFor="upload-pdf">
              <Button
                variant="contained"
                component="span"
                startIcon={<CloudUploadIcon />}
                disabled={isPdfLoading}
              >
                {isPdfLoading ? 'Uploading...' : 'Upload PDF'}
              </Button>
            </label>
          </Grid>
          <Grid item xs={12} md={6}>
            {file && (
              <Button variant="outlined" startIcon={<VisibilityIcon />} onClick={handleViewPDF}>
                View PDF
              </Button>
            )}
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpload}
            disabled={isPdfLoading}
            startIcon={<CloudUploadIcon />}
          >
            {isPdfLoading ? 'Uploading...' : 'Upload Product'}
          </Button>
        </Grid>
      </Grid>

      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', my: 2 }}>
        UPDATE/DELETE PRODUCTS
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Title</th>
                <th className="border p-2">SUB-CATEGORY</th>
                <th className="border p-2">CATEGORY</th>

                <th className="border p-2">FILE PDF</th>
                <th className="border p-2">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {productDetails.map((item) => (
                <tr key={item.id}>
                  <td className="border p-2 w-[40%]">{item.title}</td>
                  <td className="border p-2">
                    {
                      subCategoryDetails.find((each) => each.id === item.subcategory_id)
                        ?.subcategory_name
                    }
                  </td>
                  <td className="border p-2">
                    {categoryDetails.find((each) => each.id === item.category_id)?.category_name}
                  </td>

                  <td className="border p-2">
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      href={`/upload/${item.pdf}`}
                      target="_blank"
                    >
                      View PDF
                    </Button>
                  </td>
                  <td className="border p-2 space-x-2">
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      startIcon={<EditIcon />}
                      onClick={() => {
                        setOnCLickUpdate((p) => !p);
                        setUpdateFile(item.pdf);
                        setUpdateProductID(item.id);
                        setUpdateProductCategoryID(item.category_id);
                        setUpdateProductSUBCategoryID(item.subcategory_id);
                        setUpdateTitle(item.title);
                        setUpdateDescription(item.description);
                        ClearIntervalDB();

                        return;
                      }}
                    >
                      Update
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      startIcon={<DeleteIcon />}
                      onClick={() => handleSubmitDeleteProduct(item.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {onClickUpdate && (
            <HandleUpdateProduct
              id={updateProductID}
              title={updateTitle}
              description={updateDescription}
              pdf={updateFile}
              category_id={updateProductCategoryID}
              subcategory_id={UpdateProductSUBCategoryID}
              categoryDetails={categoryDetails}
              subCategoryDetails={subCategoryDetails}
              ClearIntervalDB={ClearIntervalDB}
              handle={() => setOnCLickUpdate((p) => !p)}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

const Category = ({ data, ClearIntervalDB }) => {
  console.log(data);
  const [Category, setCategory] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [onClickUpdate, setOnCLickUpdate] = useState(false);
  const [updateid, setUpdateId] = useState('');
  const [updateCategory, setUpdateCategory] = useState('');

  const handleSubmitAddCategory = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        'http://localhost:3000/categories',
        { category_name: Category },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('Admin_Token')}`,
          },
        }
      );

      setSuccess('Category added successfully! Please refresh the page to see the updated data');
      setError('');
      setCategory('');
      toast.success('Category added successfully! Refresh the page to see updates.');
    } catch (err) {
      setError(err.response.data.msg);
      console.log(error);
      console.error('Error:', err);
      toast.error(err.response?.data?.msg || 'Error creating category. Try again.');
    }
  };
  const handleSubmitDeleteCategory = async (id) => {
    console.log(id);

    try {
      const res = await axios.delete(
        `http://localhost:3000/categories/${id}`,

        {
          headers: {
            Authorization: `Bearer ${Cookies.get('Admin_Token')}`,
          },
        }
      );

      toast.success('Category Deleted successfully! Refresh the page to see updates.');
    } catch (err) {
      console.error('Error:', err);
      toast.error('Error deleting category.');
    }
  };

  const HandleUpdateCategory = ({ id, value, handle, ClearIntervalDB }) => {
    const [Category, setCategory] = useState(value);

    const handleSubmitUpdateCategory = async (id) => {
      try {
        const res = await axios.put(
          `http://localhost:3000/categories/${id}`,
          { category_name: Category },
          {
            headers: {
              Authorization: `Bearer ${Cookies.get('Admin_Token')}`,
            },
          }
        );

        toast.success('Category Updated successfully! Refresh the page to see updates.');
        ClearIntervalDB();
        handle();
      } catch (err) {
        console.log(error);
        console.error('Error:', err);
        toast.error(err.response?.data?.msg || 'Error updating category. Try again.');
      }
    };

    return (
      <div className="w-[500px] z-50 fixed top-1/2 -translate-y-1/2 bg-slate-100 rounded-3xl shadow-2xl  h-[400px] flex flex-col justify-start p-5 items-center">
        <div className="h-full w-full relative gap-10  flex flex-col justify-start p-5 items-center">
          <div
            className="absolute z-10 right-10 "
            onClick={() => {
              () => ClearIntervalDB;
              handle();
            }}
          >
            <img src={Cross} alt="x" className="h-5" />
          </div>
          <h1 className="font-lora text-center text-2xl font-semibold">UPDATE FILE</h1>
          <TextField
            label="CATEGORY NAME"
            variant="outlined"
            className="w-[300px] font-Inter font-semibold"
            value={Category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <button
            className="bg-black text-white px-4 py-2 "
            onClick={() => handleSubmitUpdateCategory(id)}
          >
            Modify
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="justify-center flex flex-col items-center">
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', my: 2 }}>
        ADD Categories
      </Typography>
      <form
        onSubmit={handleSubmitAddCategory}
        className="my-5 w-[50%] flex-col flex justify-center"
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={8}>
            <TextField
              label="CATEGORY NAME"
              variant="outlined"
              fullWidth
              value={Category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              ADD
            </Button>
          </Grid>
        </Grid>
        <Typography className="text-center text-lg py-3 text-red-600">{error}</Typography>
        <Typography className="text-center text-lg py-3 text-green-600">{success}</Typography>
      </form>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', my: 2 }}>
        UPDATE/DELETE Categories
      </Typography>
      <table className="w-full border-collapse my-5">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">No.</th>
            <th className="border p-2">CATEGORY</th>
            <th className="border p-2">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} className="text-center">
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{item.category_name}</td>
              <td className="border p-2">
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  startIcon={<EditIcon />}
                  onClick={() => {
                    setOnCLickUpdate((p) => !p);
                    setUpdateCategory(item.category_name);
                    setUpdateId(item.id);
                    ClearIntervalDB();
                    return;
                  }}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  startIcon={<DeleteIcon />}
                  onClick={() => handleSubmitDeleteCategory(item.id)}
                  sx={{ ml: 1 }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {onClickUpdate && (
        <HandleUpdateCategory
          id={updateid}
          value={updateCategory}
          ClearIntervalDB={ClearIntervalDB}
          handle={() => setOnCLickUpdate((p) => !p)}
        />
      )}
    </div>
  );
};

const SubCategory = ({ data1, data2, ClearIntervalDB }) => {
  const [SubCategory, setSubCategory] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [onClickUpdate, setOnCLickUpdate] = useState(false);
  const [updateid, setUpdateId] = useState('');
  const [updateCategoryid, setUpdateCategoryid] = useState('');
  const [updateSUbCategory, setUpdateSUBCategory] = useState('');

  const handleSubmitAddSubCategory = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        'http://localhost:3000/subcategories',
        { subcategory_name: SubCategory, category_id: category },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('Admin_Token')}`,
          },
        }
      );

      setSuccess('SubCategory added successfully! Please refresh the page to see the updated data');
      setError('');
      setCategory('');
      toast.success('SubCategory added successfully! Refresh the page to see updates.');
    } catch (err) {
      setError(err.response.data);
      setSuccess('');
      console.log(error);
      console.error('Error:', err);
      toast.error(err.response?.data || 'Error creating subcategory. Try again.');
    }
  };

  const handleSubmitDeleteSubCategory = async (id) => {
    console.log(id);

    try {
      const res = await axios.delete(
        `http://localhost:3000/subcategories/${id}`,

        {
          headers: {
            Authorization: `Bearer ${Cookies.get('Admin_Token')}`,
          },
        }
      );

      toast.success('SubCategory Deleted successfully! Refresh the page to see updates.');
    } catch (err) {
      console.error('Error:', err);
      toast.error(err.response?.data || 'Error deleting SubCategory, tryAgain.');
    }
  };

  const HandleUpdateSubCategory = ({ id, value, Categoryid, handle, ClearIntervalDB }) => {
    const [Category, setCategory] = useState(Categoryid);
    const [SubCategory, setSubCategory] = useState(value);

    console.log('Updating ID:', id, 'SubCategory:', value, 'Category ID:', Category);

    const handleSubmitUpdateCategory = async () => {
      try {
        const res = await axios.put(
          `http://localhost:3000/subcategories/${id}`,
          { subcategory_name: SubCategory, category_id: Category },
          {
            headers: {
              Authorization: `Bearer ${Cookies.get('Admin_Token')}`,
            },
          }
        );

        toast.success('SubCategory updated successfully! Refresh the page to see updates.');
        ClearIntervalDB();
        handle();
      } catch (err) {
        console.error('Error updating SubCategory:', err);
        toast.error(err.response?.data || 'Error updating SubCategory. Try again.');
      }
    };

    return (
      <div className="w-[500px] z-50 fixed top-1/2 -translate-y-1/2 bg-slate-100 rounded-3xl shadow-2xl h-[400px] flex flex-col justify-start p-5 items-center">
        <div className="h-full w-full relative gap-10 flex flex-col justify-start p-5 items-center">
          <div
            className="absolute z-10 right-10 cursor-pointer"
            onClick={() => {
              ClearIntervalDB();
              handle();
            }}
          >
            <img src={Cross} alt="x" className="h-5" />
          </div>
          <h1 className="font-lora text-center text-2xl font-semibold">UPDATE SUBCATEGORY</h1>

          <TextField
            label="SUBCATEGORY NAME"
            variant="outlined"
            className="w-[300px] font-Inter font-semibold"
            value={SubCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            required
          />

          <FormControl className="w-[200px]">
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              id="demo-simple-select"
              value={Category}
              onChange={(e) => {
                console.log(e.target.value);

                setCategory(e.target.value);
              }}
              required
              label="category"
            >
              {data2?.map((each) => (
                <MenuItem key={each.id} value={each.id}>
                  {each.category_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <button className="bg-black text-white px-4 py-2" onClick={handleSubmitUpdateCategory}>
            Modify
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="justify-center flex flex-col items-center ">
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', my: 2 }}>
        ADD Sub-Categories
      </Typography>
      <form onSubmit={handleSubmitAddSubCategory} className="my-5 w-[50%] flex justify-center">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextField
              label="SUB-CATEGORY NAME"
              variant="outlined"
              fullWidth
              value={SubCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                id="demo-simple-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                label="category"
              >
                {data2.map((each) => (
                  <MenuItem key={each.id} value={each.id}>
                    {each.category_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={2}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              ADD
            </Button>
          </Grid>
        </Grid>
      </form>
      <Typography className="text-center text-lg py-3 text-red-600">{error}</Typography>
      <Typography className="text-center text-lg py-3 text-green-600">{success}</Typography>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', my: 2 }}>
        UPDATE/DELETE Sub-Categories
      </Typography>
      <table className="w-full border-collapse my-5">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">NO.</th>
            <th className="border p-2">SUB-CATEGORY</th>
            <th className="border p-2">CATEGORY</th>
            <th className="border p-2">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {data1.map((item, index) => (
            <tr key={item.id} className="text-center">
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{item.subcategory_name}</td>
              <td className="border p-2">
                {data2.find((each) => each.id === item.category_id).category_name}
              </td>
              <td className="border p-2">
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  startIcon={<EditIcon />}
                  onClick={() => {
                    setOnCLickUpdate((p) => !p);
                    setUpdateSUBCategory(item.subcategory_name);
                    setUpdateCategoryid(item.category_id);
                    setUpdateId(item.id);
                    ClearIntervalDB();
                    return;
                  }}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  startIcon={<DeleteIcon />}
                  onClick={() => handleSubmitDeleteSubCategory(item.id)}
                  sx={{ ml: 1 }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {onClickUpdate && (
        <HandleUpdateSubCategory
          id={updateid}
          ClearIntervalDB={ClearIntervalDB}
          value={updateSUbCategory}
          Categoryid={updateCategoryid}
          handle={() => setOnCLickUpdate((p) => !p)}
        />
      )}
    </div>
  );
};

export default function CommonIssues() {
  const [getCategories, setGetCategory] = useState([]);
  const [getSubCategories, setGetSubCategory] = useState([]);
  const [getProducts, setGetProducts] = useState([]);
  const [ClearIntervalDB, setClearIntervalDB] = useState(false);

  const [ActivePage, setActivePage] = useState('category');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesRes, subCategoriesRes, productsRes] = await Promise.all([
          axios.get('http://localhost:3000/categories'),
          axios.get('http://localhost:3000/subcategories'),
          axios.get('http://localhost:3000/products/'),
        ]);

        setGetCategory(categoriesRes.data);
        setGetSubCategory(subCategoriesRes.data);
        setGetProducts(productsRes.data);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    let interval;
    fetchData(); // Initial Fetch

    if (!ClearIntervalDB) {
      console.log('Starting interval...');
      interval = setInterval(fetchData, 2000);
    } else {
      console.log('Stopping interval...');
    }

    return () => {
      if (interval) {
        console.log('Clearing interval...');
        clearInterval(interval);
      }
    };

    return () => clearInterval(interval);
  }, [ClearIntervalDB]);

  return (
    <div className="bg-gray-100 min-h-screen p-5 w-full relative">
      <ToastContainer />

      <h1 className="font-Libre_Baskerville py-5 text-xl font-semibold text-center">ISSUES</h1>

      <div className="h-[100px] w-full  rounded-lg flex justify-evenly items-center font-lora text-white font-semibold text-lg ">
        <button
          onClick={() => setActivePage('category')}
          className={`${ActivePage === 'category' ? 'bg-blue-600' : 'bg-red-600'} px-3 py-2 rounded-lg  text-white`}
        >
          ADD CATEGORY
        </button>
        <button
          onClick={() => setActivePage('sub-category')}
          className={`${ActivePage === 'sub-category' ? 'bg-blue-600' : 'bg-red-600'} px-3 py-2 rounded-lg  text-white`}
        >
          ADD SUB CATEGORY
        </button>
        <button
          onClick={() => setActivePage('products')}
          className={`${ActivePage === 'products' ? 'bg-blue-600' : 'bg-red-600'} px-3 py-2 rounded-lg  text-white`}
        >
          ADD PRODUCTS
        </button>
      </div>
      {ActivePage === 'products' && (
        <Products
          productDetails={getProducts}
          categoryDetails={getCategories}
          subCategoryDetails={getSubCategories}
          ClearIntervalDB={() => setClearIntervalDB((p) => !p)}
        />
      )}
      {ActivePage === 'category' && (
        <Category data={getCategories} ClearIntervalDB={() => setClearIntervalDB((p) => !p)} />
      )}
      {ActivePage === 'sub-category' && (
        <SubCategory
          data1={getSubCategories}
          data2={getCategories}
          ClearIntervalDB={() => setClearIntervalDB((p) => !p)}
        />
      )}
    </div>
  );
}
