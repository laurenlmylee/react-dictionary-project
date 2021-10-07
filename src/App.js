import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
         
        </header>
        <main> 
          <Dictionary defaultKeyword="penguin"/>
        </main>
        <footer className="text-center">
          <small>Coded by {" "}
          <a href="https://www.instagram.com/laurenlmy"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >Lauren</a>🐧, <a href="https://github.com/laurenlmylee/react-dictionary-project"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
        >open-sourced </a>
        </small>
        </footer>
      </div>
    </div>
  );
}


