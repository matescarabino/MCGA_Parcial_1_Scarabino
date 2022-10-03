# Parcial 1 MCGA - Scarabino

**Alumno:** Scarabino Mateo<br>
**Carrera:** T1-09 INGENIERÍA EN SISTEMAS INFORMÁTICOS<br>
**Comisión:** 4-A<br>
**Turno:** Noche<br>
**Inicio:** 16/08/2022<br>
**Fin:** 03/12/2022<br>

**Profesor:** Frare Esteban

## Consigna 📋

Crear un servidor web usando Node.js, NPM y Express.js respetando la arquitectura API REST. Debe contar
con una serie de endpoints que contemple las acciones básicas de un CRUD de productos. Los datos de los
productos afectados deben estar persistidos en un base de datos NoSQL, usando Mongoose como ODM y
Mongo Atlas como servicio en la nube en donde alojar la base de datos.

## Funcionamiento ⚙️

### **Schema**
El esquema de mongoose para los productos (products) tiene las siguientes propiedades:

- id
- name
- price
- stock
- description
- isDeleted

### **Router**
Se utilizaron rutas para la administracion de la app, ya que, cuando queremos acceder a un recurso especifico de una coleccion estas nos lo indican.

### **Controller**
Aqui se almacena la logica de los metodos HTTP.

### Cuenta con 6 endpoints respetando los métodos HTTP para manejar el **CRUD**:
- GET : para hacer ping al servidor y que devuelva 'OK' en caso que el server y la BD estén levantadas

- GET : para conseguir la lista entera de productos
- GET : para conseguir un producto por id
- POST : para agregar un producto a la BD
- PUT : para editar algún campo de un producto
- DELETE : para eliminar un producto (baja logica)

## Construido con 🛠️
- JavaScript ES6
- Node.js
- NPM
- Express
- Mongoose
- Mongo Atlas
- Git

## Autores ✒️

* **Mateo Scarabino** - *todo* - [matescarabino](https://github.com/matescarabino)
