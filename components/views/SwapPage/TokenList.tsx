// TokenList.tsx
import { Token } from "@/types";

interface Props {
  mode: "pay" | "receive";
  tokens: Token[];
  onSelect: (t: Token) => void;
}

export default function TokenList({ mode, tokens, onSelect }: Props) {
  return (
    <div className="mt-3 space-y-2 max-h-[400px] overflow-y-auto">
      {tokens.map((t) => (
        <div
          key={t.symbol}
          className="flex items-center justify-between p-2 rounded-md hover:bg-[#2A2635] cursor-pointer"
          onClick={() => onSelect(t)}
        >
          <div className="flex items-center gap-2">
            <img src={t.logo} alt={t.symbol} className="w-6 h-6 rounded-full" />
            <div>
              <p className="font-medium">{t.name}</p>
              <p className="text-xs text-gray-400">{t.symbol}</p>
            </div>
          </div>

          {mode === "receive" && (
            <div className="text-right text-sm">
              <p>${t.price?.toFixed(2)}</p>
              <p
                className={
                  t.change24h && t.change24h < 0
                    ? "text-red-500"
                    : "text-green-500"
                }
              >
                {t.change24h?.toFixed(2)}%
              </p>
              <p className="text-gray-400">
                {t.mcap} / {t.volume24h}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
