import React, { useCallback } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductCard = ({ product }) => {

  const truncate = useCallback((text, length) => {
    return text.length > length ? text.substring(0, length - 3) + '...' : text;
  },[]);
  
  const upperCase = useCallback(text => {
    return text.toUpperCase();
  }, []);

  return (
    <View style={styles.card}>
      <Image source={{ uri: product.images[0] }} style={styles.image} />
      <View style={styles.textContainer}>
        <View style={styles.titlePriceRow}>
          <Text style={styles.title}>{upperCase(product.title)}</Text>
          <Text style={styles.price}>Rs. {product.price}</Text>
        </View>
        <Text style={styles.description}>
          {truncate(product.description, 200)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 250,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  titlePriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    maxWidth: '75%',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
});

export default ProductCard;
