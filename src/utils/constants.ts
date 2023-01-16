import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import {MenuItem, Project} from "../types";

export const NAME: string = 'Onelky';

export const HEADER_PARAGRAPH: string = 'Hello! My name is Onelky and I like creating things \
that live on the internet. Deeply invested in the continuous learning mentality, \
I\'m a full-stack developer specializing in building (and sometimes designing) responsive \
layouts that brings ideas into a digital reality using the most adequate technologies for \
each case, always prioritizing good performance and user experience.'

export const angular: string = 'Angular';
export const bootstrap: string = 'Bootstrap';
export const cSharp: string = 'C Sharp';
export const css: string = 'CSS';
export const docker: string = 'Docker';
export const expressJs: string = 'ExpressJs';
export const figma: string = 'Figma';
export const git: string = 'Git';
export const github: string = 'Github';
export const graphQL: string = 'GraphQL';
export const javascript: string = 'JavaScript';
export const jest: string = 'Jest';
export const demo: string = 'Demo';
export const linkedIn: string = 'LinkedIn';
export const email: string = 'Email';
export const html: string = 'HTML';
export const materialUI: string = 'Material UI';
export const mongo: string = 'MongoDB';
export const mySql: string = 'MySQL';
export const nextJs: string = 'NextJs';
export const nodeJs: string = 'NodeJs';
export const python: string = 'Python';
export const react: string = 'React';
export const redux: string = 'Redux';
export const sqLite: string = 'SQLite';
export const sqlServer: string = 'SQL Server';
export const typescript: string = 'TypeScript';
export const cypress: string = 'Cypress';

export const menuItems: MenuItem[] = [
    {name: 'Home', icon: HomeOutlinedIcon, sectionId: 'header'},
    {name: 'About', icon: PersonOutlineOutlinedIcon, sectionId: 'about'},
    {name: 'Skills', icon: BookOutlinedIcon, sectionId: 'skills'},
    {name: 'Projects', icon: CodeOutlinedIcon, sectionId: 'projects'},
    {name: 'Contact', icon: MessageOutlinedIcon, sectionId: 'contact'},
];
export enum LinePositions {
    right = 'right',
    left = 'left',
    rightLeft = 'rightLeft'
}

// PROJECTS

export const myTasks: Project = {
    id: 'myTasks',
    projectName: 'MyTasks',
    imagePath: 'mytasks',
    technologies: [angular, typescript, bootstrap, cSharp, sqLite, docker],
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
    technologies: [react, javascript, redux, cSharp, sqlServer],
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

// SKILL CARDS

export const skillCards  = [
    {
        title: 'Front-end',
        icons: [
            html,
            css,
            javascript,
            typescript,
            react,
            redux,
            nextJs,
            angular
        ]
    },
    {
        title: 'Back-end',
        icons: [
            nodeJs,
            expressJs,
            cSharp,
            python,
            mongo,
            mySql,
            sqlServer
        ]
    },
    {
        title: 'Other tools',
        icons: [
            docker,
            git,
            graphQL,
            figma,
            jest,
            cypress
        ]
    }
];

