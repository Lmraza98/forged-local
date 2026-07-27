import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="ForgedLocal home">
      <span>Forged<span>Local</span></span>
    </Link>
  );
}
