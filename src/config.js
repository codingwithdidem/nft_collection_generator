const description = "Astronout NFT Artwork";
const baseUri = "https://codingwithdidem/nft";

const layerConfigurations = [
  {
    growEditionSizeTo: 20,
    layersOrder: [{ name: "Hold" }, { name: "Dress" }, { name: "Helmet" }],
  },
];

const format = {
  width: 512,
  height: 512,
};

const background = {
  generate: false,
  brightness: "80%",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
};
