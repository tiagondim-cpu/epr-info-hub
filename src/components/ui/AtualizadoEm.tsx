import { Clock } from 'lucide-react'
import {
  conteudoAtualizadoEm,
  formatarMesAno,
  type ConteudoArea,
} from '../../content/meta'

interface AtualizadoEmProps {
  area: ConteudoArea
  className?: string
}

// Selo discreto de "última atualização" exibido no cabeçalho das páginas de
// conteúdo. As datas vêm de src/content/meta.ts (fonte única).
export default function AtualizadoEm({ area, className }: AtualizadoEmProps) {
  const data = formatarMesAno(conteudoAtualizadoEm[area])
  return (
    <p
      className={`inline-flex items-center gap-1.5 text-xs font-medium text-text-subtle ${className ?? ''}`}
    >
      <Clock size={13} className="shrink-0" />
      Última atualização: {data}
    </p>
  )
}
