<script setup lang="ts">
import type { Project } from "../models/project.model"
import ProjectCard from "./ProjectCard.vue"

interface Props {
    projects: Project[]
}

defineProps<Props>()
</script>

<template>
    <div v-if="projects.length" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
    </div>

    <div v-else class="rounded-3xl border border-portfolio-surface bg-portfolio-surface p-10 text-center">
        <h2 class="text-xl font-bold text-portfolio-text">
            No hay proyectos en esta categoría
        </h2>

        <p class="mt-2 text-portfolio-muted">
            Selecciona otro filtro para ver más proyectos.
        </p>
    </div>
</template>