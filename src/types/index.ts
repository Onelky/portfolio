
export type ContactForm = {
    name: string
    email: string
    subject: string
    message: string
}

export interface MenuItem  {
    name: String
    icon: any,
    sectionId: string
}

export interface Project {
    id: string,
    projectName: string,
    imagePath: string,
    technologies: string[],
    description: string,
    demoUrl: string,
    githubUrl: string
}