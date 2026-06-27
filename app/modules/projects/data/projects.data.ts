import type {
    Project,
    ProjectCategory
} from "../models/project.model"

export const projectCategories: Array<
    "Todos" | ProjectCategory
> = [
        "Todos",
        "Frontend",
        "Full Stack",
        "Móvil"
    ]

export const projects: Project[] = [
    {
        slug: "zybus-web",
        title: "Zybus Web Pasajeros y Administradores",
        category: "Frontend",
        shortDescription:
            "Plataforma web para la gestión y consulta de servicios de transporte.",
        description:
            "Sistema de transporte inteligente desarrollado de manera colaborativa. Participé principalmente en la construcción de vistas para pasajeros, empresas y administrativas, formularios, validaciones, componentes reutilizables y servicios para el consumo de APIs REST.",
        role: "Desarrolladora Frontend",
        year: "2025–2026",
        technologies: [
            "Vue.js",
            "TypeScript",
            "Vite",
            "Vue Router",
            "Pinia",
            "Vuetify",
            "Axios",
            "Tailwind CSS",
            "Leaflet",
            "Vue Leaflet",
            "Chart.js",
            "vue-chartjs",
            "Vitest",
            "Vue Test Utils",
            "ESLint",
            "Oxlint",
            "Prettier",
            "GitHub"
        ],
        responsibilities: [
            "Desarrollo de vistas administrativas y flujos de usuario.",
            "Creación de componentes reutilizables.",
            "Implementación de formularios y validaciones.",
            "Manejo de estado mediante stores.",
            "Creación de servicios para consumir APIs REST.",
            "Trabajo colaborativo bajo metodología Scrum."
        ],
        image: "/images/projects/zybus-web.png",
        gallery: [
            "/images/projects/zybus-web.png",
            "/images/projects/reserva.png",
            "/images/projects/web.comments.2.jpeg",
            "/images/projects/web.comments.jpeg",
            "/images/projects/web.tiquete.jpeg",
            "/images/projects/web.factura.jpeg",
            "/images/projects/soporte.png",

            "/images/projects/cookies.png",
        ],
        repositoryUrl: "https://github.com/FallasDev/Zybus-Frontend",
        demoUrl: "https://zybus-frontend-production.up.railway.app/",
        featured: true
    },
    {
        slug: "zybus-mobile",
        title: "Zybus App Móvil Pasajeros",
        category: "Móvil",
        shortDescription:
            "Aplicación móvil para pasajeros y administradores del sistema Zybus.",
        description:
            "Aplicación móvil multiplataforma desarrollada con React Native, Expo y TypeScript. Incluye autenticación, navegación, formularios, validaciones y conexión con servicios backend.",
        role: "Desarrolladora Frontend",
        year: "2025–2026",
        technologies: [
            "React Native",
            "Expo",
            "TypeScript",
            "JavaScript",
            "API REST",
            "GitHub"
        ],
        responsibilities: [
            "Diseño e implementación de vistas móviles.",
            "Manejo de navegación y estado.",
            "Creación de formularios y validaciones.",
            "Integración con servicios backend.",
            "Pruebas en dispositivos físicos."
        ],
        image: "/images/projects/logo.jpeg",
        gallery: [
            "/images/projects/app.log.jpeg",
            "/images/projects/app.3.jpeg",
            "/images/projects/app.2.jpeg",
            "/images/projects/app.1.jpeg",
            "/images/projects/app.6.jpeg",
            "/images/projects/app.5.jpeg",
        ],
        repositoryUrl: "https://github.com/FallasDev/Zybus-Frontend",
        demoUrl: "https://drive.google.com/drive/folders/1_4_IFnADDMus4eQdydowCUW4MXWjZ_q-?usp=drive_link",
        featured: true
    },
    {
        slug: "super-la-central",
        title: "SuperLaCentral",
        category: "Full Stack",
        shortDescription:
            "Sistema administrativo para la gestión operativa de un supermercado.",
        description:
            "Sistema administrativo desarrollado para gestionar inventario, productos, categorías, proveedores, promociones, compras y usuarios. Incluye integración entre Angular, ASP.NET Core y SQL Server.",
        role: "Desarrolladora Full Stack Junior",
        year: "2025–2026",
        technologies: [
            "Angular",
            "TypeScript",
            ".NET",
            "C#",
            "SQL Server",
            "API REST"
        ],
        responsibilities: [
            "Desarrollo de módulos CRUD.",
            "Creación de formularios y componentes reutilizables.",
            "Integración del frontend con APIs REST.",
            "Implementación de endpoints backend.",
            "Modelado y gestión de datos en SQL Server."
        ],
        image: "/images/projects/super-la-central.png",
        gallery: [
            "/images/projects/login.jpeg",
            "/images/projects/super-la-central.png",
            "/images/projects/listaUsuarios.jpeg",
        ],
        repositoryUrl: "https://github.com/FallasDev/Zybus-Frontend",
        demoUrl: "https://zybus-frontend-production.up.railway.app/",
        featured: true
    }
]