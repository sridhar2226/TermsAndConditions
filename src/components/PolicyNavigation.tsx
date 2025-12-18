import { Link } from "react-router-dom";

const PolicyNavigation = () => {
  const links = [
    { to: "/terms", label: "Terms & Conditions" },
    { to: "/privacy", label: "Privacy Policy" },
    { to: "/refund", label: "Refund & Cancellation" },
    { to: "/return", label: "Return Policy" },
    { to: "/shipping", label: "Shipping Policy" },
  ];

  return (
    <nav className="border-t border-border bg-secondary/50 py-6">
      <div className="mx-auto max-w-4xl px-4">
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Solai Pharma Agencies. All rights reserved.
        </p>
      </div>
    </nav>
  );
};

export default PolicyNavigation;
