import "./TaskCard.css";

function TaskCard({
  task,
  onDelete,
  onEdit
}) {

  return (
    <div className="task-card">

      <div className="task-card-header">

        <h3>{task.title}</h3>

        <span className="task-status">
          {task.status}
        </span>

      </div>

      <p className="task-description">
        {task.description}
      </p>

      <div className="task-card-footer">

        <button
          className="edit-btn"
          onClick={() => onEdit(task)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default TaskCard;