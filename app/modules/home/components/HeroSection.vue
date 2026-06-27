<template>
    <section class="px-5 py-6 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-7xl">
            <div class="grid items-stretch gap-6 lg:grid-cols-[0.8fr_2fr]">
                <ProfileCard />
                <IntroCard />
            </div>

            <div class="mt-6">
                <TechStackCard />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import IntroCard from "./IntroCard.vue"
import ProfileCard from "./ProfileCard.vue"
import TechStackCard from "./TechStackCard.vue"
</script>
