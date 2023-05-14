import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
  const { title, img, price, _id } = service;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-8 pt-8">
        <img src={img} alt="service" className="rounded-xl h-[208px] w-[314px]" />
      </figure>
      <div className=" card-body flex">
        <div>
          <h2 className="card-title font-bold">{title}</h2>
          <p className="text-lg text-orange-500 font-medium">Price: ${price}</p>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/checkout/${_id}`}>
          <button className="btn btn-outline rounded-full"><FaArrowRight/> </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
