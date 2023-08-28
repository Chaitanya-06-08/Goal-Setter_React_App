import React from "react";
import Goals from "./Components/GoalsList/Goals";
import GoalsForm from "./Components/Goal_Input/GoalsForm";
function App() {
  const [GoalsList, setGoalsList] = React.useState([
    // { goaltext: "Do all exercises", id: 1 },
    // { goaltext: "Submit assignment", id: 2 },
    // { goaltext: "Finish Course", id: 3 },
  ]);
  const UpdateList = (newGoal) => {
    setGoalsList((prevGoalsList) => {
      return [...prevGoalsList, newGoal];
    });
  };
  const DeleteItem = (deletegoal) => {
    setGoalsList((prevGoalsList) => {
      const updatedList = prevGoalsList.filter((goalitem) => {
        return !(goalitem.id == deletegoal);
      });
      return updatedList;
    });
  };
  let content = "";
  if (GoalsList.length > 0)
    content = (
      <div>
        <Goals GoalsList={GoalsList} onClickingItem={DeleteItem}></Goals>
        <h3
          style={{
            fontWeight: "bolder",
            maxWidth: "800px",
            color: "black",
            margin: "0px auto",
          }}
        >
          Total Goals Remaining: {GoalsList.length}
        </h3>
      </div>
    );
  else
    content = (
      <h2
        style={{
          fontWeight: "bolder",
          maxWidth: "800px",
          color: "black",
          margin: "0px auto",
        }}
      >
        You have no goals currently. Maybe, try adding a few...
      </h2>
    );
  return (
    <div>
      <GoalsForm onGettingGoalInput={UpdateList}></GoalsForm>
      {content}
    </div>
  );
}

export default App;
