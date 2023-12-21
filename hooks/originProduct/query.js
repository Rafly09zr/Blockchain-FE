'use client'
import { useQuery } from '@tanstack/react-query'

import { axios } from '../../lib/axios'

export const useGetOriginProduct = (id) => {
  return useQuery({
    queryKey: ['origin'],
    queryFn: async () => {
      if (id === '') return
      const res = await axios.get(`/origin/${id}`)
      return res.data
    },
    staleTime: 15 * 60 * 1000,
    evalidateOnMount: true, // Fetch data when the component mounts
    revalidateOnFocus: true, // Fetch data when the window gains focus
    revalidateOnReconnect: true, // Fetch data when the network reconnects
    revalidateInterval: 60000, // Revalidate every 60 seconds
  })
}

export default useGetOriginProduct
