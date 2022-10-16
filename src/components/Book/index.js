import Element from './Element';

function Book(props) {
  const { contents } = props;
  return (
    <div>
      {contents.map(({ el, value }, index) => (
        <Element el={el} value={value} key={index} />
      ))}
    </div>
  )
};

export default Book;
