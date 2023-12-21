'use client'
import { useQuery } from '@tanstack/react-query'

import { axios } from '../../lib/axios'

export const useGetShipmentRecords = (id) => {
  return useQuery({
    queryKey: ['shipment'],
    queryFn: async () => {
      if (id === '') return
      const res = await axios.get(`/shipment/${id}`)
      return res.data
    },
    staleTime: 15 * 60 * 1000,
  })
}

export default useGetShipmentRecords
