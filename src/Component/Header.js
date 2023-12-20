import logo from "./images/logo.svg"
import './Header.css';
// import Restaurant from "./RestaurantMain";
function Header(){
    return (
        <header>
            <div className="Pagelogo">
                <a href="#">
                    <img src={logo} alt="GeekFoods" />
                    <p>GeekFoods</p>
                </a> 
            </div>
            <div className="headSec2">
                <a href="#" className="active">Home</a>
                <a href="#">Quote</a>
                <a href="#">Resturants</a>
                <a href="#">Foods</a>
                <a href="#">Contact</a>
            </div>
            <div className="getStartedBtn">
                <button>Get started</button>
            </div>
            <div className="menuIcon">
                <i class="fa-solid fa-bars"></i>
            </div>
        </header>
    );
}

export default Header;