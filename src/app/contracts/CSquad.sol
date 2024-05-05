// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract CSquadToken {
    string public name = "CSquad Token";
    string public symbol = "CST";
    uint256 public totalSupply = 1000000000000000000000000; //1 million tokens
    uint256 public decimal = 18;
    address admin;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 _value
    );

    mapping(address => uint256) balances;
    mapping(address => mapping(address => uint256)) allowed;

    constructor() {
        balances[msg.sender] = totalSupply;
        admin = msg.sender;
    }

    // function to check the balance
    function balanceOf(address _wallet) public view returns (uint256) {
        return balances[_wallet];
    }

    // function to transfer tokens
    function transfer(
        address _to,
        uint256 _value
    ) public returns (bool success) {
        require(_value <= balances[msg.sender]);
        balances[msg.sender] -= _value;
        balances[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    //Modifier to check if the msg sender is owner
    modifier isAdmin() {
        require(msg.sender == admin);
        _;
    }

    // function to mint more tokens
    function mint(uint256 _qty) public isAdmin returns (uint256) {
        totalSupply += _qty;
        balances[msg.sender] += _qty;
        return totalSupply;
    }

    // function to burn the existing supply of tokens
    function burn(uint256 _qty) public isAdmin returns (uint256) {
        require(balances[msg.sender] >= _qty);
        totalSupply -= _qty;
        balances[msg.sender] -= _qty;
        return totalSupply;
    }

    // function to allot the allowance
    function allowance(
        address owner,
        address spender
    ) public view returns (uint256) {
        return allowed[owner][spender];
    }

    // function top approve the allowance to the spender
    function approve(
        address _spender,
        uint256 _value
    ) public returns (bool success) {
        allowed[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    // function to send the allowance amount to the reciever

    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) public returns (bool success) {
        uint256 allowanceLeft = allowed[_from][msg.sender];
        require(balances[_from] >= _value && allowanceLeft >= _value);
        balances[_to] += _value;
        balances[_from] -= _value;
        allowed[_from][msg.sender] -= _value;
        emit Transfer(_from, _to, _value);
        return true;
    }
}
