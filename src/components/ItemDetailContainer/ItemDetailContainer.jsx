import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } =useParams()

    useEffect(() => {
        getProductById(itemId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [itemId])

    return (
        <div className="detailContainer">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer
