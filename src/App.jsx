import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [mealdb, setMealDb] = useState([]);
  const [input, setInput] = useState("");
  const [resultFilter, setResultFilter] = useState([]);

  const searchInput = (valueSearch) => {
    setInput(valueSearch);

    if (input !== "") {
      const mealdbFilter = mealdb.filter((items) => {
        return Object.values(items)
          .join("")
          .toLowerCase()
          .includes(input.toLowerCase());
      });
      setResultFilter(mealdbFilter);
    } else {
      setResultFilter(mealdb);
    }
  };

  useEffect(() => {
    axios
      .get(" https://www.themealdb.com/api/json/v1/1/search.php?s=" + input)
      .then((res) => setMealDb(res.data.meals));
  }, [input]);

  return (
    <div className="meals">
      <h1>World MEALS</h1>
      <form>
        <input
          type="text"
          placeholder="Enter the name of meal"
          value={input}
          onChange={(e) => searchInput(e.target.value)}
        />
      </form>
      <div className="mealbox">
        {input.length > 1
          ? resultFilter.map((item) => {
              return <Card key={item.idMeal} item={item} />;
            })
          : mealdb &&
            mealdb.slice(0, 24).map((item) => {
              return <Card key={item.idMeal} item={item} />;
            })}
      </div>
    </div>
  );
}

export default App;
