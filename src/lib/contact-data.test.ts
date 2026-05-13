import { describe, expect, it } from "vitest";
import {
  contactMailBodyLines,
  contactMailSubject,
  contactMailtoHref,
  createMailtoHref,
  plainMailtoHref,
} from "@/lib/contact-data";
import { siteConfig } from "@/lib/site-config";

describe("contact data", () => {
  it("creates a plain mailto link when no template fields are supplied", () => {
    expect(createMailtoHref(siteConfig.email)).toBe(`mailto:${siteConfig.email}`);
    expect(plainMailtoHref).toBe(`mailto:${siteConfig.email}`);
  });

  it("encodes subject and body lines for the contact mail template", () => {
    const href = createMailtoHref("hello@example.com", {
      subject: "相談 & 確認",
      bodyLines: ["お名前・ご所属:", "A+B"],
    });

    expect(href).toBe(
      `mailto:hello@example.com?subject=${encodeURIComponent("相談 & 確認")}&body=${encodeURIComponent(
        "お名前・ご所属:\nA+B"
      )}`
    );
    expect(contactMailtoHref).toContain(encodeURIComponent(contactMailSubject));
    expect(contactMailtoHref).toContain(encodeURIComponent(contactMailBodyLines.join("\n")));
  });

  it("does not emit empty query fields for boundary values", () => {
    expect(createMailtoHref("hello@example.com", { subject: "", bodyLines: [] })).toBe(
      "mailto:hello@example.com"
    );
    expect(createMailtoHref("hello@example.com", { bodyLines: [""] })).toBe("mailto:hello@example.com?body=");
  });
});
