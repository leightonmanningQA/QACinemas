import { Container, Card, CardBody, Form } from "reactstrap"

const Payment = ({ bookingNumber }) => {
    return (
        <>
            <h1 className="text-white">
                Payment {bookingNumber}
            </h1>
            <Container>
                <Card className="noHoverCard">
                    <CardBody>
                        <Form>
                            
                        </Form>
                    </CardBody>
                </Card>
            </Container>
        </>
    );
}

export default Payment