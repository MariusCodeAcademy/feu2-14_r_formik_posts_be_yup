function AddPostForm(props) {
  /*
  reikalingi input
  "image" text
  "title" text
  "body" textarea
  "reactions" number 0
  */
  return (
    <div>
      <h2>Create post</h2>

      <form>
        <input type='text' placeholder='Image' name='image' />
      </form>
    </div>
  );
}
export default AddPostForm;
