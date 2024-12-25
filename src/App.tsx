import './App.css'
import {MainPage} from "./modules/MainPage.tsx";
import {FileProvider} from "./context/FileProvider.tsx";

function App() {

    return (
        <FileProvider>
          <MainPage/>
        </FileProvider>
    )
}

export default App
