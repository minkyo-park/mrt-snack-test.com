import CopyButton from './CopyButton';

interface DiscountCardProps {
  code: string;
  amount: string;
  condition: string;
  target: string;
  validity?: string;
  note?: string;
  icon?: React.ReactNode;
  image?: string;
}

const DiscountCard = ({
  code,
  amount,
  condition,
  target,
  validity,
  note,
  icon,
  image,
}: DiscountCardProps) => {
  return (
    <div className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
      {image && (
        <img src={image} alt={`마이리얼트립 ${code} ${amount} 쿠폰 이미지`} loading="lazy" width={1254} height={1254} className="w-full max-w-[180px] aspect-square object-cover rounded-lg mb-4" />
      )}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            {icon && <div className="text-2xl">{icon}</div>}
            <h3 className="text-lg font-bold text-foreground">{code}</h3>
          </div>
          <div className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold">
            {amount}
          </div>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div>
          <p className="text-xs text-muted-foreground font-medium">최소 결제금액</p>
          <p className="text-sm text-foreground">{condition}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground font-medium">적용 대상</p>
          <p className="text-sm text-foreground">{target}</p>
        </div>
        {validity && (
          <div>
            <p className="text-xs text-muted-foreground font-medium">유효기간</p>
            <p className="text-sm text-foreground">{validity}</p>
          </div>
        )}
        {note && (
          <div className="bg-blue-50 border border-blue-200 rounded p-2">
            <p className="text-xs text-blue-800">{note}</p>
          </div>
        )}
      </div>

      <CopyButton text={code} label="코드 복사 & 바로가기" variant="default" />
    </div>
  );
};

export default DiscountCard;
