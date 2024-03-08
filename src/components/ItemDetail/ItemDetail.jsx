import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, name, price, img, stock, category, description}) => {
    return (
        <article className="cardDetail">
            <section>
                <h2>{name}</h2>
                <p>Categoría: {category}</p>
                <p>Descripción: {description}</p>
                <p>$ {price}</p>
                <ItemCount initialValue={1} stock={stock} onAdd={(count)=> console.log('Agregado ', count)}/>
            </section>
            <div className="detailImg">
                <img src={img} alt={name}/>
            </div>
        </article>
    )
}

export default ItemDetail
