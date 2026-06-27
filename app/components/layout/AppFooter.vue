<template>
    <footer class="px-5 pb-6 pt-4 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-7xl border-t border-portfolio-border py-6">
            <div class="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <p class="text-sm text-portfolio-text">
                    © {{ currentYear }} Grimaldi Solano.
                </p>

                <div class="flex flex-wrap gap-3">
                    <template v-for="social in socialLinks" :key="social.label">
                        <NuxtLink v-if="social.isInternal" :to="social.url" :aria-label="social.label"
                            class="inline-flex items-center justify-center rounded-xl border border-portfolio-border px-4 py-2 text-sm font-semibold text-portfolio-text transition duration-200 hover:-translate-y-0.5 hover:border-portfolio-primary hover:text-portfolio-primary">
                            {{ social.text }}
                        </NuxtLink>

                        <a v-else :href="social.url" :aria-label="social.label" target="_blank"
                            rel="noopener noreferrer"
                            class="inline-flex items-center justify-center rounded-xl border border-portfolio-border px-4 py-2 text-sm font-semibold text-portfolio-text transition duration-200 hover:-translate-y-0.5 hover:border-portfolio-primary hover:text-portfolio-primary">
                            {{ social.text }}
                        </a>
                    </template>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socialLinks = [
    {
        label: "GitHub",
        text: "GitHub",
        url: "https://github.com/guriSan25",
        isInternal: false
    },
    {
        label: "LinkedIn",
        text: "LinkedIn",
        url: "https://www.linkedin.com/in/grimaldisolanot",
        isInternal: false
    },
    {
        label: "Correo electrónico",
        text: "Correo",
        url: "/contact",
        isInternal: true
    }
]
</script>