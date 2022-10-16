import "./index.css";

function Paragraph(props) {
  const { value } = props;

  return (
    <div className="container">
      {value[0]}
    </div>
  );
}

export default Paragraph;
