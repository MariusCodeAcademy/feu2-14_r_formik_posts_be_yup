import { useState, useEffect } from 'react';
import { getComments } from '../../helper/helper';

function CommentsList(props) {
  const [commentsArr, setCommentsArr] = useState([]);
  // pasiimti postId
  const currentPostId = props.postId;

  // kreiptis su fetch parsisiusti komentarus
  useEffect(() => {
    getComments(currentPostId).then((commentsGot) =>
      setCommentsArr(commentsGot)
    );
  }, []);
  // ir parsisiunte noresim juos atvaizduoti
  // console.log('commentsArr ===', commentsArr);
  return (
    <div>
      <h2>Read our comments</h2>
      <ul>
        <li>comment 1 </li>
        <li>comment 2 </li>
        <li>comment 3 </li>
      </ul>
    </div>
  );
}
export default CommentsList;
