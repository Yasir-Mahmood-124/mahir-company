"use client";

import React, { useEffect, useState } from "react";
import {
  Box, Paper, Typography, Table, TableHead, TableBody, TableRow, TableCell,
  TableContainer, TextField, IconButton, Button, CircularProgress, MenuItem,
  Divider, Chip, Rating, Alert, Snackbar
} from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Close as CloseIcon
} from "@mui/icons-material";
import { 
  getSubCategoryImage,
  subcategoriesByMainCategory 
} from '@/lib/subcategoryConfig';

interface Product {
  _id: string;
  name: string;
  service: string;
  mainCategory: string;
  subCategory: string;
  currentPrice: number;
  discountPrice: number;
  description?: string;
  reviews?: number;
  includes?: string[];
  notIncludes?: string[];
  image?: string;
}

const UnifiedProductManager: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [notification, setNotification] = useState({ 
    open: false, 
    message: '', 
    type: 'success' as 'success' | 'error' 
  });

  const [formData, setFormData] = useState<any>({
    name: "",
    service: "",
    mainCategory: "",
    subCategory: "",
    currentPrice: "",
    discountPrice: "",
    description: "",
    reviews: 0,
    image: "",
  });

  const [includes, setIncludes] = useState<string[]>([]);
  const [notIncludes, setNotIncludes] = useState<string[]>([]);
  const [includeInput, setIncludeInput] = useState("");
  const [notIncludeInput, setNotIncludeInput] = useState("");
  
  const [availableSubCategories, setAvailableSubCategories] = useState<string[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  const [imageUploadMode, setImageUploadMode] = useState<'url' | 'upload'>('url');
  const [imagePreview, setImagePreview] = useState<string>('');
  const [subCategoryImagePreview, setSubCategoryImagePreview] = useState<string>('');

  const fetchProductsData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      if (data.success) setProducts(data.data);
    } catch (err) {
      console.error(err);
      setNotification({ open: true, message: 'Failed to fetch products', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    try {
      const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setProducts(products.filter((p) => p._id !== id));
        setNotification({ open: true, message: 'Product deleted successfully!', type: 'success' });
      }
    } catch (err) {
      console.error(err);
      setNotification({ open: true, message: 'Failed to delete product', type: 'error' });
    }
  };

  const handleEdit = (product: Product) => {
    setFormData({
      name: product.name,
      service: product.service,
      mainCategory: product.mainCategory,
      subCategory: product.subCategory,
      currentPrice: product.currentPrice,
      discountPrice: product.discountPrice,
      description: product.description || "",
      reviews: product.reviews || 0,
      image: product.image || "",
    });
    setIncludes(product.includes || []);
    setNotIncludes(product.notIncludes || []);
    setAvailableSubCategories(subcategoriesByMainCategory[product.mainCategory] || []);
    setImagePreview(product.image || '');
    
    // Load CDN image preview
    const cdnImage = getSubCategoryImage(product.subCategory);
    setSubCategoryImagePreview(cdnImage);
    
    setEditingId(product._id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      service: "",
      mainCategory: "",
      subCategory: "",
      currentPrice: "",
      discountPrice: "",
      description: "",
      reviews: 0,
      image: "",
    });
    setIncludes([]);
    setNotIncludes([]);
    setAvailableSubCategories([]);
    setEditingId(null);
    setIncludeInput("");
    setNotIncludeInput("");
    setImagePreview('');
    setSubCategoryImagePreview('');
    setImageUploadMode('url');
  };

  const handleMainCategoryChange = (value: string) => {
    setFormData({ ...formData, mainCategory: value, subCategory: "", service: "" });
    setAvailableSubCategories(subcategoriesByMainCategory[value] || []);
    setSubCategoryImagePreview('');
  };

  const handleSubCategoryChange = (value: string) => {
    setFormData({ 
      ...formData, 
      subCategory: value,
      service: value
    });
    
    // Auto-load CDN image preview
    const cdnImage = getSubCategoryImage(value);
    setSubCategoryImagePreview(cdnImage);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setNotification({ open: true, message: 'Image size should be less than 5MB', type: 'error' });
        return;
      }
      if (!file.type.startsWith('image/')) {
        setNotification({ open: true, message: 'Please upload an image file', type: 'error' });
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...formData,
      currentPrice: Number(formData.currentPrice),
      discountPrice: Number(formData.discountPrice),
      includes,
      notIncludes
    };

    try {
      const res = await fetch(`/api/products/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        fetchProductsData();
        setNotification({ open: true, message: 'Product updated successfully!', type: 'success' });
      }
      resetForm();
      setShowForm(false);
    } catch (err) {
      console.error(err);
      setNotification({ open: true, message: 'Failed to save product', type: 'error' });
    }
  };

  const addInclude = () => {
    if (includeInput.trim()) {
      setIncludes([...includes, includeInput.trim()]);
      setIncludeInput("");
    }
  };

  const addNotInclude = () => {
    if (notIncludeInput.trim()) {
      setNotIncludes([...notIncludes, notIncludeInput.trim()]);
      setNotIncludeInput("");
    }
  };

  const removeInclude = (index: number) => {
    setIncludes(includes.filter((_, i) => i !== index));
  };

  const removeNotInclude = (index: number) => {
    setNotIncludes(notIncludes.filter((_, i) => i !== index));
  };

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.mainCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subCategory.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ p: 4, maxWidth: 1400, mx: 'auto', bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h3" gutterBottom sx={{ mb: 4, fontWeight: 700, color: '#1976d2' }}>
        Product Dashboard
      </Typography>

      {showForm && (
        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Edit Product
            </Typography>
            <IconButton onClick={() => { resetForm(); setShowForm(false); }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TextField
                fullWidth
                label="Service Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Box sx={{ flex: '1 1 200px' }}>
                  <TextField
                    fullWidth
                    label="Current Price (PKR)"
                    type="number"
                    value={formData.currentPrice}
                    onChange={(e) => setFormData({ ...formData, currentPrice: e.target.value })}
                    required
                  />
                </Box>
                <Box sx={{ flex: '1 1 200px' }}>
                  <TextField
                    fullWidth
                    label="Discount Price (PKR)"
                    type="number"
                    value={formData.discountPrice}
                    onChange={(e) => setFormData({ ...formData, discountPrice: e.target.value })}
                    required
                  />
                </Box>
              </Box>

              <TextField
                fullWidth
                select
                label="Main Category"
                value={formData.mainCategory}
                onChange={(e) => handleMainCategoryChange(e.target.value)}
                required
              >
                {Object.keys(subcategoriesByMainCategory).map((cat) => (
                  <MenuItem key={cat} value={cat}>{cat}</MenuItem>
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
                {availableSubCategories.map((sub) => (
                  <MenuItem key={sub} value={sub}>{sub}</MenuItem>
                ))}
              </TextField>

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
                ) : (
                  'Update Product'
                )}
              </Button>
            </Box>
          </form>
        </Paper>
      )}

      {!showForm && (
        <>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
            <TextField
              placeholder="Search by name, category, subcategory..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              size="small"
              InputProps={{ startAdornment: <SearchIcon sx={{ mr: 1 }} /> }}
              sx={{ minWidth: 300 }}
            />
          </Box>

          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
              <CircularProgress />
            </Box>
          ) : (
            <TableContainer component={Paper} elevation={3}>
              <Table>
                <TableHead sx={{ bgcolor: '#f5f5f5' }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600 }}>Image</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Service Name</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Category</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Sub Category</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Current Price</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Discount Price</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredProducts.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} align="center">
                        <Typography color="text.secondary" sx={{ py: 4 }}>
                          No products found.
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredProducts.map((product) => (
                      <TableRow key={product._id} hover>
                        <TableCell>
                          {product.image ? (
                            <img src={product.image} alt={product.name} width={50} height={50} style={{ objectFit: "contain" }} />
                          ) : (
                            <Typography variant="caption" color="text.secondary">No Image</Typography>
                          )}
                        </TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.mainCategory}</TableCell>
                        <TableCell>{product.subCategory}</TableCell>
                        <TableCell>PKR {product.currentPrice}</TableCell>
                        <TableCell>PKR {product.discountPrice}</TableCell>
                        <TableCell>
                          <IconButton color="primary" onClick={() => handleEdit(product)}>
                            <EditIcon />
                          </IconButton>
                          <IconButton color="error" onClick={() => handleDelete(product._id)}>
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </>
      )}

      <Snackbar
        open={notification.open}
        autoHideDuration={4000}
        onClose={() => setNotification({ ...notification, open: false })}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          severity={notification.type}
          variant="filled"
          onClose={() => setNotification({ ...notification, open: false })}
          sx={{ width: '100%' }}
        >
          {String(notification.message)}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default UnifiedProductManager;