# Admin page study

## 3. TypeScript
Simply apply typescript into project

## 4. Express
Set up a simple express server

## 5. Routes
In controller, create all relavent routes/functions
In routes.ts, put all of route APIs

## 6. validation
To registeration for validation, set the rules in register.validation.ts
and then use it in register() 

## 7. TypeORM
Apply typeORM

## 8. Register
Create a user table to save the data and save user info(including hashed password)

## 9. Login
Somehow "yarn" didn't now work so i had to copy all package from original course and replaced to NPM

## 10. JWT
Create a token for user authentication

## 11. Authenticated User 
Create a auth route for login

## 12. Logout 
Create a logout route for logout and remove jwt cookie
Cover in try...catch... statement to prevent fake authentication

## 13. Environment variables
use dotenv to set environment variables

## 14. Middlewares
To prevent fraud in unauthorized access

## 15. Profile
Create a profile route to update user and password

## 16. Users CRUD
auth.controller works with our own auth
user.controller works with that other user can register other user
GET/CREATE/UPDATE/DELETE for user

## 17. Roles (connect with different entities)
Role model for users
To make connection between role and user entities,

OneToMany means that user can have many roles
ManyToOne means that the role can have many users

relations: ["role"], which should match the name of the entity

## 18. Permissions 
ManyToMany between roles and permissions (one role can have many permissions)
In SQL, to solve this problem, by creating another table that makes relationship possible

we got 4 tables (user, role, permission, role_permissions)
Gonna learn more detail in the next one 