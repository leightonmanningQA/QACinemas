import {Card, CardBody, CardTitle, Input} from 'reactstrap';
import {useState} from 'react'
import axios from "axios"
import {DISCUSSION_URL} from './CONSTS.json'



const CreateDiscussion = ({trigger,login}) => {

    const [film,setFilm] = useState('')
    const [rating,setRating] = useState('')
    const [comment, setComment]= useState('')

    const create = (e) => {
        e.preventDefault();
        axios.post(`${DISCUSSION_URL}create`,{film,rating,comment})
            .then((res)=>{
                clearValues();
                trigger(res.data);

            }).catch((err) =>{
                trigger(err.data);
            })
    }

    const clearValues=() =>{
        setFilm("");
        setRating("");
        setComment("");
    }

    return (
        <div className="bg-dark" id="sidebar">
            <Card inverse color="info">
                <CardBody >
                    <CardTitle>Have Your Say!</CardTitle>
                    <form onSubmit={create}>
                        <Input type="text" className="form-control"placeholder="Film Name"value={film}onChange={({target})=>setFilm(target.value)}/>
                        <Input type="text" className="form-control"placeholder="Rating out of 10"value={rating}onChange={({target})=>setRating(target.value)}/>
                        <Input type="textarea" className="form-control"placeholder="Additional Comments/Review"value={comment}onChange={({target})=>setComment(target.value)}/>
                        <button type="submit" className="btn btn-success">Add</button>
                    </form>
                </CardBody>
            </Card>
        </div>
    )
}
export default CreateDiscussion