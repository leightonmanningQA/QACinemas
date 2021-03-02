import {Card, CardBody, CardTitle,CardSubtitle, CardText} from 'reactstrap';
import DeleteDiscussion from './DeleteDiscussion';
import EditDiscussion from './EditDiscussion';



const IndividualDiscussion= ({item,trigger,loginStatus,loginFunc}) => {
    
    return(
        <>
        <Card>
            <CardBody className="text-center">
                <CardTitle>Film Name: {item.film}</CardTitle>
                <CardSubtitle>Film Rating: {item.rating}</CardSubtitle>
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