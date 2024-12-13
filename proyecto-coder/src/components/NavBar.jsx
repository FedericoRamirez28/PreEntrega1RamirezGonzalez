import '../App.css'
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav className="barraNavegador">
      <h2>StreetStyle</h2>
      <ul className="ulNav">
        <li><a href="/">Home</a></li>
        <li><a href="/remeras">Remeras</a></li>
        <li><a href="/buzos">Buzos</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;

   