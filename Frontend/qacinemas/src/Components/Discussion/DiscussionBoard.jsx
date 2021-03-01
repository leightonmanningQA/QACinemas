import CreateDiscussion from "./CreateDiscussion"


import { useState } from 'react'
const DiscussionBoard = () => {

    const [msg, setMsg] = useState('');

    const trigger = (data) => {
      setMsg(data);
    }
  
    return (
        <>
        {/* <h1>Welcome to the discussion board</h1> */}
        <div className="row">
          <div className="col-md-2">
            <CreateDiscussion trigger={trigger} />
            
          </div>
          <div className="container">
            <div className='col-md-10'>
              <div className="alert alert-success">{}</div>
              {/* <ReadTasks msg={msg}trigger={trigger}/> */}
            </div>
          </div>
        </div>
      </>
    )
}
export default DiscussionBoard