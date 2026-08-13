function MobileNavbar() {
  return (
    <div className="flex flex-col">
      <section className="flex justify-between items-center p-3">
        <img
          className="w-38.5 h-9.5 top-6.75 left-4"
          src="../src/assets/images/logo.png"
          alt=""
        />
        <img
          className="w-16.25 h-16.25 top-3.5 left-86.25"
          src="../src/assets/images/menu.png"
          alt=""
        />
      </section>
    </div>
  );
}
export default MobileNavbar;
