import { useState,useEffect } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import {useNavigate} from 'react-router-dom';
const Update=()=>{
    const [mydata,setMydata]=useState([]);
    const myNav=useNavigate();
    const loaddata=()=>{
        let url="http://localhost:3000/student";
        axios.get(url).then((res)=>{
            setMydata(res.data);
        })
    }
    useEffect(()=>{
        loaddata();
    },[]);
    const mydel=(myid)=>{
        console.log(myid)
        let url=`http://localhost:3000/student/${myid}`;
        axios.delete(url).then((res)=>{
            alert("record deleted");

            loaddata();
        })
    }
    const myEdit=(myid)=>{
        myNav(`/myedit/${myid}`)
    }
    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
               <td>{key.stuid}</td>
                <td>{key.sturoll}</td>
                <td>{key.stuname}</td>
                <td>{key.stuaddress}</td>
                <td>{key.stufees}</td>
                <td><a href="#">
    <img src="public/delete.jpg" width="50" height="40" onClick={()=>{mydel(key.id)}}/>
    </a>Update </td>
    <td>
    <a href="#">
    <img src="public/edit.png" width="50" height="40" onClick={()=>{myEdit(key.id)}}/>
    </a> Edit 
    </td>
            </tr>
            </>
        )
    })
    return(
       
        <>
        <h1>update data</h1>
        <Table>

    <thead>
        <tr>
            <th>Stuid</th>
            <th>Sturoll</th>
            <th>Stuname</th>
            <th>Stuaddress</th>
            <th>Stufess</th>
            <th>Update</th>
            <th>Delete</th>
        </tr>
    </thead>
    <tbody>
        {ans}
    </tbody>
</Table>
        </>
    )
}
export default Update