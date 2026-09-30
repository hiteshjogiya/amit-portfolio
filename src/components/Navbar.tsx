"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { site } from "@/src/data/site";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${isScrolled ? "nav-scrolled" : ""}`}>
      <div className="section-shell">
        <nav className="nav-shell" aria-label="Main navigation">
          <a href="#home" className="nav-brand text-display" aria-label={`${site.name} home`}>
            {site.name}
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {site.navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a href="#contact" className="nav-action">
              Let&apos;s Work Together
              <ArrowRight size={16} />
            </a>
          </div>

          <button
            type="button"
            className="nav-menu-button md:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
          >
            <motion.div
              className="mobile-menu-panel"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <button
                type="button"
                className="nav-menu-button mobile-menu-close md:hidden"
                aria-label="Close navigation menu"
                onClick={handleNavClick}
              >
                <X size={22} />
              </button>

              {site.navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="mobile-nav-link"
                  onClick={handleNavClick}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                className="mobile-nav-cta"
                onClick={handleNavClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 }}
              >
                Let&apos;s Work Together
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
