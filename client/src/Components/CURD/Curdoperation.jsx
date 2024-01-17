import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/Curd.css";
function Curdoperation() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/items');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAddItem = async () => {
    try {
      await axios.post('http://localhost:8000/items', { name, description });
      fetchData();
      setName('');
      setDescription('');
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleUpdateItem = async () => {
    try {
      await axios.put(`http://localhost:8000/items/${selectedItemId}`, { name, description });
      fetchData();
      setName('');
      setDescription('');
      setSelectedItemId(null);
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/items/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleEditItem = (id, itemName, itemDescription) => {
    setSelectedItemId(id);
    setName(itemName);
    setDescription(itemDescription);
  };

  const handleCancelEdit = () => {
    setSelectedItemId(null);
    setName('');
    setDescription('');
  };

  return (
    <div>
      <h1>CRUD Application</h1>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name} - {item.description}{' '}
            <button onClick={() => handleEditItem(item._id, item.name, item.description)}>Edit</button>{' '}
            <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>{selectedItemId ? 'Edit Item' : 'Add Item'}</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {selectedItemId ? (
        <>
          <button onClick={handleUpdateItem}>Update Item</button>
          <button onClick={handleCancelEdit}>Cancel Edit</button>
        </>
      ) : (
        <button onClick={handleAddItem}>Add Item</button>
      )}
    </div>
  );
}

export default Curdoperation;
