import cart from './assets/cart.png'

const CartWidget = ()=> {
    return (
        <div className='imgLogoContainer'>
            <img src={cart} alt="cart-widget" className='imgLogo'/>
            0
        </div>
    )
}

export default CartWidget