
import { createTheme, ThemeProvider } from "@material-ui/core";
import React from "react";

import RequestForm from "./components/RequestForm";

const theme = createTheme({
  palette:{
    primary: {
      main: "#8000ff"
    },
    secondary: {
      main: "#00d2ff"
    },
  },
  
})



function App() {
  return (
    <ThemeProvider theme={theme}><RequestForm/></ThemeProvider>
    
  );
}

export default App;
