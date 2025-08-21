import { BrowserRouter as Router,Routes, Route,Link } from "react-router-dom";
import '../css/navbar.css';


function Navbar() {
    return (
        <Router>
            <nav>
                <a><Link to ='/'> Home </Link></a>
                <a><Link to ='/sobre'> sobre </Link></a>
                <a><Link to ='/contato'> contato </Link></a>
            </nav>
            <Routes>
                <Route path='/' element= {<h1 style={{color:"white"}}>Home</h1>}/>
                <Route path='/sobre' element= {<h1>Sobre</h1>}/>
                <Route path='/contato' element= {<h1>Contatos</h1>}/>
            </Routes>
        </Router>
    )
}
export default Navbar;