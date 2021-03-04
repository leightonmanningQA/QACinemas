import { useState, useEffect } from "react";
import { Alert, Spinner, Form, FormGroup, Label, Input, Card, CardBody, Row, Col, Button } from "reactstrap"
import {Link} from "react-router-dom";
import axios from "axios";

const BookForm = ({ showForm, setShowForm, bookingNumber, setBookingNumber }) => {

    const [date, setDate] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [time, setTime] = useState("");
    const [film, setFilm] = useState(null);
    const [email, setEmail] = useState("");
    const [childTickets, setChildTickets] = useState(0);
    const [adultTickets, setAdultTickets] = useState(0);
    const [concessionTickets, setConcessionTickets] = useState(0);
    const [filmList, setFilmList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);

    const book = (e) => {
        create(e);
        setShowForm(false);
        setShowConfirmation(true);
    }

    const create = (e) => {
        e.preventDefault();
        axios.post(`http://127.0.0.1:5019/booking/create`, {
            film, date, time, firstName, lastName,
            email, adultTickets, childTickets, concessionTickets
        }
        )
            .then((res) => {
                setBookingNumber(res.data._id);
                console.log(res.data._id);
            })
            .catch((err) => {
                console.log(err)
                setError(err);
            })
    }


    useEffect(() => {
        setFilmList([])
        axios.get('http://127.0.0.1:5019/film/getListings')
            .then((res) => {
                setFilm(res.data[0])
                res.data.map((item) => (
                    setFilmList(filmList => [...filmList, item])

                ))
                setIsLoaded(true);
            })
            .catch((err) => {
                console.log(err)
                setError(err)
                setIsLoaded(true);
            })
    }, []);


    if (showForm) {
        if (error) {
            return <p>{error}</p>
        } else if (!isLoaded) {
            return <Spinner animation="border" role="status" />
        } else {
            return (
                <>
                    <Card className="noHoverCard">
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <Label for="chooseFilm">Which film would you like to see?</Label>
                                    <Input
                                        type="select"
                                        id="chooseFilm"
                                        value={film.title}
                                        onChange={({ target }) => {
                                            for (let i = 0; i < filmList.length; i++) {
                                                if (target.value == filmList[i].title) {
                                                    setFilm(filmList[i]);
                                                }
                                            }
                                        }}
                                    >
                                        {filmList.map((item) => (
                                            <option>{item.title}</option>
                                        ))}
                                        {console.log}
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="Date: ">Date</Label>
                                    <Input
                                        type="date"
                                        name="date"
                                        value={date}
                                        onChange={({ target }) => setDate(target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="chooseTime">Time</Label>
                                    <Input
                                        type="select"
                                        id="chooseTime"
                                        value={time}
                                        onChange={({ target }) => setTime(target.value)}
                                    >
                                        {film.showingTimes.map((item) => (
                                            <option>{item}</option>
                                        ))}
                                        {console.log}
                                    </Input>
                                </FormGroup>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label>
                                                First Name:
                                        </Label>
                                            <Input
                                                type="text"
                                                value={firstName}
                                                onChange={({ target }) => setFirstName(target.value)}
                                            ></Input>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label>
                                                Last Name:
                                        </Label>
                                            <Input
                                                type="text"
                                                value={lastName}
                                                onChange={({ target }) => setLastName(target.value)}
                                            ></Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup>
                                    <Label>
                                        Email:
                                </Label>
                                    <Input
                                        type="email"
                                        value={email}
                                        onChange={({ target }) => setEmail(target.value)}
                                    ></Input>
                                </FormGroup>
                                <Row>
                                    <Col>
                                        <Label>
                                            Child Tickets:
                                    </Label>
                                        <Input type="select" value={childTickets} onChange={({ target }) => setChildTickets(target.value)}>
                                            <option>0</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </Input>
                                    </Col>
                                    <Col>
                                        <Label>
                                            Adult Tickets:
                                    </Label>
                                        <Input type="select" value={adultTickets} onChange={({ target }) => setAdultTickets(target.value)}>
                                            <option>0</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </Input>
                                    </Col>
                                    <Col>
                                        <Label>
                                            Concession Tickets:
                                    </Label>
                                        <Input type="select" value={concessionTickets} onChange={({ target }) => setConcessionTickets(target.value)}>
                                            <option>0</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </Input>
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col xs="3">
                                        <Button onClick={book}>
                                            Book now and pay later!
                                        </Button>
                                    </Col>
                                    <Col xs="3">
                                        <Link to="/payment" bookingNumber={bookingNumber}>
                                            <Button onClick={book}>
                                                Book and pay now!
                                            </Button>
                                        </Link>
                                    </Col>
                                </Row>
                            </Form>
                        </CardBody>
                    </Card>
                    <br />
                    <br />
                    <br />
                </>

            )
        }
    } else if (showConfirmation) {
        return (
            <div>
                <Alert color="success">
                    Booking Confirmed! Please make a note of your booking reference: {bookingNumber}
                </Alert>
            </div>
        );
    }
    else {
        return (
            <>
            </>
        );
    }
}

export default BookForm