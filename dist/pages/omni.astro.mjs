/* empty css                                 */
import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CGhlh63P.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_DpIO8ead.mjs';
import { $ as $$GlassPanel } from '../chunks/GlassPanel_DYWXlq5d.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "MKP-TRI \xB7 Omni Interface", "description": "Omni console for idea ingress and cycle orchestration." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GlassPanel", $$GlassPanel, { "ariaLabel": "Omni Hero Panel", "className": "max-w-2xl mx-auto mt-24 mb-10 py-10 px-4 text-center" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1 class="text-4xl font-bold text-codex-accent font-mono mb-2 drop-shadow-glow">Omni Interface</h1> <p class="text-lg text-slate-200 font-mono mb-4">Unified LLM context, chat, and protocol for MKP-TRI. Interact with the mythic edge below.</p> ` })} ${renderComponent($$result2, "GlassPanel", $$GlassPanel, { "ariaLabel": "Omni Dashboard Panel", "className": "w-full max-w-4xl mx-auto px-2 mb-12 grid grid-cols-1 md:grid-cols-2 gap-8" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "GlassPanel", $$GlassPanel, { "ariaLabel": "Omni LLM Chat", "className": "p-6 md:col-span-2" }, { "default": ($$result4) => renderTemplate` <h3 class="font-semibold mb-2 text-codex-accent font-mono text-lg">Omni LLM Chat</h3> <p class="text-base text-slate-300 mb-2">Interact with the Omni LLM for codex queries, artifact generation, and protocol operations. The chat interface is designed for transparency and inspectability.</p> ` })} ${renderComponent($$result3, "GlassPanel", $$GlassPanel, { "ariaLabel": "Unified Context", "className": "p-6" }, { "default": ($$result4) => renderTemplate` <h3 class="font-semibold mb-2 text-codex-accent font-mono text-lg">Unified Context</h3> <p class="text-base text-slate-300 mb-2">All codex entries, artifacts, and operations are unified in a single context for seamless interaction. The Omni protocol ensures every exchange is logged and inspectable.</p> ` })} ${renderComponent($$result3, "GlassPanel", $$GlassPanel, { "ariaLabel": "Omni Protocol", "className": "p-6" }, { "default": ($$result4) => renderTemplate` <h3 class="font-semibold mb-2 text-codex-accent font-mono text-lg">Omni Protocol</h3> <p class="text-base text-slate-300 mb-2">The Omni protocol powers sovereign, transparent, and programmable LLM operations. It is the mythic interface for the codex, artifacts, and edge computation.</p> ` })} ${renderComponent($$result3, "GlassPanel", $$GlassPanel, { "ariaLabel": "Omni Console Panel", "className": "md:col-span-2 p-0" }, { "default": ($$result4) => renderTemplate` <div x-data="{ input: '', outputs: [] }" class="max-w-4xl mx-auto px-6"> <div class="p-8 rounded-xl"> <h2 class="text-3xl mb-6">Omni Console — Idea Ingress</h2> <textarea x-model="input" placeholder="Enter mythic idea..." class="w-full bg-black/50 border border-cyan-400/30 rounded p-4 text-white mb-4"></textarea> <button @click="outputs.unshift({text: input, time: new Date().toISOString()}); input = ''" class="bg-cyan-600 hover:bg-cyan-500 px-6 py-3 rounded">
Send to Omni
</button> <div class="mt-8 space-y-4"> <template x-for="output in outputs"> ${renderComponent($$result4, "GlassPanel", $$GlassPanel, { "ariaLabel": "Omni Console Output", "className": "p-4 rounded border-l-4 border-cyan-400" }, { "default": ($$result5) => renderTemplate` <p x-text="output.text"></p> <p class="text-sm text-gray-400 mt-2">Ingested: <span x-text="new Date(output.time).toLocaleString()"></span></p> <p class="text-cyan-300 mt-1">→ Bound to next cycle. Inspectable.</p> ` })} </template> </div> </div> </div> ` })} ` })} ${renderComponent($$result2, "GlassPanel", $$GlassPanel, { "ariaLabel": "About Omni Panel", "className": "w-full max-w-3xl mx-auto px-2 mb-16" }, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl font-bold text-codex-accent mb-4 font-mono">About Omni</h2> <div class="text-slate-200 text-base leading-relaxed">
Omni is the sovereign LLM interface for MKP-TRI. It unifies all codex knowledge, artifact generation, and protocol operations in a single, inspectable context. Every interaction is logged, auditable, and open for community contribution.<br><br>
The Omni protocol is designed for mythic computation at the edge – blending transparency, sovereignty, and creative intelligence.
</div> ` })} ` })}`;
}, "C:/Users/Slizz/OneDrive/Documents/GitHub/mkp-tri/src/pages/omni/index.astro", void 0);

const $$file = "C:/Users/Slizz/OneDrive/Documents/GitHub/mkp-tri/src/pages/omni/index.astro";
const $$url = "/omni";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
