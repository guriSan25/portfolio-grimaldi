<template>
    <Teleport to="body">
        <dialog open
            class="fixed inset-0 z-50 flex h-screen w-screen max-w-none items-center justify-center border-0 bg-black/80 p-4 backdrop-blur-sm"
            :aria-label="`Galería del proyecto ${projectTitle}`" @click.self="emit('close')">
            <div class="relative flex h-full max-h-[92vh] w-full max-w-6xl flex-col">
                <div class="mb-4 flex items-center justify-between text-white">
                    <div>
                        <h2 class="text-lg font-semibold">
                            {{ projectTitle }}
                        </h2>

                        <p class="mt-1 text-sm text-white/70">
                            Imagen {{ currentIndex + 1 }} de {{ images.length }}
                        </p>
                    </div>

                    <button type="button"
                        class="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20"
                        aria-label="Cerrar galería" @click="emit('close')">
                        ×
                    </button>
                </div>

                <div
                    class="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-2xl bg-black">
                    <img v-if="currentImage" :src="currentImage"
                        :alt="`Captura ${currentIndex + 1} del proyecto ${projectTitle}`"
                        class="max-h-full max-w-full object-contain">

                    <template v-if="images.length > 1">
                        <button type="button"
                            class="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-2xl text-white transition hover:bg-black/70"
                            aria-label="Imagen anterior" @click="showPrevious">
                            ‹
                        </button>

                        <button type="button"
                            class="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-2xl text-white transition hover:bg-black/70"
                            aria-label="Imagen siguiente" @click="showNext">
                            ›
                        </button>
                    </template>
                </div>

                <div v-if="images.length > 1" class="mt-4 flex gap-3 overflow-x-auto pb-2">
                    <button v-for="(image, index) in images" :key="image" type="button"
                        class="shrink-0 overflow-hidden rounded-xl border-2 transition" :class="currentIndex === index
                            ? 'border-portfolio-accent'
                            : 'border-transparent opacity-60 hover:opacity-100'
                            " :aria-label="`Ver imagen ${index + 1}`" @click="currentIndex = index">
                        <img :src="image" :alt="`Miniatura ${index + 1} de ${projectTitle}`"
                            class="h-20 w-32 object-cover">
                    </button>
                </div>
            </div>
        </dialog>
    </Teleport>
</template>

<script setup lang="ts">
interface Props {
    images: string[]
    projectTitle: string
    initialIndex?: number
}

const props = withDefaults(defineProps<Props>(), {
    initialIndex: 0
})

const emit = defineEmits<{
    close: []
}>()

const currentIndex = ref(props.initialIndex)

const currentImage = computed(() => {
    return props.images[currentIndex.value]
})

const showPrevious = (): void => {
    currentIndex.value =
        currentIndex.value === 0
            ? props.images.length - 1
            : currentIndex.value - 1
}

const showNext = (): void => {
    currentIndex.value =
        currentIndex.value === props.images.length - 1
            ? 0
            : currentIndex.value + 1
}

const handleKeydown = (event: KeyboardEvent): void => {
    if (event.key === "Escape") {
        emit("close")
    }

    if (event.key === "ArrowLeft") {
        showPrevious()
    }

    if (event.key === "ArrowRight") {
        showNext()
    }
}

onMounted(() => {
    document.body.style.overflow = "hidden"
    globalThis.addEventListener("keydown", handleKeydown)
})

onUnmounted(() => {
    document.body.style.overflow = ""
    globalThis.removeEventListener("keydown", handleKeydown)
})
</script>