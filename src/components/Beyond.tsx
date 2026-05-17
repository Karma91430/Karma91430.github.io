import { beyond } from '../data';
import { Reveal } from './Reveal';

export function Beyond() {
  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Beyond the work</p>
          <h2 className="section-title">Two practices that shape how I build.</h2>
        </div>
        <div className="beyond-grid">
          {beyond.map((item, i) => (
            <Reveal as="article" className="beyond-card" key={item.title} delay={i * 80}>
              <div className="beyond-media">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="beyond-badge">
                  <span className="beyond-emoji" aria-hidden="true">
                    {item.emoji}
                  </span>
                  <span>{item.tagline}</span>
                </div>
              </div>
              <div className="beyond-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <dl className="beyond-facts">
                  {item.facts.map((f) => (
                    <div className="beyond-fact" key={f.key}>
                      <dt>{f.key}</dt>
                      <dd>{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
