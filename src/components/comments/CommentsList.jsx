import { useState, useEffect } from 'react';
import { getComments } from '../../helper/helper';
import SingleComment from './SingleComment';

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

  // CommentsList grazinti null jei commentaru nera

  return (
    <div className='card'>
      <h2>Read our comments</h2>
      <ul className='unlisted'>
        {commentsArr.map((cObj) => (
          <SingleComment
            key={cObj.id}
            text={cObj.text}
            date={cObj.date}
            author={cObj.author}
          />
        ))}
      </ul>
    </div>
  );
}
export default CommentsList;
