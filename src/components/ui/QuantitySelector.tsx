'use client';

import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onChange: (qty: number) => void;
  min?: number;
  max?: number;
}

export default function QuantitySelector({ quantity, onChange, min = 1, max = 99 }: QuantitySelectorProps) {
  return (
    <div className="inline-flex items-center border border-gray-200 rounded-md">
      <button
        onClick={() => quantity > min && onChange(quantity - 1)}
        className="w-8 h-8 flex items-center justify-center text-navy hover:bg-gray-50 disabled:opacity-40"
        disabled={quantity <= min}
      >
        <Minus size={14} />
      </button>
      <span className="w-10 text-center text-sm font-medium text-navy">{quantity}</span>
      <button
        onClick={() => quantity < max && onChange(quantity + 1)}
        className="w-8 h-8 flex items-center justify-center text-navy hover:bg-gray-50 disabled:opacity-40"
        disabled={quantity >= max}
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
