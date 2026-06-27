<template>
    <article class="rounded-3xl border border-portfolio-surface bg-portfolio-surface p-7 shadow-sm sm:p-8">

        <h1 class="mt-3 text-3xl font-bold tracking-tight text-portfolio-text sm:text-4xl">
            Soy Grimaldi Solano, desarrolladora de software junior.
        </h1>

        <div class="mt-5 space-y-4 leading-7 text-portfolio-muted">
            <p>
                Soy estudiante de último año de Bachillerato en Informática Empresarial en la
                Universidad de Costa Rica, con experiencia práctica en desarrollo de
                frontend, backend, aplicaciones móviles e integración con APIs REST.
            </p>

            <p>
                Me enfoco en crear interfaces limpias, responsivas y fáciles de usar,
                aplicando buenas prácticas de organización, componentes reutilizables
                y control de versiones con Git y GitHub.
            </p>

            <p>
                He participado en proyectos académicos y colaborativos como Zybus,
                SuperLaCentral y aplicaciones móviles, trabajando con tecnologías como
                Vue.js, Nuxt, Angular, React Native, TypeScript, .NET y SQL Server.
            </p>
        </div>

        <div class="mt-7 flex flex-wrap gap-3">
            <CvDownloadButton />
            <NuxtLink to="/contact"
                class="inline-flex items-center justify-center rounded-xl bg-portfolio-surface border border-portfolio-border hover:border-portfolio-primary px-6 py-3 text-sm font-semibold text-white! transition duration-200 hover:-translate-y-0.5">
                Contactarme
            </NuxtLink>

        </div>
    </article>
</template>

<script setup lang="ts">
import CvDownloadButton from "~/components/common/CvDownloadButton.vue"
</script>