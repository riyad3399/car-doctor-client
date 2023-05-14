import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mt-6">
      <div className="text-center space-y-4">
        <h3 className="text-2xl text-orange-500 font-semibold">Service</h3>
        <h2 className="text-4xl font-bold">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br />
          words which do not look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Service;
