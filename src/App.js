import './App.css';
// import mobyDick from './text/mobyDick';
import infinityTree from './text/infinityTree';
import Book from './components/Book';

function App() {
  return (
    <div className="App">
      <Book contents={infinityTree.contents} />
    </div>
  );
}

export default App;
