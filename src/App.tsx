import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import ProjectDetail from "./pages/project-detail";
import { ThemeProvider } from "./context/theme-provider";


function App() {

  return (
    <>
      <BrowserRouter basename="/portfolio/">
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}></Route>
              <Route path="/projects/:slug" element={<ProjectDetail/>}></Route>
              <Route></Route>
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
