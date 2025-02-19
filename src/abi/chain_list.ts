const contract_conf = {
  "TEST_Ethereum_contract_address": "0xa004A18Bd2B4F9161d95AB4dcEd22704E1A567e4",
  "TEST_Binance_contract_address": "0xa3186B328375D86Abcef5D798bCaBD494c745A10",
  "TEST_Polygon_contract_address": "0xcB87Bd452bAB23C63fD34C398bf6108C45cB1B80",
  "TEST_Arbitrum_contract_address": "0xcB87Bd452bAB23C63fD34C398bf6108C45cB1B80",
  "Ethereum_contract_address": "0xFAC63742Fa246bfE4387BBa328919eDc9A963F0f",
  "Binance_contract_address": "0x48a282838c48E00Ff10a76cDe799E6ED1b07a02a",
  "Polygon_contract_address": "0x85fc6E84bf7e788478eFcF3A0020D424471a6703",
  "Arbitrum_contract_address": "0x73416e6b7fEdE4D5eA15c53729d3B0D568087C00",
}

const chain_list = [
	{
    "label": "ETH",
    "chainId": 11155111,
    "chainName": "Sepolia",
    "address": contract_conf.TEST_Ethereum_contract_address,
    "istest": true,
    "tokens": [
      {
        "symbol": "ETH",
        "address": "0x0000000000000000000000000000000000000000",
        "decimals": 18,
      },
      {
        "symbol": "USDT",
        "address": "0x2F813BDd15E9f2821545dFDfBF9BB570Fb88D041",
        "decimals": 18,
        "len": 2,
      },
      {
        "symbol": "Trias",
        "address": "0x539a827822b2a532092b8A08919DCAC4B00bead1",
        "decimals": 18,
      },
    ],
  },
  {
    "label": "Arbitrum",
    "chainId": 421614,
    "chainName": "ArbitrumSepolia",
    "address": contract_conf.TEST_Arbitrum_contract_address,
    "istest": true,
    "tokens": [
      {
        "symbol": "ETH",
        "address": "0x0000000000000000000000000000000000000000",
        "decimals": 18,
      },
      {
        "symbol": "USDT",
        "address": "0x84A644F748B27321602AD5B5F2aC4c6E51c6052e",
        "decimals": 18,
        "len": 2,
      },
      {
        "symbol": "USDC",
        "address": "0xf99375AAf314B3B735C94397ADC983AeFaAC4508",
        "decimals": 18,
      },
    ],
  },
  {
    "label": "BNB Chain",
    "chainId": 97,
    "chainName": "BSCTEST",
    "address": contract_conf.TEST_Binance_contract_address,
    "istest": true,
    "tokens": [
      {
        "symbol": "BNB",
        "address": "0x9D4E37ff879B96b377E8D4b6f1B36a14284F9B7D",
        "decimals": 18,
      },
      {
        "symbol": "USDT",
        "address": "0x5a392DFd64e8258f4FCaF970ddFbcf2Bb24b1d55",
        "decimals": 18,
        "len": 2,
      },
      {
        "symbol": "Trias",
        "address": "0x3bfA6022F8dc04923b9919365D43F2FfEf471197",
        "decimals": 18,
      },
    ],
  },
  {
    "label": "Polygon",
    "chainId": 80002,
    "chainName": "Amoy",
    "address": contract_conf.TEST_Polygon_contract_address,
    "istest": true,
    "tokens": [
      {
        "symbol": "USDC",
        "address": "0xE05A4D5BbF5d384e214542E40Df2eB6E17540b45",
        "decimals": 18,
      },
      {
        "symbol": "USDT",
        "address": "0x8bDE48d7A45e446Bf2F3e4Ee4315C95352dA3276",
        "decimals": 18,
        "len": 2,
      },
      {
        "symbol": "Trias",
        "address": "0x2227CBf3f886c2166280da15746c770135a82d7D",
        "decimals": 18,
      },
    ],
  },
  {
    "label": "ETH",
    "chainId": 1,
    "chainName": "Ethereum",
    "address": contract_conf.Ethereum_contract_address,
    "tokens": [
      {
        "symbol": "ETH",
        "address": "0x0000000000000000000000000000000000000000",
        "decimals": 18,
      },
      {
        "symbol": "USDT",
        "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
        "decimals": 6,
        "len": 2,
      },
      {
        "symbol": "Trias",
        "address": "0x3A856d4effa670C54585a5D523e96513e148e95d",
        "decimals": 18,
      },
    ],
  },
  {
    "label": "Arbitrum",
    "chainId": 42161,
    "chainName": "Arbitrum",
    "address": contract_conf.Arbitrum_contract_address,
    "tokens": [
      {
        "symbol": "ETH",
        "address": "0x0000000000000000000000000000000000000000",
        "decimals": 18,
      },
      {
        "symbol": "USDT",
        "address": "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
        "decimals": 6,
        "len": 2,
      },
      {
        "symbol": "USDC",
        "address": "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
        "decimals": 6,
        "len": 2,
      },
    ],
  },
  {
    "label": "BNB Chain",
    "chainId": 56,
    "chainName": "Binance Smart Chain",
    "address": contract_conf.Binance_contract_address,
    "tokens": [
      {
        "symbol": "ETH",
        "address": "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
        "decimals": 18,
      },
      {
        "symbol": "USDT",
        "address": "0x55d398326f99059fF775485246999027B3197955",
        "decimals": 18,
        "len": 2,
      },
      {
        "symbol": "Trias",
        "address": "0xa4838122c683f732289805FC3C207Febd55BabDD",
        "decimals": 18,
      },
    ],
  },
  {
    "label": "Polygon",
    "chainId": 137,
    "chainName": "Polygon",
    "address": contract_conf.Polygon_contract_address,
    "tokens": [
      {
        "symbol": "ETH",
        "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
        "decimals": 18,
      },
      {
        "symbol": "USDC",
        "address": "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
        "decimals": 6,
        "len": 2,
      },
      {
        "symbol": "Trias",
        "address": "0x0D5eA33C2540a3071d8770F8ffee9817D0624E7d",
        "decimals": 18,
      },
    ],
  },
]

export default chain_list
