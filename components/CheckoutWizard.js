const CheckoutWizard = ({ activeStep = 0 }) => {
  return (
    <div className="mb-5 flex flex-wrap">
      {['User Login', 'Shipping Address', 'Payment Method', 'Place Order'].map(
        (step, index) => (
          // Ternary Operator In Backticks in div ClassName index <= activeStep In order to Check which active step and color the text
          <div
            key={step}
            className={`flex-1 border-b-2 text-center 
            ${
              index <= activeStep
                ? 'border-indigo-500'
                : 'border-gray-400 text-gray-400'
            }

            `}
          >
            {step}
          </div>
        )
      )}
    </div>
  );
};

export default CheckoutWizard;
