import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { WorkCard } from "@/components/projects/work-card";
import { projectItems } from "@/lib/projects-data";

describe("WorkCard", () => {
  it("renders project content, details link, and external GitHub link", () => {
    const project = projectItems[0];

    render(<WorkCard {...project} />);

    expect(screen.getByRole("heading", { name: project.title })).toBeInTheDocument();
    expect(screen.getByText(project.focus)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: `${project.title} - ${project.ctaLabel}` })).toHaveAttribute(
      "href",
      project.href
    );

    const githubLink = screen.getByRole("link", { name: project.githubLabel });
    expect(githubLink).toHaveAttribute("href", project.githubUrl);
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("omits the GitHub action when no GitHub URL is provided", () => {
    const { githubUrl, githubLabel, ...projectWithoutGithub } = projectItems[0];

    void githubUrl;
    void githubLabel;

    render(<WorkCard {...projectWithoutGithub} />);

    expect(screen.queryByRole("link", { name: "GitHubを見る" })).not.toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: `${projectWithoutGithub.title} - ${projectWithoutGithub.ctaLabel}`,
      })
    ).toHaveAttribute("href", projectWithoutGithub.href);
  });
});
