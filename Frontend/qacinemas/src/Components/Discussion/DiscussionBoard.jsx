import CreateDiscussion from "./CreateDiscussion"


import { useState } from 'react'
import ReadDiscussion from "./ReadDiscussion";
import LoginDiscussion from "./LoginDiscussion";
const DiscussionBoard = () => {

    const [msg, setMsg] = useState('');
    const [loginStatus, setLoginStatus] = useState(0);

    const trigger = (data) => {
      setMsg(data);
    }

    const loginFunc = () => {
      setLoginStatus(1);
      console.log(loginStatus)
    }
  
    return (
        <>
        {/* <h1>Welcome to the discussion board</h1> */}
        <div className="row">
          <div className="col-md-2">
            <h1 className="text-white">Discussion Board</h1>
          <LoginDiscussion trigger={trigger} loginFunc={loginFunc} loginStatus={loginStatus} />
            <CreateDiscussion trigger={trigger} />
            
            
            
          </div>
          <div className="container">
            <div className='col-md-10'>
              <div className="alert alert-success">{msg}</div>
              <ReadDiscussion msg={msg}trigger={trigger} loginStatus={loginStatus}loginFunc={loginFunc}/>
            </div>
          </div>
        </div>
      </>
    )
}
export default DiscussionBoard