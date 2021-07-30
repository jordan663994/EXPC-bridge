const provider = window.ethereum

const maticPOSClient = new MaticPOSClient({
  network: "mainnet",
  version: "v1",
  parentProvider: "http://127.0.0.1:8545",
  maticProvider: "https://node.expanse.tech"
});



function depositEth = async () => await maticPOSClient.depositEtherForUser(from, amount, {
  from,
  gasPrice: "10000000000",
});

function depositERC20 = await maticPOSClient.depositERC20ForUser(rootToken, from, amount, {
  from,
  gasPrice: "10000000000",
});


function emmiter_for_ether_deposits = async () => await maticPOSClient.exitERC20(depositEth(), { from });


function emmiter_for_ERC20_deposits = async () => await maticPOSClient.exitERC20(depositERC20(), { from });
