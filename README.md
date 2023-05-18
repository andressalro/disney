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
Levantará el servicio de NodeJs por el puerto 3000 y el servicio MySQL por el puerto 3307

![image](https://github.com/andressalro/disney/assets/40213377/2c712443-b5f5-46a7-af84-844a5b0522fe)

### /api-docs
La ruta de la documentación del API

![image](https://github.com/andressalro/disney/assets/40213377/5f262cde-c6bf-487a-b514-dc4593c5dd4f)

### /auth/sign-up
Endpoint de registro de usuario

![image](https://github.com/andressalro/disney/assets/40213377/2fc0700c-da03-4e3f-8e11-13a331728644)


### /auth/sign-in
Endpoint de inicio de sesión de usuario

![image](https://github.com/andressalro/disney/assets/40213377/43e69351-415e-4da5-8460-6d0bc0d9f512)

### /api/v1/characters

Endpoint de listado de personajes

![image](https://github.com/andressalro/disney/assets/40213377/ccb004f3-7f49-402c-bc52-6703ff7fb378)

### /api/v1/character/:id

Endpoint de detalle de personaje

![image](https://github.com/andressalro/disney/assets/40213377/0f3aa1dd-4381-44dd-9d87-04685d2ebd57)

Filtrado name, movie, etc.
![image](https://github.com/andressalro/disney/assets/40213377/703aa1ce-964b-487c-a221-02ad250c268a)


### /api/v1/character

Endpoint de creación de personaje

![image](https://github.com/andressalro/disney/assets/40213377/b09b98f4-db4e-4f1a-990c-2d026b377295)

### /api/v1/character/:id

Endpoint de modificación de personaje

![image](https://github.com/andressalro/disney/assets/40213377/6290bf58-b85b-4208-b1d8-ece38447527a)







