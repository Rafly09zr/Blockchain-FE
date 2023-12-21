// MetaMaskService.js
const fetchMetaMaskAddress = async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      if (accounts.length > 0) {
        return accounts[0] // Alamat dari MetaMask
      }
    } catch (error) {
      console.error('Error fetching MetaMask address:', error)
      return null
    }
  } else {
    console.log('MetaMask not installed')
    return null
  }
}

export default fetchMetaMaskAddress
