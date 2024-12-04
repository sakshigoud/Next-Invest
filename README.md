# Next Invest Project

This project is designed to manage and display investments, collect newsletter subscriptions, and provide an admin panel for managing the platform. It consists of three separate applications:

- **Admin Panel**: A React app created using Vite and Bootstrap to manage backend operations.
- **Client**: A React app built with Vite and Bootstrap to interact with the platform and display investments.
- **Server**: A Node.js app using Express to handle API requests, interacting with a MongoDB database hosted on onrender.

## Project Structure

```
NextInvest/
│
├── admin-panel/        # Admin panel React app
├── client/             # Client React app
├── server/             # Node.js server app with Express
│
└── README.md           # Project documentation
```

### Admin Panel & Client (Frontend)

- Both the **admin-panel** and **client** applications are created using [Vite](https://vitejs.dev/) for fast development and [React](https://reactjs.org/) for building user interfaces.
- **Bootstrap** is used for styling and responsive layouts.

### Server (Backend)

- The **server** is built using [Node.js](https://nodejs.org/) and [Express](https://expressjs.com/).
- The database is a **MongoDB** database deployed on AWS.

## API Endpoints

### Client App

The client app interacts with the following API endpoints:

1. **Get all investments**  
   `GET /api/investment_data`  
   Fetches a list of all investment data.

2. **Save Newsletter Subscription**  
   `POST /api/newsletter/save`  
   Save the email subscription for the newsletter.  
   Request body:

   ```json
   {
     "email": "admirrn@example.com"
   }
   ```

3. **Upload Investment**  
   `POST /api/investment_data/upload`  
   Upload a new investment with the following fields:  
   Request body:
   ```json
   {
     "image": "image_url",
     "tag": "example tag",
     "title": "example title",
     "description": "description",
     "location": "location",
     "totalPrice": 30,
     "getPrice": 40,
     "securityType": "securityType",
     "investmentMultiplier": 2.5,
     "maturity": 33,
     "minInvestment": 400
   }
   ```

### Admin Panel App

The admin app uses the following API endpoints to manage the platform:

1. **Admin Login**  
   `POST /api/admin/login`  
   Admin login using email and password.  
   Request body:

   ```json
   {
     "email": "ex@example.com",
     "password": "****"
   }
   ```

2. **Get all Newsletter Subscriptions**  
   `GET /api/newsletter/get`  
   Fetches all the saved email subscriptions for the newsletter.

## Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or hosted on AWS)
- AWS account for deployment (optional, if you want to deploy the server)

## Deployment

1. To deploy the server to **onrender** is used.
2. To Deploy the frontend apps **AWS S3** is used.

## Technologies Used

- **Frontend**: React, Vite, Bootstrap
- **Backend**: Node.js, Express, MongoDB
- **Database**: MongoDB (hosted on AWS)
- **Deployment**: AWS
