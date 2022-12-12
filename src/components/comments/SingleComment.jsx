function SingleComment({ text, date, author }) {
  // SingleComment atvaizduoti data ir laika normaliu formatu

  return (
    <li className='comment'>
      <h3>{author}</h3>
      <p>{date}</p>
      <p>{text}</p>
    </li>
  );
}
export default SingleComment;
