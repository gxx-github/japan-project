import {
  useAccount,
} from "wagmi"

export const useActiveAccount = () => {
 const {address,chainId} = useAccount() 
 return {
  address:address ? `${address}` : null,
  chainId
 }
}
