import React from "react";
import GoalItem from "./GoalItem";
import "./Goals.css";
const Goals = (props) => {
  return (
    <div className="goal-list">
      {props.GoalsList.map((goalitem) => {
        return (
          <GoalItem
            key={goalitem.id}
            id={goalitem.id}
            goaltext={goalitem.goaltext}
            onClicking={props.onClickingItem}
          ></GoalItem>
        );
      })}
    </div>
  );
};

export default Goals;
