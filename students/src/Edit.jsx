import { useParams } from "react-router-dom";
import axios from 'axios';
import {useState,useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Edit=()=>{

    const {id}=useParams();
    const [mydata,setMydata]=useState({});
    const loadData=()=>{
        let api=`http://localhost:3000/student/${id}`
        axios.get(api).then((res)=>{
            setMydata(res.data)
        })
    }
    useEffect(()=>{
        loadData();
    },[])
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setMydata(values=>({...values,[name]:value}));
    }
    const handleSubmit=()=>{
        let url=`http://localhost:3000/student/${id}`
        console.log(mydata);
        axios.put(url,mydata).then((res)=>{
            alert("Data Edited")
        })
    }
    return(
        <>
          <h1> Edit Student Data  </h1>
          <Form className="form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter studentId:</Form.Label>
        <Form.Control  type="text" name="stuid" value={mydata.stuid} onChange={handleInput} />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter student Rollno:</Form.Label>
        <Form.Control type="text" name="sturoll" value={mydata.sturoll} onChange={handleInput} />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter student Name:</Form.Label>
        <Form.Control type="text" name="stuname" value={mydata.stuname} onChange={handleInput} />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter student Address:</Form.Label>
        <Form.Control type="text"  name="stuaddress" value={mydata.stuaddress} onChange={handleInput} />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter student Fees:</Form.Label>
        <Form.Control type="text"  name="stufees" value={mydata.stufees} onChange={handleInput}  />
       </Form.Group>
       <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
         
       
        </>
    )
}
export default Edit;