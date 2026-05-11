import "./Tasks.css";

import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../../services/taskService";

function Tasks() {

  const [tasks, setTasks] = useState([]);

  const [loading, setLoading] = useState(true);

  const [editingTask, setEditingTask] = useState(null);


  // Fetch Tasks
  const fetchTasks = async () => {

    try {

      const data = await getTasks();

      setTasks(data.tasks);

    } catch (error) {

      console.log(error);

      alert("Failed to fetch tasks");

    } finally {

      setLoading(false);
    }
  };


  // Load tasks on page load
  useEffect(() => {
    fetchTasks();
  }, []);


  // Create Task
  const handleAddTask = async (newTask) => {

    try {

      await createTask(newTask);

      await fetchTasks();

      alert("Task Created Successfully");

      return true;

    } catch (error) {

      console.log(error);

      alert("Failed to create task");

      return false;
    }
  };


  // Delete Task
  const handleDeleteTask = async (taskId) => {

    try {

      await deleteTask(taskId);

      await fetchTasks();

      alert("Task Deleted Successfully");

    } catch (error) {

      console.log(error);

      alert("Failed to delete task");
    }
  };


  // Update Task
  const handleUpdateTask = async (updatedTask) => {

    try {

      await updateTask(
        editingTask._id,
        updatedTask
      );

      await fetchTasks();

      setEditingTask(null);

      alert("Task Updated Successfully");

      return true;

    } catch (error) {

      console.log(error);

      alert("Failed to update task");

      return false;
    }
  };


  // Edit Task
  const handleEditTask = (task) => {
    setEditingTask(task);
  };


  // Loading UI
  if (loading) {
    return <h2>Loading Tasks...</h2>;
  }


  return (

    <div className="tasks-page">

      <Navbar />

      <div className="tasks-container">

        <div className="tasks-header">

          <div>

            <h1>My Tasks</h1>

            <p>
              Manage all your daily tasks
            </p>

          </div>

        </div>


        <div className="tasks-grid">

          {
            tasks.length > 0 ? (

              tasks.map((task) => (

                <TaskCard
                  key={task._id}
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
            )
          }

        </div>


        <TaskForm
          onAddTask={handleAddTask}
          onUpdateTask={handleUpdateTask}
          editingTask={editingTask}
        />

      </div>

    </div>
  );
}

export default Tasks;
