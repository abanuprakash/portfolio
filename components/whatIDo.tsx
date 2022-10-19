import Image from "next/image";

const WhatIDO = () => {
  return (
    <>
      <div className="bg-appBg-white w-3/4 py-12 px-20 mx-auto">
        <p className="text-font-lavender text-center">What I DO</p>
        <h4 className="text-center text-font-primary text-4xl">Special In</h4>
        <div>
          <div className="flex flex-row items-center">
            <div className="flex flex-row items-center mt-4">
              <Image
                src={"/assets/images/linkedin.png"}
                width={30}
                height={30}
              />
              <div>
                <p>Wordpress</p>
                <p>
                  Landing Pages, E-commerce websites, payment gateway
                  integration, Static and Dynamic websites
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center mt-4">
              <Image
                src={"/assets/images/linkedin.png"}
                width={30}
                height={30}
              />
              <div>
                <p>Ang</p>
                <p>
                  Landing Pages, E-commerce websites, payment gateway
                  integration, Static and Dynamic websites
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatIDO;
