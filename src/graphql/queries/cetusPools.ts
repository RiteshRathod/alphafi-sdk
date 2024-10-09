export const cetusPools = `query GetCetusPools {
  alphaSuiCetusPool: object(address: "0xda7347c3192a27ddac32e659c9d9cbed6f8c9d1344e605c71c8886d7b787d720") {
    ...PoolFields
  }
  usdcUsdtCetusPool: object(address: "0xc8d7a1503dc2f9f5b05449a87d8733593e2f0f3e7bffd90541252782e4d2ca20") {
    ...PoolFields
  }
  usdyUsdcCetusPool: object(address: "0x0e809689d04d87f4bd4e660cd1b84bf5448c5a7997e3d22fc480e7e5e0b3f58d") {
    ...PoolFields
  }
  suiUsdcCetusPool: object(address: "0xcf994611fd4c48e277ce3ffd4d4364c914af2c3cbb05f7bf6facd371de688630") {
    ...PoolFields
  }
  wethUsdcCetusPool: object(address: "0x5b0b24c27ccf6d0e98f3a8704d2e577de83fa574d3a9060eb8945eeb82b3e2df") {
    ...PoolFields
  }
  wbtcUsdcCetusPool: object(address: "0xaa57c66ba6ee8f2219376659f727f2b13d49ead66435aa99f57bb008a64a8042") {
    ...PoolFields
  }
  navxSuiCetusPool: object(address: "0x0254747f5ca059a1972cd7f6016485d51392a3fde608107b93bbaebea550f703") {
    ...PoolFields
  }
}

fragment PoolFields on Object {
  asMoveObject {
    contents {
      type {
        repr
      }
      json
    }
  }
}
`;
