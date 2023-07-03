const express = require('express');
const app = express();
const customers = require('./customers');
// Define your routes and middleware here

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


app.get('/customers/:id', (req, res) => {
    const customerId = parseInt(req.params.id); // Parse the ID parameter as an integer

    // Find the customer with the matching ID
    const customer = customers.find((customer) => customer.id === customerId);

    if (customer) {
        // If a customer is found, send their data as JSON
        res.json(customer);
    } else {
        // If no customer is found, send an error message
        res.status(404).json({ message: 'Customer not found' });
    }
});


// app.get('/customers/:id', (req, res) => {
//     // Retrieve the customer ID from the request parameters
//     const customerId = req.params.id;

//     // Perform a database query or any other necessary logic to fetch the customer data
//     // based on the provided ID

//     // Assuming you have the customer data available, extract the first name and last name
//     const customer = {
//         id: customerId,
//         firstName: 'Terry',
//         // lastName: 'Doe',
//         // Include other customer data properties as needed
//     };

//     // Create a new object with only the first name and last name properties
//     const response = {
//         firstName: customer.firstName,
//         lastName: customer.lastName,
//     };

//     // Send the response with first name and last name only as a JSON response
//     res.json(response);
// });
