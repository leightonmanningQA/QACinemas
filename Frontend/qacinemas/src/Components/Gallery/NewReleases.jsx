import FilmView from "./FilmView"
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
                setError(err)
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
                <FilmView filmList={filmList} title = "New Releases" description="Here you can find all the most anticipated films of the coming months, all will be playing at QA Cinemas!" />
                <br/>
            </>
        )
    }
}
export default NewReleases