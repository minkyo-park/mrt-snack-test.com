import CopyButton from './CopyButton';

interface DiscountCardProps {
  code: string;
  amount: string;
  condition: string;
  target: string;
  validity?: string;
  note?: string;
  icon?: React.ReactNode;
}

const DiscountCard = ({
  code,
  amount,
  condition,
  target,
  validity,
  note,
  icon,
}: DiscountCardProps) => {
  return (
    <div className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
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
          <p className="text-xs text-muted-foreground font-medium uppercase">Condition</p>
          <p className="text-sm text-foreground">{condition}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground font-medium uppercase">Target</p>
          <p className="text-sm text-foreground">{target}</p>
        </div>
        {validity && (
          <div>
            <p className="text-xs text-muted-foreground font-medium uppercase">Validity</p>
            <p className="text-sm text-foreground">{validity}</p>
          </div>
        )}
        {note && (
          <div className="bg-blue-50 border border-blue-200 rounded p-2">
            <p className="text-xs text-blue-800">{note}</p>
          </div>
        )}
      </div>

      <CopyButton text={code} label="Copy Code" variant="default" />
    </div>
  );
};

export default DiscountCard;
