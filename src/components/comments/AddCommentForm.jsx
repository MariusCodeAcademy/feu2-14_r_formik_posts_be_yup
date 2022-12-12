import { useFormik } from 'formik';

function AddCommentForm(props) {
  // init values for form: author, text, date, postId
  const formik = useFormik({
    initialValues: {
      author: '',
      text: '',
      date: '',
      postId: props.postId,
    },
    onSubmit: (values) => {
      // values yra objektas su visom formiko reiksmem aprasytom initalValues
      // submiting the form create timeStamp for the DATE
      values.date = new Date();
      console.log('values ===', values);
      props.onNewComment();
    },
  });
  // add formik to controll the form

  return (
    <div className='card'>
      <h2>Add a comment</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          onChange={formik.handleChange}
          value={formik.values.author}
          type='text'
          name='author'
          placeholder='Author'
        />
        <textarea
          onChange={formik.handleChange}
          value={formik.values.text}
          name='text'
          placeholder='Your comment'
        ></textarea>
        <button type='submit'>Comment</button>
      </form>
    </div>
  );
}
export default AddCommentForm;
