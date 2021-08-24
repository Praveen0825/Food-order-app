import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
       {/* Yaaaar tum bas naam batao! */}
         Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home. 
      </p>
      <p>
       {/* Kya chahiye?
       Pizza? Parantha? Pasta? Pastry? Biryani? Butter chicken? 
       Burger ? Dosa? Dal makhani? Donuts? */}
         All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs! 

      </p>
      {/* <p>
        Sabbbb milega!
      </p> */}
    </section>
  );
};

export default MealsSummary;
