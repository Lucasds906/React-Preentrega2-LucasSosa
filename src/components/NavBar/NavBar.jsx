import { NavLink, Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = ()=> {
    return (
        <nav className="navBar">
            <Link to='/'>
                <h3>Luxor Muebles</h3>
            </Link>
            <div>
                <NavLink to={'/category/sillon'} className={'navBarButtons'}>Sillón</NavLink>
                <NavLink to={'/category/sofa'} className={'navBarButtons'}>Sofá</NavLink>
                <NavLink to={'/category/esquinero'} className={'navBarButtons'}>Esquinero</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar