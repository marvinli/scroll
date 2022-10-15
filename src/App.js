import './App.css';
import Paragraph from './components/Paragraph';
import mobydick from './text/mobydick.json';

function App() {
  return (
    <div className="App">
      {mobydick.split("\n").map((paragraph, index) => (
        <Paragraph key={index} text={paragraph} />
      ))}
    </div>
  );
}

export default App;
