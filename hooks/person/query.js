import { useQuery } from '@tanstack/react-query'

import { axios } from '../../lib/axios'

export const useGetPerson = (id) => {
  return useQuery({
    queryKey: ['person', id],
    queryFn: async () => {
      if (id === '') return
      const res = await axios.get(`/person/${id}`)
      return res.data
    },
    staleTime: 15 * 60 * 1000,
    evalidateOnMount: true, // Fetch data when the component mounts
    revalidateOnFocus: true, // Fetch data when the window gains focus
    revalidateOnReconnect: true, // Fetch data when the network reconnects
    revalidateInterval: 60000, // Revalidate every 60 seconds
  })
}

export default useGetPerson
