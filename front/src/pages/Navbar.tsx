import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="fixed w-full h-[80px] bg-slate-900 text-slate-100 flex justify-between pr-5 pl-5 items-center">
      <span>Dress'up</span>
      <span className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
      </span>
    </nav>
  )
}
