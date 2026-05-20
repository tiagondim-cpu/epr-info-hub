export default function Footer() {
  return (
    <footer className="bg-unb-azul mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div>
            <h3 className="text-white font-semibold mb-2">EPR Info Hub</h3>
            <p className="text-blue-200 leading-relaxed">
              Central de informações acadêmicas do curso de Engenharia de Produção da UnB.
              Projeto PSP4 — 2026/1.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Contato Secretaria</h3>
            <ul className="space-y-1 text-blue-200">
              <li>
                <a href="mailto:epr@unb.br" className="hover:text-white transition-colors">
                  epr@unb.br
                </a>
              </li>
              <li>(61) 3107-5678</li>
              <li>
                <a
                  href="http://epr.unb.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  epr.unb.br
                </a>
              </li>
              <li className="text-blue-300 text-xs">Seg. a Sex. 7h–23h</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Links Rápidos</h3>
            <ul className="space-y-1">
              {[
                { texto: 'SIGAA', url: 'https://sigaa.unb.br' },
                { texto: 'SEI', url: 'https://sei.unb.br' },
                { texto: 'SAA / UnB', url: 'https://saa.unb.br' },
              ].map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {link.texto}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-6 pt-4 text-center">
          <p className="text-blue-300 text-xs">
            Conteúdo baseado em fontes oficiais da UnB. Verifique sempre com a coordenação do EPR para informações atualizadas.
          </p>
        </div>
      </div>
    </footer>
  )
}
