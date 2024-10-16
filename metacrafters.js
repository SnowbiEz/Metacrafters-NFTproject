/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const myNFT = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_weaponName, _lvl, _weaponType, _cost, _weight) {
    const NFT = {
        "weaponName": _weaponName,
        "lvl": _lvl,
        "weaponType": _weaponType,
        "cost": _cost,
        "weight": _weight
    }
    myNFT.push(NFT);
    console.log("Minted: " + _weaponName)
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    var counter = 1;
    for (let i = 0; i < myNFT.length; i++) {
        console.log("NFT [ " + counter++ + " ]\nName: " + myNFT[i].weaponName + "\nLVL" + myNFT[i].lvl +"\nWeapon Type: " + myNFT[i].weaponType + "\nCost: " + myNFT[i].cost + "\nWeight: " + myNFT[i].weight);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n you have minted a total of " + myNFT.length + " NFTs");
}

// call your functions below this line
mintNFT("Dáinsleif","30","one-handed sword","9000","20kg");
mintNFT("Skofnung","43","longsword","15000","22kg");
mintNFT("Balmung","70","greatsword","99999","30kg");
listNFTs();
getTotalSupply();
