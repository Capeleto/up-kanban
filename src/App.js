import "normalize.css";
import KanbanBoard from "./kanban/KanbanBoard.jsx";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <KanbanBoard />
    </Layout>
  );
}

export default App;
