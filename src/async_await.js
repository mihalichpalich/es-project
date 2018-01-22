//async await

// const fetchProducts = () => Promise.resolve({data: [1,2,3]});

// const getProducts = async () => {
//   console.log('result', await fetchProducts());
// };

const fetchProducts = () => Promise.resolve({data: [1,2,3]});
const fetchAdditional = (products) => Promise.resolve({data: [2,3,4]});

// const getProducts = async () => {
//   // try {
//   //   const products = await fetchProducts();
//   //   console.log('products', products);
//   // } catch(err) {
//   //   console.log('err', err);
//   // };

//   return fetchProducts().then(products => {
//     if (products.data.length) {
//       return fetchAdditional(products.data)
//         .then(additionalData => {
//           return additionalData;
//         })
//     } else {
//       return products.data;
//     }
//   })
// };

const getProducts = async() => {
  const products = await fetchProducts();

  if (!products.data.length) {
    return products.data;
  }

  return await fetchAdditional(products.data);
}

getProducts().then(result => {
  //console.log('result', result);
});