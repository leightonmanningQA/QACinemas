import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';



const SearchResult = ({data}) => {
    console.log(data);
    let imdbID="";
    return (
        <>
            {
                data.map((film) => (
                    <>  
                        <Card style={{ height: "720px", marginTop: "10px", }}>
                            <CardImg height="550px" width="100px" src={film.Poster} alt="Movie Poster" />
                            <CardBody>
                                <CardTitle tag="h5">Film Title: {film.Title}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Year Released: {film.Year}</CardSubtitle>
                                <CardText>Type : {film.Type}</CardText>
                                <Button href={ 'https://www.imdb.com/title/' + film.imdbID }color="warning">IMDB</Button>{' '}
                            </CardBody>
                        </Card>
                    </>

                ))
            }
        </>
    )

}

export default SearchResult