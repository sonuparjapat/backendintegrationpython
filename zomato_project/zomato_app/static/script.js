document.addEventListener('DOMContentLoaded', function () {
    const addDishForm = document.getElementById('add-dish-form');
    const menuList = document.getElementById('menu-list');

    addDishForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission

        const dishName = document.getElementById('dish-name').value;
        const dishPrice = parseFloat(document.getElementById('dish-price').value);
        const dishAvailability = document.getElementById('dish-availability').checked;

        // Create a new menu item
        const menuItem = document.createElement('li');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <p>Name: ${dishName}</p>
            <p>Price: ${dishPrice}</p>
            <p>Availability: ${dishAvailability ? 'Available' : 'Not Available'}</p>
        `;

        menuList.appendChild(menuItem);

        // Clear the form
        addDishForm.reset();
    });

    // ... Rest of your code ...
    const placeOrderForm = document.getElementById('place-order-form');
    const orderList = document.getElementById('order-list');

   console.log("hi",placeOrderForm,orderList)

    placeOrderForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission

        const customerName = document.getElementById('customer-name').value;
        const dishIdsInput = document.getElementById('dish-ids');
        const dishIds = dishIdsInput.value.split(',').map(id => id.trim()); // Trim spaces
console.log(customerName)
        // Check for empty dish IDs
        if (dishIds.some(id => id === '')) {
            alert('Please enter valid dish IDs.');
            return;
        }

        // Create a new order
        const orderItem = document.createElement('li');
        orderItem.classList.add('order-item');
        orderItem.innerHTML = `
            <p>Customer Name: ${customerName}</p>
            <p>Dish IDs: ${dishIds.join(', ')}</p>
            <p>Status: Received</p>
            <button class="status-btn" data-status="preparing">Preparing</button>
            <button class="status-btn" data-status="ready">Ready</button>
            <button class="status-btn" data-status="delivered">Delivered</button>
        `;

        orderList.appendChild(orderItem);

        // Clear the form
        // dishIdsInput.value = '';
        // placeOrderForm.reset();
    });
    });