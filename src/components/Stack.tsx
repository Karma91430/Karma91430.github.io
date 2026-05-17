import { stack } from '../data';
import { Reveal } from './Reveal';

export function Stack() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Stack</p>
          <h2 className="section-title">What I work with, day to day.</h2>
        </div>
        <div className="stack-grid">
          {stack.map((s, i) => (
            <Reveal key={s.area} className="stack-col" delay={i * 60}>
              <h4>{s.area}</h4>
              <p>{s.items}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
