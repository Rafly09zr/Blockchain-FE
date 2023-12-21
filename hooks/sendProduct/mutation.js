import { useApiMutation2 } from '../useApiMutation'
import { axios } from '../../lib/axios'

export const useSendProduct = () => {
  return useApiMutation2({
    queryKey: ['send'],
    mutationFun: async (_, data) => {
      console.log(data)
      const res = await axios.post('/send', data)
      return res?.data
    },
  })
}

export default useSendProduct
