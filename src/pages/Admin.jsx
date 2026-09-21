import React, { useState, useEffect } from 'react';
import { Container, Table, Form, Button, Row, Col, Badge, Modal } from 'react-bootstrap';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const API_URL = 'https://6aa7e5149b08676cd32b9f39.mockapi.io/products';

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', category: '', price: '', rating: '', image: '' });

  const [deleteId, setDeleteId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

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

  const handleOpenAdd = () => {
    resetForm();
    setShowModal(true);
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
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    resetForm();
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
      handleCloseModal();
      fetchProducts();
    } catch (err) {
      toast.error('Operation failed');
    }
  };

  const handleOpenDelete = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    if (!deleteId) return;
    try {
      await axios.delete(`${API_URL}/${deleteId}`);
      toast.success('Product deleted successfully!');
      fetchProducts();
    } catch (err) {
      toast.error('Failed to delete product');
    } finally {
      setShowDeleteModal(false);
      setDeleteId(null);
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
        <div>
          <Button variant="primary" className="me-2" onClick={handleOpenAdd}>
            + Add New Product
          </Button>
          <a href="/" className="btn btn-outline-secondary">Go to Website</a>
        </div>
      </div>

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
                <img 
                  src={product.image} 
                  alt={product.name} 
                  style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px' }} 
                />
              </td>
              <td>{product.name}</td>
              <td>
                <Badge bg={product.category === 'Woman' ? 'danger' : 'primary'}>
                  {product.category}
                </Badge>
              </td>
              <td>${product.price}</td>
              <td>⭐ {product.rating}</td>
              <td className="text-nowrap">
                <Button 
                  variant="warning" 
                  size="sm" 
                  className="me-2 text-white" 
                  onClick={() => handleEdit(product)}
                >
                  Edit
                </Button>
                <Button 
                  variant="danger" 
                  size="sm" 
                  onClick={() => handleOpenDelete(product.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{editId ? 'Edit Product' : 'Add New Product'}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Label>Product Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required 
                />
              </Col>
              <Col md={6} className="mb-3">
                <Form.Label>Category</Form.Label>
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
                <Form.Label>Price ($)</Form.Label>
                <Form.Control 
                  type="number" 
                  placeholder="0.00" 
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  required 
                />
              </Col>
              <Col md={4} className="mb-3">
                <Form.Label>Rating</Form.Label>
                <Form.Control 
                  type="number" 
                  step="0.01" 
                  placeholder="e.g. 4.95" 
                  value={formData.rating}
                  onChange={(e) => setFormData({...formData, rating: e.target.value})}
                  required 
                />
              </Col>
              <Col md={4} className="mb-3">
                <Form.Label>Product Image</Form.Label>
                <Form.Control 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageUpload}
                  required={!editId} 
                />
              </Col>
            </Row>
            {formData.image && (
              <div className="mt-2 text-center">
                <small className="text-muted d-block mb-1">Image Preview:</small>
                <img 
                  src={formData.image} 
                  alt="Preview" 
                  style={{ maxHeight: '100px', borderRadius: '4px' }} 
                />
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              {editId ? 'Save Changes' : 'Add Product'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered size="sm">
        <Modal.Header closeButton className="border-0 pb-0">
          <Modal.Title className="text-danger fs-5 fw-bold">Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center py-4">
          <div className="mb-3 text-danger fs-1">🫷🗑️🫸</div>
          <p className="mb-1 fw-semibold">Are you sure you want to delete this product?</p>
          <small className="text-muted">This action cannot be undone.</small>
        </Modal.Body>
        <Modal.Footer className="border-0 justify-content-center pt-0 pb-4">
          <Button variant="secondary" className="px-4" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" className="px-4" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Admin;