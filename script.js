document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-btn');

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Buscamos la tarjeta más cercana
            const card = button.closest('.product-card');
            
            // Extraemos nombre y precio (primero de data-attributes, fallback de texto)
            let nombre = card.dataset.name || card.querySelector('h3').textContent.trim();
            let precio = card.dataset.price || card.querySelector('.product-price').textContent.trim();

            // Mensaje prellenado
            const mensaje = `Hola NavegadorShop, quiero comprar ${nombre} por ${precio}. El pago será en puerta`;

            // Enlace WhatsApp oficial
            const numero = '595982590285';
            const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

            // Abrir en nueva pestaña
            window.open(url, '_blank');
        });
    });

    // Efecto sutil de scroll para el header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(188, 19, 254, 0.3)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});
