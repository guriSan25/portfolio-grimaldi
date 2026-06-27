<template>
    <section class="px-5 py-8 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-7xl">
            <article
                class="mt-5 overflow-hidden rounded-3xl border border-portfolio-surface bg-portfolio-surface shadow-sm">
                <div class="grid gap-0 lg:grid-cols-[1.2fr_1fr]">
                    <button type="button"
                        class="group relative h-80 cursor-zoom-in overflow-hidden bg-portfolio-background text-left sm:h-95 lg:h-115"
                        :aria-label="`Abrir galería del proyecto ${project.title}`" @click="openGallery(0)">
                        <img :src="project.image" :alt="`Vista principal del proyecto ${project.title}`"
                            class="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]">

                        <div
                            class="absolute inset-0 flex items-end justify-end bg-black/0 p-5 transition group-hover:bg-black/10">
                            <span
                                class="rounded-xl bg-white/95 px-4 py-2 text-sm font-semibold text-portfolio-background opacity-0 shadow-md transition group-hover:opacity-100">
                                Ver galería
                            </span>
                        </div>
                    </button>

                    <div class="flex flex-col justify-center p-7 sm:p-10">
                        <p class="text-xs font-bold uppercase tracking-[0.18em] text-portfolio-accent">
                            {{ project.category }}
                        </p>

                        <h1 class="mt-3 text-3xl font-bold tracking-tight text-portfolio-text sm:text-4xl">
                            {{ project.title }}
                        </h1>

                        <p class="mt-5 leading-7 text-portfolio-muted">
                            {{ project.description }}
                        </p>

                        <dl class="mt-7 grid gap-5 sm:grid-cols-2">
                            <div>
                                <dt class="text-sm font-semibold text-portfolio-text">
                                    Mi función
                                </dt>

                                <dd class="mt-1 text-sm text-portfolio-muted">
                                    {{ project.role }}
                                </dd>
                            </div>

                            <div>
                                <dt class="text-sm font-semibold text-portfolio-text">
                                    Periodo
                                </dt>

                                <dd class="mt-1 text-sm text-portfolio-muted">
                                    {{ project.year }}
                                </dd>
                            </div>
                        </dl>

                        <div class="mt-7 flex flex-wrap gap-3">
                            <a v-if="
                                project.repositoryUrl &&
                                project.repositoryUrl !== '#'
                            " :href="project.repositoryUrl" target="_blank" rel="noopener noreferrer"
                                class="rounded-xl bg-portfolio-border px-5 py-2.5 text-sm font-semibold text-white! transition hover:bg-portfolio-accent">
                                Ver repositorio
                            </a>

                            <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" rel="noopener noreferrer"
                                class="rounded-xl border border-portfolio-border px-5 py-2.5 text-sm font-semibold text-portfolio-text! transition hover:border-portfolio-accent hover:text-portfolio-accent">
                                Visitar sitio web
                            </a>
                        </div>
                    </div>
                </div>
            </article>

            <div class="mt-6 grid gap-6 lg:grid-cols-[1fr_0.7fr]">
                <article class="rounded-3xl border border-portfolio-surface bg-portfolio-surface p-7 shadow-sm sm:p-8">

                    <h2 class="mt-2 text-2xl font-bold text-portfolio-text">
                        Responsabilidades principales
                    </h2>

                    <ul class="mt-6 space-y-4">
                        <li v-for="responsibility in project.responsibilities" :key="responsibility"
                            class="flex gap-3 text-sm leading-6 text-portfolio-muted">
                            <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-portfolio-accent" />

                            <span>
                                {{ responsibility }}
                            </span>
                        </li>
                    </ul>
                </article>

                <article class="rounded-3xl border border-portfolio-surface bg-portfolio-surface p-7 shadow-sm sm:p-8">

                    <h2 class="mt-2 text-2xl font-bold text-portfolio-text">
                        Tecnologías utilizadas
                    </h2>

                    <div class="mt-6 flex flex-wrap gap-3">
                        <span v-for="technology in project.technologies" :key="technology"
                            class="rounded-full border border-portfolio-surface bg-portfolio-background px-4 py-2 text-sm font-medium text-portfolio-text">
                            {{ technology }}
                        </span>
                    </div>
                </article>
            </div>
        </div>
        <ProjectGalleryModal v-if="isGalleryOpen" :images="galleryImages" :project-title="project.title"
            :initial-index="selectedImageIndex" @close="closeGallery" />
    </section>
</template>

<script setup lang="ts">
import ProjectGalleryModal from "../components/ProjectGalleryModal.vue"
import type { Project } from "../models/project.model"

interface Props {
    project: Project
}

const props = defineProps<Props>()

const isGalleryOpen = ref(false)
const selectedImageIndex = ref(0)

const galleryImages = computed(() => {
    if (props.project.gallery?.length) {
        return props.project.gallery
    }

    return [props.project.image]
})

const openGallery = (index = 0): void => {
    selectedImageIndex.value = index
    isGalleryOpen.value = true
}

const closeGallery = (): void => {
    isGalleryOpen.value = false
}
</script>