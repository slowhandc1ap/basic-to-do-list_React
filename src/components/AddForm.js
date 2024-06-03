import "./Addform.css";

export default function AddForm(props) {
  const { title, setTitle,saveTask,editId } = props;
  return (
    <>
      <h2> To Do List </h2>
      <form className="form-group" onSubmit={saveTask}>
        <div className="form-control">
          <input
            type="text"
            className="text-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <button type="submit" className="submit-btn">
            {editId ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </>
  );
}
