<template>
    <section class="px-5 py-5 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-7xl">
            <div class="grid gap-4 lg:grid-cols-[0.8fr_2fr]">
                <ProfileCard />

                <AboutCard />
            </div>

            <div class="mt-4 grid gap-4 lg:grid-cols-2">
                <ExperienceCard />
                <EducationCard />
            </div>

            <div class="mt-4">
                <WorkStyleCard />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import ProfileCard from "~/modules/home/components/ProfileCard.vue"

import AboutCard from "../components/AboutCard.vue"
import EducationCard from "../components/EducationCard.vue"
import ExperienceCard from "../components/ExperienceCard.vue"
import WorkStyleCard from "../components/WorkStyleCard.vue"
</script>
