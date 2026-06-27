<template>
    <article
        class="flex h-full flex-col rounded-3xl border border-portfolio-surface bg-portfolio-surface p-5 shadow-sm sm:p-6">
        <div
            class="relative flex min-h-64 items-center justify-center overflow-hidden rounded-2xl bg-portfolio-background">
            <img src="/images/profile/grimaldi.jpeg" alt="Foto de perfil de Grimaldi Solano"
                class="h-52 w-52 rounded-full border-4 border-portfolio-border object-cover shadow-lg" />

            <span
                class="absolute bottom-4 right-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-portfolio-surface shadow-sm">
                Costa Rica
            </span>
        </div>

        <div class="mt-5 text-center">
            <h1 class="text-2xl font-bold tracking-tight text-portfolio-text">
                Grimaldi Solano
            </h1>

            <p class="mt-2 text-sm leading-6 text-portfolio-muted">
                Desarrolladora de Software Junior
            </p>
        </div>

        <div class="mt-5 flex items-center justify-center gap-3">
            <a v-for="social in socialLinks" :key="social.label" :href="social.url" :aria-label="social.label"
                target="_blank" rel="noopener noreferrer"
                class="flex h-10 w-10 items-center justify-center rounded-xl border border-portfolio-border bg-portfolio-border text-xs font-bold text-portfolio-text! transition duration-200 hover:-translate-y-1 hover:border-portfolio-accent hover:text-portfolio-accent">
                {{ social.abbreviation }}
            </a>
        </div>
    </article>
</template>

<script setup lang="ts">
const socialLinks = [
    {
        label: "GitHub",
        abbreviation: "GH",
        url: "https://github.com/guriSan25"
    },
    {
        label: "LinkedIn",
        abbreviation: "IN",
        url: "#"
    },
    {
        label: "Correo electrónico",
        abbreviation: "@",
        url: "mailto:solanogrimaldi09@gmail.com"
    }
]
</script>
