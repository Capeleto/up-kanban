import { useState } from "react";
import Card from "../card/Card";
import Column from "./column/Column";

const MOCK_COLUMNS = [
  {
    title: "Column 1",
    color: "#00625F",
    cards: [
      { id: "id1", title: "Card Title 1", description: "Card Description 1" },
    ],
  },
  {
    title: "Column 2",
    color: "#00807B",
    cards: [
      {
        id: "id2",
        title: "Card Title 2Card Title 2 Card Title 2Card Title 2 Card Title 2",
        description:
          "Card Description 2 Card Description 2 Card Description 2 Card Description 2 Card Description 2 Card Description 2 Card Description 2",
      },
    ],
  },
  {
    title: "Column 3",
    color: "#00A19A",
    cards: [
      { id: "id3", title: "Card Title 3", description: "Card Description 3" },
    ],
  },
  {
    title: "Column 4",
    color: "#E6B658",
    cards: [
      { id: "id4", title: "Card Title 4", description: "Card Description 4" },
    ],
  },
];

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

function KanbanBoard() {
  const [columns, setColumns] = useState(MOCK_COLUMNS);

  function moveCard(card, columnIndex, newColumnIndex) {
    const newColumns = columns.map((column, index) => {
      if (newColumnIndex === index) {
        return {
          ...column,
          cards: [...column.cards, card],
        };
      }

      if (columnIndex === index) {
        return {
          ...column,
          cards: column.cards.filter((element) => element.id !== card.id),
        };
      }

      return column;
    });

    setColumns(newColumns);
  }

  function handleAddCard(addIndex) {
    const value = window.prompt(
      "Enter data in the following format: title; description",
      "default title; default description"
    );

    if (typeof value === "string" && value.includes(";")) {
      const [title, description] = value.split(";");

      const newColumns = columns.map((column, index) => {
        if (index === addIndex) {
          return {
            ...column,
            cards: [...column.cards, { id: generateId(), title, description }],
          };
        }
        return column;
      });

      setColumns(newColumns);
    }
  }

  return columns.map(({ cards = [], ...rest }, index) => {
    return (
      <Column {...rest} onClickAdd={() => handleAddCard(index)}>
        {cards.map((card) => {
          return (
            <Card
              card={card}
              columnIndex={index}
              disabledLeft={index === 0}
              disabledRight={index === columns.length - 1}
              onMoveButtonClick={moveCard}
            />
          );
        })}
      </Column>
    );
  });
}

export default KanbanBoard;
