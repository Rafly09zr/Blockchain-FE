import { useApiMutation2 } from '../useApiMutation'
import { axios } from '../../lib/axios'

export const useChangeProduct = () => {
  return useApiMutation2({
    queryKey: ['change'],
    mutationFun: async (_, data) => {
      console.log(data)
      const res = await axios.post('/change', data)
      return res?.data
    },
  })
}

export default useChangeProduct
