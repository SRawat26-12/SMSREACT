import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Insert=()=>{
    const [input,setInput]=useState({});
    const handleInput=(e)=>{
     let name=e.target.name;
     let value=e.target.value;
     setInput((values)=>({...values,[name]:value}));
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        let api="http://localhost:3000/student";
        axios.post(api,input).then((res)=>{
          toast.info("data successfully save");
        })
    }
    
    return(
        <>
          <Form className="form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter studentId:</Form.Label>
        <Form.Control  type="text" name="stuid" value={input.stuid} onChange={handleInput} />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter student Rollno:</Form.Label>
        <Form.Control type="text" name="sturoll" value={input.sturoll} onChange={handleInput} />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter student Name:</Form.Label>
        <Form.Control type="text" name="stuname" value={input.stuname} onChange={handleInput} />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter student Address:</Form.Label>
        <Form.Control type="text"  name="stuaddress" value={input.stuaddress} onChange={handleInput} />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter student Fees:</Form.Label>
        <Form.Control type="text"  name="stufees" value={input.stufees} onChange={handleInput}  />
       </Form.Group>
       <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    <ToastContainer />
        </>
    )
}
export default Insert;