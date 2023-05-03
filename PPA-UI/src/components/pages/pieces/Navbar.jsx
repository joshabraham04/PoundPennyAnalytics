import './styling/Navbar.css'; // import the CSS file for styling
import Button from './Button';

function Navbar() {


  return (
    <nav className="navbar">
      <div href="/" className="navbar-logo">
        <img src= {require ("./pieceImages/PPA-logo.png")} alt="Logo" />
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="/" className="navbar-link">Home</a>
        </li>
        <li className="navbar-item">
          <a href="/whyppa" className="navbar-link">Why PPA?</a>
        </li>
        <li className="navbar-item">
          <a href="/invest" className="navbar-link">Invest</a>
        </li>
        <li className="navbar-item">
          <a href="/learn" className="navbar-link">Learn</a>
        </li>
        <li className="navbar-item">
          <a href="/youandmoney" className="navbar-link">You & Money</a>
        </li>
        <li className="navbar-item">
          <a href="/signup">
            <Button
                    text= "Sign Up"
                    backgroundColor= "#7700FF"
                    textColor= "#ffffff"
                    fontWeight = "bold"
                    borderRadius= "20px"
                    padding= "10px 20px"
                    fontSize = "1.5rem"
                    position= "absolute"
                    top ="40%" 
                    left= "90%"
                    transform= "translate(-50%, -30%)"
                    border = "5px solid #EFBF00"
                />
            </a>
          </li>
        <li className="navbar-item">
        <a href="/login">
          <Button
                  text= "Log in"
                  backgroundColor= "#7700FF"
                  fontWeight = "bold"
                  textColor= "#ffffff"
                  borderRadius= "20px"
                  padding= "10px 30px"
                  fontSize = "1.5rem"
                  position= "absolute"
                  top ="40%" 
                  left= "80%"
                  transform= "translate(-50%, -30%)"
                  border = "5px solid #DB00E7"
              />
          </a>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;