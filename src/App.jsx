import "./index.css";
import "./App.css";
import MovieForm from "./component/movieForm.jsx";

export default function App() {
  return (
    <div className="app-shell">
      <div className="card">
        <h1 className="app-title">🎬 Favorite Movie Survey</h1>
        <p className="app-subtitle">
          Tell us your favorite movie and share your thoughts.
        </p>
        <MovieForm />
      </div>
      <footer className="footer">© 2025 Movie Survey</footer>
    </div>
  );
}
