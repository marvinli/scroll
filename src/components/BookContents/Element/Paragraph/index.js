import style from "./index.module.css";

function Paragraph(props) {
  const { value } = props;

  return (
    <div className={style.container}>
      {value}
    </div>
  );
}

export default Paragraph;
