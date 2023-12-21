'use client'
import { useQuery } from '@tanstack/react-query'

import { axios } from '../../lib/axios'

export const useGetChange = () => {
  return useQuery({
    queryKey: ['changeProduct'],
    queryFn: async () => {
      const id = JSON?.parse(localStorage?.getItem('account'))?.userAddress
      const res = await axios.get(`/change/${id}`)
      return res.data
    },
    staleTime: 15 * 60 * 1000,
    revalidateOnMount: true, // Fetch data when the component mounts
    revalidateOnFocus: true, // Fetch data when the window gains focus
    revalidateOnReconnect: true, // Fetch data when the network reconnects
    revalidateInterval: 60000, // Revalidate every 60 seconds
  })
}

export default useGetChange
