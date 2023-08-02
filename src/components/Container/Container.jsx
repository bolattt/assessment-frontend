import ItemList from "../ItemList/ItemList";
import "./Container.scss";
function Container({ items, loading, error }) {
  function renderList() {
    if (loading) {
      return <h1>Loading...</h1>;
    }
    if (error) {
      return <h1>{error}</h1>;
    }
    if (items.length === 0) {
      return <h1>No items found</h1>;
    }
    return <ItemList items={items} />;
  }

  function getClassName() {
    if (loading) {
      return "container container--loading";
    }
    if (error) {
      return "container container--error";
    }
    return "container";
  }

  return <div className={getClassName()}>{renderList()}</div>;
}
export default Container;
