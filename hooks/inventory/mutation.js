import { useApiMutation2 } from '../useApiMutation'
import { axios } from '../../lib/axios'

export const useInventory = () => {
  return useApiMutation2({
    queryKey: ['inventory'],
    mutationFun: async (_, data) => {
      const res = await axios.post('/inventory', data)
      return res?.data
    },
  })
}

export default useInventory
