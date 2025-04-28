import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cross from '../assets/cross.svg';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Typography } from '@mui/material';

const HandleUpdateProduct = ({
  id,
  title,
  description,
  pdf,
  categoryDetails,
  subCategoryDetails,
  category_id,
  subcategory_id,
  handle,
  ClearIntervalDB,
}) => {
  const [Category, setCategory] = useState(category_id);
  const [subCategory, setSubCategory] = useState(subcategory_id);
  const [Title, setTitle] = useState(title);
  const [Description, setDescription] = useState(description);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isPdfLoading, setIsPdfLoading] = useState(false);
  const [showOldFile, setShowOldFile] = useState(!!pdf); // Show old PDF only if it exists

  useEffect(() => {
    setCategory(category_id);
    setSubCategory(subcategory_id);
    setTitle(title);
    setDescription(description);
  }, [category_id, subcategory_id, title, description]);

  const handleUpdateFileChange = (event) => {
    console.log(event.target.files[0]); // Debugging line
    const file = event.target.files[0];

    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      setShowOldFile(false); // Hide old file if a new one is selected
    } else {
      toast.error('Please upload a valid PDF file.');
      setSelectedFile(null);
    }
  };

  const handleSubmitUpdateProduct = async () => {
    setIsPdfLoading(true);

    const formData = new FormData();
    formData.append('title', Title);
    formData.append('description', Description);
    formData.append('category_id', Category);
    formData.append('subcategory_id', subCategory);

    if (selectedFile) {
      formData.append('pdf', selectedFile);
    }

    try {
      await axios.put(`http://localhost:3000/products/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${Cookies.get('Admin_Token')}`,
        },
      });

      toast.success('Product updated successfully! Refresh the page to see updates.');
      ClearIntervalDB();
      handle();
    } catch (err) {
      console.error('Error updating product:', err);
      toast.error(err.response?.data || 'Error updating product. Try again.');
    } finally {
      setIsPdfLoading(false);
    }
  };

  return (
    <div className="w-[800px] z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-visible bg-slate-100 rounded-3xl shadow-2xl  flex flex-col justify-start p-5 items-center">
      <h1 className="font-lora text-center text-2xl font-semibold">UPDATE FILE</h1>
      <div
        className="absolute z-10 right-10 "
        onClick={() => {
          () => ClearIntervalDB;
          handle();
        }}
      >
        <img src={Cross} alt="x" className="h-5" />
      </div>
      <div className="flex w-full gap-10 mx-10">
        <FormControl fullWidth margin="normal">
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            id="category-select"
            label="Category"
            value={Category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            {categoryDetails.map((each) => (
              <MenuItem key={each.id} value={each.id}>
                {each.category_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel id="subcategory-label">Sub Category</InputLabel>
          <Select
            labelId="subcategory-label"
            id="subcategory-select"
            label="Sub Category"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            required
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
      </div>

      <TextField
        label="TITLE"
        variant="outlined"
        fullWidth
        margin="normal"
        value={Title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <div className="p-3 shadow-md rounded-md w-full">
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: 'semibold', mb: 1, textAlign: 'center' }}
        >
          Description
        </Typography>
        <ReactQuill
          value={Description}
          onChange={setDescription}
          className="bg-white w-full border-gray-300 border-[1px] rounded-md min-h-[200px]"
        />
      </div>

      <Grid item xs={12} container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <div>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleUpdateFileChange}
              id="upload-pdf-1"
              style={{ display: 'none' }}
            />
            <label htmlFor="upload-pdf-1">
              <Button
                variant="contained"
                component="span"
                startIcon={<CloudUploadIcon />}
                disabled={isPdfLoading}
              >
                {isPdfLoading ? 'Uploading...' : 'Upload PDF'}
              </Button>
            </label>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          {selectedFile && (
            <Button
              variant="outlined"
              startIcon={<VisibilityIcon />}
              onClick={() => window.open(URL.createObjectURL(selectedFile), '_blank')}
            >
              View New PDF
            </Button>
          )}
        </Grid>
      </Grid>
      <div className="flex justify-center mt-2 w-full gap-10 mx-10">
        {showOldFile && pdf && (
          <Button
            variant="outlined"
            startIcon={<VisibilityIcon />}
            onClick={() => window.open(`/upload/${pdf}`, '_blank')}
          >
            View Old PDF
          </Button>
        )}

        <Button
          variant="contained"
          color="success"
          onClick={handleSubmitUpdateProduct}
          disabled={isPdfLoading}
          startIcon={<CloudUploadIcon />}
        >
          {isPdfLoading ? 'Uploading...' : 'UPDATE Product'}
        </Button>
      </div>
    </div>
  );
};

export default HandleUpdateProduct;
