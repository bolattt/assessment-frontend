import useFetch from "./hooks/useFetch";
import "./App.scss";
import Container from "./components/Container/Container";

function App() {
  const { data, loading, error } = useFetch("/items");

  return (
    <div className="App">
      <h1>Our Menu</h1>
      <Container items={data.data} loading={loading} error={error} />
    </div>
  );
}

export default App;
