import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Gift } from "lucide-react";
import logo from "@/assets/logo_luh_casa.png";
import cena from "@/assets/luh_produtos_casa.png";
import telegram from "@/assets/telegram.svg";

// TODO: substituir pelo link real do canal de casa
const GROUP_URL = "https://t.me/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Achadinhos da Luh Casa — Promoções para sua casa" },
      { name: "description", content: "Promoções de utensílios, decoração e organização para sua casa. 100% gratuito." },
      { property: "og:title", content: "Achadinhos da Luh Casa" },
      { property: "og:description", content: "Sua casa mais bonita e organizada gastando menos!" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="luh-page min-h-screen font-display text-luh-ink">
      <div className="mx-auto flex max-w-md flex-col items-center px-5 pb-10 pt-4 text-center">
        <h1 className="w-full">
          <img
            src={logo}
            alt="Achadinhos da Luh Casa"
            className="luh-fade -mx-5 w-[calc(100%+2.5rem)] max-w-none"
            width={795}
            height={324}
          />
        </h1>

        <img
          src={cena}
          alt="Luh piscando cercada de panela, air fryer, utensílios, toalhas e vela"
          className="luh-fade -mx-5 mt-4 w-[calc(100%+2.5rem)] max-w-none"
          width={900}
          height={516}
        />

        <h2 className="-mt-2 text-2xl font-extrabold italic leading-snug">
          Sua casa mais bonita e organizada{" "}
          <span className="inline-block -rotate-1 rounded-lg bg-luh-pink px-2 text-luh-bg-deep">gastando menos!</span>
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-luh-ink-muted">
          <Gift className="mr-1.5 inline h-5 w-5 -translate-y-0.5 text-luh-pink-soft" />
          Receba promoções de utensílios, decoração, organização e produtos incríveis para sua casa!
        </p>

        <a
          href={GROUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="luh-cta animate-luh-pulse mt-7 flex w-full items-center justify-center gap-3 rounded-full py-4 text-lg font-bold tracking-wide"
        >
          <img src={telegram} alt="" className="h-7 w-7" />
          ENTRAR NO CANAL
        </a>

        <p className="mt-4 flex items-center gap-2 text-sm text-luh-ink-muted">
          <CheckCircle2 className="h-5 w-5 text-luh-pink-soft" />
          100% gratuito • Acesso imediato
        </p>
      </div>
    </main>
  );
}
