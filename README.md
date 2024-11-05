# Tripleten web_project_around_express

## Primera parte

## :astonished: De que trata?

### Consiste en crear un servidor para el proyecto "Alrededor de los EE. UU.", es decir, no se implementará ninguna funcionalidad orientada al frontend sino más bien al backend. Para ello, se trabajara con una base de datos proporcionada para realizar diversas configuraciones de seguridad, y pruebas el fin de que los enlaces del servidor funcionen perfectamente, y poco a poco comprender estos conceptos básicos.

## :interrobang: Que se aprendió en está etapa?

1. ### Comprender la instalación y configuración de los archivos ".editorconfig, json" orientados al backend.

2. ### Intsalar, configurar y comprender el concepto "Linter, ya que es una herramienta muy util para detectar errores de sintaxis, o en su caso, programar diversas excepciones que facilitan la detección de dichos error o advertencias(Se tomo como base la guía de estilo de Airbnb).

3. ### Instalar express para permitir utilizar el servidor junto a al paquete nodemon para poder impkementar el "hot reload"

4. ### Crear nuestra propia api mediante los archivos json proporcionados (users y cards)

5. ### Al ingresar la siguientes rutas, el servidor mostrara los datos correspondientes: http://localhost:3000/users (lista de usuarios), http://localhost:3000/users/8340d0ec33270a25f2413b69 (id de un respectivo usuario), http://localhost:3000/cards (lista de las targetas)

## Imágenes de las nuevas implementaciones.

<img src="/images/rules.png"  border="0"   />

<img src="/images/users.png"  border="0"   />

<img src="/images/id.png"  border="0"   />

<img src="/images/cards.png"  border="0"   />

---

## Segunda parte

## :astonished: De que trata?

### En este apartado se aplicará la conexión a la base de datos MongoDB mediante mongoose que nos permitirá escribir consultas, crear y validar esquemas, además se modificará la estructura de archivos y directorios del proyecto, ya que se agregaran modelos, y controladores. Por otra parte, se implememntará el manejo de errores para que la ejecución de estas nuevas funcionalidades sean fluida y no aparezcan fallas inesperadas.

## :interrobang: Que se aprendió en está etapa?

1. ### Comprender mejor el proceso para conectarse a la base de datos.

2. ### Crear y utilizar los esquemas y modelos, al mismo tiempo, validar la información contenida mediante diversos campos, metódos y espresiones regulares(url).

3. ### Organizar la estructura de directorios, y archivos, es decir, se agrego una carpeta de controladores para colocar los CRUDS, y la gestión de errores.

4. ### Emplear el manejo de errores con el fin de vincularlos con su respectivo estado, en caso de que las solicitudes no sean hechas correctamentes o no se encuentre la información solicitada.

5. ### Crear Apis rest siguiendo las buenas prácticas, empleando los correspondientes métodos "HTTP" acompañados de los respectivos "CRUD".

## Imágenes de las nuevas implementaciones.

<img src="/images/data.png"  border="0"   />

<img src="/images/structure.png"  border="0"   />

---

## Tecnologías utilizadas:

<img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original-wordmark.svg" title="Node" alt="Node" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/nodemon/nodemon-original.svg" title="Nodemon" alt="Nodemon" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/express/express-original.svg" title="Express" alt="Express" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/eslint/eslint-original.svg" title="Eslint" alt="Eslint" width="40" height="40"/>&nbsp;

<img src="https://github.com/devicons/devicon/blob/master/icons/mongodb/mongodb-original.svg" title="MongoDB" alt="MongoDB" width="40" height="40"/>&nbsp;

<img src="https://github.com/devicons/devicon/blob/master/icons/mongoose/mongoose-original.svg" title="Mongoose" alt="Mongoose" width="40" height="40"/>&nbsp;
