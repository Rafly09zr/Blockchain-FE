'use client'
import { useQuery } from '@tanstack/react-query'

import { axios } from '../../lib/axios'

export const useGetFinalProduct = (id) => {
  return useQuery({
    queryKey: ['final'],
    queryFn: async () => {
      if (id === '') return
      const res = await axios.get(`/final/${id}`)
      return res.data
    },
    staleTime: 15 * 60 * 1000,
  })
}

export default useGetFinalProduct
