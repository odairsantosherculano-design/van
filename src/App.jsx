export default function VanServiceSite() {
  const frotaPrincipal = [
    '/faixada.png',
    '/WhatsApp Image 2026-05-05 at 18.23.11.jpeg',
    '/Image 28 de abr. de 2026, 12_47_27.png',
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

  const fotosFrota = [
    '/WhatsApp Image 2026-05-13 at 15.02.43 (2).jpeg',
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

  const videos = [
    'uw-0c9IuHug',
    'oTzrHGrk3T4',
    'H6lLe9eC9nY',
    'WYtz8nFL7to',
    'BK7T8NNZc_Y',
    'bg3MrAHazjI',
    'fh3EKOyNmqk',
  ]

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

  const seoSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Van Service',
    url: 'https://vanservice.com.br',
    email: 'atendimento@vanselect.com.br',
    telephone: '+55 17 99752-4669',
    areaServed: ['São José do Rio Preto - SP', 'Olímpia - SP', 'Barretos - SP', 'Guapiaçu - SP', 'Mirassol - SP'],
    description: 'Van Service oferece van de fretamento, van executiva, van para passeio, praia, aeroporto, Olímpia, excursões, transporte de funcionários, alunos e serviço de transporte com motorista em São José do Rio Preto e região.',
    sameAs: ['https://www.facebook.com/VansTransporteseFretamento', 'https://www.instagram.com/van_service_turismo_fretamento/'],
  }

  return (
    <main className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <iframe
        width="0"
        height="0"
        src="https://www.youtube.com/embed/mlR_MreF1NQ?autoplay=1&loop=1&playlist=mlR_MreF1NQ"
        title="Música Ambiente"
        frameBorder="0"
        allow="autoplay"
        className="hidden"
      />

      <a
        href="https://wa.me/5517997524669?text=Olá,%20gostaria%20de%20um%20orçamento."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-[9999] bg-green-500 hover:bg-green-600 transition-all duration-300 rounded-full px-5 py-4 shadow-2xl flex items-center gap-3 animate-bounce"
      >
        <span className="text-2xl">💬</span>
        <span className="font-black text-white hidden sm:block">FALE CONOSCO</span>
      </a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seoSchema) }} />

      <section className="sr-only" aria-label="Informações de busca Van Service">
        <h1>Van Service - transporte com van em São José do Rio Preto e região</h1>
        <p>Van de fretamento, van passeio, van praia, van aeroporto, van Olímpia, van excursões, van de aluguel, alugar van, van executiva, serviços de van para empresa, serviço de transporte com motorista, serviço de transporte com van, serviço de transporte, transporte de alunos, transporte de funcionários, van Barretos, van São José do Rio Preto, van Guapiaçu, van Mirassol e van Olímpia.</p>
      </section>

      <section className="relative border-b border-red-600/30 bg-gradient-to-br from-red-950 via-black to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20">
          <div className="grid grid-cols-3 items-center gap-2 sm:gap-6 mb-10">
            <img src="/image_6ed670ec-removebg-preview.png" alt="Transfer Olímpia" className="justify-self-start w-20 h-20 sm:w-32 sm:h-32 lg:w-44 lg:h-44 object-contain drop-shadow-2xl" />
            <div className="justify-self-center bg-zinc-950/80 border border-red-500/30 rounded-2xl sm:rounded-3xl px-3 sm:px-8 py-3 sm:py-5 max-w-full">
              <img src="/logo-van-service.png" alt="Van Service Logo" className="h-12 sm:h-20 lg:h-28 w-auto max-w-full object-contain mx-auto" />
              <p className="text-red-300 text-[10px] sm:text-sm lg:text-base tracking-wide text-center mt-2 sm:mt-3">Traslados Artísticos • Fretamento • Eventos</p>
            </div>
            <img src="/image_2b2bcd07__1_-removebg-preview.png" alt="Shuttle Aeroporto" className="justify-self-end w-20 h-20 sm:w-32 sm:h-32 lg:w-44 lg:h-44 object-contain rounded-full drop-shadow-2xl" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black leading-tight mb-5">Transporte executivo com conforto e segurança</h2>
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-7 max-w-xl mx-auto lg:mx-0">Atendimento premium para shows, eventos, viagens corporativas, fretamento, turismo e transporte artístico com vans executivas modernas e confortáveis.</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a href="https://wa.me/5517997524669?text=Olá,%20gostaria%20de%20um%20orçamento." className="bg-red-600 hover:bg-red-700 transition px-6 sm:px-8 py-4 rounded-2xl font-bold text-base sm:text-lg shadow-2xl text-center">Fale Conosco no WhatsApp</a>
                <a href="#servicos" className="border border-zinc-700 hover:border-red-500 px-6 sm:px-8 py-4 rounded-2xl font-bold text-base sm:text-lg transition text-center">Ver serviços</a>
              </div>
            </div>

            <div>
              <img src="/faixada.png" alt="Frota Van Service" className="rounded-3xl shadow-2xl border border-zinc-800 w-full h-auto max-h-[620px] object-cover" />
              <div className="mt-4 inline-block bg-zinc-900 border border-red-600/30 p-5 rounded-3xl shadow-2xl text-left">
                <p className="text-3xl sm:text-4xl font-black text-red-500">24h</p>
                <p className="text-zinc-300">Atendimento rápido</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 lg:py-20 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <img src="/Image 28 de abr. de 2026, 12_47_27.png" alt="Van Service" className="rounded-3xl border border-zinc-800 shadow-2xl w-full h-auto object-cover" />
        <div className="text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-5">Quem somos</h2>
          <p className="text-zinc-300 leading-relaxed text-base sm:text-lg mb-6">A VAN SERVICE oferece transporte com qualidade, conforto e pontualidade para clientes corporativos, artistas, turistas e eventos em geral.</p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-zinc-900 p-5 sm:p-6 rounded-2xl border border-zinc-800"><h3 className="text-3xl font-black text-red-500">+10</h3><p className="text-zinc-400">Veículos</p></div>
            <div className="bg-zinc-900 p-5 sm:p-6 rounded-2xl border border-zinc-800"><h3 className="text-3xl font-black text-red-500">24/7</h3><p className="text-zinc-400">Suporte</p></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-y border-zinc-900 px-4 sm:px-6 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 lg:mb-14">
            <p className="text-red-500 font-bold tracking-widest uppercase mb-3">Desde 2006</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">Nossa História</h2>
            <p className="text-zinc-400 text-base sm:text-lg max-w-3xl mx-auto">Uma trajetória construída com trabalho, dedicação, segurança e amor pelo transporte.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start">
            <div className="space-y-5 text-zinc-300 leading-relaxed text-base sm:text-lg">
              <p>A jornada da Van Service começou em 2006, com a aquisição da nossa primeira van. Inicialmente, atuamos no transporte coletivo de passageiros na cidade do Rio de Janeiro. Com muito trabalho e dedicação, crescemos rápido: chegamos a operar uma frota de 11 veículos em uma escala intensa de 24 horas por dia, 7 dias por semana.</p>
              <p>O ano de 2011 marcou uma grande reviravolta em nossa trajetória. Recebemos o desafio de realizar o transfer artístico com vans no Rock in Rio. Essa experiência transformou nossa estratégia de negócios. Percebemos ali a nossa verdadeira vocação e migramos definitivamente para o mercado de fretamento artístico, viagens, transporte corporativo e atendimento a guias de turismo.</p>
              <p>Hoje, a Van Service é uma marca consolidada no mercado. O shuttle corporativo e os fretamentos artísticos tornaram-se nossos principais serviços. Com a graça de Deus, expandimos nossas fronteiras e operamos com excelência no Rio de Janeiro, São Paulo, São José do Rio Preto e região.</p>
              <p>Para garantir total eficiência, contamos com uma frota própria moderna e uma rede selecionada de parceiros terceirizados altamente qualificados. São mais de 2 milhões de quilômetros rodados, sempre guiados por quatro pilares inegociáveis: segurança, pontualidade, competência e exclusividade.</p>
              <p className="text-white font-semibold">Para a Van Service, você não é apenas um passageiro. Priorizamos cada cliente para que ele se torne um amigo e parte da nossa história. Obrigado por viajar conosco!</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 sm:gap-4">
              {historiaFotos.map((img, index) => (
                <div key={index} className="rounded-2xl overflow-hidden border border-zinc-800 bg-black shadow-xl">
                  <img src={img} alt="Início da Van Service" className="w-full h-40 sm:h-52 lg:h-56 object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 lg:mt-12">
            <div className="bg-black border border-zinc-800 rounded-3xl p-6 text-center"><h3 className="text-3xl font-black text-red-500">2006</h3><p className="text-zinc-400 mt-2">Início da operação</p></div>
            <div className="bg-black border border-zinc-800 rounded-3xl p-6 text-center"><h3 className="text-3xl font-black text-red-500">2011</h3><p className="text-zinc-400 mt-2">Transfer artístico Rock in Rio</p></div>
            <div className="bg-black border border-zinc-800 rounded-3xl p-6 text-center"><h3 className="text-3xl font-black text-red-500">+2M</h3><p className="text-zinc-400 mt-2">Quilômetros rodados</p></div>
            <div className="bg-black border border-zinc-800 rounded-3xl p-6 text-center"><h3 className="text-3xl font-black text-red-500">24/7</h3><p className="text-zinc-400 mt-2">Atendimento e operação</p></div>
          </div>
        </div>
      </section>

      <section id="servicos" className="bg-black border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 lg:py-20">
          <div className="text-center mb-10 lg:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">Nossos Serviços</h2>
            <p className="text-zinc-400 text-base sm:text-lg">Atendimento profissional para qualquer ocasião.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {[
              ['Traslados Artísticos', 'Atendimento para artistas, bandas e equipes.'],
              ['Eventos', 'Fretamento para festas, feiras e congressos.'],
              ['Viagens', 'Conforto e segurança para longas distâncias.'],
              ['Empresas', 'Transporte executivo corporativo.'],
            ].map(([title, desc]) => (
              <div key={title} className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 hover:border-red-600 transition">
                <div className="w-14 h-14 bg-red-600/20 rounded-2xl mb-6 flex items-center justify-center text-red-500 text-2xl font-black">V</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">{title}</h3>
                <p className="text-zinc-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 lg:py-20">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">Nossa Frota</h2>
          <p className="text-zinc-400 text-base sm:text-lg">Veículos modernos e preparados para seu transporte.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {frotaPrincipal.map((img, index) => (
            <img key={index} src={img} alt="Frota Van Service" className="rounded-3xl border border-zinc-800 shadow-2xl h-64 sm:h-80 w-full object-cover hover:scale-[1.02] transition" loading="lazy" />
          ))}
        </div>
      </section>

      <section className="bg-zinc-950 border-y border-zinc-900 px-4 sm:px-6 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 lg:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">Fotos da nossa frota</h2>
            <p className="text-zinc-400 text-base sm:text-lg">Vans executivas e trabalhos em hotéis, shows, eventos e viagens.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
            {fotosFrota.map((img, index) => (
              <div key={index} className="rounded-3xl overflow-hidden border border-zinc-800 bg-black shadow-2xl">
                <img src={img} alt="Frota Van Service" className="w-full h-64 sm:h-80 lg:h-[360px] object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-14 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 lg:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">Alguns de nossos trabalhos</h2>
            <p className="text-zinc-400 text-base sm:text-lg">Confira vídeos reais dos nossos serviços e transportes.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {videos.map((video, index) => (
              <div key={index} className="rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950">
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

      <section className="bg-red-600 py-14 lg:py-20 text-center px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-5">Solicite seu orçamento agora</h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg mb-8 text-red-100">Atendimento rápido via WhatsApp para reservas, eventos e viagens.</p>
        <a href="https://wa.me/5517997524669?text=Olá,%20gostaria%20de%20um%20orçamento." className="bg-black hover:bg-zinc-900 transition px-5 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-base sm:text-xl inline-flex items-center justify-center max-w-full text-center break-words">Fale Conosco Agora • WhatsApp: (17) 99752-4669</a>
      </section>

      <section className="bg-black border-t border-zinc-900 py-14 lg:py-16 overflow-hidden">
        <div className="text-center mb-10 px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">Alguns de nossos clientes</h2>
          <p className="text-zinc-400 text-base sm:text-lg">Empresas, eventos, hotéis e parceiros que já fizeram parte da nossa trajetória.</p>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-5 sm:gap-8 animate-[scrollClientes_38s_linear_infinite] w-max">
            {[...clientes, ...clientes].map((logo, index) => (
              <div key={index} className="bg-white rounded-2xl min-w-[145px] h-24 sm:min-w-[190px] sm:h-28 lg:min-w-[220px] lg:h-32 flex items-center justify-center p-4 sm:p-5 shadow-2xl">
                <img src={logo} alt="Cliente Van Service" className="max-h-full max-w-full object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
        <style>{`@keyframes scrollClientes { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      </section>

      <section className="py-12 lg:py-14 border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-8">Siga a VAN SERVICE</h2>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-5">
            <a href="https://www.instagram.com/van_service_turismo_fretamento/" target="_blank" rel="noreferrer" className="bg-zinc-900 hover:bg-red-600 transition-all duration-300 px-6 sm:px-8 py-4 rounded-2xl font-bold text-base sm:text-lg">Instagram</a>
            <a href="https://www.facebook.com/VansTransporteseFretamento" target="_blank" rel="noreferrer" className="bg-zinc-900 hover:bg-red-600 transition-all duration-300 px-6 sm:px-8 py-4 rounded-2xl font-bold text-base sm:text-lg">Facebook</a>
            <a href="mailto:atendimento@vanselect.com.br" className="bg-zinc-900 hover:bg-red-600 transition-all duration-300 px-5 sm:px-8 py-4 rounded-2xl font-bold text-sm sm:text-lg break-all">atendimento@vanselect.com.br</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-900 py-10 text-center text-zinc-500 px-4 sm:px-6">
        <div className="flex justify-center mb-4"><img src="/logo-van-service.png" alt="Van Service" className="h-16 sm:h-20 w-auto max-w-full object-contain" /></div>
        <h3 className="text-2xl font-black text-white mb-3">VAN SERVICE</h3>
        <p>Traslados Artísticos • Fretamento • Eventos</p>
        <div className="mt-6 flex justify-center gap-4 sm:gap-6 text-sm flex-wrap">
          <span>Fale Conosco Agora • WhatsApp: (17) 99752-4669</span>
          <span>vanservice.com.br</span>
          <span className="break-all">atendimento@vanselect.com.br</span>
        </div>
      </footer>
    </main>
  )
}
