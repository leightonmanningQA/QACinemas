import { Button, Form, FormGroup, Label, Input, Container, Col, Card, CardBody } from "reactstrap"
import { useState } from "react"
import axios from "axios";
const Payment = ({ bookingReference }) => {

    const [name, setName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [securityCode, setSecurityCode] = useState("");

    const pay = (e) => {
        e.preventDefault();
        axios.post(`http://127.0.0.1:5019/booking/create`, {
            name, cardNumber, expiryDate,securityCode,bookingReference
        }
        )
            .then((res) => {
                console.log(res.data._id);
            })
            .catch((err) => {
                console.log(err);
            })
    }

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
                                    onChange={({ target }) => bookingReference(target.value)}
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
}

export default Payment