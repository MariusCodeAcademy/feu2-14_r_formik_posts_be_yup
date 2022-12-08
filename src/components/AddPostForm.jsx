import { useFormik } from 'formik';
import * as Yup from 'yup';

function AddPostForm(props) {
  const formik = useFormik({
    initialValues: {
      image: '',
      title: '',
      body: '',
      reactions: 0,
      userId: 1,
    },
    validationSchema: Yup.object().shape({
      image: Yup.string()
        .min(5, 'Ne maziau nei 5 simboliai')
        .max(120)
        .required('Privalomas laukas'),
      title: Yup.string().min(4).max(20).required(),
      body: '', // string, min 10 simboliu, privalomas laukas
      reactions: 0, // skaicius, teigiamas, sveikasis skaicius, max 15 privalomas
      userId: 1, // skaicius, teigiamas, nuo 1 iki 5 privalomas
    }),
    onSubmit: (values) => {
      console.log('values ===', values);
      // alert(JSON.stringify(values, null, 2));
    },
  });
  /*
  reikalingi input
  "image" text
  "title" text
  "body" textarea
  "reactions" number 0
  "userId"
  */

  // console.log('formik.values ===', formik.values);
  return (
    <div>
      <h2>Create post</h2>

      <form onSubmit={formik.handleSubmit} className='card'>
        <input
          onChange={formik.handleChange}
          value={formik.values.image}
          type='text'
          placeholder='Image'
          name='image'
        />
        <input
          onChange={formik.handleChange}
          value={formik.values.title}
          type='text'
          placeholder='Title'
          name='title'
        />
        <textarea
          onChange={formik.handleChange}
          value={formik.values.body}
          name='body'
          placeholder='Your text'
        ></textarea>
        <input
          onChange={formik.handleChange}
          value={formik.values.reactions}
          type='number'
          placeholder='Reactions'
          name='reactions'
        />
        <input
          onChange={formik.handleChange}
          value={formik.values.userId}
          type='number'
          name='userId'
          disabled
        />
        <button type='submit'>Create</button>
      </form>
    </div>
  );
}
export default AddPostForm;
