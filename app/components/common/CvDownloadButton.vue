<template>
    <div class="relative">
        <button type="button"
            class="inline-flex items-center justify-center rounded-xl bg-portfolio-primary px-6 py-3 text-sm font-semibold text-white! transition duration-200 hover:-translate-y-0.5 hover:bg-portfolio-accent"
            @click="showCvOptions = !showCvOptions">
            Descargar CV

            <span class="ml-2 text-sm">
                ▾
            </span>
        </button>

        <div v-if="showCvOptions"
            class="absolute left-0 top-full z-20 mt-3 w-52 overflow-hidden rounded-xl border border-portfolio-border bg-portfolio-surface shadow-lg">
            <a href="/CV_Grimaldi_Solano_Tijerino_ATS_ESP.pdf" download="CV_Grimaldi_Solano_Tijerino_ATS_ESP.pdf"
                class="block px-4 py-3 text-sm font-medium text-portfolio-text transition hover:bg-portfolio-surface-high hover:text-portfolio-accent"
                @click="showCvOptions = false">
                CV en Español
            </a>

            <a href="/CV_Grimaldi_Solano_Tijerino_ATS_ENG.pdf" download="CV_Grimaldi_Solano_Tijerino_ATS_ENG.pdf"
                class="block px-4 py-3 text-sm font-medium text-portfolio-text transition hover:bg-portfolio-surface-high hover:text-portfolio-accent"
                @click="showCvOptions = false">
                CV in English
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
const showCvOptions = ref(false)
</script>
