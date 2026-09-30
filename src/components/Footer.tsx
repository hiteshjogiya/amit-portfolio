import { site } from "@/src/data/site";

export default function Footer() {
  return (
    <footer className="section-space pb-10 pt-0">
      <div className="section-shell">
        <div className="footer-shell">
          <div>
            <div className="text-display text-2xl font-medium tracking-[-0.06em] text-white">{site.name}</div>
            <p className="mt-3 max-w-sm text-sm leading-7 text-zinc-400">{site.role}</p>
          </div>

          <div className="footer-links">
            {site.navItems.map((item) => (
              <a key={item.label} href={item.href} className="footer-link">
                {item.label}
              </a>
            ))}
          </div>

          <div className="footer-meta">
            <div className="flex flex-wrap gap-3 text-sm text-zinc-400">
              {site.socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="footer-link">
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 text-xs uppercase tracking-[0.2em] text-zinc-500">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
