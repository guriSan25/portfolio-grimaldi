<template>
    <article
        class="group flex h-full flex-col overflow-hidden rounded-3xl border border-portfolio-surface bg-portfolio-surface shadow-sm transition duration-200 hover:-translate-y-1 hover:border-portfolio-accent">
        <div class="overflow-hidden bg-portfolio-background" :class="compact ? 'aspect-video' : 'aspect-16/10'">
            <img :src="project.image" :alt="`Vista del proyecto ${project.title}`"
                class="h-full w-full object-cover transition duration-300 group-hover:scale-105">
        </div>

        <div class="flex flex-1 flex-col" :class="compact ? 'p-5' : 'p-6'">
            <p class="text-xs font-bold uppercase tracking-[0.18em] text-portfolio-accent">
                {{ project.category }}
            </p>

            <h2 class="mt-2 font-bold text-portfolio-text" :class="compact ? 'text-lg' : 'text-xl'">
                {{ project.title }}
            </h2>

            <p class="mt-3 flex-1 text-sm leading-6 text-portfolio-muted">
                {{ project.shortDescription }}
            </p>

            <div class="mt-4 flex flex-wrap gap-2">
                <span v-for="technology in project.technologies.slice(0, 5)" :key="technology"
                    class="rounded-full border border-portfolio-border px-3 py-1 text-xs font-semibold text-portfolio-text">
                    {{ technology }}
                </span>
            </div>

            <div class="mt-5 flex flex-wrap gap-3">
                <NuxtLink :to="`/projects/${project.slug}`"
                    class="inline-flex items-center justify-center rounded-xl bg-portfolio-border px-4 py-2 text-sm font-semibold text-white! transition hover:bg-portfolio-accent">
                    Ver proyecto
                </NuxtLink>

                <a v-if="
                    !compact &&
                    project.demoUrl &&
                    project.demoUrl !== '#'
                " :href="project.demoUrl" target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center justify-center rounded-xl border border-portfolio-border px-4 py-2 text-sm font-semibold text-portfolio-text! transition hover:border-portfolio-accent hover:text-portfolio-accent">
                    Visitar sitio web
                </a>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
import type { Project } from "../models/project.model"

interface Props {
    project: Project
    compact?: boolean
}

withDefaults(defineProps<Props>(), {
    compact: false
})
</script>