import "./layout.css";

function Layout(props) {
  const { children } = props;

  return (
    <div>
      <div className="header">
        <span>Kanban Board</span>
      </div>
      <div className="content">{children}</div>
    </div>
  );
}

export default Layout;
