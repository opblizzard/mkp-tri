/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_73EGedir.mjs';
import 'kleur/colors';
import 'html-escaper';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`import Layout from "@components/Layout.astro";
import Header from "@components/Header.astro";
import Footer from "@components/Footer.astro";
import CodexEntry from "@components/CodexEntry.astro";
import ${getCodexEntries} from "@lib/codex";
import GlassCard from "@components/GlassCard.astro";
import Timeline from "@components/Timeline.astro";

const entries = getCodexEntries();
${renderComponent($$result, "Layout", Layout, { "title": "MKP-TRI \xB7 Codex", "description": "Ceremonial checkpoints and artifacts for MKP-TRI." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="text-center glass max-w-2xl mx-auto mt-24 mb-10 py-10 px-4"> <h1 class="text-4xl font-bold text-codex-accent font-mono mb-2 drop-shadow-glow">Codex</h1> <p class="text-lg text-slate-200 font-mono mb-4">A chronological archive of cycles and artifacts. Each entry is a sovereign event, bound to a commit and ceremony.</p> </header> <section class="w-full max-w-4xl mx-auto px-2 mb-12 grid grid-cols-1 gap-8"> ${renderComponent($$result2, "GlassCard", GlassCard, { "className": "p-6" }, { "default": ($$result3) => renderTemplate` <h3 class="font-semibold mb-2 text-codex-accent font-mono text-lg">About the Codex</h3> <p class="text-base text-slate-300 mb-2">The Codex is the living archive of MKP-TRI. Every cycle, artifact, and protocol checkpoint is inscribed here for transparency, provenance, and mythic continuity.</p> ` })} ${renderComponent($$result2, "GlassCard", GlassCard, { "className": "p-6" }, { "default": ($$result3) => renderTemplate` <h3 class="font-semibold mb-2 text-codex-accent font-mono text-lg">Codex Timeline</h3> ${renderComponent($$result3, "Timeline", Timeline, { "items": [
    { year: "2023", event: "Genesis cycle inscribed" },
    { year: "2024", event: "Artifact registry expanded" },
    { year: "2025", event: "Codex protocol formalized" },
    { year: "2026", event: "Edge ceremonies unified" }
  ] })} ` })} ${renderComponent($$result2, "GlassCard", GlassCard, { "className": "p-6" }, { "default": ($$result3) => renderTemplate` <h3 class="font-semibold mb-2 text-codex-accent font-mono text-lg">Codex Entries</h3> ${entries.length === 0 ? renderTemplate`<p class="text-base text-slate-400 font-mono">No entries yet. The codex is waiting for its first inscription.</p>` : renderTemplate`<div class="space-y-3 sm:space-y-4"> ${entries.slice().sort((a, b) => a.timestamp < b.timestamp ? 1 : -1).map((entry) => renderTemplate`${renderComponent($$result3, "CodexEntry", CodexEntry, { ...entry })}`)} </div>`}` })} </section> <section class="w-full max-w-3xl mx-auto px-2 mb-16"> <h2 class="text-2xl font-bold text-codex-accent mb-4 font-mono">Why the Codex?</h2> <div class="glass p-6 text-slate-200 text-base leading-relaxed">
The Codex is the ceremonial memory of MKP-TRI. It ensures every cycle, artifact, and protocol is open, inspectable, and sovereign. The archive is ever-expanding, shaped by community and ceremony.<br><br>
Contribute to the living codex and help inscribe the next mythic checkpoint.
</div> </section> ` })}`;
}, "C:/Users/Slizz/OneDrive/Documents/GitHub/mkp-tri/src/pages/codex/index.astro", void 0);

const $$file = "C:/Users/Slizz/OneDrive/Documents/GitHub/mkp-tri/src/pages/codex/index.astro";
const $$url = "/codex";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
