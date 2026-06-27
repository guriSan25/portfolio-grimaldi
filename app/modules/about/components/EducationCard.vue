<template>
    <article class="h-full rounded-3xl border border-portfolio-border bg-portfolio-surface p-7 shadow-sm sm:p-8">
        <h2 class="text-2xl font-bold text-portfolio-text">
            Educación
        </h2>

        <div class="mt-7 space-y-6">
            <div v-for="education in educationItems" :key="education.title"
                class="border-b border-portfolio-border pb-5 last:border-b-0 last:pb-0">
                <p class="text-sm font-medium text-portfolio-primary">
                    {{ education.period }}
                </p>

                <h3 class="mt-2 font-semibold text-portfolio-text">
                    {{ education.title }}
                </h3>

                <p class="mt-2 text-sm leading-6 text-portfolio-muted">
                    {{ education.institution }}
                </p>

                <p class="mt-2 text-sm leading-6 text-portfolio-muted">
                    {{ education.description }}
                </p>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
const educationItems = [
    {
        period: "Marzo 2022 - Marzo 2027",
        title: "Bachillerato en Informática Empresarial",
        institution: "Universidad de Costa Rica",
        description:
            "Formación en programación, bases de datos, desarrollo web, ingeniería de software, redes, administración de proyectos y sistemas empresariales."
    },
    {
        period: "Idiomas",
        title: "Español nativo · Inglés B2",
        institution: "Comunicación y documentación técnica",
        description:
            "Capacidad para leer documentación técnica, utilizar herramientas en inglés y comprender recursos relacionados con desarrollo de software."
    }
]
</script>