<template>
    <article class="rounded-3xl border border-portfolio-surface bg-portfolio-surface p-6 shadow-sm sm:p-7">
        <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
                <h2 class="text-2xl font-bold text-portfolio-text sm:text-3xl">
                    Tecnologías principales
                </h2>
            </div>
        </div>

        <div class="relative mt-8 overflow-hidden" aria-label="Carrusel de tecnologías">
            <div
                class="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-linear-to-r from-portfolio-surface to-transparent" />

            <div
                class="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-linear-to-l from-portfolio-surface to-transparent" />

            <div class="tech-marquee flex w-max items-center gap-12">
                <div v-for="technology in duplicatedTechnologies" :key="technology.id"
                    class="flex shrink-0 items-center gap-3 text-portfolio-muted transition hover:text-portfolio-text">
                    <span class="text-2xl">
                        {{ technology.icon }}
                    </span>

                    <span class="text-xl font-bold tracking-tight">
                        {{ technology.name }}
                    </span>
                </div>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
interface Technology {
    name: string
    icon: string
}

interface TechnologyCarouselItem extends Technology {
    id: string
}

const technologies: Technology[] = [
    {
        name: "Vue.js",
        icon: "◈"
    },
    {
        name: "Nuxt",
        icon: "△"
    },
    {
        name: "TypeScript",
        icon: "TS"
    },
    {
        name: "Angular",
        icon: "A"
    },
    {
        name: "React",
        icon: "⚛"
    },
    {
        name: "React Native",
        icon: "⚛"
    },
    {
        name: "Tailwind CSS",
        icon: "≈"
    },
    {
        name: ".NET",
        icon: "●"
    },
    {
        name: "FastAPI",
        icon: "⚡"
    },
    {
        name: "Git",
        icon: "⌁"
    }
]

const duplicatedTechnologies: TechnologyCarouselItem[] = [
    ...technologies.map((technology, index) => ({
        ...technology,
        id: `first-${index}`
    })),
    ...technologies.map((technology, index) => ({
        ...technology,
        id: `second-${index}`
    }))
]
</script>

<style scoped>
.tech-marquee {
    animation: tech-marquee 32s linear infinite;
}

.tech-marquee:hover {
    animation-play-state: paused;
}

@keyframes tech-marquee {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-50%);
    }
}
</style>