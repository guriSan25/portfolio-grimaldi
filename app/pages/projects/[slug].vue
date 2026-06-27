<script setup lang="ts">
import {
    findProjectBySlug,
    ProjectDetailView
} from "~/modules/projects"

const route = useRoute()

const slug = computed(() =>
    String(route.params.slug)
)

const project = computed(() =>
    findProjectBySlug(slug.value)
)

if (!project.value) {
    throw createError({
        statusCode: 404,
        statusMessage: "Proyecto no encontrado"
    })
}

useSeoMeta({
    title: () =>
        `${project.value?.title ?? "Proyecto"} | Grimaldi Solano`,

    description: () =>
        project.value?.shortDescription ?? ""
})
</script>

<template>
    <ProjectDetailView v-if="project" :project="project" />
</template>