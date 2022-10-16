import mobydick from './mobydick.json';

const contents = mobydick.split("\n").map((paragraph) => ({
  el: 'paragraph',
  value: [paragraph],
}));

const book = {
  title: 'Moby Dick',
  contents,
};

export default book;
