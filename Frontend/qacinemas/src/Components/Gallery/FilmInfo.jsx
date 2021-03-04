import {Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

const MovieInfo = ({ currentFilm }) => {
    console.log("info: " + currentFilm.title)

    if(currentFilm.newRelease == true){
        return (
            <>
                <div>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h2">{currentFilm.title}</CardTitle>
                            <CardSubtitle tag="h5" className="mb-2 text-muted">{currentFilm.description}</CardSubtitle>
                            <CardText>
                                Actors: {currentFilm.actors}
                                <br />
                                <br />
                                Director: {currentFilm.director}
    
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </>
        );
    }else{
        return (
            <>
                <div>
                    <Card className="noHoverCard">
                        <CardBody>
                            <CardTitle tag="h2">{currentFilm.title}</CardTitle>
                            <CardSubtitle tag="h5" className="mb-2 text-muted">{currentFilm.description}</CardSubtitle>
                            <CardText>
                                <br/>
                                Actors: {currentFilm.actors}
                                <br />
                                <br />
                                Director: {currentFilm.director}
                                <br />
                                <br />
                                Showing Times:
                                <br />
                                {currentFilm.showingTimes.map((item) => (
                                    <>
                                        {item}
                                        <br />
                                    </>
                                ))}
    
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </>
        );
    }
}

export default MovieInfo