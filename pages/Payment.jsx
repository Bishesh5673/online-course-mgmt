import { useLocation } from "react-router-dom";
import CryptoJS from "crypto-js";

function Payment() {

  const { state } = useLocation();

  const Message = `total_amount=${state.price},transaction_uuid=${state.transactionId},product_code=EPAYTEST`;
    const successUrl = `${window.location.origin}/payment-success`;

  const hash = CryptoJS.HmacSHA256(Message, "8gBm/:&EnhH.1/q");
  const signature = CryptoJS.enc.Base64.stringify(hash);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <div className="bg-white p-10 rounded-2xl shadow-xl text-center">

        <h1 className="text-2xl font-bold mb-4">
          Pay for {state.title}
        </h1>

        <p className="mb-6 text-gray-600">
          Amount: Rs {state.price}
        </p>

        <form
          action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
          method="POST"
        >

          <input type="hidden" name="amount" value={state.price} />
          <input type="hidden" name="tax_amount" value="0" />
          <input type="hidden" name="total_amount" value={state.price} />
          <input type="hidden" name="transaction_uuid" value={state.transactionId} />
          <input type="hidden" name="product_code" value="EPAYTEST" />
          <input type="hidden" name="product_service_charge" value="0" />
          <input type="hidden" name="product_delivery_charge" value="0" />

          <input
            type="hidden"
            name="success_url"
            value={successUrl}
          />

          <input
            type="hidden"
            name="failure_url"
            value="https://developer.esewa.com.np/failure"
          />

          <input
            type="hidden"
            name="signed_field_names"
            value="total_amount,transaction_uuid,product_code"
          />

          <input
            type="hidden"
            name="signature"
            value={signature}
          />

          <button
            type="submit"
            className="bg-green-600 text-white px-8 py-3 rounded-xl text-lg hover:bg-green-700"
          >
            Pay with eSewa
          </button>

        </form>

      </div>

    </div>
  );
}

export default Payment;
