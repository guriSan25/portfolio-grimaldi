<template>
    <article class="h-full rounded-3xl border border-portfolio-surface bg-portfolio-surface p-7 shadow-sm sm:p-8">

        <h2 class="mt-2 text-2xl font-bold text-portfolio-text">
            Hablemos
        </h2>

        <p class="mt-4 leading-7 text-portfolio-muted">
            Puedes contactarme para oportunidades junior, prácticas profesionales,
            proyectos colaborativos o consultas relacionadas con desarrollo de
            software.
        </p>

        <div class="mt-8 space-y-5">
            <div v-for="item in contactItems" :key="item.label"
                class="rounded-2xl border border-portfolio-border bg-portfolio-surface p-4 transition hover:border-portfolio-accent">
                <p class="text-xs font-semibold uppercase tracking-[0.14em] text-portfolio-muted">
                    {{ item.label }}
                </p>

                <a v-if="item.href" :href="item.href" target="_blank" rel="noopener noreferrer"
                    class="mt-2 block wrap-break-words font-medium text-portfolio-text! transition hover:text-portfolio-accent">
                    {{ item.value }}
                </a>

                <p v-else class="mt-2 font-medium text-portfolio-text">
                    {{ item.value }}
                </p>
            </div>
        </div>

        <div class="mt-7 flex items-center gap-3 rounded-2xl border border-portfolio-border bg-portfolio-surface p-4">
            <span class="h-2.5 w-2.5 shrink-0 rounded-full bg-green-500" />

            <p class="text-sm text-portfolio-text">
                Disponible para prácticas y oportunidades junior
            </p>
        </div>
    </article>
</template>

<script setup lang="ts">
const contactItems = [
    {
        label: "Ubicación",
        value: "Limón, Costa Rica",
        href: ""
    },
    {
        label: "Correo",
        value: "solanogrimaldi09@gmail.com",
        href: "mailto:solanogrimaldi09@gmail.com"
    },
    {
        label: "GitHub",
        value: "github.com/guriSan25",
        href: "https://github.com/guriSan25"
    },
    {
        label: "LinkedIn",
        value: "LinkedIn de Grimaldi Solano",
        href: "https://www.linkedin.com/in/grimaldisolanot"
    }
]
</script>
