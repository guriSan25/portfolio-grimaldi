<template>
    <section class="px-5 py-8 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-7xl">
            <header
                class="rounded-3xl border border-portfolio-surface bg-portfolio-surface p-7 text-center shadow-sm sm:p-10">

                <h1 class="mt-3 text-3xl font-bold tracking-tight text-portfolio-text sm:text-4xl">
                    Ponte en contacto conmigo
                </h1>

                <p class="mx-auto mt-4 max-w-2xl leading-7 text-portfolio-muted">
                    Estoy abierta a nuevas oportunidades, prácticas profesionales,
                    proyectos colaborativos y conversaciones sobre desarrollo de software.
                </p>
            </header>

            <div class="mt-6 grid items-stretch gap-6 lg:grid-cols-[0.75fr_1.5fr]">
                <ContactInfoCard />
                <ContactForm />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import ContactForm from "../components/ContactForm.vue"
import ContactInfoCard from "../components/ContactInfoCard.vue"
</script>