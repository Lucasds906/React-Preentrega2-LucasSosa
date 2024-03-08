import { useState } from "react"

const useCount = (initialValue, stock) => {
    const [count, setCount] = useState(initialValue)

    const decrement = ()=> {
        if (count > 1) {
            console.log('dec')
            setCount(count - 1)
        }
    }
    const increment = ()=> {
        if (count < stock) {
            console.log('inc')
            setCount(count + 1)
        }
    }

    return(
        {count, decrement, increment}
    )
}

export default useCount