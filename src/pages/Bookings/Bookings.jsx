import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your order has been deleted.", "success");
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(remaining);
            }
          });
      }
    });
  };

  const handleBookingConfirm = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "confirm!",
    }).then((result) => {
      if (result.isConfirmed) {
        
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({status: 'confirm'})
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire("confirm!", "Your order has been successful.", "success");
              const remaining = bookings.filter(booking => booking._id !== id)
              const updated = bookings.find(booking => booking._id === id)
              updated.status = 'confirm'
              const newBookings = [updated, ...remaining]
              setBookings(newBookings)
            }
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-center text-5xl my-4">
        Your Bookings: {bookings.length}
      </h2>
      <div className="overflow-x-auto w-full my-5">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>close</th>
              <th>Image</th>
              <th>service</th>
              <th>Email</th>
              <th>Date</th>
              <th>Price</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
