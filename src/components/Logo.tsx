import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="ForgedLocal home">
      <span className="logo-mark" aria-hidden="true"><span>F</span></span>
      <span>Forged<span>Local</span></span>
    </Link>
  );
}
