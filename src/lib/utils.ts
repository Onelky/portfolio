import GithubSvg from '../../public/icons/github.svg'
import LinkedInSvg from '../../public/icons/linkedIn.svg'
import EmailSvg from '../../public/icons/email.svg'
import HtmlSvg from '../../public/icons/html.svg'
import AngularSvg from '../../public/icons/angular.svg'
import BootstrapSvg from '../../public/icons/bootstrap.svg'
import CSharp from '../../public/icons/cSharp.svg'
import Css from '../../public/icons/css.svg'
import Docker from '../../public/icons/docker.svg'
import ExpressJs from '../../public/icons/expressJs.svg'
import Figma from '../../public/icons/figma.svg'
import Git from '../../public/icons/git.svg'
import GraphQL from '../../public/icons/graphQL.svg'
import Javascript from '../../public/icons/javascript.svg'
import Jest from '../../public/icons/jest.svg'
import LinkDemo from '../../public/icons/linkDemo.svg'
import MaterialUI from '../../public/icons/materialUI.svg'
import Mongo from '../../public/icons/mongo.svg'
import MySql from '../../public/icons/mySql.svg'
import NextJs from '../../public/icons/nextJs.svg'
import NodeJs from '../../public/icons/nodeJs.svg'
import Python from '../../public/icons/python.svg'
import React from '../../public/icons/react.svg'
import Redux from '../../public/icons/redux.svg'
import SqLite  from '../../public/icons/sqlite.svg'
import SqlServer from '../../public/icons/sqlServer.svg'
import Typescript from '../../public/icons/typescript.svg'
import Cypress from '../../public/icons/cypress.svg'


import {
    email,
    github,
    linkedIn,
    html,
    angular,
    bootstrap,
    cSharp,
    css,
    docker,
    expressJs, figma, git, graphQL, javascript, linkDemo,
    jest, materialUI, mongo, mySql, nextJs, nodeJs, python, react, redux, sqLite, sqlServer, typescript, cypress
} from "../constants/iconNames";

const getIconImage = (iconName) => {
    if (iconName === angular) return AngularSvg;
    if (iconName === bootstrap) return BootstrapSvg;
    if (iconName === cSharp) return CSharp;
    if (iconName === css) return Css;
    if (iconName === docker) return Docker;
    if (iconName === expressJs) return ExpressJs;
    if (iconName === figma) return Figma;
    if (iconName === git) return Git;
    if (iconName === graphQL) return GraphQL;
    if (iconName === javascript) return Javascript;
    if (iconName === jest) return Jest;
    if (iconName === linkDemo) return LinkDemo;
    if (iconName === materialUI) return MaterialUI;
    if (iconName === Mongo) return mongo;
    if (iconName === mySql) return MySql;
    if (iconName === nextJs) return NextJs;
    if (iconName === nodeJs) return NodeJs;
    if (iconName === python) return Python;
    if (iconName === react) return React;
    if (iconName === redux) return Redux;
    if (iconName === sqLite) return SqLite;
    if (iconName === sqlServer) return SqlServer;
    if (iconName === typescript) return Typescript;
    if (iconName === github) return GithubSvg;
    if (iconName === linkedIn) return LinkedInSvg;
    if (iconName === email) return EmailSvg;
    if (iconName === html) return HtmlSvg;
    if (iconName === cypress) return Cypress;


}
export default getIconImage
