import { Link } from 'react-router-dom';
import './../Navbar.css'

function Navbar(){
    return (
        <div className='ul'>
            <div className='navbar'>
                <nav><Link style={{textDecoration: 'none' , color:'aquamarine'}} to={'/Calculator'}> <b> Calculator </b></Link></nav>
                <nav><Link style={{textDecoration: 'none' , color:'aquamarine'}} to={'/Musicplayer'}><b> Musicplayer </b></Link></nav>
                <nav><Link style={{textDecoration: 'none' , color:'aquamarine'}} to={'/Digitalclock'}><b> Digitalclock </b></Link></nav>
                <nav><Link style={{textDecoration: 'none' , color:'aquamarine'}} to={'/Weather'}><b> Weather </b></Link></nav>
            </div>
        </div>
    )
}
export default Navbar;