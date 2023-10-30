const formatAmt = (price: number) => {
  // Convert the price to a fixed-point notation with two decimal places
  let formattedPrice = price.toFixed(2);
  // Add commas as thousands separators
  formattedPrice = formattedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return formattedPrice;
};

export default formatAmt;
