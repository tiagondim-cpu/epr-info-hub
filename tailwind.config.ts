import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface:           '#ffffff',
        'surface-muted':   '#f9fafb',
        'nav-active':      '#f0f0f0',
        'text-primary':    '#1a1a1a',
        'text-muted':      '#4b5563',
        'text-subtle':     '#6b7280',
        border:            '#e5e7eb',
        divider:           '#f3f4f6',
        accent:            '#6b4eff',
        'unb-azul':        '#003366',
        'unb-azul-light':  '#1a4d80',
        'unb-azul-pale':   '#e8eef5',
        'unb-verde':       '#006633',
        'unb-verde-light': '#1a7a47',
        'unb-verde-pale':  '#e6f2ec',
        'unb-cinza':       '#f9fafb',
        'unb-texto':       '#1a1a1a',
        'unb-alerta':      '#c0392b',
        'unb-aviso':       '#e67e22',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
