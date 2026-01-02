import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, r as renderTemplate } from './astro/server_BCa_VvoL.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const nav = [
    { href: "/", label: "Home" },
    { href: "/operations", label: "Operations" },
    { href: "/gallery", label: "Gallery" },
    { href: "/transparency", label: "Transparency" },
    { href: "/omni", label: "Omni" },
    { href: "/codex", label: "Codex" }
  ];
  let isDark = false;
  if (typeof window !== "undefined") {
    isDark = localStorage.getItem("mkptri-theme") === "dark";
  }
  function toggleTheme() {
    isDark = !isDark;
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", isDark);
      localStorage.setItem("mkptri-theme", isDark ? "dark" : "light");
    }
  }
  return renderTemplate`${maybeRenderHead()}<header x-data="{ lastScroll: 0, hidden: false }" x-init="window.addEventListener('scroll', () => { hidden = window.scrollY > 32 && window.scrollY > lastScroll; lastScroll = window.scrollY; });" :class="hidden ? 'translate-y-[-100%]' : 'translate-y-0'" class="fixed top-0 left-0 w-full z-50 h-16 flex items-center justify-between px-4 sm:px-6 bg-black/30 backdrop-blur-md border-b border-white/10 shadow-glass transition-transform duration-300" style="will-change: transform;"> <div class="flex items-center gap-1 sm:gap-2"> <span class="font-bold text-base sm:text-lg font-sans text-white hover:text-codex-accent transition drop-shadow-glow cursor-pointer">MKP-TRI</span> <span class="hidden sm:inline font-mono text-codex-accent text-xs ml-2">— Living Codex</span> </div> <nav class="flex gap-2 sm:gap-4 text-xs sm:text-sm"> ${nav.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="relative px-1 sm:px-2 py-1 rounded font-medium text-slate-200 hover:text-codex-accent transition underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-codex-accent"${addAttribute(Astro2.url.pathname === item.href ? "page" : void 0, "aria-current")}> ${item.label} ${Astro2.url.pathname === item.href && renderTemplate`<span class="absolute left-0 right-0 -bottom-1 h-0.5 bg-codex-accent rounded-full"></span>`} </a>`)} </nav> <button aria-label="Toggle dark mode" class="ml-2 sm:ml-4 p-2 rounded hover:bg-white/10 transition-colors"${addAttribute(toggleTheme, "onclick")}> ${isDark ? renderTemplate`<svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="text-codex-accent"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.05l-.71-.71"></path></svg>` : renderTemplate`<svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="text-codex-accent"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"></path></svg>`} </button> </header>`;
}, "C:/Users/Slizz/OneDrive/Documents/GitHub/mkp-tri/src/components/Header.astro", void 0);

export { $$Header as $ };
