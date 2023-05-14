import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 md:h-[410px] rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 md:h-[270px] rounded-lg border-8 border-white shadow-2xl absolute top-1/2 right-5 "
          />
        </div>
        <div className="w-1/2 px-4">
          <h2 className="text-2xl text-orange-400 font-bold mb-3">About Us</h2>
          <h1 className="sm:text-6xl font-bold mb-4">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6 text-lg">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="text-lg">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn bg-orange-500 hover:bg-orange-600 mt-5">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
