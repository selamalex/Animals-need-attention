import { createContext, ReactNode, useContext, useState } from "react";

export type Lang = "en" | "am";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "nav.about": { en: "About", am: "ስለ እኛ" },
  "nav.work": { en: "Our Work", am: "ስራዎቻችን" },
  "nav.gallery": { en: "Gallery", am: "የፎቶ ማህደር" },
  "nav.donate": { en: "Donate", am: "ይለግሱ" },
  "nav.join": { en: "Join Us", am: "ይቀላቀሉን" },

  // Hero
  "hero.title1": { en: "Animals", am: "እንሰሳትም" },
  "hero.title2": { en: "need", am: "ትኩረት" },
  "hero.title3": { en: "attention.", am: "ይሻሉ።" },
  "hero.desc": {
    en: "This is compassion-driven,voice for the voiceless,  non-profit social movement.",
    am: "ይሄ ለእንሰሳት ርህራሄ ባላቸው ሰዎች የተቋቋመ፣ድምጽ ለሌላቸው ድምጽ የሚሆን፣ ለትርፍ ያልተቋቋመ ማህበራዊ እንቅስቃሴ ነው።",
  },
  "hero.desc2": {
    en: "The righteous care for the needs of their animals, but the kindest acts of the wicked are cruel.",
    am: "ጻድቅ ሰው ለእንስሳው ነፍስ ይራራል፤ የኀጥኣን ምሕረት ግን ጨካኝ ነው።",
  },
   "hero.desc3": {
    en: "Proverbs 12:10",
    am: "ምሳሌ 12:10",
  },
  
  "hero.cta": { en: "Get Involved", am: "ተሳተፉ" },
  "hero.learn": { en: "Learn More", am: "ተጨማሪ ይወቁ" },

  // About
  "about.title1": { en: "Animals are", am: "እንሰሳት" },
  "about.title2": { en: "our responsibilities.", am: "የእኛ ኃላፊነት ናቸው።" },
  "about.p1": {
    en: "Animals Need Attention is a compassion-driven movement inspired by the work of Feven Melese in Addis Ababa. What began as one person’s effort to care for abandoned and injured animals has grown into a voice for those often ignored on our streets.",
    am: "እንሰሳትም ትኩረት ይሻሉ ፌቨን መለሰ ለእንሰሳት ባላት ርህራሄ የጀመረችው እንቅስቃሴ ነው። በአዲስ አበባ የተጎዱ እና የተጣሉ እንስሳት ለመንከባከብ በአንድ ሰው ጥረት የተጀመረው ይህ እንቅስቃሴ አድጎ ድምጽ ለሌላቸው እንሰሳት ድምጽ እየሆነ ነው። ",
  },
  "about.p2": {
    en: "We focus on feeding, rescuing, and protecting stray animals while encouraging a shift in how society sees them; not as objects of use, but as lives worthy of care, dignity, and love.",
    am: "ይህ እንቅስቃሴ በጎዳና ያሉ ውሾችን መመገብ፣ ከጎዳና ማንሳት እና እንክብካቤ ማድረግ ላይ ትኩረት ያደርጋል፤ እንዲሁም ማህበረሰቡ እንሰሳትን እንደ ንብረቶች ሳይሆን እንክብካቤ፣ ክብር እና ፍቅር እንደሚገባቸው ክቡር ነፍሳት እንዲመለከታቸው ከመቅረጽ አንጻር በትጋት እየሰራ ይገኛል ።",
  },
  "about.stat1": { en: "Voluntary", am: "በጎ ፈቃደኝነት" },
  "about.stat2": { en: "Awareness", am: "ግንዛቤ መፍጠር" },

  // What We Do
  "work.title": { en: "What We Do", am: "የምንሰራቸው ስራዎች" },
  "work.subtitle": {
    en: "Small, consistent acts of care that make a world of difference.",
    am: "ትንንሽ ግን ቀጣይነት ያላቸው የእንክብካቤ ተግባራት ትልቅ ለውጥ ይፈጥራሉ።",
  },
  "work.feeding.title": { en: "Mass Feeding", am: "የጅምላ ምገባ" },
  "work.feeding.desc": {
    en: "We organize regular street mass feeding programs, preparing and providing food for stray dogs to ensure they are not left hungry.",
    am: "በመደበኛ የጎዳና ላይ የጅምላ ምገባዎቻችን በጎዳና ላይ የሚኖሩ ውሾች እንዳይራቡ ምግብ በማዘጋጀት እና በማቅረብ እናስባቸዋለን።",
  },
  "work.medical.title": { en: "Medical Support", am: "የሕክምና ድጋፍ" },
  "work.medical.desc": {
    en: "Coordinating with local vets for vaccinations, sterilization, and emergency medical care.",
    am:  "አብረውን ከሚሰሩ የእንስሳት ሐኪሞች ጋር መተባበር  ክትባት እንዲያገኙ፣ እንዲመክኑ፣ እንዲሁም ለተጎዱ እንሰሳት የህክምና እርዳታ እንዲሰጣቸው እንሰራለን ።",
  },
  "work.rescue.title": { en: "Rescue & Shelter", am: "ማዳን እና መጠለያ" },
  "work.rescue.desc": {
    en: "We rescue vulnerable animals and bring them into safe shelter, working to give them a second chance by finding loving, permanent homes.",
    am: "የተጎዱ እና የተጣሉ እንሰሳትን ከጎዳና በማንሳት ወደ ምቹ መጠለያችን በማስገባት፤ ሁለተኛ እድል ያገኙ ዘንድ በፍቅር የተሞላ ቋሚ ቤታቸውን በመፈለግ ላይ በትጋት እንሰራለን።",
  },
  "work.awareness.title": { en: "Awareness", am: "ግንዛቤ" },
  "work.awareness.desc": {
    en: "Through social media and community events, we raise awareness and work to change how people see and treat animals; promoting compassion,and responsibility.",
    am: "ማህበራዊ ሚድያን በመጠቀም እንዲሁም የተለያዩ ዝግጅቶች ላይ በመታደም ማህበረሰቡ እንስሳትን እንዴት መመልከት እንዳለበት እና እንዴት መያዝ እንዳለበት ግንዛቤን እንፈጥራለን። ይህም ርህራሄን እና የሃላፊነት ስሜትን መሰማትን በመስበክ ነው።",
  },

  // Impact
  "impact.title": { en: "About our shelter", am: "ጥዊት ስለ መጠለያችን" },
  "impact.subtitle": {
    en: "Located in XYZ area, our shelter stands as a place of hope for rescued animals. Every number you see is not just a statistic, but a soul saved from the streets and given a second chance at life, care, and love.",
    am: "በXYZ አካባቢ የሚገኝ መጠለያችን ለተጎዱ እንስሳት የተስፋ ቦታ ነው። የምትመለከቱት ቁጥር እንደ ቁጥር ብቻ አይደለም፤ ነገር ግን ከጎዳና የተረፈ፤ ሁለተኛ የህይወት፣ የእንክብካቤ እና የፍቅር እድል የተሰጣቸው ነፍሳት ቁጥር ነው።",
  },
  "impact.animals": { en: "Animals Helped", am: "የተረዱ እንስሳት" },
  "impact.volunteers": { en: "Active Volunteers", am: "ንቁ በጎ ፈቃደኞች" },
  "impact.rescues": { en: "Successful Rescues", am: "ከጎዳና የተነሱ" },
  "impact.meals": { en: "Given Medical Care", am: "የህክምና እርዳታ የተደረገላቸው" },

  // Gallery
  "gallery.title": { en: "Our Gallery", am: "ከፎቶ ማህደራችን" },
  "gallery.subtitle": {
    en: "Real stories from our community of volunteers and the animals we serve.",
    am: "ከበጎ ፈቃደኞቻችን ማህበረሰብ እና ከምናገለግላቸው እንስሳት እውነተኛ ታሪኮች።",
  },

  // CTA
  "cta.title1": { en: "Every small act", am: "እያንዳንዱ ትንሽ ተግባር" },
  "cta.title2": { en: "matters.", am: "ዋጋ አለው።" },
  "cta.desc": {
    en: "Join our Telegram group or follow our journey on TikTok to see how you can help today.",
    am: "የቴሌግራም ቡድናችንን ይቀላቀሉ ወይም ዛሬ እንዴት ማገዝ እንደሚችሉ ለማየት በቲክቶክ ይከተሉን።",
  },
  "cta.telegram": { en: "Join Telegram", am: "ቴሌግራምን ይቀላቀሉ" },
  "cta.instagram": { en: "Follow TikTok", am: "በቲክቶክ ይከተሉን" },

  // Donate
  "donate.title": { en: "Support Our Cause", am: "ዓላማችንን ይደግፉ" },
  "donate.subtitle": {
    en: "Your donation helps us feed, rescue, and care for animals in need.",
    am: "ልገሳዎ እርዳታ የሚያስፈልጋቸውን እንስሳት ለመመገብ፣ ለማዳን እና ለመንከባከብ ይረዳናል።",
  },
  "donate.cta": { en: "Donate Now", am: "አሁን ይለግሱ" },
  "donate.modal.title": { en: "Bank Account Details", am: "የባንክ ሂሳብ ዝርዝር" },
  "donate.modal.desc": {
    en: "Please transfer your donation to one of the following accounts:",
    am: "እባክዎ ልገሳዎን ወደ ከሚከተሉት ሂሳቦች በአንዱ ያስተላልፉ፡",
  },
  "donate.modal.bank": { en: "Bank", am: "ባንክ" },
  "donate.modal.account": { en: "Account Number", am: "የሂሳብ ቁጥር" },
  "donate.modal.name": { en: "Account Name", am: "የሂሳብ ስም" },
  "donate.modal.thanks": {
    en: "Thank you for your generous support! 🙏",
    am: "ለለጋስ ድጋፍዎ እናመሰግናለን! 🙏",
  },

  // Footer
  "footer.copyright": {
    en: "Animals Need Attention. All rights reserved.",
    am: "እንሰሳትም ትኩረት ይሻሉ. መብቶች ሁሉ የተጠበቁ ናቸው።",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");

  const t = (key: string): string => {
    return translations[key]?.[lang] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
