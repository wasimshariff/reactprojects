import ProductItem from './ProductItem';
import classes from './Products.module.css';


const DUMMY_PRODUCTS = [
    { id: 'p1', price: 6, title: 'My FirstBook', description: 'The firstBook i every wrote'},
    { id: 'p2', price: 8, title: 'My SecondBook', description: 'The secondbook i every wrote'}
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
          {DUMMY_PRODUCTS.map(item => (
              <ProductItem
                  key = {item.id}
                  id = {item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        />))}
      </ul>
    </section>
  );
};

export default Products;
