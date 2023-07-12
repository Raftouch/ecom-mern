import { Link } from 'react-router-dom'
// import { sampleProducts } from '../data'
import { Product } from '../types/Product'
import { useEffect, useReducer } from 'react'
import axios from 'axios'
import { getError } from '../utils'
import { ApiError } from '../types/ApiError'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

type State = {
  products: Product[]
  loading: boolean
  error: string
}

type Action =
  | { type: 'FETCH_REQUEST' }
  | { type: 'FETCH_SUCCESS'; payload: Product[] }
  | { type: 'FETCH_FAIL'; payload: string }

const initialState: State = {
  products: [],
  loading: true,
  error: '',
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true }
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false }
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default function HomePage() {
  const [{ loading, error, products }, dispatch] = useReducer<
    React.Reducer<State, Action>
  >(reducer, initialState)

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' })
      try {
        const result = await axios.get('/api/products')
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(error as ApiError) })
      }
    }
    fetchData()
  }, [])

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox>{error}</MessageBox>
  ) : (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4 justify-items-center pt-28 mb-8">
      {products.map((product) => (
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
