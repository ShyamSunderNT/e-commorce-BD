E-Commerce API Documentation
Base URL
All endpoints are accessible via:

bash
Copy code
http://localhost:5000/api
User Management
1. Register User
Endpoint: GET /user/register
Description: Registers a new user.
2. Verify User
Endpoint: GET /user/verify
Description: Verifies a user's registration or email.
3. Login User
Endpoint: GET /user/login
Description: Authenticates a user and initiates a session.
4. My Profile
Endpoint: GET /user/me
Description: Retrieves the current user's profile information.
Product Management
5. Create Product
Endpoint: GET /product/new
Description: Creates a new product entry.
6. Fetch All Products
Endpoint: GET /product/all
Description: Retrieves a list of all products.
7. Fetch Products by Admin
Endpoint: GET /product/all
Description: Retrieves all products, typically for admin use.
8. Fetch Single Product
Endpoint: GET /product/:id
Description: Retrieves details of a specific product by ID.
9. Update Stock
Endpoint: GET /product/:id
Description: Updates the stock for a specific product.
10. Delete Product
Endpoint: GET /product/:id
Description: Deletes a specific product by ID.
Cart Management
11. Create New Cart
Endpoint: GET /cart/new
Description: Initializes a new shopping cart.
12. Fetch Cart
Endpoint: GET /cart/all
Description: Retrieves all items in the user's cart.
13. Remove Item from Cart
Endpoint: GET /cart/:id
Description: Removes a specific item from the cart by ID.
14. Update Cart
Endpoint: GET /cart?action=2
Description: Updates the cart, possibly adjusting quantities or other attributes.
Order Management
15. Create New Order (Cash on Delivery)
Endpoint: GET /order/new/cod
Description: Places a new order using cash on delivery.
16. Get All Orders
Endpoint: GET /cart/all
Description: Retrieves a list of all orders.
17. Get All Orders (Admin)
Endpoint: GET /order/admin/all
Description: Retrieves all orders for admin review.
18. Get My Order
Endpoint: GET /order/:id
Description: Retrieves details of a specific order by ID.
19. Update Order
Endpoint: GET /order/:id
Description: Updates the details of a specific order by ID.
20. Create Online Order
Endpoint: GET /order/new/online
Description: Places a new order for online payment.
Address Management
21. Add Address
Endpoint: GET /address/new
Description: Adds a new address for the user.
22. Fetch All Addresses
Endpoint: GET /address/all
Description: Retrieves all addresses associated with the user.
23. Get Single Address
Endpoint: GET /address/:id
Description: Retrieves details of a specific address by ID.
24. Delete Address
Endpoint: GET /address/:id
Description: Deletes a specific address by ID.
