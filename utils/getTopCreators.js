export const getCreators = (nfts) => {
  let sellers = [];
  let result = [];
  //   Get All Unique Sellers
  for (let x = 0; x < nfts.length; x++) {
    if (!sellers.includes(nfts[x].seller)) {
      sellers.push(nfts[x].seller);
    }
  }

  //   Get Amount Listed for Each Seller
  for (let i = 0; i < sellers.length; i++) {
    let sum = 0;
    for (let k = 0; k < nfts.length; k++) {
      if (sellers[i] === nfts[k].seller) {
        sum += parseFloat(nfts[k].price);
      }
    }
    result.push({ seller: sellers[i], sum });
  }

  //   Sort Result by Amount Listed
  result.sort((a, b) => b.sum - a.sum);

  return result;
};
