import { useState } from "react";
import { useSearchParams } from "react-router";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get("q") ?? "");
  const applied = searchParams.get("q") ?? "";
  const normalized = applied.trim().toLowerCase();

  const visible = projects.filter((p) =>
    `${p.title} ${p.category} ${p.technologies.join(" ")}`
      .toLowerCase()
      .includes(normalized)
  );

  return (
    <section>
      <h1>Projects</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const next = new URLSearchParams(searchParams);
          if (query.trim()) {
            next.set("q", query.trim());
          } else {
            next.delete("q");
          }
          setSearchParams(next);
        }}
      >
        <label htmlFor="project-search">Filter projects</label>
        <input
          id="project-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Apply</button>
      </form>
      <p role="status">{visible.length} project(s) found</p>
      {visible.length ? (
        <div className="grid">
          {visible.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      ) : (
        <p>No projects match. Try another search.</p>
      )}
    </section>
  );
}
