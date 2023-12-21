import { useApiMutation2 } from '../useApiMutation'
import { axios } from '../../lib/axios'

export const usePerson = () => {
  return useApiMutation2({
    queryKey: ['products'],
    mutationFun: async (_, data) => {
      console.log(data)
      const res = await axios.post('/products', data)
      return res?.data
    },
  })
}

export default usePerson
