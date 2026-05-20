import type { Badge as BadgeType } from '../../content/types'

const classes: Record<string, string> = {
  alerta: 'bg-red-100 text-red-800 border border-red-200',
  aviso:  'bg-orange-100 text-orange-800 border border-orange-200',
  info:   'bg-blue-100 text-blue-800 border border-blue-200',
  ok:     'bg-green-100 text-green-800 border border-green-200',
}

export default function Badge({ texto, tipo }: BadgeType) {
  return (
    <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${classes[tipo] ?? classes.info}`}>
      {texto}
    </span>
  )
}
