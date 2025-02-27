import { createRoot } from "react-dom/client";
import Tasks from "./Tasks";

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


const App = () =>{
  return (
    <div>
      <h1>Hello World</h1>
      <Tasks name = "Task 1" description="This is task 1"/>
      <Tasks name = "Task 2" description="This is task 2"/>
      <Tasks name = "Task 3" description="This is task 3"/>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);

