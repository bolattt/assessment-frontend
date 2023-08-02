import useFetch from "./hooks/useFetch";

import "./App.scss";
import ItemList from "./components/ItemList/ItemList";

function App() {
  const { data, loading, error } = useFetch("/items");
  console.log(data);
  return (
    <div className="App">
      <h1>Our Menu</h1>
      <ItemList items={data.data} />
    </div>
  );
}

export default App;
