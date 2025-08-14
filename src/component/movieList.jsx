import RadioButton from "./RadioButton.jsx";
export default function MovieList({ movies, selected, onChange, groupName }) {
  return (
    <div className="radio-group" role="radiogroup" aria-label="Favorite Movie">
      {movies.map((m) => {
        const label = `${m.title} (${m.year})`;
        const meta = `Director: ${m.director}`;
        return (
          <RadioButton
            key={m.title}
            name={groupName}
            value={m.title}
            checked={selected === m.title}
            onChange={onChange}
            title={label}
            meta={meta}
          />
        );
      })}
    </div>
  );
}
