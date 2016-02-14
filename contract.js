contract keysWallet {
    // Here we store the systemIDs and their receive addresses at each currency. Make it public to automatically generate an

	struct keys {
		bytes32	systemID;		
		bytes32	ethereum;
		bytes32	currency0;		
		bytes32	currency1;
		bytes32 currency2;
		bytes32	currency3;
		bytes32	currency4;
		bytes32	currency5;
		bytes32	currency6;
		bytes32	currency7;
		bytes32	currency8;
		bytes32	currency9;
	}
	
    mapping (bytes32 => keys) public keysWallet;

    // Register the provided systemID with the caller address.
    // Also, we don't want them to register "" as their systemID.
    function register(bytes32 mySystemID) {
        if(keysWallet[mySystemID].mySystemID == 0 && mySystemID != ""){
            keysWallet[mySystemID].ethereum = msg.sender;
        }
    }

    // Unregister the provided mySystemID with the caller address.
    function unregister(bytes32 mySystemID) {
        if(keysWallet[mySystemID].mySystemID != 0 && mySystemID != ""){
            keysWallet[mySystemID].mySystemID = "";
        }
    }
    
	function registerKeyCurrency(bytes32 mySystemID, uint currencyNumber, bytes32 newKey) {
		if(keysWallet[mySystemID].ethereum == msg.sender) {
			if (currencyNumber == 0) {keysWallet[mySystemID].currency0 = newKey;}
			if (currencyNumber == 1) {keysWallet[mySystemID].currency1 = newKey;}
			if (currencyNumber == 2) {keysWallet[mySystemID].currency2 = newKey;}
			if (currencyNumber == 3) {keysWallet[mySystemID].currency3 = newKey;}
			if (currencyNumber == 4) {keysWallet[mySystemID].currency4 = newKey;}
			if (currencyNumber == 5) {keysWallet[mySystemID].currency5 = newKey;}
			if (currencyNumber == 6) {keysWallet[mySystemID].currency6 = newKey;}
			if (currencyNumber == 7) {keysWallet[mySystemID].currency7 = newKey;}
			if (currencyNumber == 8) {keysWallet[mySystemID].currency8 = newKey;}
			if (currencyNumber == 9) {keysWallet[mySystemID].currency9 = newKey;}
			}
		}
	
	function getKeyforCurrencyforID (bytes32 mySystemID, bytes32 payeeSystemID, uint currencyNumber) returns (bytes32 hisKey) {
		if(keysWallet[mySystemID].ethereum == msg.sender) {
			if (currencyNumber == 0) {hisKey = keysWallet[payeeSystemID].currency0;}
			if (currencyNumber == 1) {hisKey = keysWallet[payeeSystemID].currency1;}
			if (currencyNumber == 2) {hisKey = keysWallet[payeeSystemID].currency2;}
			if (currencyNumber == 3) {hisKey = keysWallet[payeeSystemID].currency3;}
			if (currencyNumber == 4) {hisKey = keysWallet[payeeSystemID].currency4;}
			if (currencyNumber == 5) {hisKey = keysWallet[payeeSystemID].currency5;}
			if (currencyNumber == 6) {hisKey = keysWallet[payeeSystemID].currency6;}
			if (currencyNumber == 7) {hisKey = keysWallet[payeeSystemID].currency7;}
			if (currencyNumber == 8) {hisKey = keysWallet[payeeSystemID].currency8;}
			if (currencyNumber == 9) {hisKey = keysWallet[payeeSystemID].currency9;}
			if (currencyNumber == 10) {hisKey = keysWallet[payeeSystemID].ethereum;}
			}
		}
}

