pragma solidity ^0.8.10;

contract TrivialString {
    string public trivial;
    event StringCreated(address indexed _from, string createdString);

    constructor(string memory initialString) {
        trivial = initialString;
    }

    function setString(string memory newString) public {
        trivial = newString;
        emit StringCreated(msg.sender, trivial);
    }
}