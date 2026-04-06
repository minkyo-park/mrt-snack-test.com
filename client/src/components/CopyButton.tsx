import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { toast } from 'sonner';

interface CopyButtonProps {
  text: string;
  label?: string;
  variant?: 'default' | 'outline' | 'secondary';
}

const CopyButton = ({ text, label = 'Copy Code', variant = 'default' }: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      toast.success('Copied to clipboard!');
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy');
    }
  };

  const baseStyles = 'inline-flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all duration-200 text-sm';
  const variantStyles = {
    default: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100',
    secondary: 'bg-amber-500 text-white hover:bg-amber-600 active:bg-amber-700',
  };

  return (
    <button
      onClick={handleCopy}
      className={`${baseStyles} ${variantStyles[variant]}`}
      aria-label={label}
    >
      {isCopied ? (
        <>
          <Check size={16} />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy size={16} />
          <span>{label}</span>
        </>
      )}
    </button>
  );
};

export default CopyButton;
