'use client'
import { useQuery } from '@tanstack/react-query'

import { axios } from '../../lib/axios'

export const useGetProduct = (id) => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      if (id === '') return
      const res = await axios.get(`/products/${id}`)
      return res.data
    },
    staleTime: 15 * 60 * 1000,
  })
}

export default useGetProduct
