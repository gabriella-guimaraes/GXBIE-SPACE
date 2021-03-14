import './Menu.css';
import {Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

function Menu() {

    // const history = useHistory();

    return(
        <div className="menu">
            <nav>
                <input type="checkbox" id="check"></input>
                <label for="check" className="chackbtn">
                    <i className="fas fa-bars"></i>
                </label>
                <label className="logo">GXBIE SPACE</label>
                <ul className="menuItens">
                    <li>
                        <Link className="active" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="active" to="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link className="active" to="/design">Design</Link>
                    </li>
                    <li>
                        <Link className="active" to="/edits">Edições</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}
export default Menu