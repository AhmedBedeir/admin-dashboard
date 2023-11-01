import Single from "../../components/single/Single";
import "./Product.scss";
import { products } from "../../data";
import { useParams } from "react-router-dom";
function Product() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((product) => product.id === Number(id));
  console.log(product);

  return (
    <div>
      <Single targetData={product} slug="product"/>
    </div>
  );
}

export default Product;
