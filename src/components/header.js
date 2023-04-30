
const Header = () => {
  return (
    <>
      <div style={{background:`url(Ellipse1.png) no-repeat top left, #1E1E1E`}} className="px-10 flex justify-between pt-8 bg-[#1E1E1E] text-white">
        <div className="flex px-4 items-center space-x-4">
          <div className="bg-[#10D876] h-20 w-20"></div>
          <div className="text-white text-4xl font-railway font-bold ">Genvin</div>
        </div>
        <div className="flex font-railway font-bold space-x-4 flex-row text-2xl items-center text-center">
          <button>About Us</button>
          <button>Our Project</button>
          <button>Contact Us</button>22
        </div>
      </div>
      <div className="flex pl-20 justify-between pt-20 " >
        <div >
          <img alt="ecjewcb" src="G3NV3N.png "/>
          <p className="font-railway text-xl text-white">rfgtegftfrgreg rvfrefgref rfrkefre fre frefre fre fre fre f ref re f ref ref r f </p>
          <button className="font-railway justify-center mt-4 text-xl items-center text-white font-bold rounded-lg space-x-4 bg-[#10D876] flex py-2">
            <img alt="efef" height={"20%"} width={"20%"} src="centerButton.png"/>
            <p>Learn More</p>

          </button>
          <div>
            <p className="text-white mt-20 text-2xl font-railway font-bold">
              Self Made <br/> Kartikay Pandey
            </p>
            
          </div>

        </div>
        <div  className="flex h-[59vh] w-[50vw] justify-end relative">
                <img src="Rectangle3.png" width={"80%"} height={"100%"}/>
              <img  src="clientImg.png.JPG" className="bottom-0 absolute right-[12%] w-[50%] h-[100%]" width={"16%"} />
            {/* <img alt='eddced'height={'25%'} width={'25%'} src="Rectangle3.png" /> */}
            {/* <img alt="hjedbb" className="h-260 w-80 absolute" src="clientImg.png.JPG" /> */}
        </div>
      </div>
    </>
  );
};

export default Header;
