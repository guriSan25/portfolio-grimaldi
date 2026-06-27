<template>
    <article class="h-full rounded-3xl border border-portfolio-surface bg-portfolio-surface p-7 shadow-sm sm:p-8">
        <h2 class="text-2xl font-bold text-portfolio-text">
            Experiencia académica y colaborativa
        </h2>

        <div class="mt-7 space-y-6">
            <div v-for="experience in experiences" :key="experience.title"
                class="border-b border-portfolio-border pb-5 last:border-b-0 last:pb-0">
                <p class="text-sm font-medium text-portfolio-primary">
                    {{ experience.period }}
                </p>

                <h3 class="mt-2 font-semibold text-portfolio-text">
                    {{ experience.title }}
                </h3>

                <p class="mt-2 text-sm leading-6 text-portfolio-muted">
                    {{ experience.description }}
                </p>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
const experiences = [
    {
        period: "2025 - 2026",
        title: "Desarrolladora Frontend - Zybus Web",
        description:
            "Desarrollo de vistas administrativas, pasajeros, compañías, componentes reutilizables, formularios, validaciones y consumo de APIs REST."
    },
    {
        period: "2025 - 2026",
        title: "Desarrolladora Móvil - Zybus App",
        description:
            "Construcción de interfaces móviles, navegación, formularios y pruebas en dispositivos físicos con React Native y Expo."
    },
    {
        period: "2025 - 2026",
        title: "Desarrolladora Full Stack Junior - SuperLaCentral",
        description:
            "Desarrollo de módulos CRUD de Inventarios, integración frontend-backend."
    }
]
</script>

