import { beforeEach, describe, expect, it, vi } from "vitest";
import { redirect } from "next/navigation";
import NexusQuantDetailPage from "@/app/projects/nexus-quant/page";

vi.mock("next/navigation", () => ({
  redirect: vi.fn(),
}));

describe("NexusQuantDetailPage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("redirects the stale detail route to the current projects list", () => {
    NexusQuantDetailPage();

    expect(vi.mocked(redirect)).toHaveBeenCalledWith("/projects");
  });
});
