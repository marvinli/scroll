import style from './App.module.css';
// import mobyDick from './text/mobyDick';
import testBook from './text/testBook';
import BookContents from './components/BookContents';
import { BackgroundVideoProvider } from './contexts/BackgroundVideoContext';
import BackgroundVideo from './components/BackgroundVideo';

function App() {
  return (
    <div className={style.container}>
      <BackgroundVideoProvider>
        <BackgroundVideo />
        <BookContents contents={testBook.contents} />
      </BackgroundVideoProvider>
    </div>
  );
}

export default App;
