E-Commerce API
Welcome to the E-Commerce API! This API allows users to manage products, orders, carts, and addresses in a seamless online shopping experience.

Table of Contents
Features
API Endpoints
Installation
Usage
Contributing
License
Features
User registration, login, and profile management.
Product creation, updating, deletion, and retrieval.
Cart management for adding, updating, and removing products.
Order processing for both cash on delivery and online payments.
Address management for user convenience.
API Endpoints
User Management
Register User: GET /user/register
Verify User: GET /user/verify
Login User: GET /user/login
My Profile: GET /user/me
Product Management
Create Product: GET /product/new
Fetch All Products: GET /product/all
Fetch Single Product: GET /product/:id
Update Stock: GET /product/:id
Delete Product: GET /product/:id
Cart Management
Create New Cart: GET /cart/new
Fetch Cart: GET /cart/all
Remove Item from Cart: GET /cart/:id
Update Cart: GET /cart?action=2
Order Management
Create New Order (COD): GET /order/new/cod
Get All Orders: GET /cart/all
Get My Order: GET /order/:id
Update Order: GET /order/:id
Create Online Order: GET /order/new/online
Address Management
Add Address: GET /address/new
Fetch All Addresses: GET /address/all
Get Single Address: GET /address/:id
Delete Address: GET /address/:id
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/yourusername/ecommerce-api.git
Navigate to the project directory:
bash
Copy code
cd ecommerce-api
Install dependencies:
bash
Copy code
npm install
Start the server:
bash
Copy code
npm start
Usage
You can test the API using tools like Postman or cURL. Make sure to replace the base URL with your server's address (e.g., http://localhost:5000/api).

Contributing
Feel free to contribute by creating issues, submitting pull requests, or improving documentation. Please follow the standard code of conduct.

License
This project is licensed under the MIT License. See the LICENSE file for details.
