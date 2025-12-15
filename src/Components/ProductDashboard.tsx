"use client";

import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  MenuItem,
  Chip,
  IconButton,
  Divider,
  Card,
  CardContent,
  Rating,
  Alert,
  Snackbar,
  CircularProgress,
} from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';

interface Product {
  id: string;
  name: string;
  currentPrice: number;
  discountPrice: number;
  mainCategory: string;
  subCategory: string;
  service: string;
  description: string;
  reviews: number;
  includes: string[];
  notIncludes: string[];
  image?: string;
}

interface MainCategory {
  id: string;
  slug: string;
  name: string;
}

const ProductDashboard = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [mainCategories, setMainCategories] = useState<MainCategory[]>([]);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ open: false, message: '', type: 'success' as 'success' | 'error' });
  
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

  // Fetch main categories
  useEffect(() => {
    fetchMainCategories();
    fetchProducts();
  }, []);

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

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products');
      const data = await res.json();
      if (data.success) {
        setProducts(data.data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const productData = {
      name: formData.name,
      currentPrice: parseFloat(formData.currentPrice),
      discountPrice: parseFloat(formData.discountPrice),
      mainCategory: formData.mainCategory,
      subCategory: formData.subCategory,
      service: formData.service,
      description: formData.description,
      reviews: formData.reviews,
      includes: includes,
      notIncludes: notIncludes,
      image: formData.image,
    };

    try {
      let res;
      if (editingId) {
        // Update existing product
        res = await fetch(`/api/products/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(productData),
        });
      } else {
        // Create new product
        res = await fetch('/api/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(productData),
        });
      }

      const data = await res.json();
      
      if (data.success) {
        setNotification({
          open: true,
          message: editingId ? 'Product updated successfully!' : 'Product added successfully!',
          type: 'success'
        });
        
        // Refresh products list
        fetchProducts();
        
        // Reset form
        resetForm();
      } else {
        throw new Error(data.error || 'Failed to save product');
      }
    } catch (error) {
      setNotification({
        open: true,
        message: error instanceof Error ? error.message : 'Failed to save product',
        type: 'error'
      });
    } finally {
      setLoading(false);
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
  };

  const editProduct = (product: Product) => {
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
    setEditingId(product.id);
    
    // Scroll to form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const deleteProduct = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;

    try {
      const res = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      });
      
      const data = await res.json();
      
      if (data.success) {
        setNotification({
          open: true,
          message: 'Product deleted successfully!',
          type: 'success'
        });
        fetchProducts();
      }
    } catch (error) {
      setNotification({
        open: true,
        message: 'Failed to delete product',
        type: 'error'
      });
    }
  };

  return (
    <Box sx={{ p: 4, maxWidth: 1400, mx: 'auto', bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h3" gutterBottom sx={{ mb: 4, fontWeight: 700, color: '#1976d2' }}>
        Product Management Dashboard
      </Typography>

      <Grid container spacing={4}>
        {/* Form Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, position: 'sticky', top: 20 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                {editingId ? 'Edit Product' : 'Add New Product'}
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
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Product Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Current Price (PKR)"
                    type="number"
                    value={formData.currentPrice}
                    onChange={(e) => setFormData({ ...formData, currentPrice: e.target.value })}
                    required
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Discount Price (PKR)"
                    type="number"
                    value={formData.discountPrice}
                    onChange={(e) => setFormData({ ...formData, discountPrice: e.target.value })}
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    select
                    label="Main Category"
                    value={formData.mainCategory}
                    onChange={(e) => setFormData({ ...formData, mainCategory: e.target.value })}
                    required
                  >
                    {mainCategories.map((cat) => (
                      <MenuItem key={cat.id} value={cat.name}>
                        {cat.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Sub Category"
                    value={formData.subCategory}
                    onChange={(e) => setFormData({ ...formData, subCategory: e.target.value })}
                    placeholder="e.g., AC Services"
                    required
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    placeholder="e.g., Installation"
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Image URL"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="https://cdn.example.com/image.svg"
                    helperText="Paste image URL from CDN or image hosting"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="subtitle2" sx={{ mb: 1 }}>
                    Reviews Rating
                  </Typography>
                  <Rating
                    value={formData.reviews}
                    onChange={(_, newValue) => setFormData({ ...formData, reviews: newValue || 0 })}
                    size="large"
                    precision={0.5}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Divider sx={{ my: 2 }} />
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
                </Grid>

                <Grid item xs={12}>
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
                </Grid>

                <Grid item xs={12}>
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
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>

        {/* Products List Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
              Products List ({products.length})
            </Typography>
            
            <Box sx={{ maxHeight: '80vh', overflowY: 'auto' }}>
              {products.length === 0 ? (
                <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>
                  No products added yet. Start by adding your first product!
                </Typography>
              ) : (
                <Grid container spacing={2}>
                  {products.map((product) => (
                    <Grid item xs={12} key={product.id}>
                      <Card variant="outlined" sx={{ position: 'relative' }}>
                        <CardContent>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                            <Typography variant="h6" sx={{ fontWeight: 600, flex: 1 }}>
                              {product.name}
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                              <IconButton
                                color="primary"
                                size="small"
                                onClick={() => editProduct(product)}
                              >
                                <EditIcon />
                              </IconButton>
                              <IconButton
                                color="error"
                                size="small"
                                onClick={() => deleteProduct(product.id)}
                              >
                                <DeleteIcon />
                              </IconButton>
                            </Box>
                          </Box>

                          <Box sx={{ mb: 2 }}>
                            <Typography variant="body2" color="text.secondary">
                              {product.mainCategory} → {product.subCategory} → {product.service}
                            </Typography>
                          </Box>

                          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                            <Box>
                              <Typography variant="caption" color="text.secondary">
                                Current Price
                              </Typography>
                              <Typography variant="h6" color="error" sx={{ textDecoration: 'line-through' }}>
                                PKR {product.currentPrice}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography variant="caption" color="text.secondary">
                                Discount Price
                              </Typography>
                              <Typography variant="h6" color="success.main">
                                PKR {product.discountPrice}
                              </Typography>
                            </Box>
                          </Box>

                          <Box sx={{ mb: 2 }}>
                            <Rating value={product.reviews} readOnly size="small" />
                          </Box>

                          <Typography variant="body2" sx={{ mb: 2 }}>
                            {product.description}
                          </Typography>

                          {product.image && (
                            <Box sx={{ mb: 2 }}>
                              <img 
                                src={product.image} 
                                alt={product.name} 
                                style={{ 
                                  width: 80, 
                                  height: 80, 
                                  objectFit: 'contain',
                                  border: '1px solid #ddd',
                                  borderRadius: 8,
                                  padding: 8
                                }} 
                              />
                            </Box>
                          )}

                          {product.includes.length > 0 && (
                            <Box sx={{ mb: 1 }}>
                              <Typography variant="caption" sx={{ fontWeight: 600 }}>
                                Includes:
                              </Typography>
                              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 0.5 }}>
                                {product.includes.map((item, idx) => (
                                  <Chip key={idx} label={item} size="small" color="success" />
                                ))}
                              </Box>
                            </Box>
                          )}

                          {product.notIncludes.length > 0 && (
                            <Box>
                              <Typography variant="caption" sx={{ fontWeight: 600 }}>
                                Not Includes:
                              </Typography>
                              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 0.5 }}>
                                {product.notIncludes.map((item, idx) => (
                                  <Chip key={idx} label={item} size="small" color="error" />
                                ))}
                              </Box>
                            </Box>
                          )}
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Notification Snackbar */}
      <Snackbar
        open={notification.open}
        autoHideDuration={4000}
        onClose={() => setNotification({ ...notification, open: false })}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert 
          onClose={() => setNotification({ ...notification, open: false })} 
          severity={notification.type}
          sx={{ width: '100%' }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ProductDashboard;