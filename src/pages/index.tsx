
import styles from '../styles/Home.module.css'
import Header from "../pageComponents/Header/Header";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";

const themeDark = createTheme({
    palette: {
        background: {
            default: "#0A0919"
        },
        text: {
            primary: "#CCD6F6"
        }
    }
});

export default function Home() {
  return (
   <div style={styles}>
       <ThemeProvider theme={themeDark}>
           <CssBaseline />
           <Header/>
       </ThemeProvider>
   </div>
  )
}
