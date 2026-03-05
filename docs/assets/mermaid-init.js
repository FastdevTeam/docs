/**
 * Convert fenced ```mermaid blocks rendered by Jekyll into Mermaid diagrams.
 * Works with kramdown's output: <pre><code class="language-mermaid">...</code></pre>
 */
document.addEventListener("DOMContentLoaded", () => {
  if (typeof mermaid === "undefined") return;

  mermaid.initialize({
    startOnLoad: false,
    securityLevel: "strict"
  });

  const blocks = document.querySelectorAll("pre > code.language-mermaid");
  blocks.forEach((code) => {
    const pre = code.parentElement;
    const div = document.createElement("div");
    div.className = "mermaid";
    div.textContent = code.textContent;
    pre.replaceWith(div);
  });

  // Render any mermaid blocks
  try {
    mermaid.run({ querySelector: ".mermaid" });
  } catch (e) {
    // Fail gracefully
    console.warn("Mermaid render failed:", e);
  }
});
