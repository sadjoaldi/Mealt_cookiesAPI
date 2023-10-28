function Card({ item }) {
  return (
    <div className="meal_container">
      <h2>{item.strMeal}</h2>
      <span>Origin : {item.strArea}</span>
      <img src={item.strMealThumb} alt={item.strMeal} />
      <p>{item.strInstructions}</p>
    </div>
  );
}
export default Card;
