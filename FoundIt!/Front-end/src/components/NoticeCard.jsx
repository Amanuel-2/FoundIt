const NoticeCard = ({ notice }) => {
  return (
    <div>
      <h3>{notice.title}</h3>
      <p>Category: {notice.category}</p>
    </div>
  );
};

export default NoticeCard;
