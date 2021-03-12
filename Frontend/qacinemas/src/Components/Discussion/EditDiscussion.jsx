
import axios from 'axios';
import { useState } from 'react';
import { CardLink, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
import { DISCUSSION_URL } from "./CONSTS.json"

const EditDiscussion = ({ item, trigger,loginStatus}) => {
    //Data from DB
    const { film, rating, comment } = item;
    const [updateFilm, setUpdateFilm] = useState(film);
    const [updateRating, setUrating] = useState(rating);
    const [updateComment, setUComment] = useState(comment);


    //Modal
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const updateDatabase = (e) => {
        if(loginStatus===1){
        e.preventDefault();
        axios.patch(`${DISCUSSION_URL}update/${item._id}`,{film:updateFilm,rating:updateRating,comment:updateComment })
            .then((res) => {
                trigger(res.data);
                toggle();
            })
            .catch((err) => {
                trigger(err.data)
            })
        }else{
            trigger("You are not logged in")
        }
    }

    return (
        <>
            <CardLink className="btn btn-outline-warning" onClick={toggle}>EDIT</CardLink>
            <Modal isOpen={modal}>
                <ModalHeader>{item.film}</ModalHeader>
                <form >
                    <ModalBody>

                        <input type="text" className="form-control"  value={updateFilm} onChange={({ target }) => setUpdateFilm(target.value)} />
                        <input type="text" className="form-control"  value={updateRating} onChange={({ target }) => setUrating(target.value)} />
                        <input type="text" className="form-control"  value={updateComment} onChange={({ target }) => setUComment(target.value)} />


                    </ModalBody>
                </form>
                <ModalFooter>
                    <button type="submit"onClick={updateDatabase} className="btn btn-outline-success">Update</button>
                    <button onClick={toggle} className="btn btn-outline-danger">Cancel</button>
                </ModalFooter>
            </Modal>
        </>
    )

}
export default EditDiscussion;