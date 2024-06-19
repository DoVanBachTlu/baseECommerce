import { useContext } from 'react'
import { NetInfoContext } from './net-info.provider'

export const useNetInfo = () => {
  return useContext(NetInfoContext)
}
