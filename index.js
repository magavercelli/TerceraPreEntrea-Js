const arrayProductos= [
    /* {
        id: 1,
        nombre:"Depilador facial para cejas",
        categoria: "Cuidados Personales",
        precio: 2600,
        img: '/img/Depilador facial.jpg'
        
    },
    {
        id: 2,
        nombre: "Depilador facial y corporal",
        categoria: "Cuidados Personales",
        precio: 4200,
        img: '/img/Depilador facila y corporal.jpg'
    },
    {
        id: 3,
        nombre: "Depilador Lasser",
        categoria: "Cuidados Personales",
        precio: 28500,
        img: '/Img/Depilador Definitivo.jpg'
    },
    {
        id: 4,
        nombre: "Fundidor de Cera",
        categoria: "Cuidados Personales",
        precio: 10000,
        img: '/img/Fundidor de cera.jpeg'
    },
    {
        id: 5,
        nombre: "Kit de 12 pinzas",
        categoria: "Cuidados Personales",
        precio: 3500,
        img: '/Img/Kit 12 pizas (1).jpg'
    },
    {
        id: 6,
        nombre: "Perfilador de Cejas",
        categoria: "Cuidados Personales",
        precio: 600,
        img: '/img/Perfilador cejas.jpg'
    }, */
    {
        id: 7,
        nombre: "Difusor en Varas Aromatizantes",
        categoria: "Regalería",
        precio: 2500,
        img: '/Img/Difusor en varas-Aromatizantes-290.jpg'
    },
    {
        id: 8,
        nombre: "Home Spray-Maderas de Oriente por 350ml",
        categoria: "Regalería",
        precio: 2700,
        img: '/Img/Home Spray- Maderas de Oriente por 350 ml.jpg'
    },
    {
        id: 9,
        nombre: "Hornillo de Cerámica",
        categoria: "Regalería",
        precio: 1700,
        img: '/Img/Hornillo de cerámica.jpeg'
    },
    {
        id: 10,
        nombre: "Hornillo Eléctico",
        categoria: "Regalería",
        precio: 5000,
        img: '/Img/Hornillo Eléctrico.jpg'
    },
    {
        id: 11,
        nombre: "Humificador aromático-Aceite relax",
        categoria: "Regalería",
        precio: 1500,
        img: '/Img/Humificador aromático Aceite Relax.jpeg'
    },
    {
        id: 12,
        nombre: "Vela aromatizada 9x7 cm",
        categoria: "Regalería",
        precio: 3000,
        img: '/Img/vela-9x7-1.jpeg'
    },
    
    
]



const carrito =[];



//?EVENTOS-----------

let btnCompra = document.getElementById("btnCompra");
const mostrarCarrito = document.getElementById("mostrarCarrito");
const contenedorCompras= document.getElementById("ContenedorCompras");

btnCompra = document.addEventListener("click", ()=> {
    const productoAComprar = {
        nombre: arrayProductos[0].nombre, 
        precio: arrayProductos[0].precio, 
        img: arrayProductos[0].img,
    };

    // Agregar el producto al carrito
    carrito.push(productoAComprar);

    console.log(carrito);
});


mostrarCarrito.addEventListener("click", () => {
    // window.location.href ="./carrito.html"
   
    const pagCarrito = document.createElement("div");
    pagCarrito.className= "compras";
    pagCarrito.innerHTML = `
    <h2 class="titulo">Mis compras</h2>
    `;
    contenedorCompras.append(pagCarrito);

    const button =document.createElement("h2");
    button.innerText = "x";
    button.className= "clase-boton";

    button.addEventListener("click", ()=>{
        pagCarrito.style.display = "none";
    })

    pagCarrito.append(button);

    carrito.forEach((producto) => {
        const contenedroCarrito = document.createElement("div")
        contenedroCarrito.className ="clase-carrito"
        contenedroCarrito.innerHTML =`
        <img src="${producto.img}" alt="${producto.nombre}">
        <h3>Nombre: ${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>
        `;
        pagCarrito.append(contenedroCarrito);
    });

    const total =carrito.reduce((acc, el) => acc + el.precio,0);

    const totalPagar = document.createElement("div");
    totalPagar.className ="Total-Pagar";
    totalPagar.innerHTML =`
    <p>total a pagar: ${total}</p>`;
    pagCarrito.append(totalPagar);

    // let contenedor =document.createElement("div")
    // contenedor.innerHTML =`
    // <img src="${arrayProductos[4].img}">
    // <p>${arrayProductos[1].nombre}</p>
    // <p>${arrayProductos[3].precio}</p>
    // `;
    // contenedorCompras.append(contenedor);
    
});



/* <div class="compras">
        <img src="#" alt="">
        <p>Cantidad:</p>
        <p>Precio:</p>
    </div>
    <div class="totalPagar">
        <p>Total a pagar : </p>
    </div>  */

    


