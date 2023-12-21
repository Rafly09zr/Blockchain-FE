import { useApiMutation2 } from '../useApiMutation'
import { axios } from '../../lib/axios'

export const useContacts = () => {
  return useApiMutation2({
    queryKey: ['contacts'],
    mutationFun: async (_, data) => {
      const res = await axios.post('/contacts', data)
      return res?.data
    },
  })
}

export default useContacts
