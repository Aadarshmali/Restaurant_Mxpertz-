import Link from "next/link";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

export default function Button({ href, variant = "primary", children }: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  const variantStyles =
    variant === "secondary"
      ? "border border-slate-300 bg-white text-slate-900 shadow-sm hover:bg-slate-50"
      : "bg-slate-900 text-white shadow-lg shadow-slate-900/10 hover:bg-slate-800";

  return (
    <Link href={href} className={`${baseStyles} ${variantStyles}`}>
      {children}
    </Link>
  );
}
