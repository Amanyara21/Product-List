import { useEffect, useState } from 'react';
import { View,  FlatList, ActivityIndicator } from 'react-native';
import ProductCard from './ProductCard';

const ProductList = () => {
  // https://api.escuelajs.co/api/v1/products?offset=0&limit=10
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [allFetched, setAllFetched] = useState(false);

  const limit = 10;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    if (allFetched) return;
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`,
      );
      const data = await response.json();
      if (data.length < limit) {
        setAllFetched(true); 
      }

      setOffset(prev => prev + limit);
      setProducts([...products, ...data]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const renderFooter=()=>{
    if(loading) return <ActivityIndicator size='large'/>
    else return null
  }
  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item})=>(
         <ProductCard product={item}/>
        )}
        onEndReached={fetchProducts}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};
export default ProductList;
