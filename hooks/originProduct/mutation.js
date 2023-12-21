import { useApiMutation2 } from '../useApiMutation'
import { axios } from '../../lib/axios'

export const useOriginProduct = () => {
  return useApiMutation2({
    queryKey: ['origin'],
    mutationFun: async (_, data) => {
      console.log(data)
      const res = await axios.post('/origin', data)
      return res?.data
    },
  })
}

export default useOriginProduct
