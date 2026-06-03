import type { DataAcademica } from '../content/types'

function isoParaNumero(valor: string): number {
  const [ano, mes, dia] = valor.split('-').map(Number)
  return ano * 10000 + mes * 100 + dia
}

function dataParaNumero(data: Date): number {
  return data.getFullYear() * 10000 + (data.getMonth() + 1) * 100 + data.getDate()
}

export function encontrarProximaData(
  datas: readonly DataAcademica[],
  referencia = new Date()
): DataAcademica | undefined {
  const hoje = dataParaNumero(referencia)

  return [...datas]
    .filter((data) => isoParaNumero(data.fim ?? data.inicio) >= hoje)
    .sort((a, b) => isoParaNumero(a.inicio) - isoParaNumero(b.inicio))[0]
}
