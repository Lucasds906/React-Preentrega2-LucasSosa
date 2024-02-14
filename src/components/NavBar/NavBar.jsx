import CartWidget from "../CartWidget/CartWidget"

const NavBar = ()=> {
    return (
        <nav className="navBar">
            <h3>Emporio Virtual</h3>
            <div>
                <button>Inicio</button>
                <button>Productos</button>
                <button>Categorías</button>
                <button>Sucursales</button>
                <button>Contacto</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar