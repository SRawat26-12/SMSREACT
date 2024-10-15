import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react";
import Table from 'react-bootstrap/Table';
import axios from 'axios';
const Search=()=>{
    const [stuid ,setStuId]=useState("");
    const [mydata,setmyData]=useState([]);
    const handleSubmit=()=>{
        let api=`http://localhost:3000/student/?stuid=${stuid}`;
        axios.get(api ).then((res)=>{
           setmyData(res.data);
           console.log(res.data);
        })
    }
    const ans=mydata.map((key)=>{
       {
        return(
            <>
            <tr>
            <td>{key.stuid}</td>
            <td>{key.sturoll}</td>
            <td>{key.stuname}</td>
            <td>{key.stucity}</td>
            <td>{key.stufees}</td>
            </tr>
            </>
        )
    }
   
    })
    return(
       <>
        <Form className="form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter studentId:</Form.Label>
        <Form.Control  type="text" value={stuid}  onChange={(e)=>{setStuId(e.target.value)}} />
       </Form.Group>
       <Button variant="primary" onClick={handleSubmit}>
        Search
      </Button>
       </Form>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>Stuid</th>
          <th>Student Rollno</th>
          <th>Student Name</th>
          <th>Student Address</th>
          <th>Student Fees</th>
        </tr>
      </thead>
      <tbody>
        {ans}
       
      </tbody>
    </Table>
       </>
    )
}
export default Search;