import SinglePost from '../components/SinglePost';

function PostsPage(props) {
  return (
    <div>
      <h1>PostsPage</h1>

      <p>cia generuosim single card</p>
      <div className='grid'>
        <SinglePost />
      </div>
    </div>
  );
}
export default PostsPage;
