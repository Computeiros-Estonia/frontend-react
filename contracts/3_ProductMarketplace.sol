// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

/** 
 * @title ProductMarketplace
 * @dev Implements voting process along with vote delegation
 */
contract ProductMarketplace {
    struct Product {
        uint256 id;
        string name;
        uint256 price;
        bool sold;
    }

    Product[] public products;
    address payable public owner;

    event ProductAdded(uint256 id, string name, uint256 price);
    event ProductSold(uint256 id);

    constructor() {
        owner = payable(msg.sender);
    }
   
    function total() public view returns (uint256) {
        return products.length;
    }

    function addProduct(string memory name, uint256 price) public {
        require(msg.sender == owner,
        "Only the owner can add a product!");
        uint256 id = products.length;
        products.push(Product(id, name, price, false));
        emit ProductAdded(id, name, price);
    }

    function buyProduct(uint256 id) public payable {
        require(id < products.length,
        "Invalid product id");
        Product storage product = products[id
        ];
        require(!product.sold,
        "Product already sold");
        require(msg.value == product.price,
        "Incorrect amount sent");
        product.sold = true;
        owner.transfer(msg.value);
        emit ProductSold(id);
    }
}