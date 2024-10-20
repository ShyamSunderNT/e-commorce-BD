# E-Commerce API

## Overview
The E-Commerce API provides a robust interface for managing products, orders, carts, and user accounts in an online shopping environment.

## Table of Contents
- [Features](#features)
- [API Endpoints](#api-endpoints)
  - [User Management](#user-management)
  - [Product Management](#product-management)
  - [Cart Management](#cart-management)
  - [Order Management](#order-management)
  - [Address Management](#address-management)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- User registration, login, and profile management.
- Product management (CRUD operations).
- Cart management for adding, updating, and removing products.
- Order processing for cash on delivery and online payments.
- Address management for user convenience.

## API Endpoints

### User Management
- **Register User:** 
  - **URL:** `/user/register`
  - **Method:** `GET`
  - **Description:** Registers a new user.

- **Verify User:** 
  - **URL:** `/user/verify`
  - **Method:** `GET`
  - **Description:** Verifies a user's registration or email.

- **Login User:** 
  - **URL:** `/user/login`
  - **Method:** `GET`
  - **Description:** Authenticates a user.

- **My Profile:** 
  - **URL:** `/user/me`
  - **Method:** `GET`
  - **Description:** Retrieves the current user's profile.

### Product Management
- **Create Product:** 
  - **URL:** `/product/new`
  - **Method:** `GET`
  - **Description:** Creates a new product.

- **Fetch All Products:** 
  - **URL:** `/product/all`
  - **Method:** `GET`
  - **Description:** Retrieves a list of all products.

- **Fetch Single Product:** 
  - **URL:** `/product/:id`
  - **Method:** `GET`
  - **Description:** Retrieves details of a specific product.

- **Update Stock:** 
  - **URL:** `/product/:id`
  - **Method:** `GET`
  - **Description:** Updates the stock for a specific product.

- **Delete Product:** 
  - **URL:** `/product/:id`
  - **Method:** `GET`
  - **Description:** Deletes a specific product.

### Cart Management
- **Create New Cart:** 
  - **URL:** `/cart/new`
  - **Method:** `GET`
  - **Description:** Initializes a new shopping cart.

- **Fetch Cart:** 
  - **URL:** `/cart/all`
  - **Method:** `GET`
  - **Description:** Retrieves all items in the user's cart.

- **Remove Item from Cart:** 
  - **URL:** `/cart/:id`
  - **Method:** `GET`
  - **Description:** Removes a specific item from the cart.

- **Update Cart:** 
  - **URL:** `/cart?action=2`
  - **Method:** `GET`
  - **Description:** Updates the cart.

### Order Management
- **Create New Order (Cash on Delivery):** 
  - **URL:** `/order/new/cod`
  - **Method:** `GET`
  - **Description:** Places a new order using cash on delivery.

- **Get All Orders:** 
  - **URL:** `/cart/all`
  - **Method:** `GET`
  - **Description:** Retrieves a list of all orders.

- **Get My Order:** 
  - **URL:** `/order/:id`
  - **Method:** `GET`
  - **Description:** Retrieves details of a specific order.

- **Update Order:** 
  - **URL:** `/order/:id`
  - **Method:** `GET`
  - **Description:** Updates a specific order.

- **Create Online Order:** 
  - **URL:** `/order/new/online`
  - **Method:** `GET`
  - **Description:** Places a new order for online payment.

### Address Management
- **Add Address:** 
  - **URL:** `/address/new`
  - **Method:** `GET`
  - **Description:** Adds a new address for the user.

- **Fetch All Addresses:** 
  - **URL:** `/address/all`
  - **Method:** `GET`
  - **Description:** Retrieves all addresses associated with the user.

- **Get Single Address:** 
  - **URL:** `/address/:id`
  - **Method:** `GET`
  - **Description:** Retrieves details of a specific address.

- **Delete Address:** 
  - **URL:** `/address/:id`
  - **Method:** `GET`
  - **Description:** Deletes a specific address.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ShyamSunderNT/ecommerce-api.git

2.Navigate to the project directory:

 cd ecommerce-api

3.Install dependencies:
 npm install

4.Start the server:
  npm start
  
Once the server is running, you can access the API at http://localhost:5000/api.

## Usage
You can test the API using tools like Postman or cURL. Replace the base URL with your server's address (e.g., http://localhost:5000/api).

## Contributing
Contributions are welcome! Please create issues, submit pull requests, or help improve documentation. Follow the code of conduct.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
