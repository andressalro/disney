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

![image](https://github.com/andressalro/disney/assets/40213377/167cc4dd-be0f-4e05-9ce9-e8f044526904)

### /auth/sign-up
Endpoint de registro de usuario

![image](https://github.com/andressalro/disney/assets/40213377/395595c1-b9be-42a2-a9fb-ab707f844836)

Uso de nodemailer con ayuda de Ethereal
![image](https://github.com/andressalro/disney/assets/40213377/1b376fe0-9554-4782-9a65-0930202c4c73)



### /auth/sign-in
Endpoint de inicio de sesión de usuario

![image](https://github.com/andressalro/disney/assets/40213377/1e5eb61a-5dbc-4e81-bd65-5399f1cad7fa)

### /api/v1/characters

Endpoint de listado de personajes

![image](https://github.com/andressalro/disney/assets/40213377/d29c2fc7-45f9-45c4-8a28-e7138caa4e96)

### /api/v1/character/:id

Endpoint de detalle de personaje

![image](https://github.com/andressalro/disney/assets/40213377/c56adc7f-8c2c-49c2-bbc1-eabe83345067)

Filtrado name, movie, etc.

![image](https://github.com/andressalro/disney/assets/40213377/ea37a053-1afa-4a81-b877-012ccfec109f)


### /api/v1/character

Endpoint de creación de personaje

![image](https://github.com/andressalro/disney/assets/40213377/e82ab469-8184-458c-809c-4b41d593bdab)

### /api/v1/character/:id

Endpoint de modificación de personaje

![image](https://github.com/andressalro/disney/assets/40213377/c30e0136-ca9d-4f8c-ac63-c097c0318ca2)

Se consulta este usuario para validar que si se haya modificado:

![image](https://github.com/andressalro/disney/assets/40213377/f6a327f9-e780-4a90-8685-c3215b6c1616)


### /api/v1/character/:id

Endpoint de eliminación soft de personaje

![image](https://github.com/andressalro/disney/assets/40213377/42232831-8960-42a5-8de9-dd1d89a9b70c)


Se valida que no salga en el listado:

![image](https://github.com/andressalro/disney/assets/40213377/cb1dbad5-e789-4efe-b199-2796ce33363b)


# Notas del desarrollador

Se creó el proyecto paso a paso, se puede reflejar en los commits.

Se cumplió con los puntos adicionales

Faltó culminar los puntos de los endpoints de pelicula (falta de tiempo para su culminación)

Se creó una buena estructura de proyecto para el poco tiempo de desarrollo

Se usó buenas prácticas de desarrollo


### ¡Gracias!









