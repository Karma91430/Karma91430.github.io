import { Reveal } from './Reveal';

const channels = [
  {
    label: 'Email',
    value: 'arthur.delerue91@gmail.com',
    href: 'mailto:arthur.delerue91@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'in/arthur-delerue',
    href: 'https://www.linkedin.com/in/arthur-delerue/',
  },
  { label: 'GitHub', value: '@Karma91430', href: 'https://github.com/Karma91430' },
  { label: 'Résumé', value: 'Download PDF', href: '/images/CV_Arthur_Delerue_DATA.pdf' },
];

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact-inner">
        <Reveal className="contact-text">
          <p className="eyebrow">Get in touch</p>
          <h2 className="section-title">
            Working on something I might find interesting? Tell me about it.
          </h2>
          <p className="lede">
            ML systems, data platforms, agentic AI, or a long conversation about process mining —
            I'm in. Email is the best way to reach me; I read everything that comes in and reply
            within a couple of days.
          </p>
        </Reveal>
        <Reveal as="div" delay={100}>
          <ul className="contact-list">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                >
                  <span className="contact-label">{c.label}</span>
                  <span className="contact-value">{c.value}</span>
                  <span className="contact-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
