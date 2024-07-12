import "bootstrap/dist/css/bootstrap.min.css";
import Player from "./components/Player";
import SideBar from "./components/SideBar";
import Main from "./components/Main";


function App(){
  return (
    <body>
    <SideBar />
    <main>
    <Main />
    </main>
    <footer>
    <Player />
    </footer>
    </body>
  )
}

export default App
