import * as tools from "./iconNames";

export interface Project {
    id: string,
    projectName: string,
    imagePath: string,
    technologies: string[],
    description: string,
    demoUrl: string,
    githubUrl: string
}

export const myTasks: Project = {
    id: 'myTasks',
    projectName: 'MyTasks',
    imagePath: 'mytasks',
    technologies: [tools.angular, tools.typescript, tools.bootstrap, tools.cSharp, tools.sqLite, tools.docker],
    description: 'Web application that facilitates the management of pendant tasks and their classification.'  +
        '    It includes a built-in pomodoro timer that makes easier to track the time spent on each task, alongside' +
        '    different ways of sorting/filtering created tasks.',
    demoUrl: 'https://mytasks-xi.vercel.app',
    githubUrl: 'https://github.com/Onelky/mytasksFront'
}
export const falcon: Project = {
    id: 'falcon',
    projectName: 'Falcon',
    imagePath: 'falcon',
    technologies: [tools.react, tools.javascript, tools.redux, tools.cSharp, tools.sqlServer],
    description: 'A web application that can be used to create, edit and control the organizational structure of a given institution. ' +
        'It also allows to identify and manage potential risks that could threat an organization, as well to apply controls for the prevention of said risks.' +
        ' Includes authentication and authorization features by using JWT tokens, so users can only visualize contents by their role. ',
    demoUrl: 'https://falcon-frontend.vercel.app',
    githubUrl: 'https://github.com/IDS33X/falcon-frontend'
}
export const projects: Project[] = [
    falcon,
    myTasks,
]