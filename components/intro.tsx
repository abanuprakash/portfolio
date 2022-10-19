import Image from "next/image";
// import authorImage from "../assets/images/me.png";

const Introduction = () => {
  return (
    <>
      <div className="text-left h-full flex justify-center pt-20 items-center text-font-primary relative">
        <div className="mx-auto">
          <div className="flex flex-row-reverse items-center">
            <div>
              <div className="font-medium">
                <span className="text-font-red">Hello</span> I'm Banu Prakash
              </div>
              <h1 className="font-bold text-4xl">Software Developer</h1>
              <div className="text-font-blackLight">
                Developing websites and Dashboards with great UI/UX
              </div>
            </div>
            <div className="mr-36">
              <Image src={"/assets/images/me.png"} width={384} height={486} />
            </div>
            <div className="bg-appBg-white absolute right-0  p-4 rounded-l-2xl bottom-28  ">
              <div className="flex flex-row items-center">
                <div className="mr-3">
                  <Image
                    src={"/assets/images/linkedin.png"}
                    width={30}
                    height={30}
                  />
                </div>
                <div className="mr-3">
                  <Image
                    src={"/assets/images/twitter.png"}
                    width={30}
                    height={30}
                    className="mr-3"
                  />
                </div>
                <div className="mr-3">
                  <Image
                    src={"/assets/images/github.png"}
                    width={30}
                    height={30}
                    className="mr-3"
                  />
                </div>
                <div className="mr-3">
                  <Image
                    src={"/assets/images/instagram.png"}
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
