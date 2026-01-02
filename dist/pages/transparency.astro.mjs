/* empty css                                 */
import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_BCa_VvoL.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_Cxjstgwy.mjs';
import { $ as $$GlassPanel } from '../chunks/GlassPanel_ClY7dDLj.mjs';
import { $ as $$Timeline } from '../chunks/Timeline_B73MzjcC.mjs';
import 'clsx';
import { $ as $$Header } from '../chunks/Header_Cg79VzjP.mjs';
import { s as siteContext } from '../chunks/context_B6jy9K6K.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$TransparencyPanel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TransparencyPanel;
  const {
    lastSync = "Unknown",
    sourceRepo = "https://github.com/opblizzard/mkp-tri",
    currentBranch = "main"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mt-8"> <h2 class="text-sm font-semibold uppercase tracking-wide text-mkp-muted mb-2">
Transparency
</h2> <div class="code-shell space-y-1"> <div>// public provenance</div> <div>repo: ${sourceRepo}</div> <div>branch: ${currentBranch}</div> <div>last_sync: ${lastSync}</div> </div> </section>`;
}, "C:/Users/Slizz/OneDrive/Documents/GitHub/mkp-tri/src/components/TransparencyPanel.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "Layout", $$Layout, { "title": "MKP-TRI \xB7 Transparency", "description": "Public provenance and deployment lineage for MKP-TRI." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gradient-to-b from-cyan-900 via-blue-900 to-slate-900 text-white flex items-center justify-center"> <div class="glass-layer w-full max-w-5xl mx-auto px-2 sm:px-6 py-6 sm:py-12 space-y-8 sm:space-y-12"> ${renderComponent($$result2, "GlassPanel", $$GlassPanel, { "ariaLabel": "Transparency Hero Panel", "className": "max-w-2xl mx-auto mt-16 sm:mt-24 mb-6 sm:mb-10 py-6 sm:py-10 px-2 sm:px-4 text-center" }, { "default": ($$result3) => renderTemplate` <h1 class="text-4xl font-bold text-codex-accent font-mono mb-2 drop-shadow-glow">${siteContext.hero.transparency.heading}</h1> <p class="text-lg text-slate-200 font-mono mb-4">${siteContext.hero.transparency.subheading}</p> ` })} ${renderComponent($$result2, "GlassPanel", $$GlassPanel, { "ariaLabel": "Transparency Principles & Timeline Panel", "className": "w-full max-w-4xl mx-auto px-1 sm:px-2 mb-8 sm:mb-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "GlassPanel", $$GlassPanel, { "ariaLabel": "Transparency Principles", "className": "p-3 sm:p-6" }, { "default": ($$result4) => renderTemplate` <h3 class="font-semibold mb-2 text-codex-accent font-mono text-lg">Transparency Principles</h3> <ul class="list-disc ml-6 text-slate-300 text-base"> <li>Open source code and models</li> <li>Public ledgers for all operations</li> <li>Real-time artifact provenance</li> <li>Community-driven audits</li> </ul> ` })} ${renderComponent($$result3, "GlassPanel", $$GlassPanel, { "ariaLabel": "Transparency Timeline", "className": "p-3 sm:p-6" }, { "default": ($$result4) => renderTemplate` <h3 class="font-semibold mb-2 text-codex-accent font-mono text-lg">Transparency Timeline</h3> ${renderComponent($$result4, "Timeline", $$Timeline, { "items": [
    { year: "2023", event: "Genesis protocol open-sourced" },
    { year: "2024", event: "Public artifact registry launched" },
    { year: "2025", event: "Real-time transparency dashboard" },
    { year: "2026", event: "Omni audit pipeline deployed" }
  ] })} ` })} ` })} ${renderComponent($$result2, "GlassPanel", $$GlassPanel, { "ariaLabel": "Deployment Provenance Panel", "className": "w-full max-w-3xl mx-auto px-2 mb-12" }, { "default": ($$result3) => renderTemplate` <h3 class="font-semibold mb-2 text-codex-accent font-mono text-lg">Deployment Provenance</h3> ${renderComponent($$result3, "TransparencyPanel", $$TransparencyPanel, { "lastSync": lastSync, "sourceRepo": "https://github.com/opblizzard/mkp-tri", "currentBranch": "main" })} ` })} ${renderComponent($$result2, "GlassPanel", $$GlassPanel, { "ariaLabel": "Why Transparency Panel", "className": "w-full max-w-3xl mx-auto px-2 mb-16" }, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl font-bold text-codex-accent mb-4 font-mono">Why Transparency?</h2> <div class="text-slate-200 text-base leading-relaxed">
Transparency is the foundation of trust and sovereignty in MKP-TRI. Every operation, artifact, and protocol is open for inspection, audit, and contribution. Radical transparency ensures that the mythic edge remains accountable, collaborative, and ever-evolving.<br><br>
Join the community in shaping the future of open, inspectable computation.
</div> ` })} </div> </div> ` })}`;
}, "C:/Users/Slizz/OneDrive/Documents/GitHub/mkp-tri/src/pages/transparency/index.astro", void 0);

const $$file = "C:/Users/Slizz/OneDrive/Documents/GitHub/mkp-tri/src/pages/transparency/index.astro";
const $$url = "/transparency";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
