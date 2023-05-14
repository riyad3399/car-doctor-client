import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Login from "../Login/Login";
import Swal from "sweetalert2";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const loaderServices = useLoaderData();
  const { title, price, _id, img } = loaderServices;

    const handleOrderCheckOut = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;

        const order = {
            customerName: name,
            email,
            date,
            img,
            service: title,
            service_id: _id,
            price: price,
        };
        console.log(order);
      
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'service book successful!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })

  };

  return (
    <div className="my-10 bg-base-200 p-24 rounded-xl">
      <h3 className="text-center my-4 text-3xl">Order Checkout : {title}</h3>
      <form onSubmit={handleOrderCheckOut}>
        <div className="grid md:grid-cols-2 gap-5 ">
          <div className="form-control">
            <input
              type="text"
              name="name"
              placeholder="Name"
              defaultValue={user?.displayName}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input type="date" name="date" className="input input-bordered" />
          </div>
          <div className="form-control">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              defaultValue={user?.email}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="price"
              defaultValue={"$" + price}
              className="input input-bordered"
            />
          </div>
        </div>
        <div>
          <textarea
            className="textarea textarea-bordered w-full mt-6"
            name="message"
            id=""
            cols=""
            placeholder="Your Message"
            rows="8"
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn bg-orange-400 hover:bg-orange-500"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
