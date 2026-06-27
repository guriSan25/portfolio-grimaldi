export type ProjectCategory =
    | "Frontend"
    | "Full Stack"
    | "Móvil"

export interface Project {
    slug: string
    title: string
    category: ProjectCategory
    shortDescription: string
    description: string
    role: string
    year: string
    technologies: string[]
    responsibilities: string[]
    image: string
    gallery?: string[]
    repositoryUrl?: string
    demoUrl?: string
    featured: boolean
}