import "./ItemCard.scss";
function ItemCard({ item }) {
  const { name, shortDescription, image, price, toppings } = item;
  return (
    <div className="itemCard">
      <h2>{name}</h2>
      <p>{shortDescription}</p>
      <img src={image} alt={name} />
      <p>${price}</p>
      <p>{toppings}</p>
    </div>
  );
}
export default ItemCard;
