import { cn } from '../../lib/utils'
import type { Badge as BadgeType } from '../../content/types'

const styles: Record<string, { wrapper: string; dot: string }> = {
  alerta: { wrapper: 'bg-red-50 text-red-700 border border-red-200',    dot: 'bg-red-500' },
  aviso:  { wrapper: 'bg-orange-50 text-orange-700 border border-orange-200', dot: 'bg-orange-500' },
  info:   { wrapper: 'bg-blue-50 text-blue-700 border border-blue-200', dot: 'bg-blue-500' },
  ok:     { wrapper: 'bg-green-50 text-green-700 border border-green-200', dot: 'bg-green-500' },
}

export default function Badge({ texto, tipo }: BadgeType) {
  const s = styles[tipo] ?? styles.info
  return (
    <span className={cn('inline-flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-full', s.wrapper)}>
      <span className={cn('w-1.5 h-1.5 rounded-full shrink-0', s.dot)} />
      {texto}
    </span>
  )
}
