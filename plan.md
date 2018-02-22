# Plan

* Front-end
  * ~~Routing - let's try BrowserRouter instead of HashRouter~~
  * Components
    * ~~Login~~
      * Picture
      * Button
      * Environment variables - dotenv
    * Account
      * User info (redux)
      * axios to fetch user info
  * Redux
    * Store
    * Ducks folder
    * Reducer
    * Action creators
    * Action names
* Back-end
  * ~~Database~~
    * User table
      * id (serial)
      * name
      * auth0_sub
      * email
      * picture
    * ~~Queries~~
      * Look up user by auth0_id
      * Add user
      * Init
  * Server
    * Proxy in package.json
    * API endpoints
      * GET user data
        * Ensure user is logged in (middleware)
      * Auth login (callback)
      * Logout
* Packages
  * dotenv
  * axios
  * redux
  * react-redux
  * react-router-dom
  * massive
  * express
  * body-parser
  * express-session
* Environment variables
  * Connection string
  * Session secret
  * Auth0 domain
  * Auth0 client ID
  * Auth0 client secret
* Important notes
  * Put .env in .gitignore
  * Restart servers whenever we change environment variables
  * Change package.json proxy section for auth callback reasons