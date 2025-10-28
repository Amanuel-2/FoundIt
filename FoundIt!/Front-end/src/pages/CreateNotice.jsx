import { useState } from 'react';
import  {createNotice}  from '../api/noticeApi.js';

const CreateNotice = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    location: '',
    contact: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createNotice(formData);
      console.log('Notice created:', res.data);
      alert('Notice submitted successfully!');
    } catch (err) {
      console.error('Error creating notice:', err.message);
      alert('Failed to submit notice');
    }
  };

  return (
    <>
      <h1>Create New Notice</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={formData.contact}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CreateNotice;
