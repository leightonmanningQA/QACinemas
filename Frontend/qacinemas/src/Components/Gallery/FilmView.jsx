
import {useState } from 'react';
import {Container, Row, Col } from 'reactstrap';
import FilmImage from "./FilmImage"
import FilmInfo from "./FilmInfo"

const FilmView = ({filmList, title}) => {

    const [currentFilm, setCurrentFilm] = useState({
        showingTimes: [],
        _id: "",
        title: "",
        description: "",
        actors: "",
        director: "",
        picture: "",
        newRelease: false,
        listing: false,
    });

    return (
        <>
            <br />
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 8, offset: 2 }}><h1 className="text-white">{title}</h1></Col>
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

export default FilmView