'use client'
import { useQuery } from '@tanstack/react-query'

import { axios } from '../../lib/axios'

export const useGetInventory = (id) => {
  return useQuery({
    queryKey: ['inventory'],
    queryFn: async () => {
      if (id === '') return
      const res = await axios.get(`/inventory/${id}`)
      return res.data
    },
    staleTime: 15 * 60 * 1000,
  })
}

export default useGetInventory
