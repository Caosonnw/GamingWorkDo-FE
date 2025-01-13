import authServ from '@/services/authServ'
import { useMutation } from '@tanstack/react-query'

export const useLoginMutation = () => {
  return useMutation({ mutationFn: authServ.login })
}

export const useLogoutMutation = () => {
  return useMutation({ mutationFn: authServ.logout })
}
