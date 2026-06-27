import { projects } from "../data/projects.data"
import type { Project } from "../models/project.model"

export const findProjectBySlug = (
    slug: string
): Project | undefined => {
    return projects.find(
        project => project.slug === slug
    )
}