# todo-fancy
An amazing todo list application for you, take your todo list wherever you go

## Info & Requirements

### Server
The server is built using express, here's the requirements for running this awesome site

    "dependencies": {
        "body-parser": "~1.18.2",
        "cookie-parser": "~1.4.3",
        "debug": "~2.6.9",
        "dotenv": "^5.0.0",
        "express": "~4.15.5",
        "fb": "^2.0.0",
        "jade": "~1.11.0",
        "jsonwebtoken": "^8.1.1",
        "mongoose": "^5.0.4",
        "morgan": "~1.9.0",
        "serve-favicon": "~2.4.5"
    }

## Files and Folders

    ├── client
    │   └── index.html
    ├── README.md
    └── server
        ├── app.js
        ├── bin
        │   └── www
        ├── controllers
        │   ├── TodoController.js
        │   └── UserController.js
        ├── helpers
        │   └── decode.js
        ├── middlewares
        │   └── auth.js
        ├── models
        │   ├── Todo.js
        │   └── User.js
        ├── package.json
        ├── package-lock.json
        ├── routes
        │   ├── index.js
        │   ├── todo.js
        │   └── user.js
        └── seeds
            ├── todo-seed.js
            └── user-seed.js

## How To Run It

Running the server

    cd server
    npm i
    npm run dev
