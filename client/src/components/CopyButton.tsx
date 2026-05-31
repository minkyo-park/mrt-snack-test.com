import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { toast } from 'sonner';

interface CopyButtonProps {
  text: string;
  label?: string;
  variant?: 'default' | 'outline' | 'secondary';
  href?: string;
}

const CopyButton = ({ text, label = '코드 복사', variant = 'default', href = 'https://myrealt.rip/aRT258' }: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      toast.success('클립보드에 복사되었습니다!');
      window.open(href, '_blank', 'noopener,noreferrer');
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      toast.error('복사에 실패했습니다');
    }
  };

  const baseStyles = 'inline-flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all duration-200 text-sm w-full justify-center';
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
          <span>복사 완료!</span>
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
