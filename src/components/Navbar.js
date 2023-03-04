import { Link } from 'react-router-dom';
import './../Navbar.css'

function Navbar(){
    return (
        <ul className='ul'>
            <nav><Link to={'/Calculator'}> Calculator</Link></nav>
            <nav><Link to={'/Musicplayer'}>Musicplayer</Link></nav>
            <nav><Link to={'/Digitalclock'}>Digitalclok</Link></nav>
            <nav><Link to={'/Weather'}>Weather</Link></nav>
        </ul>
    )
}
export default Navbar;