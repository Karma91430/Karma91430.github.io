import { experiences } from '../data';
import { Reveal } from './Reveal';

export function Experience() {
  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Experience</p>
          <h2 className="section-title">Five years across radar, insurance and applied AI.</h2>
        </div>
        <ol className="timeline">
          {experiences.map((exp) => (
            <Reveal as="li" key={exp.role + exp.company}>
              <div className="timeline-head">
                <p className="timeline-period">{exp.period}</p>
                <p className="timeline-company">{exp.company}</p>
                <p className="timeline-location">{exp.location}</p>
              </div>
              <div className="timeline-body">
                <h3>{exp.role}</h3>
                <p className="timeline-desc">{exp.description}</p>
                {exp.stack && (
                  <ul className="timeline-stack">
                    {exp.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
