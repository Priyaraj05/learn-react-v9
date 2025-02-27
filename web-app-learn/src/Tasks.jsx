// const Tasks = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h2", {}, props.name),
//     React.createElement("p", {}, props.description),
//   ]);
// };

const Tasks = (props) => {
    return (
        <div className="task">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    );
};

export default Tasks;