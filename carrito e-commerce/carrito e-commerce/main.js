

const productList = document.querySelector("#productList");
const completeList = document.querySelector("#completeList");
const productosLimpieza = document.querySelector("#limpieza");
const productosAlmacen = document.querySelector("#almacen")
const listadoCarrito = document.querySelector("#carrito")







let productos = [
    {
        articulo: "Pan 1kg",
        precio: 500,
        seccion: "almacen"
    },
    {
        articulo: "Agua mineral 2L",
        precio: 300,
        seccion: "almacen"
    },
    {
        articulo: "Queso-500gr",
        precio: 700,
        seccion: "almacen"
    },
    {
        articulo: "Balde 10L",
        precio: 1500,
        seccion: "limpieza"
    },
    {
        articulo: "Mopa",
        precio: 900,
        seccion: "limpieza"
    },
    {
        articulo: "Lavandina 1L",
        precio: 250,
        seccion: "limpieza"
    },
    {
        articulo: "Detergente",
        precio: 850,
        seccion: "limpieza"
    },
    {
        articulo: "Fideos 200gr",
        precio: 400,
        seccion: "almacen"
    },
    {
        articulo: "Salsa de tomate",
        precio: 250,
        seccion: "almacen"
    },
    {
        articulo: "cafe en granos 250gr",
        precio: 2500,
        seccion: "almacen"
    },
    {
        articulo: "Mayonesa Natura 250gr",
        precio: 1700,
        seccion: "almacen"
    },
    {
        articulo: "Lomitos de Atun 180gr",
        precio: 900,
        seccion: "almacen"
    }
];

let carrito = JSON.parse(localStorage.getItem("carro")) || [];


localStorage.setItem("productos", JSON.stringify(productos));





const agregarProducto = (item) => {

    carrito = [...carrito, item];
    localStorage.setItem("carro", JSON.stringify(carrito));
    mostrarCarrito();
}

console.log(carrito.length);

const verProductos = (listado) => {

    listado.forEach(producto => {

        let div = document.createElement("div");
        div.classList.add("div-list");

        let li = document.createElement("li");
        li.innerHTML = `${producto.articulo} - $ ${producto.precio}`;

        let btnAgregar = document.createElement("button");
        btnAgregar.classList.add("boton-lista");
        btnAgregar.innerHTML = "Agregar Producto";



        div.appendChild(li);
        div.appendChild(btnAgregar);

        productList.appendChild(div);

        btnAgregar.onclick = () => {
            agregarProducto(producto);
        }

    });

}



const mostrarCarrito = () => {

    const total = carrito.reduce((total, producto) => total + producto.precio, 0);
    if (carrito.length > 0) {
        
        listadoCarrito.innerHTML = " ----- Carrito ----- ";
        
        let divCarrito = document.createElement("div");
        divCarrito.classList.add("contenedor-carrito");
        listadoCarrito.appendChild(divCarrito);
        carrito.forEach((producto, index) => {

            let divProducto = document.createElement("div");
            divProducto.classList.add("div-producto");

            let productoNombre = document.createElement("li")
            productoNombre.innerHTML = producto.articulo;
            divProducto.appendChild(productoNombre);

            let btnEliminar = document.createElement("button");
            btnEliminar.classList.add("boton-eliminar");
            btnEliminar.innerHTML = "Eliminar Producto";

            btnEliminar.onclick = () => {
                carrito.splice(index, 1);
                localStorage.setItem("carro", JSON.stringify(carrito));
                mostrarCarrito();
            };
            divProducto.appendChild(btnEliminar);
            divCarrito.appendChild(divProducto);
        })

        let resumenCarrito = document.createElement("div");
        let botonCarrito = document.createElement("button");
        botonCarrito.classList.add("boton-carrito")
        botonCarrito.innerHTML = "Calcular Total";
        resumenCarrito.appendChild(botonCarrito);
        resumenCarrito.classList.add("total-carrito");
        divCarrito.appendChild(resumenCarrito);

        let totalCarrito = document.createElement("p");
        totalCarrito.innerHTML = ` Total: $ ${total}`;


        botonCarrito.onclick = () => {
            resumenCarrito.appendChild(totalCarrito);
        }
        
        
    } else {
        listadoCarrito.innerHTML = " "
    }


}


//eventos

completeList.onclick = () => {
    productList.innerHTML = " ";
    verProductos(productos);
}

productosLimpieza.onclick = () => {
    productList.innerHTML = " ";
    let listadoLimpieza = productos.filter(producto => producto.seccion.toLowerCase() === "limpieza");
    verProductos(listadoLimpieza);
}

productosAlmacen.onclick = () => {
    productList.innerHTML = " ";
    let listadoAlmacen = productos.filter(producto => producto.seccion.toLowerCase() === "almacen");
    verProductos(listadoAlmacen);
    localStorage.setItem("soloAlmacen", JSON.stringify(listadoAlmacen));
}



verProductos(productos);
mostrarCarrito();

