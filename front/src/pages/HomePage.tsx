import { Link } from 'react-router-dom'
import { sampleProducts } from '../data'

export default function HomePage() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4 justify-items-center pt-28 mb-8">
      {sampleProducts.map((product) => (
        <li key={product.slug}>
          <Link to={`/products/${product.slug}`}>
            <img
              className="w-[250px] h-[350px]"
              src={product.image}
              alt={product.name}
            />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}
