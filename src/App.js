import Dictionary from "./Dictionary";
import logo from "./logo.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={logo}
            className="App-logo
       img-fluid"
            alt="logo"
          />
          <h1>Dictionary</h1>
          <hr />
        </header>
        <main>
          <Dictionary />
        </main>
        <hr />
        <footer className="App-footer">Coded by Myrta Rüegger</footer>
      </div>
    </div>
  );
}