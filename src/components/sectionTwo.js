const SectionTwo = () => {
  return (
    <div className="pt-40 text-center space-y-4">
      <h1 className="text-2xl text-[#10D876] font-bold font-railway">
        Our Introduction
      </h1>
      <p className="font-railway text-white text-4xl font-bold">
        Know More About Us
      </p>
      <p className="font-bold text-white font-railway">
        eefrewfjne cejnfjwef ceswjfnew ifnjefes ienjff esifj esfen
      </p>
      <div className="flex pt-10 justify-center">
        <video className=" h-fit w-fit rounded-md" height={'500px'} width={"600px"} autoPlay controls>
          <source
            type="video/mp4"
            src="https://www.youtube.com/watch?v=yZtfg6dzujQ"
          />
        </video>
        {/* <iframe
          width="420"
          height="315"
          src="http://www.youtube.com/watch?v=yZtfg6dzujQ"
        ></iframe> */}
      </div>
    </div>
  );
};
export default SectionTwo;
