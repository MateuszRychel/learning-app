# Learning App — Vocabulary Learning Platform

**Full-Stack Web Application | React | Node.js | MongoDB**

Learning App is a full-stack web application designed to help users learn foreign language vocabulary by creating personalized word lists and practicing translations through interactive tests.

The application allows users to register, manage vocabulary lists, practice translations, and review their test results.

Built as a personal project to develop practical skills in **frontend development, backend APIs, authentication, and database integration**.

## About the Project

Learning App combines vocabulary management with interactive learning.

The main goal is to provide a simple and convenient way to organize vocabulary and test language knowledge.

### Key Features

- **User Authentication** — Registration and login using JWT-based authentication.
- **Vocabulary Dashboard** — Access and manage vocabulary lists from the home page.
- **Vocabulary Management** — Create vocabulary lists manually or using JSON data.
- **Interactive Tests** — Practice vocabulary by typing translations.
- **Test Results** — Review results after completing a vocabulary test.

## Application Preview

*Screenshots will be added soon.*

<!--
Add screenshots to docs/screenshots/ and uncomment:

![Learning App Dashboard](docs/screenshots/dashboard.png)
![Vocabulary List Creation](docs/screenshots/create-list.png)
![Vocabulary Test](docs/screenshots/test.png)
![Test Results](docs/screenshots/results.png)

-->

## Technologies & Tools

### Frontend

<p>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="42" height="42" alt="React" title="React" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" width="42" height="42" alt="Vite" title="Vite" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" width="42" height="42" alt="Tailwind CSS" title="Tailwind CSS" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="42" height="42" alt="JavaScript" title="JavaScript" />
</p>

**Libraries:** React Router DOM, Axios, Heroicons

### Backend

<p>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" width="42" height="42" alt="Node.js" title="Node.js" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" width="42" height="42" alt="Express.js" title="Express.js" />
</p>

**Libraries:** bcrypt, jsonwebtoken, dotenv, cors

### Database

<p>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" width="42" height="42" alt="MongoDB" title="MongoDB" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg" width="42" height="42" alt="Mongoose" title="Mongoose" />
</p>

### Development Tools

<p>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg" width="42" height="42" alt="ESLint" title="ESLint" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prettier/prettier-original.svg" width="42" height="42" alt="Prettier" title="Prettier" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" width="42" height="42" alt="Git" title="Git" />
</p>

**Also using:** Nodemon

## Application Architecture

Learning App follows a client-server architecture with separate frontend and backend components.

```text
               USER
                |
                v
       +-------------------+
       |  React Frontend   |
       | Vite + Tailwind   |
       +-------------------+
                |
           HTTP / Axios
                |
                v
       +-------------------+
       | Express REST API  |
       | Node.js Backend   |
       | JWT Authentication|
       +-------------------+
                |
             Mongoose
                |
                v
       +-------------------+
       | MongoDB Database  |
       +-------------------+
```

### Frontend

The frontend is responsible for the user interface, navigation, vocabulary management screens, and interactive tests.

### Backend

The backend handles API requests, authentication, and communication with the database.

### Database

MongoDB stores application data, while Mongoose provides data modeling and database interaction.

## How It Works

1. **Register or Log In** — Create an account or sign in to access vocabulary lists.
2. **Create a Vocabulary List** — Add vocabulary manually or import words using JSON data.
3. **Select a List** — Choose a vocabulary list from the dashboard.
4. **Start a Test** — Practice translations by typing answers.
5. **Review Results** — See the test summary and results.

## Getting Started

### Prerequisites

Before running the application, make sure you have:

- Node.js and npm
- MongoDB
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/MateuszRychel/learning-app.git
cd learning-app
```

### 2. Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend/learning-app
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will display the local application URL in the terminal.

### 3. Backend Setup

Open another terminal in the root directory of the repository.

Install backend dependencies if necessary:

```bash
cd backend
npm install
```

Configure the backend's database connection and JWT settings.

Start the backend from the repository root:

```bash
node backend/server.js
```

**Important:** A working MongoDB connection and the required environment configuration are necessary for authentication and database operations. Do not commit credentials or secret keys to the repository.

## Project Structure

```text
learning-app/
├── frontend/
│   └── learning-app/      # React application
├── backend/                # Express API and server
└── README.md               # Project documentation
```

## What I Learned

Developing Learning App helped me gain practical experience in:

- Building user interfaces with React
- Creating backend functionality using Node.js and Express
- Connecting frontend applications to REST APIs
- Implementing JWT-based user authentication
- Working with MongoDB and Mongoose
- Managing application state and user interactions
- Structuring a full-stack project into separate frontend and backend components

## Project Status

**Personal Full-Stack Learning Project**

Learning App was developed to practice full-stack application development and explore technologies used in modern web applications.

## Possible Future Improvements

- Improve the overall user interface and mobile experience.
- Add additional learning and test modes.
- Introduce vocabulary learning statistics.
- Add more options for importing and exporting vocabulary.
- Improve validation, error handling, and automated testing.

These are potential improvements rather than completed features.

## Project Repository

[Learning App — GitHub Repository](https://github.com/MateuszRychel/learning-app)

## Connect With Me

**Mateusz Rychel — Developer**

- [LinkedIn](https://pl.linkedin.com/in/mateuszrychel)
- [GitHub](https://github.com/MateuszRychel)
- [Codeberg](https://codeberg.org/MateuszRychel)

---

*Learning App — Learn vocabulary. Practice translations. Improve your skills.*

*A personal full-stack project focused on web development and interactive language learning.*
