import donationBackground from "@/assets/donation-background.png";
import { useLanguage } from "@/context/LanguageContext";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, Heart, X } from "lucide-react";
import { useState } from "react";

const bankAccounts = [
  { bank: "Commercial Bank of Ethiopia (CBE)", account: "1000XXXXXXXX", name: "Animals Need Attention" },
  { bank: "Awash Bank", account: "0170XXXXXXXX", name: "Animals Need Attention" },
  { bank: "Telebirr", account: "09XXXXXXXX", name: "Animals Need Attention" },
];

const DonateSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState<number | null>(null);
  const { t } = useLanguage();

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopied(idx);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
      <section id="donate" className="section-container relative overflow-hidden rounded-3xl lg:rounded-[2rem]">
        <div
          className="hidden lg:block absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${donationBackground})` }}
          aria-hidden="true"
        />
        <div className="hidden lg:block absolute inset-0 bg-background/75" aria-hidden="true" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center relative z-10"
        >
          <Heart className="w-12 h-12 text-primary mx-auto mb-6" strokeWidth={1.5} />
          <h2 className="font-serif text-4xl md:text-5xl mb-4">{t("donate.title")}</h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10">
            {t("donate.subtitle")}
          </p>
          <button onClick={() => setShowModal(true)} className="btn-primary">
            {t("donate.cta")}
          </button>
        </motion.div>
      </section>

      {/* Donate Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-3xl p-6 md:p-7 max-w-md w-full max-h-[82vh] overflow-y-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/90 border border-border text-muted-foreground hover:text-foreground hover:bg-background transition-colors flex items-center justify-center"
                aria-label="Close donation popup"
              >
                <X size={18} />
              </button>

              <h3 className="font-serif text-2xl md:text-3xl mb-2">{t("donate.modal.title")}</h3>
              <p className="text-muted-foreground mb-8">{t("donate.modal.desc")}</p>

              <div className="space-y-4">
                {bankAccounts.map((acc, i) => (
                  <div key={i} className="card-surface !p-5 !rounded-2xl">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                          {t("donate.modal.bank")}
                        </p>
                        <p className="font-medium mb-3">{acc.bank}</p>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                          {t("donate.modal.account")}
                        </p>
                        <p className="font-mono text-lg font-semibold text-primary">{acc.account}</p>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2 mb-1">
                          {t("donate.modal.name")}
                        </p>
                        <p className="text-sm">{acc.name}</p>
                      </div>
                      <button
                        onClick={() => handleCopy(acc.account, i)}
                        className="text-muted-foreground hover:text-primary transition-colors p-2"
                        title="Copy account number"
                      >
                        {copied === i ? <Check size={18} className="text-primary" /> : <Copy size={18} />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-center text-muted-foreground mt-8 text-sm">
                {t("donate.modal.thanks")}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DonateSection;
