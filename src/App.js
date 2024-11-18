import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App container">
      <Weather defaultCity="Los Angeles" />
      <footer>
        This site was coded by Anastasiia Rubik and is{" "}
        <a
          href="https://github.com/AnastasiiaRubikD/react-forecast-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
