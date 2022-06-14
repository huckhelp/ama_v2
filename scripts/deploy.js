// sleep time expects milliseconds
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
async function main(){

    const [deployer]=await ethers.getSigners();
    console.log('deploy by acct: '+deployer.address);
    
    const bal=await deployer.getBalance();
    console.log('bal: '+bal);

    const owner = deployer.address;

    // deploy MFT Token
    MFT=await ethers.getContractFactory('MFTERC20');
    mftToken = await MFT.deploy();
    console.log(`const mftToken = "${mftToken.address}"`);

    console.log("transfer ownership");
    await mftToken.transferOwnership(owner);
    
}

main().then(()=>process.exit(0))
.catch(err=>{  
    console.error(err);
    process.exit(1);
})

 //npx hardhat run --network bscmain scripts/deploy.js --show-stack-traces
 //npx hardhat run --network bsctest scripts/deploy.js --show-stack-traces