import { Link } from "react-router-dom"
const Item = ({id, name, price, category, img, stock, description}) => {
    return (
        <article className="cards">
            <h2>{name}</h2>
            <img src={img} alt={name} className="cardsImg"/>
            <section>
                <p>$ {price}</p>
                <p>Stock: {stock}</p>
            </section>
            <Link to={`/item/${id}`}>Ver detalle</Link>
        </article>
    )
}

export default Item
