<template>
    <section id="projects" class="px-5 py-2 sm:px-8 lg:px-12">
        <div
            class="mx-auto max-w-7xl rounded-3xl border border-portfolio-surface bg-portfolio-surface p-6 shadow-sm sm:p-8">
            <header class="mx-auto max-w-2xl text-center">

                <h2 class="mt-2 text-3xl font-bold tracking-tight text-portfolio-text sm:text-4xl">
                    Proyectos destacados
                </h2>

                <p class="mt-3 text-sm leading-6 text-portfolio-muted sm:text-base">
                    Una selección de proyectos web y móviles desarrollados
                    durante mi formación académica y experiencia colaborativa.
                </p>
            </header>

            <div class="mt-7 flex flex-wrap justify-center gap-5" aria-label="Filtros de proyectos destacados">
                <button v-for="category in categories" :key="category" type="button"
                    class="relative pb-2 text-sm font-medium transition" :class="selectedCategory === category
                        ? 'text-portfolio-text'
                        : 'text-portfolio-muted hover:text-portfolio-accent'
                        " @click="selectCategory(category)">
                    {{ category }}

                    <span v-if="selectedCategory === category"
                        class="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-portfolio-accent" />
                </button>
            </div>

            <div v-if="featuredProjects.length" class="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                <NuxtLink v-for="project in featuredProjects" :key="project.slug" :to="`/projects/${project.slug}`"
                    class="group overflow-hidden rounded-2xl border border-portfolio-border bg-portfolio-background transition duration-200 hover:-translate-y-1 hover:border-portfolio-accent hover:bg-white">
                    <div class="aspect-16/10 overflow-hidden">
                        <img :src="project.image" :alt="`Vista del proyecto ${project.title}`"
                            class="h-full w-full object-cover transition duration-300 group-hover:scale-105">
                    </div>

                    <div class="p-4">
                        <p class="text-xs font-medium text-portfolio-muted">
                            {{ project.category }}
                        </p>

                        <h3
                            class="mt-1 text-lg font-semibold text-portfolio-text transition group-hover:text-portfolio-accent">
                            {{ project.title }}
                        </h3>
                    </div>
                </NuxtLink>
            </div>

            <div v-else class="mt-8 rounded-2xl border border-dashed border-portfolio-border p-8 text-center">
                <p class="text-portfolio-muted">
                    No hay proyectos destacados en esta categoría.
                </p>
            </div>

            <div class="mt-8 flex justify-center">
                <NuxtLink to="/projects"
                    class="inline-flex items-center justify-center rounded-xl bg-portfolio-border px-5 py-2.5 text-sm font-semibold text-white! transition hover:bg-portfolio-surface-high">
                    Ver todos los proyectos
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"

import { projects } from "../../projects/data/projects.data"
import type {
    Project,
    ProjectCategory
} from "../../projects/models/project.model"

type FilterOption =
    | "Todos"
    | ProjectCategory

const categories: FilterOption[] = [
    "Todos",
    "Frontend",
    "Full Stack",
    "Móvil"
]

const selectedCategory = ref<FilterOption>("Todos")

const featuredProjects = computed<Project[]>(() => {
    const featured = projects.filter(
        project => project.featured
    )

    if (selectedCategory.value === "Todos") {
        return featured
    }

    return featured.filter(
        project =>
            project.category === selectedCategory.value
    )
})

const selectCategory = (
    category: FilterOption
): void => {
    selectedCategory.value = category
}
</script>