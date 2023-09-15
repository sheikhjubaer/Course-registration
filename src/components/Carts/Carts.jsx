import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Carts = ({ carts }) => {
  let totalCreditHours = 0;
  let totalPrice = 0;

  for (const cart of carts) {
    totalCreditHours += cart.credit;
    totalPrice += cart.price;
  }

  // Store the initial values
  const initialTotalCreditHours = totalCreditHours;
  var remainingCreditHours = 20 - initialTotalCreditHours;


  useEffect(() => {
    // Check if totalCreditHours exceeds 20 and show a toast notification
    if (initialTotalCreditHours > 20) {
      toast.error("Total credit hours cannot exceed 20.", {
        position: "top-left",
        autoClose: 2000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [initialTotalCreditHours]);

  if (remainingCreditHours < 0) {
    remainingCreditHours = 0;
    totalPrice = 0;
  }

  return (
    <div className="md:w-[20%] ml-2 px-3 py-3 bg-white rounded-xl">
      <div className="border-b-2 py-3">
        <h3 className="text-[17px] font-bold text-blue-600">Credit Hour Remaining {remainingCreditHours} hr</h3>
      </div>

      <div className="border-b-2 py-6">
        <h3 className="text-xl font-bold mb-4">Course Name</h3>
        {
          carts.map((cart, index) => (
            <div key={index}>
              <div>{`${index + 1}. ${cart.title}`}</div>
            </div>
          ))
        }
      </div>

      <div className="border-b-2">
        <h3 className="text-xl font-bold mb-4 pt-4">Total Credit Hour: {totalCreditHours}</h3>
      </div>
      <div className="border-b-2">
        <h3 className="text-xl font-bold mb-4 pt-4">Total Price: {totalPrice} USD</h3>
      </div>
      <ToastContainer /> {/* To render the toast notifications */}
    </div>
  );
};

export default Carts;
