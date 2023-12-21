'use client'
import { useQuery } from '@tanstack/react-query'

import { axios } from '../../lib/axios'

export const useGetProduct = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await axios.get(`/products`)
      return res.data
    },
    staleTime: 15 * 60 * 1000,
  })
}

export default useGetProduct
