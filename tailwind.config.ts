import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'unb-azul':        '#003366',
        'unb-azul-light':  '#1a4d80',
        'unb-azul-pale':   '#e8eef5',
        'unb-verde':       '#006633',
        'unb-verde-light': '#1a7a47',
        'unb-verde-pale':  '#e6f2ec',
        'unb-cinza':       '#f5f5f5',
        'unb-texto':       '#1a1a2e',
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
