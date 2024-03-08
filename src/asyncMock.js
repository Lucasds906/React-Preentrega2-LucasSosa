const products = [
    {id:'1', name: 'Sofá de cuero negro', price: 1000, category: 'sofa', img: '/assets/img/sofa.png', stock: 25, description: 'Sofá de cuero negro'},
    {id:'2', name: 'Sofá negro, diseño exclusivo', price: 600, category: 'sofa', img: '/assets/img/extravagant-couch.png', stock: 15, description: 'Sofá negro, diseño exclusivo'},
    {id:'3', name: 'Juego doble, sillón clásico', price: 300, category: 'sillon', img: '/assets/img/juego-2-sillon.png', stock: 8, description: 'Juego doble, sillón clásico'},
    {id:'4', name: 'Juego sillas y sillones oficina', price: 900, category: 'sillon', img: '/assets/img/juego-sillon-silla.png', stock: 3, description: 'Juego sillas y sillones oficina'},
    {id:'5', name: 'Sofá chenille negro 3 cuerpos', price: 900, category: 'sofa', img: '/assets/img/old-couch.png', stock: 3, description: 'Sofá chenille negro 3 cuerpos'},
    {id:'6', name: 'Sillón gris para oficina', price: 900, category: 'tablets', img: '/assets/img/new-style.png', stock: 3, description: 'Sillón gris para oficina'},
    {id:'7', name: 'Sofá esquinero marrón', price: 900, category: 'esquinero', img: '/assets/img/sillon-ocre.png', stock: 3, description: 'Sofá esquinero marrón'},
    {id:'8', name: 'Sillón moderno blanco', price: 900, category: 'sillon', img: '/assets/img/sillon-blanco.png', stock: 3, description: 'Sillón moderno blanco'},
]

export const getProducts = ()=> {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(products)
        },0 )
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 0)
    })
}

export const getProductByCategory = (productCategory) => {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productCategory))
        }, 0)
    })
}