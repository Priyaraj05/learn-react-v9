import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

/*const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Hello World"),
    React.createElement(Tasks, {
      name: "Task 1",
      description: "This is task 1",
    }),
    React.createElement(Tasks, {
      name: "Task 2",
      description: "This is task 2",
    }),
    React.createElement(Tasks, {
      name: "Task 3",
      description: "This is task 3",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
*/

const App = () => {
  return (
    <div>
      <h1>Pizza Corner</h1>
      <Pizza
        name="Pizza 1"
        description="This is italian veggie pizza"
        image={"public/pizzas/ital_veggie.webp"}
      />
      <Pizza
        name="Pizza 2"
        description="This is Pizza 2"
        image={"public/pizzas/veggie_veg.webp"}
      />
      <Pizza
        name="Pizza 3"
        description="This is Pizza 3"
        image={"public/pizzas/ckn_pesto.webp"}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
