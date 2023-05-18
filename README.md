# Prueba técnica API Disney
Se utilizaron las tecnologías NodeJs Express, Sequelize MySQL, Nodemailer, Swagger y docker-compose

# Variables de entorno

> MYSQL_NAME = "disneydb"
> 
> MYSQL_USER = "root"
> 
> MYSQL_PASS = "123"
> 
> MYSQL_HOST = "localhost"
> 
> MYSQL_PORT = "3307"
> 
> NODE_ENV = "development"
> 
> PORT = "3000"
> 
> JWT_TOKEN_SECRET=prueba
> 
> JWT_TOKEN_ISSUER="disney.com"
> 
> EMAIL_HOST="smtp.ethereal.email"
> 
> EMAIL_PASS="Gqfuj1rDa7DZANXUky"
> 
> EMAIL_USER="allie.treutel@ethereal.email"
> 
> EMAIL_PORT=587

### docker compose up --build -d
Levantará el servicio de NodeJs por el puerto 3000 y el servicio MySQL por el puerto 3307, ejecuta migraciones y seeders

![image](https://github.com/andressalro/disney/assets/40213377/265cbeb3-9e15-43b6-952a-855440c950a8)

### /api-docs
La ruta de la documentación del API

![image](https://github.com/andressalro/disney/assets/40213377/2b0fbe6d-a534-4615-8a22-a136d1cb3aa9)

### /auth/sign-up
Endpoint de registro de usuario

![image](https://github.com/andressalro/disney/assets/40213377/395595c1-b9be-42a2-a9fb-ab707f844836)

Uso de nodemailer con ayuda de Ethereal
![image](https://github.com/andressalro/disney/assets/40213377/1b376fe0-9554-4782-9a65-0930202c4c73)



### /auth/sign-in
Endpoint de inicio de sesión de usuario

![image](https://github.com/andressalro/disney/assets/40213377/43e69351-415e-4da5-8460-6d0bc0d9f512)

### /api/v1/characters

Endpoint de listado de personajes

![image](https://github.com/andressalro/disney/assets/40213377/ccb004f3-7f49-402c-bc52-6703ff7fb378)

### /api/v1/character/:id

Endpoint de detalle de personaje

![image](https://github.com/andressalro/disney/assets/40213377/87763f65-8014-4795-819e-bd7a994464ef)

Filtrado name, movie, etc.
![image](https://github.com/andressalro/disney/assets/40213377/e9066eb1-7103-4794-8d3f-a7136338394f)


### /api/v1/character

Endpoint de creación de personaje

![image](https://github.com/andressalro/disney/assets/40213377/4b73e074-ea91-46ef-8d80-a20e4e16339e)

### /api/v1/character/:id

Endpoint de modificación de personaje

![image](https://github.com/andressalro/disney/assets/40213377/6f709ee4-4c78-4d19-8635-cc689f412e23)

Se consulta este usuario para validar que si se haya modificado:

![image](https://github.com/andressalro/disney/assets/40213377/d6948579-58a0-4d81-832d-e09a5c309bf5)


### /api/v1/character/:id

Endpoint de eliminación soft de personaje

![image](https://github.com/andressalro/disney/assets/40213377/04ffeb45-2203-450e-abce-867311034492)


Se valida que no salga en el listado:

![image](https://github.com/andressalro/disney/assets/40213377/91bc04a3-2002-4f45-8e2f-fa4cbe0c83b5)


# Notas del desarrollador

Se creó el proyecto paso a paso, se puede reflejar en los commits.

Se cumplió con los puntos adicionales

Faltó culminar los puntos de los endpoints de pelicula (falta de tiempo para su culminación)

Se creó una buena estructura de proyecto para el poco tiempo de desarrollo

Se usó buenas prácticas de desarrollo


### ¡Gracias!









