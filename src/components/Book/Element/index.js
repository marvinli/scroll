import Paragraph from "./Paragraph";
import CheckerFade from "./CheckerFade";
import Header from "./Header";

const mapping = {
  checkerfade: CheckerFade,
  paragraph: Paragraph,
  header: Header,
};

function Element(props) {
  const { el, ...otherProps } = props;
  const Component = mapping[el];

  if (!Component) {
    return null;
  }

  return (
    <Component {...otherProps} />
  );
}

export default Element;
