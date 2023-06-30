const misProductos = [
    { id: "1", nombre: "Autito Verde", precio: 700, img: "../public/img/autoverde.jpg", idCat: "1", detalle: "autito verde muy bonito, llego de animalitos"},
    { id: "2", nombre: "Autito Rojo", precio: 800, img: "../public/img/autorojo.jpg", idCat: "1", detalle: "flamante auto rojo, proveniente de la pelicula cars" },
    { id: "3", nombre: "Omni-man", precio: 890, img: "../public/img/omni.jpg", idCat: "2", detalle: "el poderoso omni man , llega ahora con su gran figura de accion" },
    { id: "4", nombre: "Goku", precio: 920, img: "../public/img/goku.jpg", idCat: "2", detalle: "el mejor personaje de todos los tiempos, nadie la gana a Goku, increible figura" },
    { id: "5", nombre: "Pelota Verde", precio: 400, img: "../public/img/verde.jpg", idCat: "3", detalle: "pelota verde de marca Adidas, de uso profesional" },
    { id: "6", nombre: "Pelota Multicolor", precio: 500, img: "../public/img/multi.jpg", idCat: "3", detalle: "pelota muy colorida, ideal para los mas niños" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}


export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = misProductos.find(prod=> prod.id === id);
            resolve(producto);
        }, 100)
    })
}


export const getProductosPorCategoria = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100 )
    })
}