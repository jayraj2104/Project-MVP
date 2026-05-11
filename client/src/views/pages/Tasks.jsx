import "./Tasks.css";

import { useState , useEffect} from "react";

import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import TaskPresenter from "../../presenters/TaskPresenter";

function Tasks() {

  const [tasks, setTasks] = useState(() => {

    const savedTasks =
      localStorage.getItem("tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [];
  });

  useEffect(() => {

    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );

  }, [tasks]);

  const [editingTask, setEditingTask] = useState(null);

  const handleAddTask = (newTask) => {

    const updatedTasks =
      TaskPresenter.addTask(tasks, newTask);

    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {

  const updatedTasks =
    TaskPresenter.deleteTask(tasks, taskId);

  setTasks(updatedTasks);
  };

  const handleUpdateTask = (updatedTask) => {

    const updatedTasks =
      TaskPresenter.updateTask(
        tasks,
        updatedTask
      );

    setTasks(updatedTasks);

    setEditingTask(null);
 };

 const handleEditTask = (task) => {
  setEditingTask(task);
 };

  return (
    <div className="tasks-page">

      <Navbar />

      <div className="tasks-container">

        <div className="tasks-header">

          <div>
            <h1>My Tasks</h1>
            <p>Manage all your daily tasks</p>
          </div>

          <button className="add-task-btn">
            + Add Task
          </button>

        </div>

        <div className="tasks-grid">

          {tasks.length > 0 ? (

            tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onDelete={handleDeleteTask}
                onEdit={handleEditTask}
              />
            ))

          ) : (

            <div className="empty-state">

              <h2>No Tasks Found</h2>

              <p>
                Create your first task to get started
              </p>

            </div>

          )}

        </div>

        </div>

        <TaskForm
          onAddTask={handleAddTask}
          onUpdateTask={handleUpdateTask}
          editingTask={editingTask}
        />

      </div>

  );
}


export default Tasks;