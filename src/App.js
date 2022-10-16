import './App.css';
import mobyDick from './text/mobyDick';
import Book from './components/Book';

function App() {
  return (
    <div className="App">
      <Book contents={mobyDick.contents} />
    </div>
  );
}

export default App;
