<template>
    <header class="px-5 pt-6 sm:px-8 lg:px-12">
        <nav class="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-portfolio-surface bg-portfolio-surface px-5 py-4 shadow-sm"
            aria-label="Navegación principal">
            <NuxtLink to="/" class="text-xl font-bold tracking-tight text-portfolio-text!">
                Grimaldi
            </NuxtLink>

            <div class="hidden items-center gap-7 md:flex">
                <NuxtLink v-for="link in navigationLinks" :key="link.to" :to="link.to"
                    class="text-sm font-medium text-portfolio-text! transition-colors duration-200 hover:text-portfolio-primary"
                    exact-active-class="text-portfolio-primary">
                    {{ link.label }}
                </NuxtLink>
            </div>

            <button type="button" class="rounded-lg border border-portfolio-accent p-2 text-portfolio-primary md:hidden"
                aria-label="Abrir menú de navegación">
                <span class="block h-0.5 w-5 bg-current" />
                <span class="mt-1 block h-0.5 w-5 bg-current" />
                <span class="mt-1 block h-0.5 w-5 bg-current" />
            </button>
        </nav>
    </header>
</template>

<script setup lang="ts">
const navigationLinks = [
    {
        label: "Inicio",
        to: "/"
    },
    {
        label: "Sobre mí",
        to: "/about"
    },
    {
        label: "Proyectos",
        to: "/projects"
    },
    {
        label: "Contacto",
        to: "/contact"
    }
]
</script>
