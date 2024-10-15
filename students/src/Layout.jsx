import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link,Outlet} from "react-router-dom"
const Layout=()=>{
    return(
        <>
         <Navbar bg="primary" data-bs-theme="dark">
        <Navbar.Brand ><img style={{width:"60px",marginLeft:"8px"}} src="public/s1.png"/></Navbar.Brand>
          <Nav className="me-auto "  >
            <Nav.Link  as={Link} to="home">Home</Nav.Link>
            <Nav.Link   as={Link} to="insert">Insert</Nav.Link>
            <Nav.Link  as={Link} to="display">Display</Nav.Link>
            <Nav.Link  as={Link} to="search">Search</Nav.Link>
            <Nav.Link  as={Link} to="searchbyname">SearchbyName</Nav.Link>
            <Nav.Link  as={Link} to="edit">Edit</Nav.Link>
            <Nav.Link  as={Link} to="update">Update</Nav.Link>
          </Nav>
       </Navbar>
      
       <Outlet/>
       
        
        </>
    )
}
export default Layout;