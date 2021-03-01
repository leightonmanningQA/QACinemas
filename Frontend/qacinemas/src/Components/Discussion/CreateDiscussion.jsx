import {Card, CardBody, CardTitle} from 'reactstrap';
import {useState} from 'react'
import axios from "axios"


const CreateDiscussion = ({trigger}) => {

    const [film,setFilm] = useState('')
    const [rating,setRating] = useState('')
    const [comment, setComment]= useState('')

    const create = (e) => {
        e.preventDefault();
        axios.post(`cluster0.kxiak.mongodb.net:27017/discussion/create`,{film,rating,comment})
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
        <div className="bg-light border-right" id="sidebar">
            <Card>
                <CardBody>
                    <CardTitle>Have Your Say!</CardTitle>
                    <form onSubmit={create}>
                        <input type="text" className="form-control"placeholder="Film Name"value={film}onChange={({target})=>setFilm(target.value)}/>
                        <input type="text" className="form-control"placeholder="Rating out of 10"value={rating}onChange={({target})=>setRating(target.value)}/>
                        <input type="text" className="form-control"placeholder="Additional Comments/Review"value={comment}onChange={({target})=>setComment(target.value)}/>
                        {/* <input type="text" className="form-control"placeholder="Description"value={description}onChange={({target})=>setDescription(target.value)}/> */}
                        <button type="submit" className="btn btn-outline-success">Add</button>
                    </form>
                </CardBody>
            </Card>
        </div>
    )
}
export default CreateDiscussion