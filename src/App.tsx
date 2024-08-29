import { AppProvider } from "@toolpad/core";
import "./App.css";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <AppProvider>
      <MainLayout/>
    </AppProvider>
  );
}

export default App;
