import { useEsewa } from 'esewa-react';



export function EsewaButton() {
  const { initiatePayment, loading, error } = useEsewa({
    merchantId: 'EPAYTEST',
    successUrl: 'https://developer.esewa.com.np/success',
    failureUrl: 'https://developer.esewa.com.np/failure',
    secretKey: '8gBm/:&EnhH.1/q',
    isTest: true,
  });

  const generateRandomId = (): string => {
    const min = 1111111;
    const max = 9999999;
    return Math.floor(Math.random() * (max - min + 1)) + min + '';
  };

  

  const handlePayment = () => {
    const txnId = generateRandomId();
    initiatePayment({
      amount: "6000",
      productId: `PD123455234-${txnId}`, // p-id = transaction uuid
      successUrl: 'https://developer.esewa.com.np/success',
      failureUrl: 'https://developer.esewa.com.np/failure',
    });
  };

  return (
    <div>
      {error && <p>{error}</p>}
       <button 
        onClick={handlePayment}
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Pay with eSewa'}
      </button>
    </div>
  );
}