import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="ForgedLocal home">
      <span className="logo-mark" aria-hidden="true">
        <svg className="logo-symbol" viewBox="0 0 96 96" focusable="false">
          <rect width="96" height="96" rx="22" fill="#184c3a" />
          <path d="M25 20H72L65 32H40V43H63L57 55H40V77H25Z" fill="#d7ef9f" />
        </svg>
      </span>
      <span>Forged<span>Local</span></span>
    </Link>
  );
}
