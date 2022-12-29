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
    </section>
  );
}

export default TaskList;
