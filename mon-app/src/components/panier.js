
function Panier() {
  const CroissantPrice = 1.10
  const PetitpainPrice = 1.00
  const OlivesPrice = 1.90

return (<div>
    <h2>Panier</h2>
    <ul>
    <li>Croissant: {CroissantPrice}€</li>
     <li>Petit-pain: {PetitpainPrice}€</li>
     <li>Olives: {OlivesPrice}€</li>
    </ul>
      Total: {CroissantPrice + PetitpainPrice + OlivesPrice }€
      </div>)
}

export default Panier;
