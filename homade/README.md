# Capstone

## Distinctiveness and Complexity:

I believe that my project has satisfied the distinctiveness and complexity requirements as my project is totally different from the other projects in this course. My project is a online pastry store website. It is also more complex as it has a contact form which is not being used in the other projects. My contact form allows for visitors to input their information so that I can receive their contact information for future collaboration and business operations. Moreover, my web application has utilized Django on the back-end and Javascript on the front-end. Moreover, my web application is also mobile-responsive

## Models

The restaurant's menu consists of menu items which are modelled in MenuItem class. A menu item has 2 properties:

1. Meal
2. Price

A meal can have a name and a type (basque burnt cheesecake and madeleines) and is modelled in Meal class. Meal types are modelled in MealType class.

Toppings are modelled in Topping class and sub additions are modeled in SubAddition class. In addition to a name property, SubAddition class has a price property.

Site admins can add, remove and update meals, menu items, toppings and sub additions using built in Django admin user interface. Meal type tables can be altered using Django's shell. These tables are not shown on the admin user interface because after adding items to these tables or removing items form these tables, the menu and the order pages and the code behind these pages must be updated.

A cart item has 5 properties and is modelled in Cart class.

1. User
2. Menu item
3. Toppings (if any)
4. Sub additions (if any)
5. Price

Every cart item is associated with a user and stored in the database. Thus the contents of the cart is remembered even if a user closes the window, or logs out and logs back in again.

Topping property has a many to many relation with Topping class and sub addition property has a many to many relation with SubAddition class.

When a user checks out a new order is created first. This order is modelled in Order class. An order object has user, order_date and is_completed properties.

Then every cart item is transformed to an order item which is modelled in OrderItem class. After the transformation the cart item is deleted so that the cart can be empty after the order.

## Web pages
### Homepage (/)
This is the landing page of the website. A link in the middle of the page that leads to the order page. Together with asthetic photos and descriptions of my store.

### Log in (/u/login) and register (/u/register) pages
If a user is not authenticated, links for log in and register pages are shown on the navigation bar. These pages provide necessary forms for users to log in or register.

Users can register for the web application with a username, password, first name, last name, and email address. Then they can log in and log out of the website.

Duplicate usernames are not allowed. When a user tries to register with a username already exists, registration fails and the user is warned.

### Log out (/u/logout) page
When a user is authenticated, a log out link is shown on the navigation bar instead of log in and register links. When an authenticated user clicks on that link, he/she is logged out and redirected to the homepage.

### Order page (/order)
This is the page where menu items can be added to shopping cart. Users can see menu items along with optional selections and additions with their prices updated by their selection. Adding items to user's cart is achieved via functions using AJAX and the user is informed with a modal message box shown about the status. The number shown next to the cart icon on the navigation bar is also updated when an item is added or removed.

### Viewing cart (/cart) and placing an order (/checkout)
User can view their carts by clicking on the cart icon shown on the navigation bar. On the cart page users can review their carts, remove any items or proceed to checkout.

If the cart is empty, "cart is empty" message is shown and checkout button is not displayed.

On the checkout page cart items are shown for user to confirm his/her order. When user clicks on the 'payment' button, order is placed and the customer is led to a shipping information page.

### Shipping Information (/checkoutinfo)

On this page, the customer is given a form to input his/her shipping information for delivery. After submitting the form, the admin can see his/her shipping info in the Django Admin page. After that the customer will be led to the order confirmation page. On this page there's a link for user to track the status of order.

### Viewing orders (/orders and /orders/<int:order_id>)
Users can access to a list of their orders on this page. If user is a superuser he/she can see all of the orders placed by all users. On this page, order number, date of order and status of order is shown.

If user is a superuser he/she can see the users of orders and can mark orders as complete or pending on this page.

Orders list can be filtered by order's status. Users can view only completed orders, only pending orders or all orders.

Details of any order can be accessed by clicking on the order number.

### FAQs (/faq)
A frequently asked questions page regarding questions frequently asked by our customers

### About (/about)
An about page regarding the information of homade

### Contact (/contact)
A Contact page with a form for the customers to input their email and message regarding any feedbacks or collaboration/business opportunities with us.
Admin can see the message in the Django Admin page under the Contact Class.

### How to run my application
First, you will have to cd into my file directory (homade)
Secondly, you will have to run python3 manage.py runserver# homade-website
