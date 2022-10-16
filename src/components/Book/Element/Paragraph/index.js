function Paragraph(props) {
  const { value } = props;

  return (
    <div>
      {value[0]}
    </div>
  );
}

export default Paragraph;
