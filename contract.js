contract usersKeys {
	

	function usersKeys () {
	}
	
	struct keys {
		address ethAddress;
		bytes32 eID;
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

    mapping (address => keys) public keysWallet;

    function register(bytes32 username) {
        if(keysWallet[msg.sender].eID == "" && username != ""){
           keysWallet[msg.sender].ethAddress = msg.sender;
	   keysWallet[msg.sender].eID = username;
        }
    }

    function unregister(bytes32 username) {
	if(keysWallet[msg.sender].eID == username){
            keysWallet[msg.sender].eID = "";
        }
    }
	
	function registerKeyforCurrency(uint currencyNumber, bytes32 newKey) {
		if(keysWallet[msg.sender].eID != 0){
			if (currencyNumber == 0) {keysWallet[msg.sender].currency0 = newKey;}
			if (currencyNumber == 1) {keysWallet[msg.sender].currency1 = newKey;}
			if (currencyNumber == 2) {keysWallet[msg.sender].currency2 = newKey;}
			if (currencyNumber == 3) {keysWallet[msg.sender].currency3 = newKey;}
			if (currencyNumber == 4) {keysWallet[msg.sender].currency4 = newKey;}
			if (currencyNumber == 5) {keysWallet[msg.sender].currency5 = newKey;}
			if (currencyNumber == 6) {keysWallet[msg.sender].currency6 = newKey;}
			if (currencyNumber == 7) {keysWallet[msg.sender].currency7 = newKey;}
			if (currencyNumber == 8) {keysWallet[msg.sender].currency8 = newKey;}
			if (currencyNumber == 9) {keysWallet[msg.sender].currency9 = newKey;}
			}
		}
	
	function getKeyforCurrencyforUser (bytes32 username, uint currencyNumber) returns (bytes32 myKey) {
		if(keysWallet[msg.sender].eID != ""){
			if (currencyNumber == 0) {myKey = keysWallet[msg.sender].currency0;}
			if (currencyNumber == 1) {myKey = keysWallet[msg.sender].currency1;}
			if (currencyNumber == 2) {myKey = keysWallet[msg.sender].currency2;}
			if (currencyNumber == 3) {myKey = keysWallet[msg.sender].currency3;}
			if (currencyNumber == 4) {myKey = keysWallet[msg.sender].currency4;}
			if (currencyNumber == 5) {myKey = keysWallet[msg.sender].currency5;}
			if (currencyNumber == 6) {myKey = keysWallet[msg.sender].currency6;}
			if (currencyNumber == 7) {myKey = keysWallet[msg.sender].currency7;}
			if (currencyNumber == 8) {myKey = keysWallet[msg.sender].currency8;}
			if (currencyNumber == 9) {myKey = keysWallet[msg.sender].currency9;}
			}
		}

	function getEthAddress (bytes32 username) returns (address ethAddress) {
		ethAddress = keysWallet[msg.sender].eID;
		}
}

