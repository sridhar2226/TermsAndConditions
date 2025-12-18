import { Link } from "react-router-dom";
import PolicyLayout from "@/components/PolicyLayout";

const Index = () => {
  const policies = [
    {
      to: "/terms",
      title: "Terms & Conditions",
      description: "Terms of use for our platform and services",
    },
    {
      to: "/privacy",
      title: "Privacy Policy",
      description: "How we collect, use, and protect your data",
    },
    {
      to: "/refund",
      title: "Refund & Cancellation Policy",
      description: "Our refund and order cancellation guidelines",
    },
    {
      to: "/return",
      title: "Return Policy",
      description: "Product return and exchange procedures",
    },
    {
      to: "/shipping",
      title: "Shipping Policy",
      description: "Delivery timelines and shipping information",
    },
  ];

  return (
    <PolicyLayout>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-foreground mb-2">
          Policies & Legal Information
        </h2>
        <p className="text-muted-foreground">
          Please review our policies below
        </p>
      </div>

      <div className="grid gap-4">
        {policies.map((policy) => (
          <Link
            key={policy.to}
            to={policy.to}
            className="block rounded-lg border border-border bg-card p-6 transition-colors hover:bg-secondary/50"
          >
            <h3 className="text-lg font-medium text-foreground mb-1">
              {policy.title}
            </h3>
            <p className="text-sm text-muted-foreground">{policy.description}</p>
          </Link>
        ))}
      </div>
    </PolicyLayout>
  );
};

export default Index;
