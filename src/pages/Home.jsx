// import Navigation from "../components/Navigation";

function Home() {
  return (
    <div>
      <Navigation />
      <h1>World MEAL API</h1>
      <form>
        <input type="text" placeholder="Please enter the name of the food" />
      </form>
      <div className="mealbox">
        {meal.map((food) => {
          //   <Card key={food.idMeal} meals={food} />;
          <Card />;
        })}
      </div>
      {/* <CardList /> */}
    </div>
  );
}

export default Home;
