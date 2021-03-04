import BookLink from "./BookLink";
import PayLink from "./PayLink";
import BookForm from "./BookForm";
import { Container, Row, Col } from 'reactstrap';
import { useState } from 'react';

const TicketBookings = () => {

    const [showForm, setShowForm] = useState(false);
    const [bookingNumber, setBookingNumber] = useState("");

    return (
        <>
            <Container>
                <br />
                <Row>
                    <Col sm="12" md={{ size: 'auto' }}>
                        <h1 className="text-white">Ticket Bookings</h1>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col sm={{ size: 'auto' }}>
                        <BookLink setShowForm={setShowForm} />
                    </Col>
                    <Col sm={{ size: 'auto' }}>
                        <PayLink />
                    </Col>
                </Row>
                <br />
                <br />
                <BookForm showForm={showForm} setShowForm={setShowForm} bookingNumber={bookingNumber} setBookingNumber={setBookingNumber} />
            </Container>
        </>
    );
}
export default TicketBookings