"use client";

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  clearError,
} from '@/redux/slices/productSlice';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  MenuItem,
  Chip,
  IconButton,
  Divider,
  Rating,
  Alert,
  Snackbar,
  CircularProgress,
} from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { 
  getSubCategoriesByMainCategory, 
  getSubCategoryImage,
  subcategoriesByMainCategory 
} from '@/lib/subcategoryConfig';

interface MainCategory {
  id: string;
  slug: string;
  name: string;
}

const ProductDashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector((state: RootState) => state.products);
  
  const [mainCategories, setMainCategories] = useState<MainCategory[]>([]);
  const [notification, setNotification] = useState({ 
    open: false, 
    message: '', 
    type: 'success' as 'success' | 'error' 
  });
  
  const [formData, setFormData] = useState({
    name: '',
    currentPrice: '',
    discountPrice: '',
    mainCategory: '',
    subCategory: '',
    service: '',
    description: '',
    reviews: 0,
    image: '',
  });
  
  const [includes, setIncludes] = useState<string[]>([]);
  const [notIncludes, setNotIncludes] = useState<string[]>([]);
  const [includeInput, setIncludeInput] = useState('');
  const [notIncludeInput, setNotIncludeInput] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [imageUploadMode, setImageUploadMode] = useState<'url' | 'upload'>('url');
  const [imagePreview, setImagePreview] = useState<string>('');
  const [availableSubCategories, setAvailableSubCategories] = useState<string[]>([]);
  
  // ✅ Auto CDN image preview for selected subcategory
  const [subCategoryImagePreview, setSubCategoryImagePreview] = useState<string>('');

  useEffect(() => {
    fetchMainCategories();
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      setNotification({
        open: true,
        message: error,
        type: 'error'
      });
      dispatch(clearError());
    }
  }, [error, dispatch]);

  const fetchMainCategories = async () => {
    try {
      const res = await fetch('/api/main-categories');
      const data = await res.json();
      if (data.success) {
        setMainCategories(data.data);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const addInclude = () => {
    if (includeInput.trim()) {
      setIncludes([...includes, includeInput.trim()]);
      setIncludeInput('');
    }
  };

  const addNotInclude = () => {
    if (notIncludeInput.trim()) {
      setNotIncludes([...notIncludes, notIncludeInput.trim()]);
      setNotIncludeInput('');
    }
  };

  const removeInclude = (index: number) => {
    setIncludes(includes.filter((_, i) => i !== index));
  };

  const removeNotInclude = (index: number) => {
    setNotIncludes(notIncludes.filter((_, i) => i !== index));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setNotification({
          open: true,
          message: 'Image size should be less than 5MB',
          type: 'error'
        });
        return;
      }

      if (!file.type.startsWith('image/')) {
        setNotification({
          open: true,
          message: 'Please upload an image file',
          type: 'error'
        });
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setFormData({ ...formData, image: base64String });
        setImagePreview(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUrlChange = (url: string) => {
    setFormData({ ...formData, image: url });
    setImagePreview(url);
  };

  const clearImage = () => {
    setFormData({ ...formData, image: '' });
    setImagePreview('');
  };

  const handleMainCategoryChange = (categoryName: string) => {
    setFormData({ 
      ...formData, 
      mainCategory: categoryName, 
      subCategory: '', 
      service: '' 
    });
    setAvailableSubCategories(subcategoriesByMainCategory[categoryName] || []);
    setSubCategoryImagePreview('');
  };

  // ✅ NEW: Handle SubCategory change
  const handleSubCategoryChange = (subCategoryName: string) => {
    setFormData({ 
      ...formData, 
      subCategory: subCategoryName,
      service: subCategoryName // ✅ Service Type = SubCategory Name
    });
    
    // ✅ Auto-load CDN image for preview
    const cdnImage = getSubCategoryImage(subCategoryName);
    setSubCategoryImagePreview(cdnImage);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const productData = {
      name: formData.name,
      currentPrice: parseFloat(formData.currentPrice),
      discountPrice: parseFloat(formData.discountPrice),
      mainCategory: formData.mainCategory,
      subCategory: formData.subCategory,
      service: formData.service, // ✅ This will be same as subCategory
      description: formData.description,
      reviews: formData.reviews,
      includes: includes,
      notIncludes: notIncludes,
      image: formData.image,
      // ✅ subCategoryImage removed - will use CDN on frontend
    };

    try {
      if (editingId) {
        await dispatch(updateProduct({ id: editingId, updates: productData })).unwrap();
        setNotification({
          open: true,
          message: 'Product updated successfully!',
          type: 'success'
        });
      } else {
        await dispatch(createProduct(productData)).unwrap();
        setNotification({
          open: true,
          message: 'Product added successfully!',
          type: 'success'
        });
      }
      resetForm();
    } catch (error: any) {
      setNotification({
        open: true,
        message: error || 'Failed to save product',
        type: 'error'
      });
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      currentPrice: '',
      discountPrice: '',
      mainCategory: '',
      subCategory: '',
      service: '',
      description: '',
      reviews: 0,
      image: '',
    });
    setIncludes([]);
    setNotIncludes([]);
    setEditingId(null);
    setImagePreview('');
    setImageUploadMode('url');
    setSubCategoryImagePreview('');
    setAvailableSubCategories([]);
  };

  const editProductHandler = (product: any) => {
    setFormData({
      name: product.name,
      currentPrice: product.currentPrice.toString(),
      discountPrice: product.discountPrice.toString(),
      mainCategory: product.mainCategory,
      subCategory: product.subCategory,
      service: product.service,
      description: product.description,
      reviews: product.reviews,
      image: product.image || '',
    });
    setIncludes(product.includes);
    setNotIncludes(product.notIncludes);
    setEditingId(product._id || product.id);
    setImagePreview(product.image || '');
    setAvailableSubCategories(subcategoriesByMainCategory[product.mainCategory] || []);
    
    // ✅ Load CDN image preview
    const cdnImage = getSubCategoryImage(product.subCategory);
    setSubCategoryImagePreview(cdnImage);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const deleteProductHandler = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;

    try {
      await dispatch(deleteProduct(id)).unwrap();
      setNotification({
        open: true,
        message: 'Product deleted successfully!',
        type: 'success'
      });
    } catch (error: any) {
      setNotification({
        open: true,
        message: error || 'Failed to delete product',
        type: 'error'
      });
    }
  };

  return (
    <Box sx={{ p: 4, maxWidth: 1400, mx: 'auto', bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h3" gutterBottom sx={{ mb: 4, fontWeight: 700, color: '#1976d2' }}>
        Product Dashboard
      </Typography>

      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '32px',
        alignItems: 'flex-start'
      }}>
        
        <div style={{ 
          flex: '1 1 500px',
          minWidth: '300px',
          maxWidth: '100%'
        }}>
          <Paper elevation={3} sx={{ p: 4, position: 'sticky', top: 20 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                {editingId ? 'Edit Product' : 'Add New Service'}
              </Typography>
              {editingId && (
                <Button 
                  variant="outlined" 
                  size="small" 
                  onClick={resetForm}
                >
                  Cancel Edit
                </Button>
              )}
            </Box>
            
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                
                <TextField
                  fullWidth
                  label="Service Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                  <div style={{ flex: '1 1 200px' }}>
                    <TextField
                      fullWidth
                      label="Current Price (PKR)"
                      type="number"
                      value={formData.currentPrice}
                      onChange={(e) => setFormData({ ...formData, currentPrice: e.target.value })}
                      required
                    />
                  </div>

                  <div style={{ flex: '1 1 200px' }}>
                    <TextField
                      fullWidth
                      label="Discount Price (PKR)"
                      type="number"
                      value={formData.discountPrice}
                      onChange={(e) => setFormData({ ...formData, discountPrice: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <TextField
                  fullWidth
                  select
                  label="Main Category"
                  value={formData.mainCategory}
                  onChange={(e) => handleMainCategoryChange(e.target.value)}
                  required
                >
                  {mainCategories.map((cat) => (
                    <MenuItem key={cat.id} value={cat.name}>
                      {cat.name}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  fullWidth
                  select
                  label="Sub Category"
                  value={formData.subCategory}
                  onChange={(e) => handleSubCategoryChange(e.target.value)}
                  disabled={!formData.mainCategory}
                  required
                  helperText={!formData.mainCategory ? "Select main category first" : "Service Type will auto-match"}
                >
                  {availableSubCategories.map((subCat) => (
                    <MenuItem key={subCat} value={subCat}>
                      {subCat}
                    </MenuItem>
                  ))}
                </TextField>

                {/* ✅ Service Type (Auto-filled, read-only) */}
                <TextField
                  fullWidth
                  label="Service Type"
                  value={formData.service}
                  disabled
                  helperText="Auto-filled from SubCategory"
                  sx={{ 
                    '& .MuiInputBase-input.Mui-disabled': {
                      WebkitTextFillColor: '#000',
                      bgcolor: '#f5f5f5'
                    }
                  }}
                />

                {/* ✅ SubCategory Image Preview (CDN) */}
                {subCategoryImagePreview && (
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" sx={{ mb: 1, color: 'text.secondary' }}>
                      SubCategory Image (from CDN - Auto)
                    </Typography>
                    <Box sx={{ 
                      bgcolor: '#f9f9f9', 
                      p: 2, 
                      borderRadius: 2,
                      border: '2px dashed #ddd',
                      display: 'inline-block'
                    }}>
                      <img
                        src={subCategoryImagePreview}
                        alt="SubCategory Preview"
                        style={{
                          width: 100,
                          height: 100,
                          objectFit: 'contain',
                        }}
                      />
                    </Box>
                  </Box>
                )}

                <Divider />

                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
                    Service Detail Image (Optional)
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                    <Button
                      variant={imageUploadMode === 'url' ? 'contained' : 'outlined'}
                      size="small"
                      onClick={() => setImageUploadMode('url')}
                    >
                      Image URL
                    </Button>
                    <Button
                      variant={imageUploadMode === 'upload' ? 'contained' : 'outlined'}
                      size="small"
                      onClick={() => setImageUploadMode('upload')}
                    >
                      Upload Image
                    </Button>
                  </Box>

                  {imageUploadMode === 'url' && (
                    <TextField
                      fullWidth
                      label="Image URL"
                      value={formData.image.startsWith('data:') ? '' : formData.image}
                      onChange={(e) => handleImageUrlChange(e.target.value)}
                      placeholder="https://cdn.example.com/image.svg"
                      helperText="For service detail page"
                    />
                  )}

                  {imageUploadMode === 'upload' && (
                    <Box>
                      <Button
                        variant="outlined"
                        component="label"
                        fullWidth
                        sx={{ py: 2 }}
                      >
                        Choose Image File
                        <input
                          type="file"
                          hidden
                          accept="image/*"
                          onChange={handleImageUpload}
                        />
                      </Button>
                      <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                        Supports: JPG, PNG, SVG, WEBP (Max 5MB)
                      </Typography>
                    </Box>
                  )}

                  {imagePreview && (
                    <Box sx={{ mt: 2, position: 'relative', display: 'inline-block' }}>
                      <img
                        src={imagePreview}
                        alt="Preview"
                        style={{
                          width: 120,
                          height: 120,
                          objectFit: 'contain',
                          border: '2px solid #ddd',
                          borderRadius: 8,
                          padding: 8,
                          background: '#f5f5f5'
                        }}
                      />
                      <IconButton
                        size="small"
                        onClick={clearImage}
                        sx={{
                          position: 'absolute',
                          top: -8,
                          right: -8,
                          bgcolor: 'error.main',
                          color: 'white',
                          '&:hover': { bgcolor: 'error.dark' }
                        }}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  )}
                </Box>

                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                />

                <Box>
                  <Typography variant="subtitle2" sx={{ mb: 1 }}>
                    Reviews Rating
                  </Typography>
                  <Rating
                    value={formData.reviews}
                    onChange={(_, newValue) => setFormData({ ...formData, reviews: newValue || 0 })}
                    size="large"
                    precision={0.5}
                  />
                </Box>

                <Divider sx={{ my: 2 }} />
                
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Includes
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                    <TextField
                      fullWidth
                      size="small"
                      label="Add included feature"
                      value={includeInput}
                      onChange={(e) => setIncludeInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addInclude())}
                    />
                    <IconButton color="primary" onClick={addInclude}>
                      <AddIcon />
                    </IconButton>
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {includes.map((item, index) => (
                      <Chip
                        key={index}
                        label={item}
                        onDelete={() => removeInclude(index)}
                        color="success"
                      />
                    ))}
                  </Box>
                </Box>

                <Box>
                  <Typography variant="h6" gutterBottom>
                    Not Includes
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                    <TextField
                      fullWidth
                      size="small"
                      label="Add not included feature"
                      value={notIncludeInput}
                      onChange={(e) => setNotIncludeInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addNotInclude())}
                    />
                    <IconButton color="primary" onClick={addNotInclude}>
                      <AddIcon />
                    </IconButton>
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {notIncludes.map((item, index) => (
                      <Chip
                        key={index}
                        label={item}
                        onDelete={() => removeNotInclude(index)}
                        color="error"
                      />
                    ))}
                  </Box>
                </Box>

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  disabled={loading}
                  sx={{ mt: 2, py: 1.5 }}
                >
                  {loading ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : editingId ? (
                    'Update Product'
                  ) : (
                    'Add Product'
                  )}
                </Button>
              </div>
            </form>
          </Paper>
        </div>

       </div>

       <Snackbar
         open={notification.open}
         autoHideDuration={4000}
         onClose={() =>
           setNotification({ ...notification, open: false })
         }
         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
       >
         <Alert
           severity={notification.type}
           variant="filled"
           onClose={() =>
             setNotification({ ...notification, open: false })
           }
           sx={{ width: '100%' }}
         >
           {notification.message}
         </Alert>
       </Snackbar>
     </Box>
   );
};

export default ProductDashboard;