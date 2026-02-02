import React from 'react';

type SaveButtonProps = {
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
};

export default function SaveButton({ disabled = false, onClick, children, fullWidth = false, className = '' }: SaveButtonProps) {
  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${widthClass} px-4 py-2 rounded-[6px] text-lg font-semibold text-white outline-none focus:outline-none ${
        disabled ? 'bg-[#d8d9dd] cursor-not-allowed text-[#9ca3af]' : 'bg-[#C2185B] hover:bg-[#aa1650] cursor-pointer'
      } ${className}`}
    >
      {children ?? 'Save & Continue'}
    </button>
  );
}
