export default function RadioButton({
    id,
    name,
    value,
    checked,
    onChange,
    title,
    meta
  }) {
    const inputId = id || `${name}-${value}`.replace(/\s+/g, "-").toLowerCase();
  
    return (
      <label htmlFor={inputId} className="radio-label">
        <input
          id={inputId}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <div>
          <div className="radio-title">{title}</div>
          {meta ? <div className="radio-meta">{meta}</div> : null}
        </div>
      </label>
    );
  }
  