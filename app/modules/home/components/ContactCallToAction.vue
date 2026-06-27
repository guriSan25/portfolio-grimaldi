<template>
    <section class="px-5 py-6 sm:px-8 lg:px-12">
        <div
            class="mx-auto max-w-7xl rounded-3xl border border-portfolio-surface bg-portfolio-surface px-6 py-12 text-center shadow-sm sm:px-10 sm:py-16">

            <h2
                class="mx-auto mt-3 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-portfolio-text sm:text-4xl">
                ¿Tienes una oportunidad, proyecto o idea en la que pueda colaborar?
            </h2>

            <p class="mx-auto mt-4 max-w-2xl text-sm leading-7 text-portfolio-muted sm:text-base">
                Estoy disponible para prácticas profesionales, oportunidades junior
                y proyectos relacionados con desarrollo web y aplicaciones móviles.
            </p>

            <div class="mt-7 flex flex-wrap justify-center gap-4">
                <NuxtLink to="/contact"
                    class="inline-flex items-center justify-center rounded-xl bg-portfolio-primary px-6 py-3 text-sm font-semibold text-white! transition duration-200 hover:-translate-y-0.5 hover:bg-portfolio-accent">
                    Contactarme
                </NuxtLink>
            </div>
        </div>
    </section>
</template>