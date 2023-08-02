import "./ItemCard.scss";
function ItemCard({ item }) {
  const { name, shortDescription, image, price, toppings } = item;
  return (
    <div className="itemCard">
      <h2>{name}</h2>
      <p>{shortDescription}</p>
      <img src={image} alt={name} />
      <p>Price: ${price}</p>
      <p>{toppings.length ? "Toppings: " + toppings.join(", ") : ""}</p>
    </div>
  );
}
export default ItemCard;
