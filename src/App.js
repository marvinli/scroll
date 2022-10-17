import style from './App.module.css';
// import mobyDick from './text/mobyDick';
import testBook from './text/testBook';
import Book from './components/Book';
import { BackgroundVideoProvider } from './contexts/BackgroundVideoContext';
import BackgroundVideo from './components/BackgroundVideo';

function App() {
  return (
    <div className={style.App}>
      <BackgroundVideoProvider>
        <BackgroundVideo />
        <Book contents={testBook.contents} />
      </BackgroundVideoProvider>
    </div>
  );
}

export default App;
