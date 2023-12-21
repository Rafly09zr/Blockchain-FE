import { useApiMutation2 } from '../useApiMutation'
import { axios } from '../../lib/axios'

export const usePerson = () => {
  return useApiMutation2({
    queryKey: ['person'],
    mutationFun: async (_, data) => {
      console.log(data)
      const res = await axios.post('/person', data)
      return res?.data
    },
  })
}

export default usePerson
