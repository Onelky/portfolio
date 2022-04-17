import Header from "../pageComponents/Header/Header";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";

const themeDark = createTheme({
    palette: {
        text: {
            primary: "#CCD6F6"
        },
    },
});

export default function Home() {
  return (
       <ThemeProvider theme={themeDark}>
           <CssBaseline />
           <Header/>
       </ThemeProvider>
  )
}
