<script setup lang="ts">
import AppFooter from "~/components/layout/AppFooter.vue"
import AppNavbar from "~/components/layout/AppNavbar.vue"
</script>

<template>
    <div class="min-h-screen bg-portfolio-background text-portfolio-primary">
        <AppNavbar />

        <main>
            <slot />
        </main>

        <AppFooter />
    </div>
</template>