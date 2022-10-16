function Header(props) {
  const { value } = props;
  
  return (
    <h1>
      {value[0]}
    </h1>
  )

}

export default Header;
