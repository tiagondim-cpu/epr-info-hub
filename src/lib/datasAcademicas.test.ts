import { describe, expect, it } from 'vitest'
import { encontrarProximaData } from './datasAcademicas'

const datas = [
  {
    titulo: 'Periodo encerrado',
    inicio: '2026-03-01',
    fim: '2026-03-05',
    tipo: 'info',
  },
  {
    titulo: 'Ajuste de matricula',
    inicio: '2026-06-10',
    tipo: 'alerta',
  },
  {
    titulo: 'Trancamento parcial',
    inicio: '2026-07-01',
    tipo: 'aviso',
  },
] as const

describe('encontrarProximaData', () => {
  it('ignora datas encerradas e escolhe a proxima data futura', () => {
    expect(encontrarProximaData(datas, new Date('2026-06-03T12:00:00'))?.titulo).toBe(
      'Ajuste de matricula'
    )
  })

  it('considera um periodo em andamento como a proxima data relevante', () => {
    const periodoEmAndamento = [
      {
        titulo: 'Periodo de solicitacao',
        inicio: '2026-06-01',
        fim: '2026-06-10',
        tipo: 'aviso',
      },
      {
        titulo: 'Data futura',
        inicio: '2026-06-20',
        tipo: 'info',
      },
    ] as const

    expect(
      encontrarProximaData(periodoEmAndamento, new Date('2026-06-03T12:00:00'))?.titulo
    ).toBe('Periodo de solicitacao')
  })
})
