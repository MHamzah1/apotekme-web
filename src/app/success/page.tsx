import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

const orderItems = [
  { id: 1, name: 'CeraVe Acne Resurfacing Retinol Face Serum', qty: 2, price: 26.24, image: 'https://images.unsplash.com/photo-1556228852-80b6e5eeff06?w=200&h=200&fit=crop' },
  { id: 2, name: 'CeraVe Acne Resurfacing Retinol Face Serum', qty: 1, price: 13.12, image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=200&h=200&fit=crop' },
  { id: 3, name: 'CeraVe Acne Resurfacing Retinol Face Serum', qty: 1, price: 13.12, image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&h=200&fit=crop' },
];

export default function SuccessPage() {
  return (
    <div className="container-custom py-16 text-center">
      <div className="w-20 h-20 mx-auto mb-6 bg-skyblue rounded-full flex items-center justify-center">
        <ShoppingCart className="text-primary" size={40} />
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-navy mb-2">Thanks for your purchase!</h1>
      <p className="text-sm text-navy/70 mb-8">
        We've sent a confirmation email to text.123@gmail.com with the order details.
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
        <div className="bg-skyblue/50 rounded-2xl p-5">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-navy">
              <span>Subtotal <span className="text-navy/60">(3 items)</span></span>
              <span>$540.00</span>
            </div>
            <div className="flex justify-between text-navy">
              <span>Shop discount</span>
              <span className="text-danger">-$30.00</span>
            </div>
            <div className="flex justify-between text-navy pt-2 border-t border-primary/20">
              <span>Shipping fee</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between text-base font-bold text-navy pt-2 border-t border-primary/20">
              <span>Total</span>
              <span>$510.00</span>
            </div>
          </div>
          <div className="mt-4 text-center">
            <Link href="/account/orders" className="btn-primary text-sm">Order Details</Link>
            <p className="text-xs text-navy/60 mt-2">Order number #123456789</p>
          </div>
        </div>

        <div className="bg-skyblue/50 rounded-2xl p-5">
          <p className="text-sm font-medium text-navy mb-3">Estimated Delivery date: 05 - 07 Dec</p>
          <div className="space-y-3">
            {orderItems.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-md" />
                <p className="text-xs text-navy flex-1 line-clamp-2">{item.name}</p>
                <span className="text-xs text-navy/60">X {item.qty}</span>
                <span className="text-xs font-bold text-navy">${item.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Link href="/" className="btn-primary">Continue Shopping</Link>
      </div>
    </div>
  );
}
