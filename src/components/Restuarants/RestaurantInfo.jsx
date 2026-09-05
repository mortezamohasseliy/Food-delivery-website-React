function RestaurantInfo() {
  return (
    <section className="w-full p-3 mt-5 md:h-auto md:mt-10 md:shadow-2xl md:rounded-2xl">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-5">
        {/* Delivery Information */}
        <div className="p-4">
          <h1 className="flex items-center gap-2 mb-5 text-[20px] font-bold md:mb-10 md:text-[32px]">
            <span>
              <img
                className="w-8 h-8 md:w-11.25 md:h-11.25"
                src="/images/location.webp"
                alt=""
              />
            </span>
            Delivery information
          </h1>

          <p className="text-[13px] leading-6 md:text-[18px] md:leading-12">
            <span className="font-bold">Monday:</span> 12:00 AM–3:00 AM, 8:00
            AM–3:00 AM
            <br />
            <span className="font-bold">Tuesday:</span> 8:00 AM–3:00 AM
            <br />
            <span className="font-bold">Wednesday:</span> 8:00 AM–3:00 AM
            <br />
            <span className="font-bold">Thursday:</span> 8:00 AM–3:00 AM
            <br />
            <span className="font-bold">Friday:</span> 8:00 AM–3:00 AM
            <br />
            <span className="font-bold">Saturday:</span> 8:00 AM–3:00 AM
            <br />
            <span className="font-bold">Sunday:</span> 8:00 AM–12:00 AM
            <br />
            <span className="font-bold">Estimated time until delivery:</span> 20
            min
          </p>
        </div>

        {/* Contact Information */}
        <div className="p-4">
          <h1 className="flex items-center gap-2 mb-5 text-[20px] font-bold md:mb-10 md:text-[32px]">
            <span>
              <img
                className="w-8 h-8 md:w-11.25 md:h-11.25"
                src="/images/contact.webp"
                alt=""
              />
            </span>
            Contact information
          </h1>

          <p className="text-[13px] leading-6 md:text-[18px] md:leading-11.5">
            If you have allergies or other dietary restrictions, please contact
            the restaurant. The restaurant will provide food-specific
            information upon request.
            <br />
            <span className="font-bold">Phone number</span>
            <br />
            +934443-43
            <br />
            <span className="font-bold">Website</span>
            <br />
            <a href="#">http://mcdonalds.uk/</a>
          </p>
        </div>

        {/* Operational Times */}
        <div className="bg-[#03081F] p-4 text-white md:p-4">
          <h1 className="flex items-center gap-2 mb-5 text-[20px] font-bold md:mb-10 md:text-[32px]">
            <span>
              <img
                className="w-8 h-8 md:w-11.25 md:h-11.25"
                src="/images/clock - 2.webp"
                alt=""
              />
            </span>
            Operational Times
          </h1>

          <p className="text-[13px] leading-6 md:text-[18px] md:leading-12">
            <span className="font-bold">Monday:</span> 8:00 AM–3:00 AM
            <br />
            <span className="font-bold">Tuesday:</span> 8:00 AM–3:00 AM
            <br />
            <span className="font-bold">Wednesday:</span> 8:00 AM–3:00 AM
            <br />
            <span className="font-bold">Thursday:</span> 8:00 AM–3:00 AM
            <br />
            <span className="font-bold">Friday:</span> 8:00 AM–3:00 AM
            <br />
            <span className="font-bold">Saturday:</span> 8:00 AM–3:00 AM
            <br />
            <span className="font-bold">Sunday:</span> 8:00 AM–12:00 AM
          </p>
        </div>
      </div>
    </section>
  );
}

export default RestaurantInfo;
