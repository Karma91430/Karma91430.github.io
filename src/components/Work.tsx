import { useMemo, useState } from 'react';
import { projects, projectCategories, type Project } from '../data';
import { Reveal } from './Reveal';

function ProjectCard({ project }: { project: Project }) {
  const hasImage = Boolean(project.image);
  const variant = project.featured ? 'feature' : hasImage ? '' : 'compact';
  return (
    <Reveal as="article" className={`work-card ${variant}`}>
      {hasImage && (
        <div className="work-media">
          <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
        </div>
      )}
      <div className="work-body">
        <p className="work-tag">{project.category}</p>
        <h3>{project.title}</h3>

        <div className="work-section">
          <p className="work-section-label">Description</p>
          <p className="work-section-text">{project.description}</p>
        </div>

        <div className="work-section">
          <p className="work-section-label">Impact</p>
          <p className="work-section-text">{project.impact}</p>
        </div>

        <div className="work-section">
          <p className="work-section-label">Stack</p>
          <ul className="work-tech">
            {project.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        {project.href && (
          <a
            className="work-link"
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.href.replace(/^https?:\/\//, '')} →
          </a>
        )}
      </div>
    </Reveal>
  );
}

export function Work() {
  const [filter, setFilter] = useState<Project['category'] | 'All'>('All');

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title">A few projects worth showing.</h2>
          <p className="section-sub">
            Filter by area to narrow down. Each card lists what it is, the impact it had, and the
            stack used to ship it.
          </p>
        </div>

        <div className="work-filter" role="tablist" aria-label="Filter projects by category">
          <button
            type="button"
            role="tab"
            aria-selected={filter === 'All'}
            className={`filter-chip ${filter === 'All' ? 'is-active' : ''}`}
            onClick={() => setFilter('All')}
          >
            All
            <span className="filter-count">{projects.length}</span>
          </button>
          {projectCategories.map((c) => {
            const count = projects.filter((p) => p.category === c).length;
            if (count === 0) return null;
            return (
              <button
                type="button"
                role="tab"
                aria-selected={filter === c}
                key={c}
                className={`filter-chip ${filter === c ? 'is-active' : ''}`}
                onClick={() => setFilter(c)}
              >
                {c}
                <span className="filter-count">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="work-grid">
          {filtered.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
