import { useApiMutation2 } from '../useApiMutation'
import { axios } from '../../lib/axios'

export const useFinalProduct = () => {
  return useApiMutation2({
    queryKey: ['final'],
    mutationFun: async (_, data) => {
      console.log(data)
      const res = await axios.post('/final', data)
      return res?.data
    },
  })
}

export default useFinalProduct
