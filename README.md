<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

1. Clonar el repositorio
2. Instalar dependencias
3. Crear un `.env` basado en el `env.template`
4. Tener levantado los microservicios que se van a consumir
5. Levantar proyecto con `yarn start:dev`

## Nats
```
docker run -d --name nats-main -p 4222:4222 -p 6222:6222 -p 8222:8222 nats
```