const productos = [
    {   id:1 , 
        articulo: "Pan 1kg",
        precio: 500,
        seccion: "almacen"
    },
    {
        id:2,
        articulo: "Agua mineral 2L",
        precio: 300,
        seccion: "almacen"
    },
    {
        id:3,
        articulo: "Queso-500gr",
        precio: 700,
        seccion: "almacen"
    },
    {
        id:4,
        articulo: "Balde 10L",
        precio: 1500,
        seccion: "limpieza"
    },
    {
        id:5,
        articulo: "Mopa",
        precio: 900,
        seccion: "limpieza"
    },
    {
        id: 6,
        articulo: "Lavandina 1L",
        precio: 250,
        seccion:"limpieza"
    },
    {
        id: 7,
        articulo: "Detergente",
        precio: 850,
        seccion:"limpieza"
    },
    {
        id: 8,
        articulo: "Fideos 200gr",
        precio: 400,
        seccion:"almacen"
    },
    {
        id: 9,
        articulo: "Salsa de tomate",
        precio: 250,
        seccion:"almacen"
    }
];
const carrito = [];

const verProductos = (listado) => {
    listadoProductos = listado.map(producto => producto.articulo);
    
    alert(`Lista de productos\n${listadoProductos.join("\n")}`);

}



const verSeccion = () => {
    let seccionBuscada = prompt("ingrese el nombre de la seccion requerida \n *Limpieza \n *Almacen").toLowerCase();
    if(seccionBuscada !== "almacen" && seccionBuscada !== "limpieza") {
        return alert("la seccion indicada no existe en nuestra tienda, vuelva a ingresar alguna de las opciones indicadas")
    };
    productosFiltrados = productos.filter(producto => {
        return producto.seccion === seccionBuscada.toLowerCase()}
        
    );
    verProductos(productosFiltrados);
}

const agregarProducto = () => {
    let productoSeleccionado = parseInt(prompt("Seleccione de a 1 producto a la vez: \n 1. pan 1kg \n 2.Agua Mineral 2L \n 3.Queso Cremoso 500gr. \n 4.Balde 10L \n 5.Mopa \n 6.Lavandina 1.25L \n 7.Detergente \n 8.Fideos 200gr \n 9.Salsa de tomate"))
    let indice = productos.findIndex(producto => producto.id === productoSeleccionado);
    carrito.push(productos[indice]);
    verProductos(carrito);
}


const sumarCarrito = (carro) => {
    let resultado = carro.reduce((total,producto) => {
        return total + producto.precio;
    },0);
    console.log(resultado);
    alert(`El total de su compra es de $ ${resultado} ,grcias por su compra!`);

}



let condicion = true;

while(condicion) {

    let opcion = parseInt(prompt("ingrese la opcion deseada \n 1. Ver listado completo de productos \n 2. Ver productos por seccion \n 3.Agregar producto al Carrito \n 4.Ver Carrito \n 5.Total Carrito \n 6.Salir de la Tienda"));

    switch (opcion) {
        case 1:
            verProductos(productos);
            break;
        case 2:
            verSeccion();
            break;
        case 3:
            agregarProducto();
            break;
        case 4:
            verProductos(carrito);
            break;
        case 5: 
            sumarCarrito(carrito);
            break;
        case 6: 
            alert("Gracias por visitarnos, Volve cuando quieras!");
            condicion = false;
            break;
        default:
            alert('la opcion ingresada no es correcta');
    }
    
};