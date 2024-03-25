# Proyecto Explorador de Razas de Perros

## Descripción

Este proyecto es una aplicación web desarrollada con React y Tailwind CSS, que utiliza la API de Dog CEO para mostrar información sobre distintas razas de perros. Los usuarios pueden ver un listado de todas las razas, imágenes de cada raza y obtener imágenes aleatorias de perros.

## Propósito

El propósito de esta aplicación es proporcionar una interfaz amigable y atractiva para que los amantes de los perros puedan explorar diferentes razas, ver imágenes y descubrir la diversidad dentro del mundo canino.

## Características

- Lista todas las razas y subrazas de perros proporcionadas por la API de Dog CEO.
- Muestra la cantidad de razas y subrazas disponibles.
- Permite a los usuarios ver imágenes aleatorias de perros.
- Habilita el filtrado de razas y la clasificación en orden ascendente/descendente.

## Instrucciones de Instalación

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio en tu máquina local:

```bash
git clone https://<ruta-del-repositorio>.git
cd <nombre-del-proyecto>
npm install
npm run dev
``` 


## Ejecución en Modo Desarrollo

Para evitar problemas inesperados en producción, como ejecuciones dobles causadas

por el modo estricto en React durante el desarrollo, se recomienda realizar una construcción de producción y una vista previa antes del despliegue:

1. Construye la aplicación para producción:
Este comando genera los archivos estáticos para producción en la carpeta dist/.
```bash
npm run build
```
2. Para previsualizar la construcción de producción localmente, puedes usar:
```bash
npm run preview
```
Este comando sirve la versión construida de tu aplicación, permitiéndote verificar su comportamiento en un entorno que simula más de cerca un entorno de producción.

## Despliegue
Una vez que hayas verificado que tu aplicación funciona correctamente en la vista previa de producción, puedes desplegar los archivos estáticos generados en cualquier servicio de alojamiento web que prefieras.

## Tecnologías Utilizadas 
* React.js
* Tailwind CSS
* Vite
* Axios
* React Router

## Uso de API

Agradecer a [Dog API](https://dog.ceo/dog-api/) por proporcionar una API gratuita y de código abierto que hemos utilizado en este proyecto. 

La API es de uso libre y nos ha permitido acceder a una variedad de imágenes de razas de perros para nuestro explorador de razas.

---
Creado por Felipe Vergara para la empresa Escaleno