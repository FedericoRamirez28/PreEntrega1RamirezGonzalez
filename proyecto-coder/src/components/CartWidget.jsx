import '../App.css'
function CartWidget (){

    return (
     <div>
       <img className="carrito" src="/public/images/carritoImage.png" alt="Carrito" />
       <h3 className="numeroCart">0</h3>
    </div>
    )
}

export default CartWidget