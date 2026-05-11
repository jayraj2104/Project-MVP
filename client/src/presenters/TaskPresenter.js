class TaskPresenter {

  static addTask(tasks, newTask) {

    return [
      ...tasks,
      {
        id: Date.now(),
        ...newTask
      }
    ];
  }

  static deleteTask(tasks, taskId) {

    return tasks.filter(
      (task) => task.id !== taskId
    );
  }

  static updateTask(tasks, updatedTask) {

    return tasks.map((task) =>
      task.id === updatedTask.id
        ? updatedTask
        : task
    );
  }

}

export default TaskPresenter;