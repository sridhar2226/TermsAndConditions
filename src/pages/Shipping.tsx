import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PolicyLayout from "@/components/PolicyLayout";

const Shipping = () => {
  const navigate = useNavigate()
  return (
    <PolicyLayout>
      <article className="prose prose-slate max-w-none">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        </div>
        <h2 className="text-2xl font-semibold text-foreground mb-6">
          Shipping Policy
        </h2>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            The orders for the user are shipped through registered domestic courier companies and/or speed post only.
          </p>

          <p>
            Orders are shipped within <strong className="text-foreground">6 days</strong> from the date of the order and/or payment or as per the delivery date agreed at the time of order confirmation and delivering of the shipment, subject to courier company/post office norms.
          </p>

          <p>
            Platform Owner shall not be liable for any delay in delivery by the courier company/postal authority.
          </p>

          <p>
            Delivery of all orders will be made to the address provided by the buyer at the time of purchase.
          </p>

          <p>
            Delivery of our services will be confirmed on your email ID as specified at the time of registration.
          </p>

          <p>
            If there are any shipping cost(s) levied by the seller or the Platform Owner (as the case be), the same is not refundable.
          </p>
        </div>
      </article>
    </PolicyLayout>
  );
};

export default Shipping;
