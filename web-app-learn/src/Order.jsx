import { useState } from "react";
import Pizza from "./Pizza";

export default function Order() {
  //   const pizzaType = "pepperoni";
  const [pizzaType, setPizzaType] = useState("ital_veggie");
  const [pizzaSize, setPizzaSize] = useState("M");
  return (
    <div className="order">
      <h2>Create Order</h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select name="pizza-type" value={pizzaType} onChange={(e) => setPizzaType(e.target.value)}>
              <option value="ital_veggie">The Italian Veggie Pizza</option>
              <option value="veggie_veg">The Veggie Veg Pizza</option>
              <option value="ckn_pesto">The Chicken Pesto Pizza</option>
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza Size</label>
            <div>
              <span>
                <input
                  onChange={(e) => setPizzaSize(e.target.value)}
                  checked={pizzaSize === "S"}
                  type="radio"
                  name="pizza-size"
                  value="S"
                  id="pizza-s"
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                onChange={(e) => setPizzaSize(e.target.value)}
                  checked={pizzaSize === "M"}
                  type="radio"
                  name="pizza-size"
                  value="M"
                  id="pizza-m"
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                onChange={(e) => setPizzaSize(e.target.value)}
                  checked={pizzaSize === "L"}
                  type="radio"
                  name="pizza-size"
                  value="L"
                  id="pizza-l"
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to Cart</button>
        </div>
        <div className="order-pizza">
          <Pizza
            name="veggie_veg"
            description="Veggies, Mozzarella Cheese"
            image="/public/pizzas/veggie_veg.webp"
          />
          <p>$13.37</p>
        </div>
      </form>
    </div>
  );
}
