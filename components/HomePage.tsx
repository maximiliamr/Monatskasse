import { dictionary, type Language } from "@/i18n/config";
import { homeData, JsonLd } from "@/lib/structured-data";
import Footer from "./Footer";
import ApplePay from "./home/ApplePay";
import Contact from "./home/Contact";
import Details from "./home/Details";
import Devices from "./home/Devices";
import Features from "./home/Features";
import Help from "./home/Help";
import Hero from "./home/Hero";
import Privacy from "./home/Privacy";
import IconSprite from "./IconSprite";
import Nav from "./Nav";

export default function HomePage({ lang }: { lang: Language }) {
  const t = dictionary(lang);
  return (
    <>
      <IconSprite />
      <Nav lang={lang} t={t} page="home" />
      <Hero lang={lang} t={t} />
      <main>
        <Features lang={lang} t={t} />
        <Devices lang={lang} t={t} />
        <Details t={t} />
        <Privacy lang={lang} t={t} />
        <ApplePay t={t} />
        <Help t={t} />
        <Contact lang={lang} t={t} />
      </main>
      <Footer lang={lang} t={t} />
      <JsonLd data={homeData(lang)} />
    </>
  );
}
