import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#2c3e50',
      padding: '15px 30px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        gap: '30px',
        margin: 0,
        padding: 0
      }}>
        <li>
          <Link to="/" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: '500'
          }}>Home</Link>
        </li>
        <li>
          <Link to="/about" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: '500'
          }}>About</Link>
        </li>
        <li>
          <Link to="/services" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: '500'
          }}>Services</Link>
        </li>
        <li>
          <Link to="/contact" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: '500'
          }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;