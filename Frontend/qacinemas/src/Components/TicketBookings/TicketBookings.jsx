import BookLink from "./BookLink";
import PayLink from "./PayLink";
import BookForm from "./BookForm";
import { Container, Row, Col } from 'reactstrap';
import { useState } from 'react';

const TicketBookings = () => {

    const [showForm, setShowForm] = useState(false);

    return (
        <Container>
            <br />
            <Row>
                <Col sm="12" md={{ size: 4, offset: 4 }}>
                    <h1 className="text-white">Ticket Bookings</h1>
                </Col>
            </Row>
            <br />
            <Row>
                <Col sm={{ size: 'auto', offset: 3 }}>
                    <BookLink setShowForm = {setShowForm}/>
                </Col>
                <Col sm={{ size: 'auto', offset: 2 }}>
                    <PayLink/>
                </Col>
            </Row>
            <br/>
            <br/>
            <br/>
            <BookForm showForm = {showForm}/>
        </Container>
    );
}
export default TicketBookings