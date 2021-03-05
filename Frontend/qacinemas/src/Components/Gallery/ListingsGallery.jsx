import FilmView from "./FilmView"
import TicketBooking from "./TicketBooking"
import { useEffect, useState } from 'react';
import {Spinner} from 'reactstrap'
import axios from 'axios';

const ListingsGallery = () => {

    const [filmList, setFilmList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:5019/film/getListings')
            .then((res) => {
                console.log(res.data);
                setFilmList(res.data);
                setIsLoaded(true);
            })
            .catch((err) => {
                console.log(err);
                setIsLoaded(true);
            })
    }, []);

    if (error) {
        return <p>{error}</p>
    } else if (!isLoaded) {
        return <Spinner animation="border" role="status" />
    } else {
        return (
            <>
                <FilmView filmList={filmList} title = "Check out what's on at the moment:"  />
                <br />
                <TicketBooking />
                <br/>
            </>
        )
    }
}
export default ListingsGallery