import style from "./index.module.css";

function Header(props) {
  const { value } = props;
  
  return (
    <h1 className={style.header}>
      {value}
    </h1>
  )

}

export default Header;
