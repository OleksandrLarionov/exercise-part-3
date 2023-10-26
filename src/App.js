import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import BookList from './components/BookList';
import CommentArea from './components/CommentArea';
// Genere dei libri
import fantasy from '../src/data/fantasy.json';
import history from '../src/data/history.json';
import horror from '../src/data/horror.json';
import romance from '../src/data/romance.json';
import scifi from '../src/data/scifi.json';

function App() {
	return (
		<div>
			<MyNav />
			<Welcome />
			{/* <CommentArea /> */}

			<BookList genre={[fantasy, history, horror, romance, scifi]} />
			{/* <BookList genre={fantasy} /> */}
			{/* <CommentArea /> */}
			<MyFooter />
		</div>
	);
}

export default App;
