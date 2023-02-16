
# Recipe App with React.js

Single page application using React.js library and Spoonacular API.




![Logo](https://rahkarino.com/wp-content/uploads/2023/02/foody.png)


## Installation

Install REACTJS with npm

```bash
  npx create-react-app top-foody
```

Install REACTJS with yarn

```bash
yarn create react-app top-foody
```
    
## Packages

- React.js
- React Query
- React Icons
- Styled-Component
- Framer-Motion
- Axios
## Run Locally

Clone the project

```bash
  git clone https://github.com/safariehsan/top-foody.git
```

Go to the project directory

```bash
  cd top-foody
```

Install dependencies:

(with npm)

```bash
  npm install
```
(with yarn)
```bash
  yarn
```

Start the server:

(with npm)

```bash
  npm start
```
(with yarn)
```bash
  yarn start
```
## API Reference
- BaseUrl: https://api.spoonacular.com/recipes/
#### Get random item

```http
  GET /random
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get an item

```http
  GET /recipes/${id}/information?apiKey=${api_key}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of recipe to fetch |


