import React from "react";


const Navbar = () => {
    return (
        <div className="flex w-[1322px] h-[91px] absolute left-[59px]">

         <div className="w-[187px] h-[58px] absolute top-[17px] left-[136px]">
         <h3 className="w-[152px] h-[32px] absolute top-[13px] font-Montserrat text-[24px] font-bold leading-[32px] tracking-[0.1px] text-[#ffffff]">BrandName</h3>
        </div>

        <div className="flex w-[815px] h-[58px] absolute top-[16px] left-[364px]">
            <div>
  <ul className="flex w-[275px] h-[24px] absolute top-[17px] gap-[21px]">
    <li className="w-[43px] h-[24px] text-[#bbb6b6] hover:text-white cursor-pointer">Home</li>
    <li className="w-[59px] h-[24px] text-[#bbb6b6] hover:text-white cursor-pointer">product</li>
    <li className="w-[52px] h-[24px] text-[#bbb6b6] hover:text-white cursor-pointer">Pricing</li>
    <li className="w-[58px] h-[24px] text-[#bbb6b6] hover:text-white cursor-pointer">Contact</li>
  </ul>
</div>

<div className=" flex w-[189px] h-[52px] absolute top-[3px] left-[573px] gap-[45px]">
<div>
  <button className="w-[80px] h-[52px] text-[20px] text-[#bbb6b6] hover:text-white cursor-pointer">Login</button>
        </div>
<div className="w-[214px] h-[52px]">
  <button className="w-[110px] h-[52px] rounded-[5px] py-[15px] px-[25px] gap-[15px] bg-[#23A6F0]  hover:text-white hover:bg-[#80b4e1] cursor-pointer">JOIN US</button>
        </div>
        </div>

        </div>
        </div>
    );
};

export default Navbar;