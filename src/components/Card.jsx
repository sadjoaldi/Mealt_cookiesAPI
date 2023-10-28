function Card({ foods }) {
  return (
    <div className="meal_container">
      <h2>{foods.strMeal}</h2>
      <span>Origin : {foods.strArea}</span>
      <img src={foods.strMealThumb} alt={foods.strMeal} />
      <p>{foods.strInstructions}</p>
    </div>
  );
}
export default Card;
