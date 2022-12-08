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
        .trim()
        .min(5, 'Ne maziau nei 5 simboliai')
        .max(120)
        .required('Privalomas laukas'),
      title: Yup.string().min(4).max(20).required(),
      body: Yup.string().min(10).required(), // string, min 10 simboliu, privalomas laukas
      reactions: Yup.number().positive().integer().required().max(15), // skaicius, teigiamas, sveikasis skaicius, max 15 privalomas
      userId: Yup.number().positive().max(5).required(), // skaicius, teigiamas, nuo 1 iki 5 privalomas
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

  // sudeti likusiems inputams klaidu atvaizdavima
  // extra prideti inputui klase inputErrorField jei jame yra klaida
  // console.log('formik.errors ===', formik.errors);
  // console.log('formik.touched ===', formik.touched);
  return (
    <div>
      <h2>Create post</h2>

      <form onSubmit={formik.handleSubmit} className='card'>
        <input
          className={
            formik.touched.image && formik.errors.image ? 'inputErrorField' : ''
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.image}
          type='text'
          placeholder='Image'
          name='image'
        />
        {formik.touched.image && formik.errors.image && (
          <p className='inputErroMsg'>{formik.errors.image}</p>
        )}
        {/* sukurti InputError componenta kuris gaves props error, atvaizduos klaidos p taga */}
        {/* pvz <InputError error={formik.errors.image} /> */}
        <input
          className={
            formik.touched.title && formik.errors.title ? 'inputErrorField' : ''
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          type='text'
          placeholder='Title'
          name='title'
        />
        {formik.touched.title && formik.errors.title && (
          <p className='inputErroMsg'>{formik.errors.title}</p>
        )}
        <textarea
          className={
            formik.touched.body && formik.errors.body ? 'inputErrorField' : ''
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.body}
          name='body'
          placeholder='Your text'
        ></textarea>
        {formik.touched.body && formik.errors.body && (
          <p className='inputErroMsg'>{formik.errors.body}</p>
        )}
        <input
          className={
            formik.touched.reactions && formik.errors.reactions
              ? 'inputErrorField'
              : ''
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.reactions}
          type='number'
          placeholder='Reactions'
          name='reactions'
        />
        {formik.touched.reactions && formik.errors.reactions && (
          <p className='inputErroMsg'>{formik.errors.reactions}</p>
        )}
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
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
