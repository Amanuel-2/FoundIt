import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updateNotice, getNotices } from '../api/noticeApi.js';

const EditNotice = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    location: '',
    contact: '',
  });

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const res = await getNotices(); 
        const notice = res.data.find((n) => n._id === id);
        if (notice) setFormData(notice);
      } catch (err) {
        console.error('Error fetching notice:', err.message);
      }
    };

    fetchNotice();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateNotice(id, formData);
      alert('Notice updated successfully!');
      navigate('/');
    } catch (err) {
      console.error('Update failed:', err.message);
      alert('Failed to update notice');
    }
  };

  return (
    <>
      <h1>Edit Notice</h1>
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
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default EditNotice;
