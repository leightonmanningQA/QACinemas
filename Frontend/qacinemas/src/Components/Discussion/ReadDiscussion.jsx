import axios from 'axios';
import { useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import IndividualDiscussion from './IndividualDiscussion'

const ReadDiscussion = ({ msg , trigger, loginStatus,loginFunc}) => {


  //states
  const [commentList, setCommentList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState('');

  //useEffect -> triggers a sideEffect
  useEffect(() => {
    axios.get(`http://localhost:5019/discussion/getAll`)
      .then((res) => {
        setIsLoaded(true);
        setCommentList(res.data);
      })
      .catch((err) => {
        setIsLoaded(true);
        setError(err.message);
      })
  }, [msg])

  if (error) {
    return <p>{error}</p>
  } else if (!isLoaded) {
    return <Spinner animation="border" role="status" />
  } else {
    return (
      <div className="row">
        {commentList.map((item) => (
          <div className="col-md-12">
            <IndividualDiscussion key={item.id}item={item} trigger={trigger} loginStatus={loginStatus} loginFunc={loginFunc} />
          </div>
        ))}
      </div>

    )
  }

}
export default ReadDiscussion;