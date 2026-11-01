import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  ChevronRight,
  Clock3,
  Menu,
  Search,
  TrendingUp,
} from "lucide-react";

const categories = [
  "Mercado",
  "Empresas",
  "Economia",
  "Política",
  "Investimentos",
  "Internacional",
];

const stories = [
  {
    category: "ECONOMIA",
    title: "Juros, inflação e câmbio: as variáveis que ajudam a explicar o humor do mercado",
    time: "Há 18 min",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=85",
    size: "large",
  },
  {
    category: "EMPRESAS",
    title: "O que observar nos balanços antes de avaliar uma empresa",
    time: "Há 42 min",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=85",
    size: "small",
  },
  {
    category: "POLÍTICA",
    title: "Decisões em Brasília e seus possíveis reflexos sobre a economia",
    time: "Há 1 h",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=700&q=85",
    size: "small",
  },
];

const latest = [
  {
    category: "MERCADO",
    title: "Bolsa, juros e dólar: entenda os indicadores que merecem atenção nesta semana",
    time: "09:42",
  },
  {
    category: "EMPRESAS",
    title: "Além do lucro: como ler geração de caixa e endividamento nos resultados",
    time: "09:18",
  },
  {
    category: "ECONOMIA",
    title: "Inflação de serviços: por que esse componente importa para a política monetária",
    time: "08:56",
  },
  {
    category: "INVESTIMENTOS",
    title: "Dividendos, valorização e risco: três dimensões para analisar uma ação",
    time: "08:31",
  },
];

const marketItems = [
  { name: "IBOVESPA", value: "—", change: "Aguardando integração" },
  { name: "DÓLAR", value: "—", change: "Aguardando integração" },
  { name: "IFIX", value: "—", change: "Aguardando integração" },
  { name: "NASDAQ", value: "—", change: "Aguardando integração" },
];

function SectionHeading({
  eyebrow,
  title,
  href = "#ultimas",
}: {
  eyebrow: string;
  title: string;
  href?: string;
}) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div>
        <p className="eyebrow mb-2">{eyebrow}</p>
        <h2 className="text-2xl font-bold tracking-tight text-[#142536] sm:text-[28px]">
          {title}
        </h2>
      </div>
      <a
        className="hidden items-center gap-2 pb-1 text-xs font-bold text-[#31536d] transition hover:text-[#9b7845] sm:flex"
        href={href}
      >
        Ver todas <ArrowRight size={15} />
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="bg-[#0b2033] text-white">
        <div className="container-site flex min-h-9 items-center justify-between gap-4 text-[10px] font-semibold tracking-[0.12em]">
          <p className="truncate text-white/75">INFORMAÇÃO QUE MOVE O MERCADO</p>
          <p className="hidden shrink-0 text-white/55 sm:block">
            EDIÇÃO DE DEMONSTRAÇÃO
          </p>
        </div>
      </div>

      <header className="border-b border-[#e2e7ec] bg-white">
        <div className="container-site flex h-[76px] items-center justify-between gap-5">
          <a aria-label="InfoCapital — página inicial" className="flex items-center gap-3" href="#">
            <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#102b43] text-[#d7b77f]">
              <BarChart3 size={23} strokeWidth={2.2} />
            </span>
            <span className="leading-none">
              <span className="block text-[25px] font-black tracking-[-0.07em] text-[#102b43]">
                INFO<span className="font-semibold text-[#a9824d]">CAPITAL</span>
              </span>
              <span className="mt-1 block text-[8px] font-bold tracking-[0.22em] text-[#738293]">
                NOTÍCIAS & ANÁLISES
              </span>
            </span>
          </a>

          <nav aria-label="Navegação principal" className="hidden items-center gap-6 lg:flex">
            {categories.map((category) => (
              <a
                className="text-[12px] font-semibold text-[#425466] transition hover:text-[#a9824d]"
                href="#ultimas"
                key={category}
              >
                {category}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              aria-label="Pesquisar"
              className="flex h-10 w-10 items-center justify-center rounded-full text-[#38536a] transition hover:bg-[#f1f4f6]"
              type="button"
            >
              <Search size={19} />
            </button>
            <a
              className="hidden rounded-sm bg-[#102b43] px-4 py-3 text-[11px] font-bold tracking-wide text-white transition hover:bg-[#1d4968] sm:inline-flex"
              href="#newsletter"
            >
              NEWSLETTER
            </a>
            <button
              aria-label="Abrir menu"
              className="flex h-10 w-10 items-center justify-center rounded-full text-[#38536a] lg:hidden"
              type="button"
            >
              <Menu size={21} />
            </button>
          </div>
        </div>
      </header>

      <nav aria-label="Editorias" className="border-b border-[#e2e7ec] bg-[#f9fafb]">
        <div className="container-site flex h-11 items-center gap-6 overflow-x-auto whitespace-nowrap">
          <span className="text-[10px] font-extrabold tracking-[0.13em] text-[#a9824d]">
            EDITORIAS
          </span>
          {categories.map((category) => (
            <a
              className="text-[11px] font-medium text-[#68798a] transition hover:text-[#102b43]"
              href="#ultimas"
              key={category}
            >
              {category}
            </a>
          ))}
        </div>
      </nav>

      <section className="container-site pt-7 sm:pt-9">
        <div className="mb-4 flex items-center justify-between">
          <p className="eyebrow">DESTAQUE DO DIA</p>
          <span className="text-[10px] font-medium text-[#8995a1]">
            Conteúdo ilustrativo
          </span>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.65fr_0.85fr]">
          <article className="group relative min-h-[390px] overflow-hidden rounded-sm bg-[#142d42] sm:min-h-[440px]">
            <div
              aria-hidden="true"
              className="article-image absolute inset-0"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=90)",
              }}
            />
            <div className="hero-overlay absolute inset-0" />
            <div className="relative flex min-h-[390px] max-w-[680px] flex-col justify-end p-6 sm:min-h-[440px] sm:p-10">
              <span className="mb-4 w-fit border border-[#d7b77f]/70 px-3 py-1.5 text-[9px] font-bold tracking-[0.17em] text-[#e5c995]">
                ANÁLISE ESPECIAL
              </span>
              <h1 className="max-w-[620px] text-[32px] leading-[1.08] font-bold tracking-[-0.045em] text-white sm:text-[43px]">
                O que realmente movimenta o mercado — e como interpretar os sinais
              </h1>
              <p className="mt-4 max-w-[510px] text-sm leading-6 text-white/75">
                Uma leitura sobre juros, atividade econômica, decisões políticas e
                resultados das empresas.
              </p>
              <div className="mt-7 flex items-center gap-4 text-[10px] font-semibold tracking-wide text-white/65">
                <span>INFOCAPITAL</span>
                <span className="h-1 w-1 rounded-full bg-[#d7b77f]" />
                <span>LEITURA DE 6 MIN</span>
                <span className="h-1 w-1 rounded-full bg-[#d7b77f]" />
                <span>EXEMPLO</span>
              </div>
            </div>
          </article>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {stories.slice(1).map((story) => (
              <article className="grid grid-cols-[116px_1fr] gap-4 sm:grid-cols-1 lg:grid-cols-[132px_1fr]" key={story.title}>
                <div className="article-image-wrap h-[112px] rounded-sm sm:h-[130px] lg:h-[116px]">
                  <div
                    aria-hidden="true"
                    className="article-image h-full w-full"
                    style={{ backgroundImage: `url(${story.image})` }}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="eyebrow mb-2">{story.category}</p>
                  <h2 className="text-[15px] leading-[1.35] font-bold tracking-[-0.02em] text-[#1b3042] sm:text-base">
                    {story.title}
                  </h2>
                  <p className="mt-3 flex items-center gap-1.5 text-[10px] text-[#8995a1]">
                    <Clock3 size={12} /> {story.time} · Exemplo editorial
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site mt-8">
        <div className="overflow-hidden rounded-sm bg-[#102b43] text-white">
          <div className="flex flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[#d7b77f]">
                <TrendingUp size={18} />
              </span>
              <div>
                <p className="text-[10px] font-extrabold tracking-[0.15em] text-[#d7b77f]">
                  PAINEL DE MERCADO
                </p>
                <p className="mt-1 text-xs text-white/60">
                  Indicadores serão conectados a uma fonte de dados
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4 sm:gap-x-10">
              {marketItems.map((item) => (
                <div key={item.name}>
                  <p className="text-[9px] font-bold tracking-[0.12em] text-white/55">
                    {item.name}
                  </p>
                  <p className="mt-1 text-lg font-semibold tabular-nums">{item.value}</p>
                  <p className="text-[9px] text-white/45">{item.change}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-site grid gap-10 py-12 lg:grid-cols-[1fr_300px] lg:py-16">
        <div>
          <SectionHeading eyebrow="ACOMPANHE" title="Últimas notícias" />
          <div className="divide-y divide-[#e2e7ec] border-y border-[#e2e7ec]">
            {latest.map((item, index) => (
              <article className="flex gap-4 py-5 sm:gap-6" key={item.title}>
                <div className="hidden w-12 shrink-0 pt-1 text-[12px] font-bold tabular-nums text-[#b3bdc6] sm:block">
                  0{index + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="eyebrow mb-2">{item.category}</p>
                  <h3 className="max-w-[680px] text-[16px] leading-[1.4] font-bold tracking-[-0.02em] text-[#1b3042] sm:text-[18px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex items-center gap-1.5 text-[10px] text-[#8995a1]">
                    <Clock3 size={12} /> {item.time} · Conteúdo demonstrativo
                  </p>
                </div>
                <span className="mt-3 hidden h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e2e7ec] text-[#65798b] sm:flex">
                  <ChevronRight size={16} />
                </span>
              </article>
            ))}
          </div>
          <a
            className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#31536d] hover:text-[#9b7845]"
            href="#"
          >
            Mais notícias <ArrowRight size={15} />
          </a>
        </div>

        <aside className="space-y-8">
          <div>
            <SectionHeading eyebrow="LEITURA ESSENCIAL" title="Entenda o mercado" />
            <div className="space-y-4">
              <article className="border-l-2 border-[#c7a56a] py-1 pl-4">
                <p className="eyebrow mb-2">GUIA DO INVESTIDOR</p>
                <h3 className="text-[15px] leading-snug font-bold text-[#1b3042]">
                  Como analisar uma empresa antes de investir
                </h3>
                <p className="mt-2 text-[11px] text-[#8995a1]">Fundamentos · 8 min de leitura</p>
              </article>
              <article className="border-l-2 border-[#d7dfe5] py-1 pl-4">
                <p className="eyebrow mb-2">ECONOMIA</p>
                <h3 className="text-[15px] leading-snug font-bold text-[#1b3042]">
                  Selic: o que é e por que ela afeta seus investimentos
                </h3>
                <p className="mt-2 text-[11px] text-[#8995a1]">Conceitos · 5 min de leitura</p>
              </article>
              <article className="border-l-2 border-[#d7dfe5] py-1 pl-4">
                <p className="eyebrow mb-2">RENDA VARIÁVEL</p>
                <h3 className="text-[15px] leading-snug font-bold text-[#1b3042]">
                  Dividendos: como avaliar a qualidade dos pagamentos
                </h3>
                <p className="mt-2 text-[11px] text-[#8995a1]">Ações · 6 min de leitura</p>
              </article>
            </div>
          </div>

          <div className="rounded-sm bg-[#e9eef2] p-5">
            <p className="eyebrow">NOSSA PROPOSTA</p>
            <h3 className="mt-3 text-xl leading-tight font-bold tracking-tight text-[#102b43]">
              Informação com contexto. Mercado sem ruído.
            </h3>
            <p className="mt-3 text-xs leading-5 text-[#647587]">
              Jornalismo para entender o que acontece com a economia, as empresas e
              o seu patrimônio.
            </p>
          </div>
        </aside>
      </section>

      <section className="border-y border-[#e2e7ec] bg-white py-12" id="newsletter">
        <div className="container-site flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-lg">
            <p className="eyebrow">NEWSLETTER INFOCAPITAL</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#142536]">
              Informação relevante, direto ao ponto.
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#718091]">
              Uma seleção das principais notícias e análises para acompanhar o mercado.
            </p>
          </div>
          <form action="#" className="flex w-full max-w-md gap-2">
            <label className="sr-only" htmlFor="email">
              Seu e-mail
            </label>
            <input
              className="h-12 min-w-0 flex-1 border border-[#dce3e8] bg-[#f9fafb] px-4 text-sm outline-none transition placeholder:text-[#9aa6b1] focus:border-[#31536d]"
              id="email"
              name="email"
              placeholder="Seu melhor e-mail"
              type="email"
            />
            <button
              className="h-12 shrink-0 bg-[#102b43] px-5 text-[11px] font-bold tracking-wide text-white transition hover:bg-[#1d4968]"
              type="submit"
            >
              INSCREVER
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[#0b2033] py-9 text-white">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-8 sm:flex-row sm:items-center">
            <div>
              <p className="text-xl font-black tracking-[-0.06em]">
                INFO<span className="font-semibold text-[#d7b77f]">CAPITAL</span>
              </p>
              <p className="mt-2 text-xs text-white/55">
                Informação que move o mercado.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-[11px] text-white/65">
              <a className="hover:text-white" href="#ultimas">Notícias</a>
              <a className="hover:text-white" href="#newsletter">Newsletter</a>
              <a className="hover:text-white" href="#">Sobre</a>
              <a className="hover:text-white" href="#">Contato</a>
            </div>
          </div>
          <div className="flex flex-col gap-2 pt-5 text-[10px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 InfoCapital. Todos os direitos reservados.</p>
            <p>Projeto em desenvolvimento · Conteúdo demonstrativo</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
