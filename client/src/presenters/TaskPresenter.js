class TaskPresenter {

  static addTask(tasks, newTask) {

    return [
      ...tasks,
      {
        _id: Date.now().toString(),
        ...newTask
      }
    ];
  }

  static deleteTask(tasks, taskId) {

    return tasks.filter(
      (task) => task._id !== taskId
    );
  }

  static updateTask(tasks, updatedTask) {

    return tasks.map((task) =>
      task._id === updatedTask._id
        ? updatedTask
        : task
    );
  }

}

export default TaskPresenter;
