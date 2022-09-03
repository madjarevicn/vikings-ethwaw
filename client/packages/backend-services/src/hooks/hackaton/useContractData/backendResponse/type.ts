interface IBackendResponse {
  "tx_overview": {
    "protocol_name": string;
    "action": string;
    "action_description":string;
    "topic": string;
    "input_params": ["amountOut"; "amountInMax"; "path"; "to"; "deadline"];
    "input_values": [
      4300000000;
      5000000000;
      [
        "0x9430801EBAf509Ad49202aaBC5F5Bc6fd8A3dAf8";
        "0x118A612880b8E3F9914b0d4Bff702e3FBEC91783"
      ];
      "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";
      1662208307
    ]
  };
  "contract_details": {
    "name": "Uniswap (UNI)";
    "is_verified": true;
    "transaction_count": 2063051;
    "balance_usd": 545873;
    "public_url": "https://uniswap.org/"
  };
  "trust_score": {
    "value": 96;
    "description": "This contract is not considered very safe."
  }
}


export type { IBackendResponse };
