import Single from "../../components/single/Single";
import "./Product.scss";
import { products } from "../../data";
import { useParams } from "react-router-dom";

type TargetProduct = {
  id: number;
  img: string;
  title: string;
  color: string;
  producer: string;
  price: string;
  createdAt: string;
  inStock: boolean | null;
};

function Product() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((product) => product.id === Number(id));
  console.log(product);
  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div>
      <Single targetData={product as TargetProduct} slug="product" />
    </div>
  );
}

export default Product;
