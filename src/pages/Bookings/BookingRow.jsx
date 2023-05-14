

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { email, date, price, img, service, _id, status } = booking;

  
  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle btn-outline duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="w-24 h-24 rounded-xl ">
            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{email}</td>
      <td>{date}</td>
      <td>${price}</td>
      <th>
        { status ? <span className="text-primary font-bold">Confirm</span> :
          <button onClick={() => handleBookingConfirm(_id)} className="btn btn-outline hover:bg-orange-400 btn-sm">Please Confirm</button>}
      </th>
    </tr>
  );
};

export default BookingRow;
