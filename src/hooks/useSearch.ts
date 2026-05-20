import { useMemo, useState } from 'react'
import Fuse from 'fuse.js'
import type { SearchableItem } from '../content/types'
import { searchIndex } from '../content/searchIndex'

const fuse = new Fuse(searchIndex, {
  keys: ['titulo', 'conteudo'],
  threshold: 0.35,
  minMatchCharLength: 2,
})

export function useSearch() {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    if (query.trim().length < 2) return []
    return fuse.search(query).slice(0, 8).map((r) => r.item)
  }, [query])

  return { query, setQuery, results }
}

export type { SearchableItem }
