import React, { useState, useEffect } from 'react';
import { Container, Table, Form, Button, Row, Col, Badge } from 'react-bootstrap';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const API_URL = 'https://6aa7e5149b08676cd32b9f39.mockapi.io/products';

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({ name: '', category: '', price: '', rating: '', image: '' });

  const fetchProducts = async () => {
    try {
      const res = await axios.get(API_URL);
      setProducts(res.data);
    } catch (err) {
      toast.error('Failed to fetch products');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const img = new Image();
  img.src = URL.createObjectURL(file);
  img.onload = () => {
    const canvas = document.createElement('canvas');
    const maxWidth = 300;
    const scaleFactor = maxWidth / img.width;
    canvas.width = maxWidth;
    canvas.height = img.height * scaleFactor;

    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const compressedBase64 = canvas.toDataURL('image/jpeg', 0.5);
    setFormData(prev => ({ ...prev, image: compressedBase64 }));
  };
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`${API_URL}/${editId}`, formData);
        toast.success('Product updated successfully!');
      } else {
        await axios.post(API_URL, formData);
        toast.success('Product added successfully!');
      }
      resetForm();
      fetchProducts();
    } catch (err) {
      toast.error('Operation failed');
    }
  };

  const handleEdit = (product) => {
    setEditId(product.id);
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price,
      rating: product.rating,
      image: product.image
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        toast.success('Product deleted!');
        fetchProducts();
      } catch (err) {
        toast.error('Failed to delete product');
      }
    }
  };

  const resetForm = () => {
    setEditId(null);
    setFormData({ name: '', category: '', price: '', rating: '', image: '' });
  };

  return (
    <Container className="my-5">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Admin Dashboard</h2>
        <a href="/" className="btn btn-outline-secondary">Go to Website</a>
      </div>

      <Form onSubmit={handleSubmit} className="mb-5 bg-light p-4 rounded shadow-sm">
        <h5 className="mb-3">{editId ? 'Edit Product' : 'Add New Product'}</h5>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Control 
              type="text" 
              placeholder="Product Name" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required 
            />
          </Col>
          <Col md={6} className="mb-3">
            <Form.Select 
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              required
            >
              <option value="">Select Category</option>
              <option value="Woman">Woman</option>
              <option value="Men">Men</option>
            </Form.Select>
          </Col>
          <Col md={4} className="mb-3">
            <Form.Control 
              type="number" 
              placeholder="Price" 
              value={formData.price}
              onChange={(e) => setFormData({...formData, price: e.target.value})}
              required 
            />
          </Col>
          <Col md={4} className="mb-3">
            <Form.Control 
              type="number" 
              step="0.01" 
              placeholder="Rating (e.g. 4.95)" 
              value={formData.rating}
              onChange={(e) => setFormData({...formData, rating: e.target.value})}
              required 
            />
          </Col>
          <Col md={4} className="mb-3">
            <Form.Control 
              type="file" 
              accept="image/*" 
              onChange={handleImageUpload}
              required={!editId} 
            />
          </Col>
        </Row>
        <div className="d-flex gap-2">
          <Button className="btn-teal" type="submit">
            {editId ? 'Update Product' : 'Add Product'}
          </Button>
          {editId && (
            <Button variant="secondary" onClick={resetForm}>Cancel Edit</Button>
          )}
        </div>
      </Form>

      <Table responsive striped bordered hover align="middle">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px' }} />
              </td>
              <td>{product.name}</td>
              <td><Badge bg={product.category === 'Woman' ? 'danger' : 'primary'}>{product.category}</Badge></td>
              <td>${product.price}</td>
              <td>★ {product.rating}</td>
              <td className="text-nowrap">
                <Button variant="warning" size="sm" className="me-2 text-white" onClick={() => handleEdit(product)}>Edit</Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(product.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Admin;