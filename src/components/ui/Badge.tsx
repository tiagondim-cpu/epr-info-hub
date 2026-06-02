import { cn } from '../../lib/utils'
import type { Badge as BadgeType } from '../../content/types'

const styles: Record<string, { wrapper: string; dot: string }> = {
  alerta: { wrapper: 'bg-red-50 text-red-700 border-red-200', dot: 'bg-red-600' },
  aviso: { wrapper: 'bg-orange-50 text-orange-700 border-orange-200', dot: 'bg-orange-600' },
  info: { wrapper: 'bg-blue-50 text-blue-700 border-blue-200', dot: 'bg-blue-600' },
  ok: { wrapper: 'bg-green-50 text-green-700 border-green-200', dot: 'bg-green-600' },
}

export default function Badge({ texto, tipo }: BadgeType) {
  const s = styles[tipo] ?? styles.info
  return (
    <span className={cn('inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold leading-none', s.wrapper)}>
      <span className={cn('h-1.5 w-1.5 shrink-0 rounded-full', s.dot)} />
      {texto}
    </span>
  )
}
