import { Button, Form, FormGroup, Label, Input, Container, Col, Card, CardBody, Alert } from "reactstrap"
import { useState } from "react"
import axios from "axios";
const Payment = ({ bookingReference, setBookingReference }) => {

    const [name, setName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [securityCode, setSecurityCode] = useState("");
    const [payed, setPayed] = useState(false);

    const pay = (e) => {
        e.preventDefault();
        setPayed(true);
        axios.post(`http://127.0.0.1:5019/payment/create`, {
            name, cardNumber, expiryDate,securityCode,bookingReference
        })
            .then((res) => {
                console.log(res.data._id);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    if(payed == false){
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
                                <Button onClick={pay}>
                                    Pay
                                </Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Container>
        );
    } else {
        return(
            <Container>
                <br/>
                <h1 className="text-white">
                        Payment
                    </h1>
                <br/>
                <Alert color="success">
                    Payment complete, we look forward to seeing you.
                </Alert>
            </Container>
        );
    }
}

export default Payment