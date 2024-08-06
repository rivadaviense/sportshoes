
const carrito = [];

const productos = [
    {
         id:    "NIKE JORDAN 1",
         titulo: "NIKE JORDAN 1",
         precio: 250000,
         img: "./img/nike 5.jpg",
    },

    {       
         id:    "NIKE JORDAN 2",
         titulo: "NIKE JORDAN 2",
         precio: 350000,
         img: "./img/nike 6.jpg",
    },

    {
        id:    "NIKE JORDAN 3",
        titulo: "NIKE JORDAN 3",
        precio: 450000,
        img: "./img/nike 7.jpg ",
    },

    {
        id:    "NIKE JORDAN 4",
        titulo: "NIKE JORDAN 4",
        precio: 550000,
        img: "./img/nike 3.jpg",
    }, 
]

const contenedorProductos = document.querySelector ("#productos");
const carritoVacio = document.querySelector ("#carrito-vacio");
const carritoProductos = document.querySelector ("#carrito-productos");
const carritoTotal = document.querySelector ("#carrito-total");

productos.forEach((producto) => {
    let div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
        <img class="producto-imagen" src="${producto.img}" alt="">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">$${producto.precio}</p>
       </div>
    `;

   let button = document.createElement("button");
button.classList.add("producto-agregar");
button.innerText = "Agregar al carrito";
button.addEventListener("click", () => {
   agregarAlCarrito(producto);  
});

    div.append(button);
    contenedorProductos.append(div);
});


const agregarAlCarrito = (producto) => {
    carrito.push (producto);
    actualizarCarrito()
}

function actualizarCarrito (){
    if (carrito.length === 0){
        carritoVacio.classList.remove("d-none");
        carritoProductos.classList.add ("d-none");
    } else {
        carritoVacio.classList.add("d-none");
        carritoProductos.classList.remove ("d-none");


        carritoProductos.innerHTML = "";
        carrito.forEach((producto) =>{
            let div = document.createElement ("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
            <h3> ${producto.titulo}</h3>
            <p> $${producto.precio }</p>
         `;

        let button = document.createElement("button");
          button.classList.add("carrito-producto-btn");
          button.innerHTML = '<i class="bi bi-trash"></i>'; 
           button.addEventListener("click", () => { 
           borrarDelCarrito(producto);
           });


           div.append(button);
           carritoProductos.append(div);

        } );
      }
    actualizacionTotal();
}
const borrarDelCarrito = (producto) => {
    const indice = carrito.findIndex((item) => item.id === producto.id);
    if (indice !== -1) {
        carrito.splice(indice, 1); 
        actualizarCarrito();
     }
     
    }

    function actualizacionTotal() {
        const total = carrito.reduce((acc, prod) => acc + prod.precio, 0 );
        carritoTotal.innerText = "$" + total;
    }
        






    



