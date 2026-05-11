import "./TaskForm.css";
import { useState, useEffect } from "react";

function TaskForm({
  onAddTask,
  onUpdateTask,
  editingTask
}) {

  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");

  const [status, setStatus] =
    useState("Pending");

  useEffect(() => {

    if (editingTask) {

      setTitle(editingTask.title);

      setDescription(
        editingTask.description
      );

      setStatus(editingTask.status);
    }

  }, [editingTask]);

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!title.trim() || !description.trim()) {
          alert("Please fill all fields");
          return;
      }

    const taskData = {
      title,
      description,
      status
    };

    if (editingTask) {

      onUpdateTask({
        id: editingTask.id,
        ...taskData
      });

    } else {

      onAddTask(taskData);
    }

    setTitle("");
    setDescription("");
    setStatus("Pending");
  };

  return (
    <div className="task-form-container">

      <div className="task-form-card">

        <h2>
          {editingTask
            ? "Update Task"
            : "Create Task"}
        </h2>

        <form
          className="task-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">

            <label>Task Title</label>

            <input
              type="text"
              placeholder="Enter task title"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
            />

          </div>

          <div className="form-group">

            <label>Description</label>

            <textarea
              rows="5"
              placeholder="Enter task description"
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
            ></textarea>

          </div>

          <div className="form-group">

            <label>Status</label>

            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
            >
              <option>Pending</option>
              <option>Completed</option>
            </select>

          </div>

          <button
            type="submit"
            className="task-submit-btn"
          >
            {editingTask
              ? "Update Task"
              : "Save Task"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default TaskForm;