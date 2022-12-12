function SingleComment({ text, date, author }) {
  // SingleComment atvaizduoti data ir laika normaliu formatu

  return (
    <li className='comment'>
      <p className='comment_date'>{date}</p>
      <h3 className='comment_author'>{author}</h3>
      <p>{text}</p>
    </li>
  );
}
export default SingleComment;
