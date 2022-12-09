import { Link, useHistory } from 'react-router-dom';

const dummyPost = {
  id: 1,
  image:
    'https://github.com/MariusCodeAcademy/posts-rest-json-server/blob/main/assets/html.jpg?raw=true',
  title: 'What is HTML?',
  body: 'HTML is a programming language that stands for Hypertext Markup Language.',
  archived: false,
  userId: 9,
  tags: ['front-end', 'web-development'],
  reactions: 2,
};
function SinglePost(props) {
  const history = useHistory();
  const p = props.post;
  // const { image, title } = props.post;
  return (
    <article className='singlePost card'>
      {p.image && <img src={p.image} alt='post image' />}
      {!p.image && <img src='https://placehold.co/400' alt='no image' />}
      <h3>{p.title}</h3>
      <p className='singleBody'>{p.body}</p>
      <p className='reactions'>likes: {p.reactions}</p>
      <ul>
        {p.tags?.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      {/* jei tai single post tai reikia back mygtuko jei ne tai read more */}
      {props.isSingle ? (
        <button onClick={() => history.push('/posts')}>
          &lt;&lt;&lt; Go back
        </button>
      ) : (
        <Link to={`/posts/${p.id}`}>Read more &gt;&gt; </Link>
      )}
      <br />
      <button onClick={props.onDelete}>Delete post X</button>
    </article>
  );
}
export default SinglePost;
