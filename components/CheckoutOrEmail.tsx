import type { ReactNode } from "react";
import { mailtoHref } from "@/lib/site";

type Props = {
  stripeUrl?: string;
  mailtoSubject: string;
  mailtoBody?: string;
  className: string;
  children: ReactNode;
  /** Shown when Stripe URL is not configured (mailto fallback). */
  fallbackChildren?: ReactNode;
};

/**
 * Prefer a production Stripe URL when configured; otherwise mailto (no fake checkout).
 */
export default function CheckoutOrEmail({
  stripeUrl,
  mailtoSubject,
  mailtoBody,
  className,
  children,
  fallbackChildren,
}: Props) {
  const useStripe = Boolean(stripeUrl && stripeUrl.startsWith("https://"));
  const href = useStripe ? stripeUrl! : mailtoHref(mailtoSubject, mailtoBody);
  return (
    <a href={href} className={className}>
      {useStripe ? children : fallbackChildren ?? children}
    </a>
  );
}
