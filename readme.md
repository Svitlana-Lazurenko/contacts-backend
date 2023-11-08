# Сontacts backend

Backend for work with contacts.

- The application supports login and registration. Authorization uses JWT (using localstorage).
- The application supports verification of email by Elasticemail.
- Implemented creation, editing and deletion of contacts. Implemented editing status of contact.
- The application uses a database MongoDB.

## Technologies:

- Express
- MongoDB
- Mongoose
- Joi
- Morgan
- Multer
- Jsonwebtoken
- Gravatar

## Endpoints

/users  
- /register POST
- /verify/:verificationToken GET Parameter: verification token
- /verify POST
- /login POST
- /current GET
- /logout POST
- /:id/subscription PATCH Parameter: id of user
- /avatars PATCH

/api/contacts
- / GET
- /:id GET  Parameter: id of contact
- / POST  
- /:id DELETE  Parameter: id of contact
- /:id PUT  Parameter: id of contact
- /:id/favorite PATCH  Parameter: id of contact

### Commands:

- `npm start` &mdash; start server in production mode
- `npm run start:dev` &mdash; start server in development mode
- `npm run lint` &mdash; run a code check run with eslint, must run before each PR and fix all linter errors
- `npm lint:fix` &mdash; the same linter check, but with automatic fixes for simple errors
