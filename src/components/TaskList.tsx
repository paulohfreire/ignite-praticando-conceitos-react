import "./TaskList.css";

function TaskList() {
  return (
    <section className="taskList">
      <div className="inputGroup">
        <input
          id="inputList"
          type="text"
          placeholder="Adicionar novo item"
        ></input>
        <button type="submit">Criar</button>
      </div>

      <main>
        <div className="tasksTrack">
          <div className="createdTasks">
            <p id="tasksCounterName">Tarefas criadas</p>
            <p id="tasksCounter">3</p>
          </div>
          <div className="doneTasks">
            <p id="tasksCounterName">Concluídas</p>
            <p id="tasksCounter">0 de 3</p>
          </div>
        </div>
        <ul>
          {/* {tasks.map(task => ( */}
          <li key={1}>
            <div className="task">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  className="checkbox"
                  readOnly
                  // checked={task.isComplete}
                  onClick={() => "task.id"}
                />
              </label>
              <p>{"task.title"}</p>
            </div>

            {/* <button
              type="button"
              data-testid="remove-task-button"
              onClick={() => "click"}
            >
              <FiTrash size={16}/>
            </button> */}
          </li>
          <li key={2}>
            <div className="task">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  className="checkbox"
                  readOnly
                  // checked={task.isComplete}
                  onClick={() => "task.id"}
                />
                <span className="checkmark"></span>
              </label>
              <p>{"task.title"}</p>
            </div>

            {/* <button
              type="button"
              data-testid="remove-task-button"
              onClick={() => "click"}
            >
              <FiTrash size={16}/>
            </button> */}
          </li>
          <li key={3}>
            <div className="task">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  className="checkbox"
                  readOnly
                  // checked={task.isComplete}
                  onClick={() => "task.id"}
                />
                <span className="checkmark"></span>
              </label>
              <p>{"task.title"}</p>
            </div>

            {/* <button
              type="button"
              data-testid="remove-task-button"
              onClick={() => "click"}
            >
              <FiTrash size={16}/>
            </button> */}
          </li>
        </ul>
      </main>
    </section>
  );
}

export default TaskList;
