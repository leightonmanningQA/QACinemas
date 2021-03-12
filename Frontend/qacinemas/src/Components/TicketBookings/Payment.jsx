import { Button, Form, FormGroup, Label, Input, Container, Col, Card, CardBody, Alert } from "reactstrap"
import { useState } from "react"
import axios from "axios";
const Payment = ({ bookingReference, setBookingReference }) => {

    const [name, setName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [securityCode, setSecurityCode] = useState("");
    const [complete, setComplete] = useState(false);
    const [retrieved, setRetrieved] = useState(0);
    const [price, setPrice] = useState(0);
    const [paid, setPaid] =useState(false);

    const pay = (e) => {
        e.preventDefault();
        setComplete(true);
        axios.patch(`http://127.0.0.1:5019/booking/update/${bookingReference}`, {
            "paid":true
        })
        axios.post(`http://127.0.0.1:5019/payment/create`, {
            name, cardNumber, expiryDate, securityCode, bookingReference
        })
            .then((res) => {
                console.log(res.data._id);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const confirm = (e) => {
        e.preventDefault();
        axios.get(`http://127.0.0.1:5019/booking/get/${bookingReference}`)
            .then((res) => {
                if(res.data.paid === false){
                    setPrice(res.data.price);
                    setRetrieved(true);
                } else {
                    setPaid(true);
                }
            })
            .catch((err) => {
                setRetrieved(false);
            })
    }

    if (complete === false) {
        if (retrieved === 0) {
            if(paid === false){
                return (
                    <Container>
                        <br />
                        <Col>
                            <h1 className="text-white">
                                Payment
                            </h1>
                        </Col>
                        <br />
                        <Col xs="6">
                            <Card className="noHoverCard">
                                <CardBody>
                                    <Form>
                                        <FormGroup>
                                            <Label>
                                                Please enter your booking reference:
                                            </Label>
                                            <Input
                                                type="text"
                                                value={bookingReference}
                                                placeholder={bookingReference}
                                                onChange={({ target }) => setBookingReference(target.value)}
                                            ></Input>
                                        </FormGroup>
                                        
                                        <Button onClick={confirm}>
                                            Confirm
                                        </Button>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Container>
                );
            } else if (paid === true){
                return (
                    <Container>
                        <br />
                        <Col>
                            <h1 className="text-white">
                                Payment
                            </h1>
                        </Col>
                        <br />
                        <Col xs="6">
                            <Card className="noHoverCard">
                                <CardBody>
                                    <Form>
                                        <FormGroup>
                                            <Label>
                                                Please enter your booking reference:
                                            </Label>
                                            <Input
                                                type="text"
                                                value={bookingReference}
                                                placeholder={bookingReference}
                                                onChange={({ target }) => setBookingReference(target.value)}
                                            ></Input>
                                        </FormGroup>
                                        
                                        <Alert color="danger">
                                            This order has already been paid for.
                                        </Alert>
                                        <Button onClick={confirm}>
                                            Confirm
                                        </Button>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Container>
                );
            }
            
        } else if (retrieved === false) {
            return (
                <Container>
                    <br />
                    <Col>
                        <h1 className="text-white">
                            Payment
                        </h1>
                    </Col>
                    <br />
                    <Col xs="6">
                        <Card className="noHoverCard">
                            <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Label>
                                            Please enter your booking reference:
                                        </Label>
                                        <Input
                                            type="text"
                                            value={bookingReference}
                                            placeholder={bookingReference}
                                            onChange={({ target }) => setBookingReference(target.value)}
                                        ></Input>
                                    </FormGroup>
                                    
                                    <Alert color="danger">
                                        Order could not be retrieved please check your booking reference and try again
                                    </Alert>
                                    <Button onClick={confirm}>
                                        Confirm
                                    </Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Container>
            );
        } else if (retrieved === true) {
            return (
                <Container>
                    <br />
                    <Col>
                        <h1 className="text-white">
                            Payment
                            </h1>
                    </Col>
                    <br />
                    <Col xs="6">
                        <Card className="noHoverCard">
                            <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Label>
                                            Please enter your booking reference:
                                            </Label>
                                        <Input
                                            type="text"
                                            value={bookingReference}
                                            placeholder={bookingReference}
                                            onChange={({ target }) => setBookingReference(target.value)}
                                        ></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>
                                            Full Name:
                                        </Label>
                                        <Input
                                            type="text"
                                            value={name}
                                            onChange={({ target }) => setName(target.value)}
                                        ></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>
                                            Card Number:
                                        </Label>
                                        <Input
                                            type="text"
                                            value={cardNumber}
                                            onChange={({ target }) => setCardNumber(target.value)}
                                        ></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>
                                            Expiry Date:
                                        </Label>
                                        <Input
                                            type="text"
                                            value={expiryDate}
                                            onChange={({ target }) => setExpiryDate(target.value)}
                                        ></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>
                                            Security Code:
                                        </Label>
                                        <Input
                                            type="text"
                                            value={securityCode}
                                            onChange={({ target }) => setSecurityCode(target.value)}
                                        ></Input>
                                    </FormGroup>
                                    <Alert color="success">
                                        We've found your booking. Amount to pay: £{price} <br /> Confirm payment below.
                                    </Alert>
                                    <Button onClick={pay}>
                                        Pay
                                    </Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Container>
            );
        }

    } else {
        return (
            <Container>
                    <br />
                    <Col>
                        <h1 className="text-white">
                            Payment
                            </h1>
                    </Col>
                    <br />
                    <Col xs="6">
                        <Card className="noHoverCard">
                            <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Label>
                                            Please enter your booking reference:
                                            </Label>
                                        <Input
                                            type="text"
                                            value={bookingReference}
                                            placeholder={bookingReference}
                                            onChange={({ target }) => setBookingReference(target.value)}
                                        ></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>
                                            Full Name:
                                        </Label>
                                        <Input
                                            type="text"
                                            value={name}
                                            onChange={({ target }) => setName(target.value)}
                                        ></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>
                                            Card Number:
                                        </Label>
                                        <Input
                                            type="text"
                                            value={cardNumber}
                                            onChange={({ target }) => setCardNumber(target.value)}
                                        ></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>
                                            Expiry Date:
                                        </Label>
                                        <Input
                                            type="text"
                                            value={expiryDate}
                                            onChange={({ target }) => setExpiryDate(target.value)}
                                        ></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>
                                            Security Code:
                                        </Label>
                                        <Input
                                            type="text"
                                            value={securityCode}
                                            onChange={({ target }) => setSecurityCode(target.value)}
                                        ></Input>
                                    </FormGroup>
                                    <Alert color="success">
                                        Confirmation complete, we look forward to seeing you.
                                    </Alert>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Container>
        );
    }
}

export default Payment