# Portfolio Grimaldi Solano

Portafolio profesional desarrollado con **Nuxt 4**, **Vue 3**, **TypeScript** y **Tailwind CSS**.
El proyecto presenta mi perfil profesional, experiencia, proyectos destacados, tecnologías utilizadas, descarga de CV y un formulario de contacto funcional integrado con Web3Forms.

## Sitio publicado

[Ver portafolio en línea](https://portfolio-grimaldi.pages.dev)

## Sobre el proyecto

Este portafolio fue creado con el objetivo de mostrar mi perfil como desarrolladora de software junior, enfocada en el desarrollo de interfaces web, aplicaciones móviles e integración con APIs REST.

Incluye secciones como:

* Inicio
* Sobre mí
* Proyectos
* Contacto
* Descarga de CV en español e inglés
* Formulario de contacto funcional

## Tecnologías utilizadas

* Nuxt 4
* Vue 3
* TypeScript
* Tailwind CSS
* Web3Forms
* Cloudflare Pages
* Git
* GitHub

## Características principales

* Diseño responsivo.
* Arquitectura modular por secciones.
* Componentes reutilizables.
* Carrusel automático de tecnologías.
* Galería de imágenes en detalle de proyectos.
* Formulario de contacto conectado con Web3Forms.
* Descarga de CV en español e inglés.
* Deploy automático con Cloudflare Pages.

## Estructura general del proyecto

```bash
app/
├── assets/
│   └── css/
├── components/
│   ├── common/
│   └── layout/
├── layouts/
├── modules/
│   ├── about/
│   ├── contact/
│   ├── home/
│   ├── projects/
│   └── services/
├── pages/
└── app.vue

public/
├── images/
└── CV/
```

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/guriSan25/portfolio-grimaldi.git
```

Entrar al proyecto:

```bash
cd portfolio-grimaldi
```

Instalar dependencias:

```bash
npm install
```

## Variables de entorno

El proyecto utiliza Web3Forms para el formulario de contacto.

Crear un archivo `.env` en la raíz del proyecto:

```env
NUXT_PUBLIC_WEB3FORMS_ACCESS_KEY=tu_access_key_aqui
```

> El archivo `.env` no debe subirse al repositorio.
> Para producción, esta variable debe configurarse directamente en Cloudflare Pages.

## Servidor de desarrollo

Ejecutar el proyecto localmente:

```bash
npm run dev
```

El sitio estará disponible en:

```bash
http://localhost:3000
```

## Build de producción

Generar la versión de producción:

```bash
npm run build
```

Generar el sitio estático:

```bash
npm run generate
```

Previsualizar el build:

```bash
npm run preview
```

## Deploy

El proyecto está desplegado en **Cloudflare Pages**.

Configuración utilizada:

```bash
Framework preset: Nuxt.js
Build command: npm run generate
Build output directory: dist
Production branch: main
```

Cada vez que se realiza un push a la rama `main`, Cloudflare Pages ejecuta automáticamente un nuevo despliegue.

## Contacto

* GitHub: [guriSan25](https://github.com/guriSan25)
* LinkedIn: [Grimaldi Solano](https://www.linkedin.com/in/grimaldisolanot)
* Contacto: disponible desde el formulario del portafolio.

## Autora

Desarrollado por **Grimaldi Solano**.
