import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import Topbar from "./scenes/global/Topbar";
import MenuSidebar from "./scenes/global/MenuSidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contact from "./scenes/contacts";
import Invoices from "./scenes/Invoices";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import Faq from "./scenes/faq";
import Barchart from "./scenes/bar";
import Piechart from "./scenes/pie";
import Linechart from "./scenes/line";
import Geographychart from "./scenes/geography";

function App() {
  const [theme, colorMode] = useMode();

  return (
    // React Context Provider
    <ColorModeContext.Provider value={colorMode}>
      {/* Theme option provider for material ui */}
      <ThemeProvider theme={theme}>
        {/* Material CSS reset */}
        <CssBaseline />
        <div className="app">
          {/* Sidebar */}
          <MenuSidebar />
          <main className="content">
            {/* Topbar */}
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contact />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/profile" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/bar" element={<Barchart />} />
              <Route path="/pie" element={<Piechart />} />
              <Route path="/line" element={<Linechart />} />
              <Route path="/geography" element={<Geographychart />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
