import Paragraph from "./Paragraph";

const mapping = {
  paragraph: Paragraph
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
