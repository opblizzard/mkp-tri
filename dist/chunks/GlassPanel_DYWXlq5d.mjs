import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, s as spreadAttributes, e as renderSlot, r as renderTemplate } from './astro/server_CGhlh63P.mjs';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$GlassPanel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GlassPanel;
  const { ariaLabel = "", hover = true, className = "", ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`glass-stack ${hover ? "hover-scroll" : ""} ${className}`, "class")}${addAttribute(ariaLabel, "aria-label")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/Slizz/OneDrive/Documents/GitHub/mkp-tri/src/components/GlassPanel.astro", void 0);

export { $$GlassPanel as $ };
