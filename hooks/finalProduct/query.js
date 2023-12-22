'use client'
import { useQuery } from '@tanstack/react-query'

import { axios } from '../../lib/axios'

export const useGetFinalProduct = (id) => {
  return useQuery({
    queryKey: ['final'],
    queryFn: async () => {
      const id = JSON?.parse(localStorage?.getItem('account'))?.userAddress
      const res = await axios.get(`/final/${id}`)
      return res.data
    },
    staleTime: 15 * 60 * 1000,
    evalidateOnMount: true, // Fetch data when the component mounts
    revalidateOnFocus: true, // Fetch data when the window gains focus
    revalidateOnReconnect: true, // Fetch data when the network reconnects
    revalidateInterval: 60000, // Revalidate every 60 seconds
  })
}

export default useGetFinalProduct
