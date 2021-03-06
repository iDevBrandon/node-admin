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

## 19. Seeders

run npm run roles:seed to save all permissions into the database

1. add all permissions into "permissions" table

2. Empty permission and role tables

```sql
SET FOREIGN_KEY_CHECKS = 0;

truncate table permission;
truncate table role;

SET FOREIGN_KEY_CHECKS =1;
```

if we delete the permissions with `delete permission[3]`, it does not mean that it has less index, it just replace to null

Ended up giving each role's permissions

## 20. Roles and Permissions CRUD
contols for the permissions and the roles 

## 21. Products 
Routes and APIs for the products

## 22. Pagination
Set take 15 and page based on 1

pagination is used with "findAndCount" in products/user page
In postman we have "data" & "meta" data form to give pagination info

## 23. Uploading images
use multer and create upload() to keep route simple

## 24. Static Routes
Since we upload files, there's no public path to access.
In order to make it public, have to add static routes 

## 25. Orders
Insert order/order_item data into database

## 26. Typescript Getters
order controller

get total(), created a coulmue but it looks like a function

## 27. Export CSV file
send export CSV file in Node.js

## 28. Raw SQL
query console and run a raw SQL to get the sales by a specific date

```sql
SELECT DATE_FORMAT(o.created_at, '%Y-%m-%d') as date, SUM(oi.price * oi.quantity) as sum
FROM `order` o
JOIN order_item oi on o.id = oi.order_id
GROUP BY date
```

How to run this raw sql in TypeORM

## 29. Permission middleware
Test the roles and the permissions 

It's a bit complicated. I think it should be organise before applying to FE