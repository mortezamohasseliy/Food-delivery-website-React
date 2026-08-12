function Header() {
  return (
      <div className="w-[90%] mx-auto flex items-center justify-between">
    <div className="w-80.25 h-5.75 top-6.5 left-43.5
    font-medium text-[15px] leading-[100%] tracking-normal"> <span> Get 5% Off your first order,</span> <span className="text-[#FC8A06]">Promo: ORDER5</span></div>
    <div className="space-x-3">
      <span className="w-60.75 h-5.75 top-6 left-199.5
      font-medium text-[15px] leading-[100%] tracking-normal">Regent Street, A4, A4201, London</span>
      <span className="w-30.25 h-5.25 top-6.5 left-264
      font-medium text-[14px] leading-[100%] tracking-normal text-[#FC8A06]">Change Location</span></div>
    <div className="bg-[#028643] w-94.5 h-17.5 flex items-center justify-evenly rounded-b-2xl text-white">
      <span className="w-10.75 h-10.75 top-3.75 left-318.5"><img src="../src/assets/images/pucket.png" alt="" /></span>
      <span>23 Items</span>
      <span>GBP 79.89</span>
      <span className="w-9.5 h-9.5 top-4.25 left-[1576px] rotate-90"><img src="../src/assets/images/arrow.png" alt="" /></span>
    </div>
  </div>
  );
}
export default Header;
