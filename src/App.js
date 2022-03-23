import "./App.css";
import Adress from "./Components/Profile/Adress";
import Fullname from "./Components/Profile/Fullname";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Fullname />
      <Adress />
      <Profile />
      
    </div>
  );
}

export default App;
