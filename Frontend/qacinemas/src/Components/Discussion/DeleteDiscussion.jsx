import axios from 'axios'
import { CardLink } from 'reactstrap'
import { DISCUSSION_URL } from './CONSTS.json'
const DeleteDiscussion = ({ del, trigger,loginStatus }) => {


    const remove = () => {
        if(loginStatus===1){
        axios.delete(`${DISCUSSION_URL}delete/${del}`)
            .then((res) => {
                trigger('Successfully Deleted Comment with id:' +del)
            })
            .catch((err) => {
                trigger("Error deleting")
            })
        }
        else{
            trigger("You are not logged in")
        }
    }
   
    return (
        <>
            <CardLink className="btn btn-outline-danger" onClick={remove}>X</CardLink>
        </>
    )
  
    }



export default DeleteDiscussion;