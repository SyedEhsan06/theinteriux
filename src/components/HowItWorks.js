import { FaUserTie, FaCouch, FaCogs, FaTruckMoving, FaSmile } from "react-icons/fa";
import FormOpenButton from "./FormOpenButton";

const HowItWorks = () => {
  return (
    <section className="bg-background py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-bold text-primary mb-8">How It Works</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary p-4 rounded-full text-background text-3xl">
              <FaUserTie />
            </div>
            <h3 className="mt-4 font-semibold text-lg text-secondary">Meet a Designer</h3>
            <p className="text-gray-400 mt-2">Discuss your dream space and finalize the plan.</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary p-4 rounded-full text-background text-3xl">
              <FaCouch />
            </div>
            <h3 className="mt-4 font-semibold text-lg text-secondary">5% Payment to Book</h3>
            <p className="text-gray-400 mt-2">Reserve your project by booking with a small amount.</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary p-4 rounded-full text-background text-3xl">
              <FaCogs />
            </div>
            <h3 className="mt-4 font-semibold text-lg text-secondary">20% at Finalization</h3>
            <p className="text-gray-400 mt-2">Finalize designs and approve materials.</p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary p-4 rounded-full text-background text-3xl">
              <FaTruckMoving />
            </div>
            <h3 className="mt-4 font-semibold text-lg text-secondary">50% at Production</h3>
            <p className="text-gray-400 mt-2">Production begins with the approved materials.</p>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary p-4 rounded-full text-background text-3xl">
              <FaSmile />
            </div>
            <h3 className="mt-4 font-semibold text-lg text-secondary">100% at Installation</h3>
            <p className="text-gray-400 mt-2">Complete installation and get ready to move in!</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <FormOpenButton text="Get Started" className="bg-primary text-background px-8 py-3 rounded-lg font-semibold text-lg hover:bg-focus transition-all duration-300" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
