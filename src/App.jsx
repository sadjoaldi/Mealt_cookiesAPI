import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [mealdb, setMealDb] = useState([]);

  useEffect(() => {
    axios
      .get(" https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => setMealDb(res.data.meals));
  }, []);

  return (
    <div className="meals">
      <h1>World MEALS</h1>
      <form>
        <input type="text" placeholder="Enter the name of meal" />
      </form>
      <div className="mealbox">
        {mealdb.map((foods) => {
          return <Card key={foods.idMeal} foods={foods} />;
        })}
      </div>
    </div>
  );
}

export default App;
{
  /* <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter> */
}
