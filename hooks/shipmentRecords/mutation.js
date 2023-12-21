import { useApiMutation2 } from '../useApiMutation'
import { axios } from '../../lib/axios'

export const useShipmentRecords = () => {
  return useApiMutation2({
    queryKey: ['shipment'],
    mutationFun: async (_, data) => {
      console.log(data)
      const res = await axios.post('/shipment', data)
      return res?.data
    },
  })
}

export default useShipmentRecords
