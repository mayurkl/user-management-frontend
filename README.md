# User Management Frontend

This project was generated using Angular CLI version 19.2.5.

---

## 📌 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Setup & Running](#project-setup--running)
- [Project Structure](#project-structure)
- [Environment Configurations](#environment-configurations)
- [Styling & Theming](#styling--theming)
- [Code Quality & Linting](#code-quality--linting)

---

## 📜 Project Overview
The User Management Frontend is an Angular-based application that displays a list of users fetched from a JSON source. It includes a table view, a details view, and inline editing capabilities.

---

## 🌟 Features

## 🌟 Features

✅ Dynamic Table View – Displays user data fetched from this [JSON source](https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json)  
✅ Details View – Clicking a row opens a new page with details of the selected user  
✅ Dynamic Table Headers – Automatically generated based on the JSON structure  
✅ Inline Editing – Users can edit table data (changes are not saved)  
✅ Search Filter – Enables filtering of user data  
✅ Not Found Page – Handles invalid routes with a custom 404 error page  
✅ Back to List Button – Added on the Details Page and Not Found Page for easy navigation  


---


## 🛠 Technologies Used

- **Frontend Framework:** Angular (Latest Version)
- **CSS Library:** Angular Material
- **Linting:** Angular ESLint
- **Deployment:** Netlify

---

## ⚙️ Project Setup & Running

To run this project locally, follow these steps:

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/mayurkl/user-management-frontend.git
cd user-management-frontend
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the Application
```sh
ng serve
```
By default, the app runs on: [http://localhost:4200/](http://localhost:4200/)

### 4️⃣ Build for Production
```sh
npm run build:prod  # or ng build --configuration=production
```
This will create a `dist/` folder containing the optimized production build.

---

## 📁 Project Structure

```bash
user-management-frontend/
│── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── not-found/                   # 404 Not Found Page
│   │   │   ├── user/                        # User-related components & services
│   │   │   │   ├── components/
│   │   │   │   │   ├── user-details/        # Component for user details view
│   │   │   │   │   ├── user-list/           # Component for displaying user list
│   │   │   │   ├── models/
│   │   │   │   │   ├── user.model.ts        # Interface for user data structure
│   │   │   │   ├── services/
│   │   │   │   │   ├── user.service.ts      # Service for fetching user data
│   │   ├── app.routes.ts                   # Defines application routes
│   │   ├── app.config.ts                   # Configuration settings for the app
│   ├── environments/
│   │   ├── environment.ts                   # Development environment settings
│   │   ├── environment.prod.ts              # Production environment settings
│   ├── theme/
│   │   ├── colors.scss                      # Theme colors (CSS variables)
│   ├── styles.scss                          # Global styles (rem-based, imports colors.scss)
│── angular.json                             # Angular CLI configuration
│── package.json                             # Project dependencies and scripts
│── README.md                                # Project documentation
```

---

## 🌍 Environment Configurations

The project uses two environment configurations:

| File | Purpose |
|-----------------------|----------------------------------------|
| `environment.ts` | Development environment settings |
| `environment.prod.ts` | Production environment settings |

> **Default configuration is set to development.**  
To run in production mode, use:
```sh
npm run start:prod
```

---

## 🎨 Styling & Theming

- **CSS Utility Library:** Angular Material
- **Global Styles:**
  - `styles.scss` – Sets the base font unit to `rem` for better scalability.
  - `colors.scss` – Defines theme colors as CSS variables, making them reusable across components.

---

## 🧪 Code Quality & Linting

The project follows strict coding standards with ESLint for Angular.

### Run Linting
```sh
ng lint
```
This checks for coding issues and ensures the codebase remains clean and maintainable.

---

