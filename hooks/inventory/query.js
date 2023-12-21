'use client'
import { useQuery } from '@tanstack/react-query'

import { axios } from '../../lib/axios'

export const useGetInventory = () => {
  return useQuery({
    queryKey: ['inventory'],
    queryFn: async () => {
      const id = JSON?.parse(localStorage?.getItem('account'))?.userAddress
      const res = await axios.get(`/inventory/${id}`)
      return res.data
    },
    staleTime: 15 * 60 * 1000,
    revalidateOnMount: true, // Fetch data when the component mounts
    revalidateOnFocus: true, // Fetch data when the window gains focus
    revalidateOnReconnect: true, // Fetch data when the network reconnects
    revalidateInterval: 60000, // Revalidate every 60 seconds
  })
}

export default useGetInventory
