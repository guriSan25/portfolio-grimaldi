<template>
    <div class="flex flex-wrap gap-3" aria-label="Filtros de proyectos">
        <button v-for="category in categories" :key="category" type="button"
            class="rounded-xl border px-4 py-2 text-sm font-semibold transition" :class="selectedCategory === category
                ? 'border-portfolio-primary bg-portfolio-primary text-white'
                : 'border-portfolio-border bg-portfolio-surface text-portfolio-text hover:border-portfolio-accent '
                " @click="emit('select', category)">
            {{ category }}
        </button>
    </div>
</template>

<script setup lang="ts">
import type {
    ProjectCategory
} from "../models/project.model"

type FilterOption =
    | "Todos"
    | ProjectCategory

interface Props {
    categories: FilterOption[]
    selectedCategory: FilterOption
}

defineProps<Props>()

const emit = defineEmits<{
    select: [category: FilterOption]
}>()
</script>