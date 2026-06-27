<template>
    <article
        class="flex h-full flex-col justify-center rounded-3xl border border-portfolio-surface bg-portfolio-surface p-7 shadow-sm sm:p-8 lg:p-10">
        <h2
            class="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-portfolio-text sm:text-4xl lg:text-5xl">
            Desarrollo interfaces web y móviles modernas y escalables.
        </h2>

        <p class="mt-5 max-w-3xl text-base leading-7 text-portfolio-muted">
            Soy estudiante de Informática Empresarial y desarrolladora de software
            junior, con experiencia práctica en frontend, integración de APIs REST y
            desarrollo de aplicaciones web y móviles.
        </p>

        <div class="mt-7 flex flex-wrap gap-4">
            <CvDownloadButton />

            <a href="#projects"
                class="inline-flex items-center justify-center rounded-xl border border-portfolio-border bg-portfolio-surface-high px-6 py-3 font-semibold text-portfolio-text transition duration-200 hover:-translate-y-0.5 hover:border-portfolio-accent hover:text-portfolio-accent">
                Ver proyectos
            </a>
        </div>

        <div class="mt-8 flex items-center gap-3 text-sm text-portfolio-muted">
            <span class="h-2.5 w-2.5 rounded-full bg-portfolio-success" />

            <span>
                Disponible para prácticas y oportunidades junior
            </span>
        </div>
    </article>
</template>

<script setup lang="ts">
import CvDownloadButton from "~/components/common/CvDownloadButton.vue"
</script>
