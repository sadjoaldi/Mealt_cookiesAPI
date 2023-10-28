import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

function CardList() {
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    axios
      .get(" https://www.themealdb.com/api/json/v1/1/search.php?s=")

      .then((res) => setMeal(res.data.meals));
  }, []);

  return (
    <div>
      {meal.map((food) => {
        <Card
          key={food.idMeal}
          foodName={food.strMeal}
          foodOrigin={food.strArea}
          foodImage={food.strMealThumb}
          foodDescri={food.Instructions}
        />;
      })}
    </div>
  );
}
export default CardList;
