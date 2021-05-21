import logo from "./logo.png";
import './App.css';

export default function App() {
  return (
    <div className="App">
       <header className="Header">
         <img src={logo} className="Logo
       img-fluid" alt="logo"/>
       <h1>Dictionary</h1>
        <a href="/" className="btn btn-primary shadow">
          Search
         </a>
      </header>
    </div>
  );
}