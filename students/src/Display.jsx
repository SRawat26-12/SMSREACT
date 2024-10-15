import {useState,useEffect} from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

const Display=()=>{
    const [data,setData]=useState([]);
    const loadData=()=>{
        let api="http://localhost:3000/student";
        axios.get(api).then((res)=>{
            setData(res.data);
        })
    }
    useEffect(()=>{
        loadData();
    },[])
    
    const ans=data.map((key)=>{
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
    })

    return(
        <>
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
export default Display;