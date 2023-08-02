import ItemCard from "../ItemCard/ItemCard";
import "./ItemList.scss";

function ItemList({ items }) {
  return (
    <div className="itemList">
      {items && items.map((item) => <ItemCard key={item.id} item={item} />)}
    </div>
  );
}
export default ItemList;
