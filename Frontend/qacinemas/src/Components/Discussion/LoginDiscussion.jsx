import {Card, CardBody, CardTitle, Input} from 'reactstrap';
import {useState} from 'react'
import {ADMIN_USER, ADMIN_PASS} from './CONSTS.json'

const LoginDiscussion = ({trigger,loginFunc,loginStatus}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const checklogin = (e) => {
        e.preventDefault();
        if(username===`${ADMIN_USER}`&& password===`${ADMIN_PASS}`){
            loginFunc();
            trigger("Login Successful");
            console.log(loginStatus)
            clearValues();
        }else{
            trigger("Wrong Username/Password")
        }
    }
    const clearValues=() =>{
        setUsername("");
        setPassword("");

    }

    return (
        <div className="bg-dark" id="sidebar">
            <Card inverse color="info">
                <CardBody >
                    <CardTitle>Login</CardTitle>
                    <form onSubmit={checklogin}>
                        <Input type="text" className="form-control"placeholder="Username"value={username}onChange={({target})=>setUsername(target.value)}/>
                        <Input type="text" className="form-control"placeholder="Password"value={password}onChange={({target})=>setPassword(target.value)}/>
                        <button type="submit" className="btn btn-success">Login</button>
                    </form>
                </CardBody>
            </Card>
        </div>
    )
}
export default LoginDiscussion