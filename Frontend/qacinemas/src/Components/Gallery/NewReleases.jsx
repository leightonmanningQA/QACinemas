import FilmView from "./FilmView"
import TicketBooking from "./TicketBooking"
import { useEffect, useState } from 'react';
import {Spinner} from 'reactstrap'
import axios from 'axios';

const NewReleases = () => {

    const [filmList, setFilmList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:5019/film/getNewReleases')
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
                <FilmView filmList={filmList} title = "Check out what's coming soon:" />
                <br/>
            </>
        )
    }
}
export default NewReleases