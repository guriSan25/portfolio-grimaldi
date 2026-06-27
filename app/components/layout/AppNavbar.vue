<script setup lang="ts">
const isMobileMenuOpen = ref(false)

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

const toggleMobileMenu = (): void => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = (): void => {
    isMobileMenuOpen.value = false
}
</script>

<template>
    <header class="px-5 pt-6 sm:px-8 lg:px-12">
        <nav class="mx-auto max-w-7xl rounded-2xl border border-portfolio-surface bg-portfolio-surface px-5 py-4 shadow-sm"
            aria-label="Navegación principal">
            <div class="flex items-center justify-between">
                <NuxtLink to="/"
                    class="text-xl font-bold tracking-tight text-portfolio-text! transition hover:text-portfolio-primary"
                    @click="closeMobileMenu">
                    Grimaldi
                </NuxtLink>

                <div class="hidden items-center gap-7 md:flex">
                    <NuxtLink v-for="link in navigationLinks" :key="link.to" :to="link.to"
                        class="text-sm font-medium text-portfolio-text! transition-colors duration-200 hover:text-portfolio-primary">
                        {{ link.label }}
                    </NuxtLink>
                </div>

                <button type="button"
                    class="flex h-10 w-10 items-center justify-center rounded-lg border border-portfolio-primary text-portfolio-primary md:hidden"
                    :aria-expanded="isMobileMenuOpen" aria-controls="mobile-menu" aria-label="Abrir menú de navegación"
                    @click="toggleMobileMenu">
                    <div class="flex flex-col gap-1">
                        <span class="block h-0.5 w-5 bg-current" />
                        <span class="block h-0.5 w-5 bg-current" />
                        <span class="block h-0.5 w-5 bg-current" />
                    </div>
                </button>
            </div>

            <div v-if="isMobileMenuOpen" id="mobile-menu" class="mt-5 border-t border-portfolio-border pt-5 md:hidden">
                <div class="flex flex-col gap-3">
                    <NuxtLink v-for="link in navigationLinks" :key="link.to" :to="link.to"
                        class="rounded-xl px-3 py-2 text-sm font-medium text-portfolio-text! transition hover:bg-portfolio-surface-high hover:text-portfolio-primary"
                        @click="closeMobileMenu">
                        {{ link.label }}
                    </NuxtLink>
                </div>
            </div>
        </nav>
    </header>
</template>