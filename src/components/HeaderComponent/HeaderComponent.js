import logo from '../images/randomorg-logo.png'
import './headerComponent.css';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
    return (
      <header>
        <nav id="navbar">
            <ul>
                <Link to="/" >Home</Link>
                <li><a href="#">Games</a></li>
                <li><a href="#">Numbers</a></li>
                <Link to="/list-randomizer" >Lists & More</Link>
                <li><a href="#">Drawings</a></li>
                <li><a href="#">Web Tools</a></li>
                <li><a href="#">Statistics</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Learn More</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>

        <img src={logo} alt="logo"/>

        <div className="search-section">
          <div className="search-bar">
            <label>Search RANDOM.ORG</label>
            <input id="search" name="search" type="text"/><button>Search</button>
          </div>
          <h4>True Random Number Service</h4>
        </div>
      </header>
    )
}

export default HeaderComponent;