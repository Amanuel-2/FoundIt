import { useState, useEffect } from 'react';
import Loader from '../components/Loader.jsx';
import NoticeCard from '../components/NoticeCard.jsx';
import {getNotices} from '../api/noticeApi.js';

const Home = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getNotices();
        setNotices(res.data);
      } catch (err) {
        console.log('Error fetching data:', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Lost & Found App</h1>
      {loading ? (
        <Loader />
      ) : (
        notices.map((notice) => (
          <NoticeCard key={notice._id} notice={notice} />
        ))
      )}
    </>
  );
};

export default Home;
