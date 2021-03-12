import {Card, CardBody, CardTitle,CardSubtitle, CardText} from 'reactstrap';
import DeleteDiscussion from './DeleteDiscussion';
import EditDiscussion from './EditDiscussion';



const IndividualDiscussion= ({item,trigger,loginStatus,loginFunc}) => {
    
    return(
        <>
        <Card>
            <CardBody className="text-center">
                <CardTitle><h2>Film Name: {item.film}</h2></CardTitle>
                <CardSubtitle><h2>Film Rating: {item.rating}</h2></CardSubtitle>
                <CardText>Comment/Review: {item.comment}</CardText>
                <div className="float-right">
                <DeleteDiscussion del={item._id}loginStatus={loginStatus}loginFunc={loginFunc}trigger={trigger}/>
                <EditDiscussion item={item} trigger={trigger}loginStatus={loginStatus}/>
                </div>
            </CardBody>  
        </Card>
        </>
    )

}
export default IndividualDiscussion;