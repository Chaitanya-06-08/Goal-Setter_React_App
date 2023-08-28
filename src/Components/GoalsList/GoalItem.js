import './GoalItem.css'
const GoalItem=(props)=>{
    const DeleteItem=(event)=>{
        props.onClicking(props.id)
    }
    return(
        <button className="goal-item" onClick={DeleteItem}>
            {props.goaltext}
        </button>
    );
}
export default GoalItem;