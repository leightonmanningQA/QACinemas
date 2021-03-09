import BookLink from "./BookLink";
import PayLink from "./PayLink";
import BookForm from "./BookForm";
import { Container, Row, Col } from 'reactstrap';
import { useState } from 'react';

const TicketBookings = ({setBookingReference, bookingReference}) => {

    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <Container>
                <br/>
                <Row>
                    <Col sm="12" md={{ size: 'auto' }}>
                        <h1 className="text-white">Ticket Bookings</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6 className="text-white">To pay For tickets use the 'Book Tickets' button. To pay for tickets you have booked in advance use the 'Pay For Tickets' Button</h6>
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
                <BookForm showForm={showForm} setShowForm={setShowForm} setBookingReference = {setBookingReference} bookingReference={bookingReference} />

                <Row>
                    <Col>
                        <h6 className="text-white">All tickets are bought according to our terms and conditions, tickets must be cancelled 7 days in advance. Please call us to enquire about changing the time of your viewing.</h6>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default TicketBookings