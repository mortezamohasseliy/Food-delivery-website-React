function Basket() {
  return (
    <section
      className="md:w-91.75 md:h-340.75 md:rounded-tl-lg md:rounded-tr-lg md:mx-auto
    md:bg-[#F9F9F9]"
    >
      {/* Cart Header */}
      <div
        className="md:h-29.25 md:bg-[#028643] md:text-[#FFFFFF] md:flex md:justify-evenly md:items-center
      md:rounded-tl-lg md:rounded-tr-lg"
      >
        <img
          className="md:w-14.5 md:h-14.5"
          src="../src/assets/images/pucket.png"
          alt=""
        />
        <h2 className="md:font-semibold md:text-[32px]">My Basket</h2>
      </div>

      {/* Cart Items in Box */}

      <div>
        {/* item 1 */}
        <div className="md:h-30.25 md:border md:flex md:items-center md:justify-around md:mt-6">
          <p
            className="md:w-11.25 md:h-11.25 md:bg-[#FC8A06] md:rounded-full md:flex md:items-center md:justify-center
        md:font-bold md:text-[24px] md:text-[#FFFFFF]"
          >
            1x
          </p>
          <div className="md:space-y-2">
            <p className="md:font-semibold md:text-[20px] md:leading-6.25 md:text-[#028643]">
              £27.90
            </p>
            <h3 className="md:font-semibold md:text-[16px] md:text-[#03081F]">
              12” Vegitarian Pizza
            </h3>
            <p className="md:font-normal md:text-[15px] md:leading-4.5">
              No Mushrooms + green <br />
              peppers
            </p>
          </div>
          <p>
            <img
              className="md:w-8.75 md:h-8.75 md:accent-amber-300"
              src="../src/assets/images/trash-2.png"
              alt=""
            />
          </p>
        </div>

        {/* item 2 */}
        <div className="md:h-30.25 md:border md:flex md:items-center md:justify-around md:mt-6">
          <p
            className="md:w-11.25 md:h-11.25 md:bg-[#FC8A06] md:rounded-full md:flex md:items-center md:justify-center
        md:font-bold md:text-[24px] md:text-[#FFFFFF]"
          >
            1x
          </p>
          <div className="md:space-y-2">
            <p className="md:font-semibold md:text-[20px] md:leading-6.25 md:text-[#028643]">
              £17.90
            </p>
            <h3 className="md:font-semibold md:text-[16px] md:text-[#03081F]">
              17” Tandoori Pizza
            </h3>
            <p className="md:font-normal md:text-[15px] md:leading-4.5">
              No Mushrooms + green <br />
              peppers
            </p>
          </div>
          <p>
            <img
              className="md:w-8.75 md:h-8.75 md:accent-amber-300"
              src="../src/assets/images/trash-1.png"
              alt=""
            />
          </p>
        </div>

        {/* item 3 */}
        <div className="md:h-30.25 md:border md:flex md:items-center md:justify-around md:mt-6">
          <p
            className="md:w-11.25 md:h-11.25 md:bg-[#FC8A06] md:rounded-full md:flex md:items-center md:justify-center
        md:font-bold md:text-[24px] md:text-[#FFFFFF]"
          >
            2x
          </p>
          <div className="md:space-y-2">
            <p className="md:font-semibold md:text-[20px] md:leading-6.25 md:text-[#028643]">
              £4.90
            </p>
            <h3 className="md:font-semibold md:text-[16px] md:text-[#03081F]">
              Coke Coca Cola
            </h3>
          </div>
          <p>
            <img
              className="md:w-8.75 md:h-8.75 md:accent-amber-300"
              src="../src/assets/images/trash-3.png"
              alt=""
            />
          </p>
        </div>

        {/* item 1 */}
        <div className="md:h-30.25 md:border md:flex md:items-center md:justify-around md:mt-6">
          <p
            className="md:w-11.25 md:h-11.25 md:bg-[#FC8A06] md:rounded-full md:flex md:items-center md:justify-center
        md:font-bold md:text-[24px] md:text-[#FFFFFF]"
          >
            1x
          </p>
          <div className="md:space-y-2">
            <p className="md:font-semibold md:text-[20px] md:leading-6.25 md:text-[#028643]">
              £27.90
            </p>
            <h3 className="md:font-semibold md:text-[16px] md:text-[#03081F]">
              12” Vegitarian Pizza
            </h3>
            <p className="md:font-normal md:text-[15px] md:leading-4.5">
              No Mushrooms + green <br />
              peppers
            </p>
          </div>
          <p>
            <img
              className="md:w-8.75 md:h-8.75 md:accent-amber-300"
              src="../src/assets/images/trash-4.png"
              alt=""
            />
          </p>
        </div>
      </div>
      {/* amounts */}
      <div className="md:grid md:grid-cols-2 md:place-items-center md:h-47.5 md:border-b md:border-b-gray-200 md:mt-5">
        <p className="md:font-semibold md:text-[20px]">Sub Total: </p>
        <p className="md:font-normal md:text-[24px] md:leading-6.25">£127.90</p>
        <p className="md:font-semibold md:text-[20px]">Discounts:</p>
        <p className="md:font-normal md:text-[24px] md:leading-6.25">-3.00</p>
        <p className="md:font-semibold md:text-[20px]">Delivery Fee:</p>
        <p className="md:font-normal md:text-[24px] md:leading-6.25">2.50</p>
      </div>
      {/* total amount */}
      <div
        className="md:w-85.5 md:h-17.5 md:bg-[#FC8A06CC] md:mt-8.5 md:mx-auto md:rounded-lg
      md:flex md:items-center md:justify-center md:gap-10 md:text-[#FFFFFF]"
      >
        <p className="md:font-semibold md:text-[20px]">Total to pay</p>
        <p className="md:font-semibold md:text-[36px]">£127.90</p>
      </div>

      {/* copon code & free items */}
    </section>
  );
}
export default Basket;
