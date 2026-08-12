function NavbarMenu() {
    return   <div className="w-[95%] h-15.25 top-27 left-25 mt-10 flex items-center mx-auto justify-around">
      <div className="w-53.75 h-13.25 top-28 left-25">
        <img src="../src/assets/images/logo.png" alt="" />
      </div>
      <div className="w-206 h-6.75 top-31.25 left-129.25 items-center">
        <ul className="flex items-center justify-around font-medium text-[18px]">
          <li className="w-31.75 h-11.25 top-29 left-120.75 rounded-[120px] text-white bg-[#FC8A06] items-center justify-center flex">Home</li>
          <li>Browse Menu</li>
          <li>Special Offers</li>
          <li>Restaurants</li>
          <li>Track Order</li>
        </ul>
      </div>

      <div className="w-58.5 h-15.25 top-27 left-348.5 rounded-[120px] bg-[#03081F] text-white flex items-center justify-center space-x-1">
        <button className="flex items-center"><img
          className="w-[30.97px] h-6.75 top-31.25 left-[1420.38px] rounded-xs"
           src="../src/assets/images/user.png" alt="" />Login/Signup</button>
      </div>
      
    </div>
}
export default NavbarMenu;