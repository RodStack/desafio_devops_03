# Despliegue de Contenedores en ECS con GitHub Actions

Este proyecto es una aplicación Node.js contenerizada que utiliza GitHub Actions para CI/CD y se despliega automáticamente.

## Requisitos Previos

- Node.js (versión 18 o superior)
- npm
- Una cuenta en GitHub
- Git instalado localmente

## Configuración Local

1. Clonar el repositorio:
   git clone <url-de-tu-repositorio>
   cd my-node-app

2. Instalar dependencias:
   npm install

3. Ejecutar la aplicación localmente:
   npm start

   La aplicación estará disponible en `http://localhost:3000`

## GitHub Actions

Este proyecto utiliza GitHub Actions para automatizar el proceso de CI/CD. El flujo de trabajo está configurado en `.github/workflows/main.yml`.

### El pipeline incluye:

- Construcción de la aplicación
- Creación del contenedor Docker
- Despliegue automático

### Configuración de Secrets y Variables

1. En tu repositorio de GitHub, ve a Settings > Secrets and variables > Actions
2. Agrega los siguientes secrets necesarios:
   - AWS_ACCESS_KEY_ID
   - AWS_SECRET_ACCESS_KEY
   - AWS_REGION

3. En la misma sección, ve a la pestaña "Variables" y agrega:
   - MY_REGION: región de AWS (ej: us-east-1)
   - ECR_REPOSITORY: nombre del repositorio ECR
   - ECS_SERVICE: nombre del servicio ECS
   - ECS_CLUSTER: nombre del cluster ECS
   - CONTAINER_NAME: nombre del contenedor en la task definition

4. En la configuración de tu Task Definition de ECS, asegúrate de agregar las siguientes variables de entorno:
   - PORT: Puerto en el que se ejecutará la aplicación
   - NODE_ENV: Entorno de ejecución (production, development)

## Despliegue Manual

Si necesitas realizar un despliegue manual:

- Asegúrate de que todos los cambios estén confirmados y subidos a GitHub:
   git add .
   git commit -m "tu mensaje"
   git push origin main

- GitHub Actions se activará automáticamente con cada push a la rama main
