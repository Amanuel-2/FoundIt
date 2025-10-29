import {deleteNotice,updateNotice} from '../api/noticeApi.js';
import { useNavigate } from 'react-router-dom'
const NoticeCard = ({ notice }) => {
    const Navigate = useNavigate(); 
    const handleDelete = async (id)=>{
        try {
            await deleteNotice(id);
            alert('deleted successfully');
        } catch (err) {
            alert('Delete failed',err.message);
        }
    }
  return (
    <div>
      <h3>{notice.title}</h3>
      <p>Category: {notice.category}</p>
      <button onClick={()=> handleDelete(notice._id)}>Delete</button>
      <button onClick={()=> Navigate(`/edit/${notice._id}`)}>Edit</button>
    </div>
  );
};

export default NoticeCard;
