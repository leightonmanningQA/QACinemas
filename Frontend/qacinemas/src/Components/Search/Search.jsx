import {Container, Row} from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';
import SearchResult from './SearchResult'
const { API_KEY } = require('./consts.json');


const Search = () => {
    const [data, setData] = useState([]);
    const [filmTitle, setFilmTitle] = useState("");
    const [err, setError] = useState('');

    const updateTitle = (e) => {
        e.preventDefault();
        setFilmTitle(e.target.value);
    }

    const makeRequest = (e) => {
        axios.get(`${API_KEY}` + "&s=" + filmTitle)
            .then(response => {
                if(response.data.Error){
                    setError(response.data.Error)
                }else{
                setData(response.data.Search);
                setError("");
                }
            }).catch(err=>{
                setError(err);
            })
    };


    return (
        <>
            <div class="jumbotron d-flex align-items-center">
                <div class="container">
                <h1>Search Page</h1>
         <p>Enter the name of a film you want to search.</p>
         <input type="text" placeholder="Search Term" onChange={(e) => updateTitle(e)} />
        <button onClick={(e) => makeRequest(e)}>Click me</button>
                </div>
            </div>
        <Container>
        <Row className="justify-content-md-center">
        <SearchResult data={data} />
        </Row>
        </Container>
   

        </>

    )
}
export default Search