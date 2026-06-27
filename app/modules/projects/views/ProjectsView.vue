<script setup lang="ts">
import { computed, ref } from "vue"

import ProjectFilters from "../components/ProjectFilters.vue"
import ProjectsGrid from "../components/ProjectsGrid.vue"
import {
    projectCategories,
    projects
} from "../data/projects.data"
import type {
    ProjectCategory
} from "../models/project.model"

type FilterOption =
    | "Todos"
    | ProjectCategory

const selectedCategory = ref<FilterOption>("Todos")

const filteredProjects = computed(() => {
    if (selectedCategory.value === "Todos") {
        return projects
    }

    return projects.filter(
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

<template>
    <section class="px-5 py-8 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-7xl">
            <div class="rounded-3xl border border-portfolio-surface bg-portfolio-surface p-7 shadow-sm sm:p-10">

                <h1 class="mt-3 text-3xl font-bold tracking-tight text-portfolio-text sm:text-4xl">
                    Proyectos
                </h1>

                <p class="mt-4 max-w-3xl leading-7 text-portfolio-muted">
                    Una selección de aplicaciones web, móviles y
                    full stack desarrolladas durante mi formación
                    académica y experiencia colaborativa.
                </p>

                <div class="mt-7">
                    <ProjectFilters :categories="projectCategories" :selected-category="selectedCategory"
                        @select="selectCategory" />
                </div>
            </div>

            <div class="mt-6">
                <ProjectsGrid :projects="filteredProjects" />
            </div>
        </div>
    </section>
</template>