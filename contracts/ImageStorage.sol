// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

contract ImageStorage {
    struct Image {
        string ipfsHash;
        address uploader;
        uint256 timestamp;
    }

    mapping(uint256 => Image) public images;
    uint256 public imageCount;

    event ImageUploaded(uint256 imageId, string ipfsHash, address uploader);

    function uploadImage(string memory _ipfsHash) public {
        require(bytes(_ipfsHash).length > 0, "IPFS hash is required");

        imageCount++;
        images[imageCount] = Image(_ipfsHash, msg.sender, block.timestamp);

        emit ImageUploaded(imageCount, _ipfsHash, msg.sender);
    }

    function getImage(uint256 _imageId) public view returns (Image memory) {
        return images[_imageId];
    }
}
