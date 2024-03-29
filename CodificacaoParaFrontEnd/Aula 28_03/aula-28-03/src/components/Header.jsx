import './Header.module.css';
import { Link } from 'react-router-dom';

export function Header() {
    return (
      <header>
        <Link to='/'><span>HOME</span></Link>
        <Link to='./mission'><span>MISSION</span></Link>
        <Link to='./products'><span>PRODUCTS</span></Link>
        <Link to='./history'><span>OUR HISTORY</span></Link>
        <Link to='./contact'><span>CONTACT</span></Link>
      </header>
    )
}