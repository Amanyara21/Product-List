import { SafeAreaView, StyleSheet } from 'react-native'
import ProductList from './components/ProductList';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProductList />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FAFAFA',
    color:'black',
  }
});
export default App