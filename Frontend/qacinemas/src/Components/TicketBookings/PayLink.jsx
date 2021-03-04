import { Button } from 'reactstrap';
import {Link, Route} from 'react-router-dom'

const PayLink = ({bookingNumber}) => {
    return (
        <>
        <Link to="/payment" bookingNumber={bookingNumber}>
            <Button>
                <h4 className="text-white">Pay For Tickets</h4>
            </Button>
        </Link>
        </>
    );
}

export default PayLink