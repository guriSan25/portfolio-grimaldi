<template>
    <article class="rounded-3xl border border-portfolio-surface bg-portfolio-surface p-7 shadow-sm sm:p-8">
        <h2 class="mt-2 text-2xl font-bold text-portfolio-text sm:text-3xl">
            Cómo aporto en un equipo de desarrollo
        </h2>

        <div class="mt-6 grid gap-4 md:grid-cols-2">
            <div v-for="strength in strengths" :key="strength"
                class="flex gap-3 rounded-2xl border border-portfolio-border bg-portfolio-surface-high p-4">
                <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-portfolio-primary" />

                <p class="text-sm leading-6 text-portfolio-muted">
                    {{ strength }}
                </p>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
const strengths = [
    "Adaptabilidad y rápida adopción de nuevas tecnologías.",
    "Trabajo colaborativo con control de versiones en GitHub.",
    "Desarrollo basado en componentes reutilizables.",
    "Enfoque en interfaces responsivas y experiencia de usuario.",
    "Capacidad para analizar requerimientos y convertirlos en soluciones."
]
</script>
