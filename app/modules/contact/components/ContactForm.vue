<template>
    <article class="rounded-3xl border border-portfolio-surface bg-portfolio-surface p-7 shadow-sm sm:p-8">
        <h2 class="text-2xl font-bold text-portfolio-text">
            Envíame un mensaje
        </h2>

        <p class="mt-3 text-sm leading-6 text-portfolio-muted">
            Completa el formulario y el mensaje llegará directamente a mi correo.
        </p>

        <form class="mt-7 space-y-5" @submit.prevent="submitForm">
            <div>
                <label for="name" class="text-sm font-semibold text-portfolio-text">
                    Nombre
                </label>

                <input id="name" v-model="form.name" type="text" name="name" placeholder="Tu nombre" autocomplete="name"
                    class="mt-2 w-full rounded-xl border border-portfolio-border bg-portfolio-surface-high px-4 py-3 text-sm text-portfolio-text outline-none transition placeholder:text-portfolio-muted focus:border-portfolio-primary">

                <p v-if="errors.name" class="mt-2 text-sm text-red-400">
                    {{ errors.name }}
                </p>
            </div>

            <div>
                <label for="email" class="text-sm font-semibold text-portfolio-text">
                    Correo
                </label>

                <input id="email" v-model="form.email" type="email" name="email" placeholder="tu@email.com"
                    autocomplete="email"
                    class="mt-2 w-full rounded-xl border border-portfolio-border bg-portfolio-surface-high px-4 py-3 text-sm text-portfolio-text outline-none transition placeholder:text-portfolio-muted focus:border-portfolio-primary">

                <p v-if="errors.email" class="mt-2 text-sm text-red-400">
                    {{ errors.email }}
                </p>
            </div>

            <div>
                <label for="subject" class="text-sm font-semibold text-portfolio-text">
                    Asunto
                </label>

                <input id="subject" v-model="form.subject" type="text" name="subject"
                    placeholder="Oportunidad laboral, proyecto, consulta..." autocomplete="off"
                    class="mt-2 w-full rounded-xl border border-portfolio-border bg-portfolio-surface-high px-4 py-3 text-sm text-portfolio-text outline-none transition placeholder:text-portfolio-muted focus:border-portfolio-primary">

                <p v-if="errors.subject" class="mt-2 text-sm text-red-400">
                    {{ errors.subject }}
                </p>
            </div>

            <div>
                <label for="message" class="text-sm font-semibold text-portfolio-text">
                    Mensaje
                </label>

                <textarea id="message" v-model="form.message" name="message" rows="6"
                    placeholder="Escribe tu mensaje..." autocomplete="off"
                    class="mt-2 w-full resize-none rounded-xl border border-portfolio-border bg-portfolio-surface-high px-4 py-3 text-sm text-portfolio-text outline-none transition placeholder:text-portfolio-muted focus:border-portfolio-primary"></textarea>

                <p v-if="errors.message" class="mt-2 text-sm text-red-400">
                    {{ errors.message }}
                </p>
            </div>

            <button type="submit" :disabled="submissionState === 'loading'"
                class="inline-flex min-w-40 items-center justify-center rounded-xl bg-portfolio-primary px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-portfolio-accent disabled:cursor-not-allowed disabled:opacity-60">
                <span v-if="submissionState === 'loading'">
                    Enviando...
                </span>

                <span v-else>
                    Enviar mensaje
                </span>
            </button>

            <p v-if="responseMessage" class="rounded-xl border px-4 py-3 text-sm" :class="submissionState === 'success'
                    ? 'border-green-500/30 bg-green-500/10 text-green-300'
                    : 'border-red-500/30 bg-red-500/10 text-red-300'
                ">
                {{ responseMessage }}
            </p>
        </form>
    </article>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"

interface ContactFormData {
    name: string
    email: string
    subject: string
    message: string
}

interface ContactFormErrors {
    name?: string
    email?: string
    subject?: string
    message?: string
}

interface Web3FormsResponse {
    success: boolean
    message?: string
}

type SubmissionState =
    | "idle"
    | "loading"
    | "success"
    | "error"

const config = useRuntimeConfig()

const form = reactive<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
})

const errors = reactive<ContactFormErrors>({})

const submissionState = ref<SubmissionState>("idle")
const responseMessage = ref("")

const clearErrors = (): void => {
    errors.name = undefined
    errors.email = undefined
    errors.subject = undefined
    errors.message = undefined
}

const resetForm = (): void => {
    form.name = ""
    form.email = ""
    form.subject = ""
    form.message = ""
}

const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const validateForm = (): boolean => {
    clearErrors()

    if (!form.name.trim()) {
        errors.name = "Ingresa tu nombre."
    }

    if (!form.email.trim()) {
        errors.email = "Ingresa tu correo."
    } else if (!isValidEmail(form.email)) {
        errors.email = "Ingresa un correo válido."
    }

    if (!form.subject.trim()) {
        errors.subject = "Ingresa un asunto."
    }

    if (!form.message.trim()) {
        errors.message = "Escribe un mensaje."
    } else if (form.message.trim().length < 10) {
        errors.message = "El mensaje debe tener al menos 10 caracteres."
    }

    return !Object.values(errors).some(Boolean)
}

const submitForm = async (): Promise<void> => {
    submissionState.value = "idle"
    responseMessage.value = ""

    if (!validateForm()) {
        return
    }

    const accessKey = String(
        config.public.web3FormsAccessKey ?? ""
    )

    if (!accessKey) {
        submissionState.value = "error"
        responseMessage.value =
            "El formulario no está configurado correctamente."
        return
    }

    submissionState.value = "loading"

    try {
        const response = await $fetch<Web3FormsResponse>(
            "https://api.web3forms.com/submit",
            {
                method: "POST",
                body: {
                    access_key: accessKey,
                    name: form.name.trim(),
                    email: form.email.trim(),
                    subject: `Portafolio: ${form.subject.trim()}`,
                    message: form.message.trim(),
                    replyto: form.email.trim(),
                    botcheck: ""
                }
            }
        )

        if (!response.success) {
            throw new Error(
                response.message ?? "No se pudo enviar el mensaje."
            )
        }

        submissionState.value = "success"
        responseMessage.value =
            "Tu mensaje fue enviado correctamente."
        resetForm()
    } catch {
        submissionState.value = "error"
        responseMessage.value =
            "No se pudo enviar el mensaje. Inténtalo nuevamente."
    }
}
</script>