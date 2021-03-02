
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner, Container, Row, Col } from 'reactstrap';
import FilmImage from "./FilmImage"
import FilmInfo from "./FilmInfo"

const MovieView = () => {

    const [currentFilm, setCurrentFilm] = useState({
        showingTimes: [ ],
        _id: "",
        title: "",
        description: "",
        actors: "",
        director: "",
        picture: "",
        newRelease: false,
        listing: false,
    });
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
    //} else if (currentFilm.title == "") {
        //return <Spinner animation="border" role="status" />
    } else if (!isLoaded) {
        return <Spinner animation="border" role="status" />
    }else{
        return (
            <>
                <br />
                <Container>
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }}><h1 className="text-white">Check Out what's on at the moment:</h1></Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs="6">
                            <FilmImage filmList={filmList} setCurrentFilm={setCurrentFilm} currentFilm={currentFilm} />
                        </Col>
                        <Col xs="1">
    
                        </Col>
                        <Col xs="5">
                            <FilmInfo currentFilm={currentFilm} />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default MovieView