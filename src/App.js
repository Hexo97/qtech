import logo from "./logo.svg";
import "./App.css";
import Card from "./Components/Card.js";
import TopNav from "./Components/TopNav.js";

const courses = [[], []];

function App() {
  return (
    <div className="App">
      <TopNav />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <Card
          title={"Abbas is an amazing guy"}
          category={"Tech"}
          description={"amazing person"}
        />
      </header>
    </div>
  );
}

export default App;
