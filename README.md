# Detección de mutantes

API de detección de mutantes desarrollado en Nodejs.

## Simulación gráfica del algoritmo planteado
![Simulación de prueba](docs/sim.gif)

## Documentación API

[https://ml-mutants-318208.ue.r.appspot.com/docs](https://ml-mutants-318208.ue.r.appspot.com/docs)

### Base de datos

- Mutantes

![Tabla mutantes](docs/mutantes.PNG)

## Uso en ambiente de desarrollo

- El setup de desarrollo está centrado en el uso de Docker y docker-compose para fácil acceso, aunque también se puede realizar manualmente por medio de la instalación de npm, node y sus dependencias.

1) Instalar Docker [acá](https://www.docker.com/products/docker-desktop).

2) Correr el siguiente comando:
```bash
docker-compose up
```

3) Probar los servicios /mutants y /stats explicados en la documentación del API

## Uso en Cloud

- En producción es necesario ingresar a la página generada por App Engine [acá](https://ml-mutants-318208.ue.r.appspot.com/docs). Ahí se encontrará la explicación de los dos servicios expuestos:

1) POST https://ml-mutants-318208.ue.r.appspot.com/mutant

2) GET https://ml-mutants-318208.ue.r.appspot.com/stats

## License
[MIT](https://choosealicense.com/licenses/mit/)
