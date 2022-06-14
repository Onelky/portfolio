export interface Project {
    projectName: string,
    picture: string,
    technologies: string[],
    description: string,
    demoUrl: string,
    githubUrl: string
}

export const project1 = {
    projectName: 'MyTasks',
    picture: '#',
    technologies: ['Angular', 'TypeScript', 'Bootstrap', 'C Sharp', 'SQLite', 'Docker'],
    description: 'Web application that facilitates the management of pendant tasks and their classification.'  +
        '    This app includes a built-in pomodoro timer makes easier to track the time spent on each task and' +
        '    different ways of sorting/filtering created tasks.',
    demoUrl: 'https://mytasks-xi.vercel.app',
    githubUrl: 'https://github.com/Onelky/mytasksFront'
}