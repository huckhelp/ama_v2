// sleep time expects milliseconds
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
async function main(){

    const [deployer]=await ethers.getSigners();
    console.log('deploy by acct: '+deployer.address);
    
    const bal=await deployer.getBalance();
    console.log('bal: '+bal);

    // deploy MFT Token
    MFT=await ethers.getContractFactory('MFTERC20Upg');
    mftToken = await upgrades.deployProxy(MFT, [], { initializer: 'initialize' });
    await mftToken.deployed();

    console.log(`const mftToken = "${mftToken.address}"`);
    

}

main().then(()=>process.exit(0))
.catch(err=>{  
    console.error(err);
    process.exit(1);
})

 //npx hardhat run --network bscmain scripts/deployUpg.js --show-stack-traces
 //npx hardhat run --network bsctest scripts/deployUpg.js --show-stack-traces