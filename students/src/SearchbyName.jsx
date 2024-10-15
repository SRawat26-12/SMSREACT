import {useState} from "react";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import axios from "axios";
const SearchbyName=()=>{
    const [stuname,setStuName]=useState("");
    const [mydata,setmyData]=useState([]);
    const handleChange=(e)=>{
        let name=e.target.value;
        setStuName(name);
        let api="http://localhost:3000/student";
        axios.get(api).then((res)=>{
            setmyData(res.data);
        })
    }
    const ans=mydata.map((key)=>{
        let str=key.stuname;
        let mystatus=str.includes(stuname);
        if(mystatus){
            return(
                <>
                <tr>
                    <td>{key.stuid}</td>
                    <td>{key.sturoll}</td>
                    <td>{key.stuname}</td>
                    <td>{key.stuaddress}</td>
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
        <Form.Label>Enter student Name:</Form.Label>
        <Form.Control  type="text" value={stuname}  onChange={handleChange} />
       </Form.Group>
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
export default SearchbyName;