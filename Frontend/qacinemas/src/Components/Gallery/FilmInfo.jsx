import { Container } from 'reactstrap';

const MovieInfo = ({ currentFilm }) => {
    console.log("info: " + currentFilm.title)
    return (
        <>
                <h2 className="text-white">{currentFilm.title}</h2>
                <br />
                <br />
                <h7 className="text-white">{currentFilm.description}</h7>
                <br />
                <br />
                <h7 className="text-white"> Actors: {currentFilm.actors}</h7>
                <br />
                <br />
                <h7 className="text-white"> Director: {currentFilm.director}</h7>
                <br />
                <br />
                <h7 className="text-white"> Showing Times:</h7>
                <br />
                <br />
                <Container>
                    {currentFilm.showingTimes.map((item) => (
                        <>
                            <h8 className="text-white">{item}</h8>
                            <br />
                        </>
                    ))}
                </Container>
        </>
    );
}

export default MovieInfo