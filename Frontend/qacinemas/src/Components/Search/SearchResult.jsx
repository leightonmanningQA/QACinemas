import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const SearchResult = ({data}) => {
  return(
      <>
        {
            data.map((film) => (
                <>
        <Card style={{height:"680px", marginTop:"10px",}}>
        <CardImg height="550px" width="100px" src={film.Poster} alt="Movie Poster" />
        <CardBody>
          <CardTitle tag="h5">Film Title: {film.Title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Year Released: {film.Year}</CardSubtitle>
          <CardText>Type : {film.Type}</CardText>
          
        </CardBody>
      </Card>
                </>
 
            ))
}
      </>
  )

}

export default SearchResult