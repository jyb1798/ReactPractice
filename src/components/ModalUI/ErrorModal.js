import "./ErrorModal.css";

const ErrorModal = (props) => {
  return (
    <div>
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="actions">
        <button className="button">Okay</button>
      </footer>
    </div>
  );
};

export default ErrorModal;
