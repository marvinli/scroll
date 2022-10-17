import style from './index.module.css';
import Element from './Element';

function BookContents(props) {
  const { contents } = props;
  return (
    <div className={style.book}>
      {contents.map(({ el, value }, index) => (
        <Element el={el} value={value} key={index} />
      ))}
    </div>
  )
};

export default BookContents;
