import Header from "../pageComponents/Header/Header";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import About from "../pageComponents/About/About";
import Layout from "../components/common/Layout/Layout";
import React, {useEffect, useState} from "react";
import Skills from "../pageComponents/Skills/Skills";
import Projects from "../pageComponents/Projects/Projects";

const themeDark = createTheme({
    palette: {
        text: {
            primary: "#CCD6F6"
        },
    },
});

export default function Home() {
    const [showMenu, setShowMenu] = useState(false);
    const listenScrollEvent = () => {
        window.scrollY > 100
            ? setShowMenu(true)
            : setShowMenu(false)
    }
    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);

  return (
       <ThemeProvider theme={themeDark}>
           <CssBaseline />
           <main>
               <Header/>
               <Layout showMenu={showMenu}>
                   <About/>
                   <Skills></Skills>
                   <Projects/>
                   <div style={{height: '50vh'}}/>
               </Layout>
           </main>

       </ThemeProvider>
  )
}
