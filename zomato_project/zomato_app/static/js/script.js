// zomato_app/static/js/script.js

document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item');
    const orderForm = document.getElementById('order-form');
    const orderStatus = document.getElementById('order-status');
    const totalPrice = document.getElementById('total-price');
    
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Toggle the availability class
            item.classList.toggle('available');
            item.classList.toggle('unavailable');
        });
    });

    orderForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const customerName = document.getElementById('customer-name').value;
        const dishIdsInput = document.getElementById('dish-ids');
        const dishIds = dishIdsInput.value.split(',').map(id => id.trim()); // Trim spaces
        
        // Calculate total price based on dish prices
        const dishPrices = {
            1: 10.99,
            2: 8.49,
            3: 12.79,
            // Add more dish prices if needed
        };
        
        const total = dishIds.reduce((acc, id) => acc + (dishPrices[id] || 0), 0);
        totalPrice.textContent = `Total Price: $${total.toFixed(2)}`;
        
        // You can now process the order and update the order status
        // For now, let's just display the order details
        orderStatus.innerHTML = `
            <p>Order received from ${customerName} for dishes with IDs: ${dishIds.join(', ')}</p>
            <p>Status: Received</p>
        `;
        
        // Clear the form
        dishIdsInput.value = '';
    });

    const statusButtons = document.querySelectorAll('.status-btn');

    statusButtons.forEach(button => {
        button.addEventListener('click', function () {
            const status = button.textContent;
            orderStatus.querySelector('p:last-child').textContent = `Status: ${status}`;
        });


        const statusFilter = document.getElementById('status-filter');
    
        statusFilter.addEventListener('change', function () {
            const selectedStatus = statusFilter.value;
            
            if (selectedStatus === 'all') {
                orderStatus.querySelectorAll('.order-details').forEach(order => {
                    order.style.display = 'block';
                });
            } else {
                orderStatus.querySelectorAll('.order-details').forEach(order => {
                    const status = order.querySelector('.order-status').textContent;
                    if (status === selectedStatus) {
                        order.style.display = 'block';
                    } else {
                        order.style.display = 'none';
                    }
                });
            }
        });



        
    });
});
