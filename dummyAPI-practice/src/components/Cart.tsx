import "./css/component.css";
type CartProps = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

export function Cart({ quantity, onIncrease, onDecrease }: CartProps) {
  const unitPrice: number = 250;
  return (
    <div className="Cart">
      <p>
        <b>Qualtity : </b>
        {quantity}
      </p>
      <p>
        <i>Total Price : $</i>
        {quantity * unitPrice}
      </p>

      <button onClick={onIncrease}>Add Item</button>
      <button onClick={onDecrease}>Remove Item</button>
    </div>
  );
}
