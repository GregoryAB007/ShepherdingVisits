"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  label: string;
  /** mailto: link for "Email Us" */
  mail: string;
  /** tel: link for "Call Us" — omitted when no phone number is set */
  tel?: string | null;
  /** plain-text address and number shown under each choice */
  emailText?: string | null;
  phoneText?: string | null;
  /** "light" renders the outlined button for dark backgrounds */
  variant?: "light" | "default";
  tinaField?: string;
};

// "Schedule a Consultation" opens a small menu offering the two ways to
// reach the office. Plain client-side state, so it works in the static export.
export default function ScheduleButton({
  label,
  mail,
  tel,
  emailText,
  phoneText,
  variant = "default",
  tinaField,
}: Props) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const btnClass = variant === "light" ? "at-btn light" : "at-btn";
  const hasMail = mail.startsWith("mailto:");

  return (
    <span className="at-schedule" ref={wrapRef}>
      <button
        type="button"
        className={btnClass}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        data-tina-field={tinaField}
      >
        {label}
      </button>

      {open && (
        <span className="at-pop" role="menu">
          {hasMail && (
            <a className="at-pop-item" role="menuitem" href={mail}>
              Email Us
              {emailText && <span className="at-pop-detail">{emailText}</span>}
            </a>
          )}
          {tel && (
            <a className="at-pop-item" role="menuitem" href={tel}>
              Call Us
              {phoneText && <span className="at-pop-detail">{phoneText}</span>}
            </a>
          )}
        </span>
      )}
    </span>
  );
}
