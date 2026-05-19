import { useState } from 'react'

export default function VanServiceSite() {
  const [musicOn, setMusicOn] = useState(false)
  const whatsappLink = 'https://wa.me/5517997524669?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20transporte%20com%20van.'

  const clientes = [
    '/Captura de Tela (526).png',
    '/Captura de Tela (527).png',
    '/carnaval logo 2026.png',
    '/hotel hilton gardem.png',
    '/logo hotel confort.png',
    '/logo ibis.png',
    '/logo lolapaluza.png',
    '/logo mercado livre.png',
    '/logo rock in rio.png',
    '/logo shope.png',
    '/prefeitura de onda verde logo.png',
    '/prefeitura do rio.png',
  ]

  const frotaPrincipal = [
    '/faixada.png',
    '/WhatsApp Image 2026-05-05 at 18.23.11.jpeg',
    '/Image 28 de abr. de 2026, 12_47_27.png',
    '/WhatsApp Image 2026-05-13 at 15.02.43 (2).jpeg',
  ]

  const fotosFrota = [
    '/WhatsApp Image 2026-05-13 at 15.02.40.jpeg',
    '/WhatsApp Image 2026-05-12 at 11.58.39.jpeg',
    '/WhatsApp Image 2026-05-13 at 14.59.04.jpeg',
    '/WhatsApp Image 2026-05-13 at 14.59.49 (1).jpeg',
    '/WhatsApp Image 2026-05-13 at 14.59.49.jpeg',
    '/WhatsApp Image 2026-05-13 at 15.02.41 (1).jpeg',
    '/WhatsApp Image 2026-05-13 at 15.02.41.jpeg',
    '/WhatsApp Image 2026-05-13 at 15.02.42 (1).jpeg',
    '/WhatsApp Image 2026-05-13 at 15.02.42.jpeg',
    '/WhatsApp Image 2026-05-13 at 15.02.43 (1).jpeg',
    '/WhatsApp Image 2026-05-13 at 15.02.43 (3).jpeg',
    '/WhatsApp Image 2026-05-13 at 15.02.43 (4).jpeg',
    '/WhatsApp Image 2026-05-13 at 15.02.43 (5).jpeg',
    '/WhatsApp Image 2026-05-13 at 15.02.43.jpeg',
  ]

  const historiaFotos = [
    '/01 inicio.jpeg',
    '/02 inicio.jpeg',
    '/03 inicio.jpeg',
    '/04 inicio.jpeg',
    '/WhatsApp Image 2026-05-15 at 13.51.56 (3).jpeg',
    '/WhatsApp Image 2026-05-15 at 13.51.57 (1).jpeg',
    '/WhatsApp Image 2026-05-15 at 13.51.57 (2).jpeg',
    '/WhatsApp Image 2026-05-15 at 13.51.57 (3).jpeg',
    '/WhatsApp Image 2026-05-15 at 13.51.57.jpeg',
    '/WhatsApp Image 2026-05-15 at 13.51.58 (2).jpeg',
    '/WhatsApp Image 2026-05-15 at 13.51.58 (3).jpeg',
    '/WhatsApp Image 2026-05-15 at 13.51.58.jpeg',
    '/WhatsApp Image 2026-05-15 at 13.51.59.jpeg',
  ]

  const videos = [
    'uw-0c9IuHug',
    'oTzrHGrk3T4',
    'H6lLe9eC9nY',
    'WYtz8nFL7to',
    'BK7T8NNZc_Y',
    'bg3MrAHazjI',
    'fh3EKOyNmqk',
  ]

  const seoSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Van Service',
    url: 'https://vanservice.com.br',
    email: 'atendimento@vanselect.com.br',
    telephone: '+55 17 99752-4669',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São José do Rio Preto',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
    areaServed: [
      'São José do Rio Preto - SP',
      'Olímpia - SP',
      'Barretos - SP',
      'Guapiaçu - SP',
      'Mirassol - SP',
      'Rio de Janeiro - RJ',
      'São Paulo - SP',
    ],
    description:
      'Van Service oferece van de fretamento, van passeio, van praia, van aeroporto, van Olímpia, van excursões, van de aluguel, alugar van, van executiva, serviços de van para empresa, transporte com motorista, transporte de alunos e transporte de funcionários.',
    sameAs: [
      'https://www.facebook.com/VansTransporteseFretamento',
      'https://www.instagram.com/van_service_turismo_fretamento/',
    ],
  }

  const Wpp = ({ small = false }) => (
    <svg viewBox="0 0 32 32" className={small ? 'w-5 h-5' : 'w-8 h-8'} fill="currentColor" aria-hidden="true">
      <path d="M16.01 3.2A12.7 12.7 0 0 0 5.1 22.43L3.2 29l6.72-1.76A12.7 12.7 0 1 0 16.01 3.2Zm0 23.2c-2.03 0-3.91-.6-5.5-1.63l-.4-.25-3.99 1.04 1.07-3.88-.26-.4a10.47 10.47 0 1 1 9.08 5.12Zm5.74-7.84c-.31-.16-1.86-.92-2.15-1.02-.29-.11-.5-.16-.71.16-.21.31-.81 1.02-.99 1.23-.18.21-.37.24-.68.08-.31-.16-1.32-.49-2.51-1.55-.93-.83-1.55-1.85-1.73-2.16-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.62 0 1.55 1.13 3.04 1.29 3.25.16.21 2.22 3.39 5.38 4.75.75.32 1.34.51 1.8.65.76.24 1.45.21 1.99.13.61-.09 1.86-.76 2.13-1.5.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.37Z" />
    </svg>
  )

  const FaleConosco = ({ label = 'FALE CONOSCO', className = '' }) => (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-xl border border-red-500 bg-black/60 hover:bg-red-600 px-6 py-3 font-black transition ${className}`}
    >
      <Wpp small /> {label}
    </a>
  )

  return (
    <main className="min-h-screen bg-black text-white font-sans overflow-x-hidden scroll-smooth">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seoSchema) }} />

      <section className="sr-only" aria-label="SEO Van Service">
        <h1>Van Service - van de fretamento em São José do Rio Preto e região</h1>
        <p>
          van de fretamento, van passeio, van praia, van aeroporto, van olimpia, van excursões,
          van de aluguel, alugar van, van executiva, serviços de van para empresa, serviço de transporte
          com motorista, serviço de transporte com van, transporte de alunos, transporte de funcionários,
          van barretos, van são josé do rio preto, van guapiaçu, van mirassol, van olimpia.
        </p>
      </section>

      {musicOn && (
        <iframe
          width="1"
          height="1"
          src="https://www.youtube.com/embed/mlR_MreF1NQ?autoplay=1&loop=1&playlist=mlR_MreF1NQ&playsinline=1"
          title="Música Ambiente Van Service"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          className="fixed -left-10 -top-10 opacity-0 pointer-events-none"
        />
      )}

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        className="fixed bottom-5 right-5 z-[9999] bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 sm:w-auto sm:h-auto sm:px-5 sm:py-4 shadow-2xl flex items-center justify-center sm:gap-3 transition-all duration-300 hover:scale-105"
      >
        <Wpp />
        <span className="font-black hidden sm:block">FALE CONOSCO</span>
      </a>

      <button
        type="button"
        onClick={() => setMusicOn(true)}
        className="fixed bottom-5 left-5 z-[9998] bg-red-700 hover:bg-red-600 border border-white/20 text-white rounded-full px-5 py-4 shadow-2xl text-sm sm:text-base font-black"
      >
        {musicOn ? 'Música tocando' : '▶ Tocar música'}
      </button>

      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-xl border-b border-red-700/50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          <a href="#home" className="flex items-center gap-3">
            <img src="/logo-van-service.png" alt="Van Service" className="h-10 sm:h-12 w-auto" />
            <span className="font-black tracking-wider hidden sm:block">VAN SERVICE</span>
          </a>

          <div className="hidden lg:flex items-center gap-7 text-sm font-black">
            <a href="#home" className="text-red-500">HOME</a>
            <a href="#servicos" className="hover:text-red-500">SERVIÇOS</a>
            <a href="#frota" className="hover:text-red-500">FROTA</a>
            <a href="#clientes" className="hover:text-red-500">CLIENTES</a>
            <a href="#historia" className="hover:text-red-500">HISTÓRIA</a>
            <a href="#galeria" className="hover:text-red-500">GALERIA</a>
            <a href="#videos" className="hover:text-red-500">VÍDEOS</a>
            <a href="#contato" className="hover:text-red-500">CONTATO</a>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="bg-red-700 hover:bg-red-600 rounded-xl px-4 py-3 font-black text-xs sm:text-sm flex items-center gap-2"
          >
            <Wpp small /> <span className="hidden sm:block">FALE CONOSCO</span>
          </a>
        </nav>
      </header>

      <section id="home" className="bg-[radial-gradient(circle_at_left,#3b0202,transparent_55%),linear-gradient(120deg,#140000,#000)] border-b border-red-900/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center py-8 lg:py-10 border-b border-red-900/60">
            <div className="flex justify-center">
              <img src="/image_6ed670ec-removebg-preview.png" alt="Transfer Olímpia Van Service" className="w-72 sm:w-96 lg:w-[460px] object-contain drop-shadow-2xl bg-transparent" />
            </div>
            <div className="text-center lg:text-left">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black italic tracking-wide leading-tight">VAN SERVICE</h1>
              <p className="text-red-500 font-black mt-4 text-lg sm:text-xl">TRASLADOS ARTÍSTICOS • FRETAMENTO • EVENTOS</p>
              <p className="text-zinc-300 mt-7 text-lg max-w-xl mx-auto lg:mx-0">
                Excelência em transporte executivo com conforto, segurança e pontualidade.
              </p>
              <FaleConosco className="mt-7" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center py-8 lg:py-10">
            <div className="flex justify-center">
              <img src="/image_2b2bcd07__1_-removebg-preview.png" alt="Shuttle Aeroporto Van Service" className="w-72 sm:w-96 lg:w-[460px] object-contain drop-shadow-2xl bg-transparent" />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black italic tracking-wide leading-tight">VAN SERVICE</h2>
              <p className="text-red-500 font-black mt-4 text-lg sm:text-xl">SHUTTLE AEROPORTO • TRANSFER • EXECUTIVO</p>
              <p className="text-zinc-300 mt-7 text-lg max-w-xl mx-auto lg:mx-0">
                Transfers para aeroportos, empresas, hotéis, eventos e viagens com motorista profissional.
              </p>
              <FaleConosco className="mt-7" />
            </div>
          </div>
        </div>
      </section>

      <section id="frota" className="bg-black px-4 sm:px-6 py-10">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden border border-red-800/70 shadow-2xl relative">
          <img src="/faixada.png" alt="Nossa Frota Van Service" className="w-full h-[300px] sm:h-[460px] lg:h-[560px] object-cover opacity-90" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-black">NOSSA FROTA</h2>
            <p className="text-zinc-200 mt-2 text-base sm:text-lg">Veículos modernos, revisados e preparados para oferecer conforto, segurança e qualidade.</p>
            <FaleConosco label="SOLICITAR ORÇAMENTO" className="mt-5" />
          </div>
        </div>
      </section>

      <section id="clientes" className="bg-black border-y border-red-900/60 py-10 lg:py-14 overflow-hidden">
        <div className="text-center mb-8 px-4">
          <h2 className="text-3xl sm:text-4xl font-black">NOSSOS CLIENTES</h2>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-5 sm:gap-8 animate-[scrollClientes_38s_linear_infinite] w-max">
            {[...clientes, ...clientes].map((logo, index) => (
              <div key={index} className="bg-white rounded-2xl min-w-[150px] h-24 sm:min-w-[210px] sm:h-32 flex items-center justify-center p-4 shadow-2xl border border-red-800/40">
                <img src={logo} alt="Cliente Van Service" className="max-h-full max-w-full object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
        <style>{`@keyframes scrollClientes { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      </section>

      <section id="historia" className="bg-[linear-gradient(120deg,#020202,#0d0d0d,#160000)] border-b border-red-900/60 px-4 sm:px-6 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
            <div>
              <p className="text-red-500 font-black tracking-widest uppercase mb-3">Desde 2006</p>
              <h2 className="text-3xl sm:text-5xl font-black mb-6">NOSSA HISTÓRIA</h2>
              <div className="space-y-5 text-zinc-300 leading-relaxed text-base sm:text-lg">
                <p>A jornada da Van Service começou em 2006, com a aquisição da nossa primeira van. Inicialmente, atuamos no transporte coletivo de passageiros na cidade do Rio de Janeiro.</p>
                <p>Em 2011, recebemos o desafio de realizar o transfer artístico com vans no Rock in Rio. Essa experiência transformou nossa estratégia e nos levou definitivamente para o mercado de fretamento artístico, viagens, transporte corporativo e turismo.</p>
                <p>Hoje, somos uma marca consolidada, com atuação no Rio de Janeiro, São Paulo, São José do Rio Preto e região. São mais de 2 milhões de quilômetros rodados com segurança, pontualidade, competência e exclusividade.</p>
                <p className="text-white font-semibold">Para a Van Service, você não é apenas um passageiro. Você faz parte da nossa história.</p>
              </div>
              <FaleConosco label="FALE COM A VAN SERVICE" className="mt-8" />
            </div>
            <img src="/WhatsApp Image 2026-05-13 at 15.02.43 (3).jpeg" alt="Van Service na estrada" className="rounded-3xl border border-red-900/60 w-full h-72 sm:h-96 object-cover shadow-2xl" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {historiaFotos.map((img, index) => (
              <div key={index} className="rounded-2xl overflow-hidden border border-zinc-800 bg-black shadow-xl">
                <img src={img} alt="Início da Van Service" className="w-full h-40 sm:h-52 object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicos" className="bg-black border-b border-red-900/60 px-4 sm:px-6 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black">NOSSA FROTA E SERVIÇOS</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              ['FROTA MODERNA', 'Veículos novos e revisados periodicamente.', '/faixada.png'],
              ['CONFORTO TOTAL', 'Poltronas reclináveis, ar-condicionado e muito mais.', '/WhatsApp Image 2026-05-05 at 18.23.11.jpeg'],
              ['TRASLADOS', 'Aeroportos, hotéis, shows, eventos e muito mais.', '/WhatsApp Image 2026-05-13 at 15.02.43 (2).jpeg'],
              ['SEGURANÇA', 'Motoristas experientes e veículos segurados.', '/WhatsApp Image 2026-05-13 at 15.02.41 (1).jpeg'],
            ].map(([title, desc, img]) => (
              <div key={title} className="rounded-3xl overflow-hidden border border-red-900/70 bg-zinc-950 shadow-2xl">
                <img src={img} alt={title} className="w-full h-44 object-cover" loading="lazy" />
                <div className="p-5 text-center">
                  <h3 className="font-black text-lg">{title}</h3>
                  <p className="text-zinc-400 mt-2 text-sm">{desc}</p>
                  <FaleConosco label="COTAR" className="mt-5 text-sm px-4 py-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="galeria" className="bg-zinc-950 border-b border-red-900/60 px-4 sm:px-6 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black">IMAGENS DA FROTA</h2>
            <p className="text-zinc-400 mt-3">Vans executivas, eventos, hotéis, turismo e viagens.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...frotaPrincipal, ...fotosFrota].map((img, index) => (
              <div key={index} className="rounded-3xl overflow-hidden border border-zinc-800 bg-black shadow-2xl">
                <img src={img} alt="Frota Van Service" className="w-full h-64 sm:h-80 object-cover hover:scale-105 transition duration-500" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="videos" className="bg-black px-4 sm:px-6 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black">VÍDEOS</h2>
            <p className="text-zinc-400 mt-3">Alguns de nossos trabalhos em vídeo.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {videos.map((video, index) => (
              <div key={index} className="rounded-3xl overflow-hidden border border-red-900/70 shadow-2xl bg-zinc-950">
                <iframe
                  src={`https://www.youtube.com/embed/${video}`}
                  title={`Trabalho Van Service ${index + 1}`}
                  className="w-full aspect-video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="bg-red-700 px-4 sm:px-6 py-14 text-center">
        <h2 className="text-3xl sm:text-5xl font-black mb-5">PRECISA DE TRANSPORTE EXECUTIVO?</h2>
        <p className="text-red-100 text-lg mb-8">Solicite seu orçamento agora pelo WhatsApp.</p>
        <a href={whatsappLink} target="_blank" rel="noreferrer" className="bg-black hover:bg-zinc-900 rounded-2xl px-8 py-5 font-black text-lg inline-flex items-center gap-3">
          <Wpp /> FALE CONOSCO NO WHATSAPP
        </a>
      </section>

      <footer className="bg-black border-t border-red-900/60 py-8 text-zinc-400 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 text-center md:text-left">
          <div>
            <img src="/logo-van-service.png" alt="Van Service" className="h-16 mx-auto md:mx-0 mb-3" />
            <p>Traslados Artísticos • Fretamento • Eventos</p>
          </div>
          <div>
            <h3 className="font-black text-white mb-2">FALE CONOSCO</h3>
            <p>(17) 99752-4669</p>
            <p className="break-all">atendimento@vanselect.com.br</p>
          </div>
          <div>
            <h3 className="font-black text-white mb-2">ATENDIMENTO</h3>
            <p>São José do Rio Preto e região</p>
            <p>Olímpia • Barretos • Mirassol • Guapiaçu</p>
          </div>
          <div>
            <h3 className="font-black text-white mb-2">SIGA-NOS</h3>
            <a href="https://www.instagram.com/van_service_turismo_fretamento/" target="_blank" rel="noreferrer" className="hover:text-red-500 block">Instagram</a>
            <a href="https://www.facebook.com/VansTransporteseFretamento" target="_blank" rel="noreferrer" className="hover:text-red-500 block">Facebook</a>
          </div>
        </div>
        <p className="text-center text-xs mt-8">© 2026 Van Service. Todos os direitos reservados.</p>
      </footer>
    </main>
  )
}
