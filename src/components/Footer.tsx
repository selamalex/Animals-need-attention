import anaLogoImg from "@/assets/ANA-logo.png";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border py-12 px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <a href="#" aria-label="Animals Need Attention home" className="shrink-0">
        <img src={anaLogoImg} alt="Animals Need Attention logo" className="h-10 md:h-12 w-auto" />
      </a>
        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} {t("footer.copyright")}
        </p>
        <div className="flex gap-6 text-muted-foreground">
           <a href="https://www.instagram.com/animalsneedattention/" target="_blank" className="hover:text-primary transition-colors text-sm font-medium">Instagram</a>
          <a href="https://www.tiktok.com/@fevianimalsneedattention" target="_blank" className="hover:text-primary transition-colors text-sm font-medium">TikTok</a>
          <a href="https://t.me/fevianimals" target="_blank"className="hover:text-primary transition-colors text-sm font-medium">Telegram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
