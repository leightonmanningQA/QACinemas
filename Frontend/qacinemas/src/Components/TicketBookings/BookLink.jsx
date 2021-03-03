import { Button } from 'reactstrap';

const BookLink = ({setShowForm}) =>{

    const handleClick = () =>{
        setShowForm(true);
    }

    return(
        <Button onClick={handleClick}>
            <h4 className="text-white"> Book Tickets</h4>
        </Button>
    );
}

export default BookLink