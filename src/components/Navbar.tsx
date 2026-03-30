import anaLogoImg from "@/assets/ANA-logo.png";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 bg-background border-b border-border">
        <div className="flex justify-between items-center py-6 px-6 md:px-8 max-w-7xl mx-auto">
          <a href="#" aria-label="Animals Need Attention home" className="shrink-0">
            <img src={anaLogoImg} alt="Animals Need Attention logo" className="h-8 md:h-10 w-auto" />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest">
            <a href="#about" className="hover:text-primary transition-colors">{t("nav.about")}</a>
            <a href="#work" className="hover:text-primary transition-colors">{t("nav.work")}</a>
            <a href="#gallery" className="hover:text-primary transition-colors">{t("nav.gallery")}</a>
            <a href="#donate" className="hover:text-primary transition-colors">{t("nav.donate")}</a>
            <LanguageSwitcher />
            <a href="#cta" className="btn-primary !py-2 !px-6 !text-sm">{t("nav.join")}</a>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <LanguageSwitcher />
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border z-50 p-6 flex flex-col gap-4 md:hidden">
            <a href="#about" onClick={() => setIsOpen(false)} className="text-sm uppercase tracking-widest font-medium hover:text-primary transition-colors">{t("nav.about")}</a>
            <a href="#work" onClick={() => setIsOpen(false)} className="text-sm uppercase tracking-widest font-medium hover:text-primary transition-colors">{t("nav.work")}</a>
            <a href="#gallery" onClick={() => setIsOpen(false)} className="text-sm uppercase tracking-widest font-medium hover:text-primary transition-colors">{t("nav.gallery")}</a>
            <a href="#donate" onClick={() => setIsOpen(false)} className="text-sm uppercase tracking-widest font-medium hover:text-primary transition-colors">{t("nav.donate")}</a>
            <a href="#cta" onClick={() => setIsOpen(false)} className="btn-primary text-center !text-sm">{t("nav.join")}</a>
          </div>
        )}
      </nav>

      <div className="h-[76px]" aria-hidden="true" />
    </>
  );
};

export default Navbar;
