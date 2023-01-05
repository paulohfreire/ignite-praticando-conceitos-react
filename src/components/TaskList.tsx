import { FormEvent, useState } from "react";
import "./TaskList.css";
import { FiTrash, FiPlusCircle } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";
import clipboard from "../assets/Clipboard.png";

type Task = {
  id: string;
  title: string;
  isComplete: boolean;
};

function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [completedTasks, setCompletedTasks] = useState(Number);

  function handleCreateNewTask(event: FormEvent) {
    // Crie uma nova task com um id random, não permita criar caso o título seja vazio.
    event.preventDefault;
    if (!newTaskTitle) return;

    const newTask = {
      id: uuidv4(),
      title: newTaskTitle,
      isComplete: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
  }

  function handleCompletedTasks() {
    let count = 0;
    tasks.filter((task) => {
      if (task.isComplete === true) {
        count++;
      }
    });
    setCompletedTasks(count);
  }

  function handleToggleTaskCompletion(id: string) {
    // Altere entre `true` ou `false` o campo `isComplete` de uma task com dado ID
    tasks.map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
    });
    handleCompletedTasks();
  }

  function handleRemoveTask(id: string) {
    // Remova uma task da listagem pelo ID
    const listRemovedTask = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(listRemovedTask);
  }

  return (
    <section className="taskList">
      <div className="inputGroup">
        <input
          id="inputList"
          type="text"
          placeholder="Adicionar novo item"
          onChange={(e) => setNewTaskTitle(e.target.value)}
          value={newTaskTitle}
        ></input>
        <button type="submit" onClick={handleCreateNewTask}>
          Criar
          <FiPlusCircle id="plusIcon" size={16} color="#fff" />
        </button>
      </div>

      <main>
        <div className="tasksTrack">
          <div className="createdTasks">
            <p id="tasksCounterName">Tarefas criadas</p>
            <p id="tasksCounter">{tasks.length}</p>
          </div>
          <div className="doneTasks">
            <p id="tasksCounterName">Concluídas</p>
            <p id="tasksCounter">
              {completedTasks} de {tasks.length}
            </p>
          </div>
        </div>
        {tasks.length > 0 ? (
          tasks.map((task) => {
            return (
              <ul>
                <li key={task.id}>
                  <div className={task.isComplete ? "completed" : "toComplete"}>
                    <label className="checkbox-container">
                      <input
                        type="checkbox"
                        className="checkbox"
                        readOnly
                        checked={task.isComplete}
                        onClick={() => handleToggleTaskCompletion(task.id)}
                      />
                    </label>
                    <p>{task.title}</p>
                  </div>
                  <button
                    type="button"
                    className="deleteTaskButton"
                    onClick={() => handleRemoveTask(task.id)}
                  >
                    <FiTrash size={16} id="tasksButton" />
                  </button>
                </li>
              </ul>
            );
          })
        ) : (
          <article className="noTasks">
            <div className="tasksContainer">
              <img src={clipboard} alt="clipboard" />
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </article>
        )}
      </main>
    </section>
  );
}

export default TaskList;
