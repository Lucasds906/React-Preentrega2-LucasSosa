import useCount from '../../hooks/useCount'

const ItemCount = ({onAdd, initialValue, stock})=> {

    const {count, decrement, increment} = useCount(initialValue, stock)

    return(
        <div className='cardCount'>
            <h2>{count}</h2>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <h3>{stock}</h3>
            <div>
            <button onClick={()=> onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount