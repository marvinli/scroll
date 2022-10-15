import CheckerFade from './CheckerFade';

function Paragraph(props) {
  const { text, index } = props;
  const checker = index % 20 === 0;

  return (
    <div>
      {checker &&
        <CheckerFade text={text} />
      }
      {!checker &&
        <div>{text}</div>
      }
    </div>
  );
}

export default Paragraph;
