# Warehouse-Frontend

## Assumptions
- Users have the ability to define warehouse zones as needed, allowing them to submit shelf forms multiple times for different zones within the warehouse.
- Users can define shelves in any order within a zone.
- Shelf naming rules: 
* 1. Shelf names must not exceed 20 characters in length. 
* 2. Only English letters and numbers are permitted in shelf names. 
* 3. Each shelf name must be unique within the entire warehouse. 
- The POST API is exclusively called by the frontend, which means that parameter validation is already performed by the frontend. Therefore, the API does not carry out parameter validation. However, the backend does verify whether a shelf name already exists in the database whenever users attempt to define a new shelf.


## Technologies
- JavaScript
- React
- React Bootstrap
- eslint: Lint
- prettier: Lint


## Get Started

1. Install dependencies
```bash
npm install
```

2. Run backend server

3. Open React page. Open http://localhost:3000/
```bash
npm start
```
