# Next js Wolverine ECommerce Website Like Amazon

## Lessons

1. Introduction
2. Install Tools
3. Create Next App
4. Publish to Github
5. Create Website Layout
   1. Create Layout Component
   2. Add Header
   3. Add Main Section
   4. Add Footer
   5. Add Tailwind Classes
6. List Products
   1. Add data.js
   2. add Images
   3. Render Products
7. Create Product Detail
   1. Create Product Page
   2. create 3 Columns
   3. show images in first column
   4. show product info in second column
   5. show add to cart action on third column
   6. add styles
8. Handle Add To Cart
   1. define react context
   2. define cart item state
   3. create cart items state
   4. add router
   5. create store provider
   6. handle add to cart button
9. Create Cart Page
   1. Create cart.js
   2. useContext to get cart Items
   3. List Items in Cart Item
   4. Redirect to cart screen after add to cart
10. Handle Changing Cart Items
    1. add select box for quantity
    2. handle select box change
11. Save Cart Items

    1. Install js-cookie package
    2. Save and retrieve Cart Item In Cookies

12. Create Login Form

    1. Install React Hook Form
    2. Create Input Boxes
    3. Add Login Button

13. Connect To MongoDB
    1. Install MongoDB
    2. Install MongoDB or Use Mongo Atlas
    3. Save Connection url in .env file
    4. create sample users
14. Create Login API

    1. Install next-auth & react-toastify
    2. create next auth.js
    3. implement sign in
    4. use sign in login form

15. Add User Menu - (profile)
    1. Check User Authentication
    2. Install Headless ui (https://headlessui.com/)
    3. Show user menu
16. Create Shipping Screen
    1. Display Address Fields
    2. Save Address In Contact.
17. Payment Method
    1. Display Payment Method
    2. Save Payment Method in Context.
18. Seed Sample Products
    1. Insert sample product to mongoDB
    2. Load Products from db in home and product screen.
    3. Check Product Count in Stock in Add to cart
19. Load Product From MongoDB => 17 No. Commit
    1. Load Products in Home Page from MongoDB.
    2. Load Products in Product Page from MongoDB.
    3. Use Product Api to check count in stock in add to cart.
20. Place Order Screen => 18 No. Commit
    1. Display Shipping Address
    2. Display Payment Method
    3. Display Order Items
    4. Implement Crete Order
21. Create Order Screen => 19 No. Commit
    1. Implement Backend APi for Order Detail
    2. Load Order Data from Backend
    3. Display Order Details
22. Create Register Screen => 20 No. Commit
    1. Add Signup Api
    2. Create Register API
    3. Call api on form submit.
23. Pay Order By PayPal => 21 No. Commit
    1. Add Paypal Button
    2. Handle Payment
    3. Create Backend API
    4. Update Order State.
24. Create Order History Screen => 22 No. Commit
    1. create my order api.
    2. create order history component
    3. fetch orders and display them.
25. Publish On Vercel
    1. Create Vercel Account
    2. Connect to github
    3. set next auth and mongoDB in env vars
    4. Push code into github
