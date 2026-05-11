import "./TaskForm.css";

import { useEffect, useState } from "react";

function TaskForm({
  onAddTask,
  onUpdateTask,
  editingTask,
}) {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Pending",
  });


  // Auto fill form in edit mode
  useEffect(() => {

    if (editingTask) {

      setFormData({
        title: editingTask.title || "",
        description: editingTask.description || "",
        status: editingTask.status || "Pending",
      });
    }

  }, [editingTask]);


  // Handle input changes
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  // Handle form submit
  const handleSubmit = async (e) => {

    e.preventDefault();

    // Validation
    if (
      !formData.title ||
      !formData.description
    ) {

      alert("Please fill all fields");

      return;
    }

    const isSuccess = editingTask
      ? await onUpdateTask(formData)
      : await onAddTask(formData);

    if (!isSuccess) {
      return;
    }

    // Reset form
    setFormData({
      title: "",
      description: "",
      status: "Pending",
    });
  };


  return (

    <div className="task-form-container">

      <div className="task-form-card">

        <h2>
          {
            editingTask
              ? "Update Task"
              : "Create New Task"
          }
        </h2>

        <form
          className="task-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">

            <label>
              Task Title
            </label>

            <input
              type="text"
              name="title"
              placeholder="Enter task title"
              value={formData.title}
              onChange={handleChange}
            />

          </div>


          <div className="form-group">

            <label>
              Task Description
            </label>

            <textarea
              name="description"
              placeholder="Enter task description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
            />

          </div>


          <div className="form-group">

            <label>
              Task Status
            </label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >

              <option value="Pending">
                Pending
              </option>

              <option value="In Progress">
                In Progress
              </option>

              <option value="Completed">
                Completed
              </option>

            </select>

          </div>


          <button
            type="submit"
            className="task-submit-btn"
          >

            {
              editingTask
                ? "Update Task"
                : "Add Task"
            }

          </button>

        </form>

      </div>

    </div>
  );
}

export default TaskForm;
