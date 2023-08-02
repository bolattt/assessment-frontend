import useFetch from "./hooks/useFetch";
import "./App.scss";

function App() {
  const { data, loading, error } = useFetch("/items");

  return (
    <div className="App">
      <h1>Our Menu</h1>
    </div>
  );
}

export default App;
