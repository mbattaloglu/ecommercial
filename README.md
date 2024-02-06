# E-Commercial Application

An e-commercial application with a PHP backend and a React frontend.

## Prerequisites

- Local Web Server
- Local Database Server
- [Node.js](https://nodejs.org/en/)

## Installation

You should start the backend first, because the frontend needs the backend to work properly.

### Backend

1. You need to install a local web server (e.g. [Apache](https://httpd.apache.org/)) and a local database server (e.g. [MySQL](https://www.mysql.com/)) on your computer.(Installing [XAMPP](https://www.apachefriends.org/tr/index.html) for Windows users is recommended, which includes both Apache and MySQL.)
2. Copy the backend folder into the `htdocs` folder of your local web server.
3. Configure the database connection in the file `backend/config/database/index.php`.
4. Go your database server app and import the database dump `ecom.sql` into your local database server(Don't forget to create a database called "ecom").

Additional Configurations:

- If you want to change the timezone, go `backend/config/config.php` (It is set to `Europe/Istanbul`).
- You can refactor the `corsHandler()` function, inside `backend/config/cors.php`, for your needs.

### Frontend

1. Clone the repository.
2. Open a terminal in the frontend folder.
3. Run `npm install` to install all dependencies.
4. Run `npm start` to start the development server.
5. Open `http://localhost:3000` in your browser(It will automatically open).

## Project Features

| Feature                   | Date       |
| ------------------------- | ---------- |
| Login/Signin              | 27.01.2024 |
| Login/Signin Refactorings | 06.02.2024 |
