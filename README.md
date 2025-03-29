# EmployWise - <a href="https://employwise-one-z.vercel.app/" target="_blank">Open EmployWise</a>

A simple React-based user management system with authentication, user listing, editing, and deletion functionality.

## 🚀 Features

### Level 1: Authentication Screen
- User login using credentials.
- API Endpoint: `POST /api/login` (email & password in the body)
- Sample Credentials:
  - **Email**: `eve.holt@reqres.in`
  - **Password**: `cityslicka`
- On successful login, stores the authentication token and navigates to the Users List page.

### Level 2: List All Users
- Displays a **paginated** list of users fetched from the API.
- API Endpoint: `GET /api/users?page=1`
- Shows user details including **first name, last name, and avatar**.
- Implements **pagination or lazy loading** for smooth navigation.

### Level 3: Edit, Delete, and Update Users
- Each user has options to **Edit** or **Delete** their details.
- **Edit User**:
  - Opens a form pre-filled with user data.
  - Allows updating **first name, last name, and email**.
  - API Endpoint: `PUT /api/users/{id}`
- **Delete User**:
  - Removes the user from the list.
  - API Endpoint: `DELETE /api/users/{id}`
- Shows appropriate **success or error messages** for all operations.

## 🛠 Tech Stack
- **Frontend**: React, Tailwind CSS
- **State Management**: React Hooks
- **Backend API**: [ReqRes API](https://reqres.in/)

## 🚀 Getting Started
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/adhit7/employwise.git
cd employwise
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the App
```sh
npm run dev
```

## 📜 API Reference
- **Login:** `POST /api/login`
- **Fetch Users:** `GET /api/users?page=1`
- **Update User:** `PUT /api/users/{id}`
- **Delete User:** `DELETE /api/users/{id}`


