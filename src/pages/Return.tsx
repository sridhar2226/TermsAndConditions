import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PolicyLayout from "@/components/PolicyLayout";

const Return = () => {
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
          Return Policy
        </h2>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            We offer refund/exchange within the first <strong className="text-foreground">2 days</strong> from the date of your purchase. If 2 days have passed since your purchase, you will not be offered a return, exchange or refund of any kind.
          </p>

          <p>In order to become eligible for a return or an exchange:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>The purchased item should be unused and in the same condition as you received it</li>
            <li>The item must have original packaging</li>
            <li>If the item that you purchased on a sale, then the item may not be eligible for a return/exchange</li>
          </ul>

          <p>
            Further, only such items are replaced by us (based on an exchange request), if such items are found defective or damaged.
          </p>

          <p>
            You agree that there may be a certain category of products/items that are exempted from returns or refunds. Such categories of the products would be identified to you at the time of purchase.
          </p>

          <p>
            For exchange/return accepted request(s) (as applicable), once your returned product/item is received and inspected by us, we will send you an email to notify you about receipt of the returned/exchanged product. Further, if the same has been approved after the quality check at our end, your request (i.e. return/exchange) will be processed in accordance with our policies.
          </p>
        </div>
      </article>
    </PolicyLayout>
  );
};

export default Return;
