# TotalityCorp Frontend Challenge

Welcome to my submission for the TotalityCorp Frontend Challenge. In this project, I have developed a frontend application according to the provided requirements. Below, I will outline my approach and provide details about the tech stack I used.

## Table of Contents
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Running the Application](#running-the-application)
- [Features](#features)
- [Deployment](#deployment)

## Tech Stack
- **Frontend Framework/Libraries**: [React.js]
- **Styling**: [TailwindCss]
- **Version Control**: [GitHub]
- **Deployment**: [Vercel]

## Project Structure
E-commerce-Assignment/
├── public/
│   ├── ecommerce.svg
│   
├── src/
│   ├── assets/
│   │   ├── Spinner.css
│   │   
│   ├── Components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Product.jsx
│   │   ├── CartItem.jsx
│   │   ├── Spinner.jsx
│   │   ├── AddressForm.jsx
│   │   ├── PaymentForm.jsx
│   │   └── Model.jsx
│   │   
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Signup.jsx
│   │   └── Login.jsx
│   │   ├── Cart.jsx
│   │   ├── CheckoutPage.jsx
│   │   └── OrderSuccess.jsx
│   │   
│   ├── Redux/
│   │   ├── CartSlice.js
│   │   ├── ProductSlice.js
│   │   ├── UserSlice.js
│   │   └── Store.js
│   ├── App.js
│   ├── main.js
│   ├── index.css
│   ├── App.css
│   
├── index.html
├── node_modules/
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── README.md


## Running the Application

Provide instructions on how to run the application locally:

1. Clone the repository: 
    git clone git@github.com:UniquePG/totalitycorp-frontend-challenge.git

2. Navigate to the project directory:
    cd totalitycorp-frontend-challenge

3. Install dependencies:
    npm install

4. Start the development server:
    npm run dev

5. Open your web browser and visit `http://localhost:5173` to view the application.

## Features

List the main features or functionality of your application.

- Signup: [Users can register by providing their essential information, such as a name, email address, phone number, password and pick a profile image that will be show on your profile. Upon successful registration, Now user can login into application]

- Login: [User can login by using their email and password that they used during the signup]

- Filter by category: [User can filter products by category ]

- Add to cart: [The "Add to Cart" feature allows users to easily select and store items they wish to purchase. Users can add products to their virtual shopping cart while browsing the platform. User can use add to cart feature only when he is loggedin.]

- Profile info: [User can view their profile information by simply clicking on their profile picture displayed in the navigation bar.]

- Cart management: [User can manage their cart items count by clicking '+' and '-' button on each cart item. The total price and total item will automatically calculated accorting to it. And user can also easily remove any item from the cart ]

- Checkout: [The checkout feature allow the user to order their product by provide shipping address information and payment information, and finalize their orders.]

- Logout: [User can Logged out from their account by simply clicking on the logout button in the profile model]
 

## Deployment

The application is deployed and can be accessed live at [Live Application Link](https://totalitycorp-frontend-challenge-uniquepg.vercel.app/).

Feel free to explore the application, and I welcome any feedback or suggestions for improvement. Thank you for considering my submission!

[Pavan Gupta]