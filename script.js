// alerta de ingreso al carrito mensaje bienvenida
alert("Bienvenido al primer carrito panda !! proximamente se sube cambio a la web del curso front !!");
// Variables para el carrito
let cart = [];
let total = 0;

// Función para actualizar el carrito en la interfaz
function updateCart() {
    const cartList = document.getElementById('cart-list');
    const totalElement = document.getElementById('total');

    // Limpiar el carrito actual en la interfaz
    cartList.innerHTML = '';
    total = 0;

    // Añadir cada producto en el carrito a la lista
    cart.forEach(item => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(li);
        total += item.price;
    });

    // Actualizar el total
    totalElement.textContent = `Total: $${total}`;
}

// Event listener para los botones "Añadir al Carrito"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-name');
        const productPrice = parseFloat(button.getAttribute('data-price'));

        // Solicitar la cantidad
        const quantity = prompt(`¿Cuántas unidades de ${productName} quieres añadir?`, "1");
        const quantityNumber = parseInt(quantity);

        // Validar la cantidad
        if (isNaN(quantityNumber) || quantityNumber <= 0) {
            alert("Introduzca un número válido.");
            return;
        }

        // Calcular el total parcail
        const totalPrice = productPrice * quantityNumber;

        // Añadir el producto al carrito la cantidad correspondiente
        for (let i = 0; i < quantityNumber; i++) {
            cart.push({ name: productName, price: productPrice });
        }

        // Mostrar un mensaje con el total del producto añadido
        alert(`Has añadido ${quantityNumber} unidades de ${productName} por un total de $${totalPrice}.`);

        // Actualizar la interfaz del carrito
        updateCart();
    });
    // Función para eliminar un item del carrito, no logre que elimine uno a uno repasar verificar como hacer linea a linea con una x en el front
    function removeFromCart(index) {
        cart.splice(index, 1);  
        updateCart();  
    }
    // vaciado del carrito panda, no es la mejor forma pero cumple a la finalidad
    document.getElementById('empty-cart').addEventListener('click', () => {
        cart = [];  // Vaciar el carrito
        alert("El carrito ha sido vaciado.");
        updateCart();  // Actualizar la interfaz
    });
});
