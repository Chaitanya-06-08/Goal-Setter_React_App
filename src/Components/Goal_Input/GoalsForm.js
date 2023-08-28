import React, { useState } from 'react';
import './GoalsForm.css';
const GoalsForm=(props)=>{
    const [GoalInput,setGoalInput]=useState('');
    const ChangeInput=(event)=>{
        setGoalInput(event.target.value)
    }
    const SubmitHandler=(event)=>{
        event.preventDefault()
        let newGoal={
            goaltext: GoalInput,
            id: Math.random(),
        }
        props.onGettingGoalInput(newGoal)
        setGoalInput('')
    }
    return(
        <form className="goals-form" onSubmit={SubmitHandler}>
            <p>Set Your Goals In Here</p>
            <input type="text" placeholder="Enter your goal" value={GoalInput} onChange={ChangeInput}></input>
            <button type="submit" className='add-goal-button'>Add Goal</button>
        </form>
    );
}
export default GoalsForm;