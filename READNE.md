# Project Name

A CRUD application based on MERN stack.

## Demo

Demo Link: [https://mern-crud-frontend-zeta.vercel.app](https://mern-crud-frontend-zeta.vercel.app)

## Features

- View all places
- Create a new place
- Edit a place
- Delete a place

## Tech Stack

- **Frontend Framework**: React
- **Styling**: Tailwind CSS

## Installation

### Prerequisites

- Node.js >= 14.0.0
- npm >= 6.0.0

### Installation

1. Clone the repository

```bash
git clone https://github.com/chyuanhan/mern-crud-frontend.git
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables
   Create a `.env` file and add the following:

```bash
REACT_APP_GOOGLE_API_KEY=YOUR_GOOGLE_API_KEY
REACT_APP_BACKEND_URL=YOUR_BACKEND_URL
REACT_APP_ASSET_URL=YOUR_ASSET_URL
```

4. Start development server

```bash
npm start
```

## API Endpoints

### Place Management

#### Place Endpoints

- `GET /places` - Get all places
- `GET /places/user/:uid` - Get all places by user id
- `POST /places` - Add a new place
- `PUT /places/:pid` - Update a place
- `DELETE /places/:pid` - Delete a place

#### User Endpoints

- `GET /users` - Get all users
- `POST /users/signup` - Add a new user
- `POST /users/login` - Login a user
