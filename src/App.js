import Header from "./components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import LessonCards from "./components/main/LessonCards";
import data from "./helpers/data";



function App() {
  return (
    <div>
    
    <Header/>
    <LessonCards data={data}/>

    </div>

  );
}

export default App;
