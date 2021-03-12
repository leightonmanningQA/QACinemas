import { Container, Row, Col } from 'reactstrap';

const TicketBooking = () => {
    return(
        <Container>
            <Row>
                <Col sm="12" md={{ size: 4, offset: 4 }}l>
                    <a href ="/ticketbookings">
                        <h1 className = "text-white"> Book Tickets Here!</h1>
                    </a>
                </Col>
            </Row>
        </Container> 
    );
}

export default TicketBooking