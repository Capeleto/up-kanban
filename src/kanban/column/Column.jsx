import "./column.css";

function Column({ color, title, children, onClickAdd }) {
  return (
    <div className="column">
      <div className="title" style={{ backgroundColor: color }}>
        {title}
      </div>
      <div className="column-content">
        <div className="column-cards">{children}</div>
        <div className="add-card">
          <button className="add" onClick={onClickAdd}>
            {"+ Add a card"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Column;
