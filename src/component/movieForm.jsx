import { useState } from "react";
import MovieList from "./movieList.jsx";
import movies from "../data/movies.js";

export default function MovieForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [favorite, setFavorite] = useState("");
  const [comments, setComments] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = "โปรดใส่ชื่อของคุณ";
    if (!email.trim()) e.email = "โปรดใส่อีเมลของคุณ";
    else if (!EMAIL_RE.test(email)) e.email = "รูปแบบอีเมลไม่ถูกต้อง";
    if (!favorite) e.favorite = "กรุณาเลือกหนังที่คุณชอบ";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitted({ name, email, favorite, comments: comments.trim() });
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setFavorite("");
    setComments("");
    setErrors({});
    setSubmitted(null);
  };

  if (submitted) {
    return (
      <div className="summary">
        <div className="badge">Submission Success</div>
        <div className="row">
          <div><strong>ชื่อ</strong></div>
          <div>{submitted.name}</div>
        </div>
        <div className="row">
          <div><strong>อีเมล</strong></div>
          <div>{submitted.email}</div>
        </div>
        <div className="row">
          <div><strong>ภาพยนตร์ที่เลือก</strong></div>
          <div>{submitted.favorite}</div>
        </div>
        <div className="row">
          <div><strong>ความคิดเห็น</strong></div>
          <div>{submitted.comments || "—"}</div>
        </div>

        <div className="actions" style={{ marginTop: 10 }}>
          <button className="btn" type="button" onClick={handleReset}>
            เริ่มทำแบบสำรวจใหม่
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      {/* Full Name */}
      <div className="field">
        <label htmlFor="full-name" className="label">Full Name *</label>
        <input
          id="full-name"
          className={`input ${errors.name ? "invalid" : ""}`}
          type="text"
          placeholder="e.g. John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "err-name" : undefined}
        />
        {errors.name && <div id="err-name" className="error-text">{errors.name}</div>}
      </div>

      {/* Email */}
      <div className="field">
        <label htmlFor="email" className="label">Email *</label>
        <input
          id="email"
          className={`input ${errors.email ? "invalid" : ""}`}
          type="email"
          placeholder="e.g. john@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "err-email" : undefined}
        />
        {errors.email && <div id="err-email" className="error-text">{errors.email}</div>}
      </div>

      {/* Favorite Movie */}
      <div className="field">
        <div className="label">Select Your Favorite Movie *</div>
        <div className={`radio-group ${errors.favorite ? "invalid" : ""}`}>
          <MovieList
            movies={movies}
            selected={favorite}
            onChange={(e) => setFavorite(e.target.value)}
            groupName="favoriteMovie"
          />
        </div>
        {errors.favorite && (
          <div className="error-text" style={{ marginTop: 6 }}>{errors.favorite}</div>
        )}
        <div className="help">Choose one movie you like the most.</div>
      </div>

      {/* Comments */}
      <div className="field">
        <label htmlFor="comments" className="label">Comments (optional)</label>
        <textarea
          id="comments"
          className="textarea"
          placeholder="Share why you love this movie..."
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
      </div>

      <div className="actions">
        <button className="btn" type="submit">SUBMIT</button>
        <button className="btn secondary" type="button" onClick={handleReset}>
          RESET
        </button>
      </div>
    </form>
  );  
}
