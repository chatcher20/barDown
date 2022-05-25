# barDown

> An application that helps hockey coaches design practices with instructions and tutorials on hockey drills, such as skating and puck-handling techniques.


## Demo

#### Home Page
![Home Page](https://github.com/leepavelich/toStrong/blob/main/docs/screenshots/homepage.png)

#### Sign Up
![Signup](https://github.com/leepavelich/toStrong/blob/main/docs/gifs/signup_gif.gif)






## Using the app

1. In PostgreSQL, `create database tostrong;`
2. Run `npm i` in both `/server` and `/client` to install the relevant packages
3. Run `npm run seeding` in `/server` to seed the database
4. Run `npm start` in both `/server` and `/client` and React should automatically open a browser tab with the demo

## Tech Stack

### Front-end

- [React](https://reactjs.org/)
- [Sass](https://sass-lang.com/)
- [Axios](https://axios-http.com/docs/intro)
- [Patternfly](https://www.patternfly.org/v4/) - For the graphs
- [Bulma](https://bulma.io/)

### Back-end

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)


## TODOs

- Implement the logic for more programs than just the "Basic LP".
- Add more exercises to the library.
- Implement the Friends and Badges feature (current app has placeholders for the demo).
- Fix user authentication; right now you need to do a GET request to the `/auth/1` route of the server to generate a cookie to correctly do what's in the demo.
- Refactor the database to be in first normal form.


