import "./card.css";
import classnames from "classnames";

function Card(props) {
  const { card, disabledLeft, disabledRight, onMoveButtonClick, columnIndex } =
    props;

  const leftButtonClasses = classnames("move", {
    "move-disabled": disabledLeft,
  });
  const rightButtonClasses = classnames("move", {
    "move-disabled": disabledRight,
  });

  return (
    <div className="card">
      <div className="card-title">
        {card.title}
        <div className="buttons">
          <button
            className={leftButtonClasses}
            disabled={disabledLeft}
            onClick={() =>
              onMoveButtonClick(card, columnIndex, columnIndex - 1)
            }
          >
            {" < "}
          </button>
          <button
            className={rightButtonClasses}
            disabled={disabledRight}
            onClick={() =>
              onMoveButtonClick(card, columnIndex, columnIndex + 1)
            }
          >
            {" > "}
          </button>
        </div>
      </div>
      <span className="description">{card.description}</span>
    </div>
  );
}

export default Card;
