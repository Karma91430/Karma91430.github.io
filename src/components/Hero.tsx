import { Reveal } from './Reveal';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <Reveal className="hero-text">
          <p className="eyebrow">Arthur Delerue · Paris</p>
          <h1 className="display">
            Data Scientist &amp; ML Engineer building{' '}
            <span className="accent">process intelligence</span> and applied AI systems.
          </h1>
          <p className="lede">
            I design, build and ship production ML — process mining, agentic AI, forecasting — for
            insurance, industrial and financial teams. Currently Tech Lead Process Mining, Data
            &amp; AI at{' '}
            <a href="https://www.silamir.com" target="_blank" rel="noopener noreferrer">
              SILAMIR Group
            </a>
            . Always happy to talk shop — drop me a message.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="mailto:arthur.delerue91@gmail.com">
              Send a message
            </a>
            <a className="btn btn-ghost" href="#work">
              See selected work
            </a>
          </div>
          <ul className="hero-meta">
            <li>
              <span>Based in</span>Paris, FR
            </li>
            <li>
              <span>Currently</span>SILAMIR · Tech Lead
            </li>
            <li>
              <span>Working on</span>Agentic process mining
            </li>
          </ul>
        </Reveal>

        <Reveal className="hero-portrait" delay={100}>
          <div className="portrait-frame">
            <img src="/images/mug_shot.jpg" alt="Portrait of Arthur Delerue" />
          </div>
          <div className="portrait-card">
            <span className="card-label">Now</span>
            <span className="card-value">
              Building AI models and workflows for different clients.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
