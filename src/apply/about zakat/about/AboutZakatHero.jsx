import abzHero from "../../../assets/abzHero.png";
function AboutZakatHero() {
  return (
    <div
      className="bg-cover bg-top w-full"
      style={{ backgroundImage: `url(${abzHero})` }}
    >
      <div className="h-full w-full bg-black/55 pt-[15%] pb-[8%] text-center">
        <h2 className="text-primary font-semibold text-[70px] font-pally w-4/5 m-auto leading-tight">
          About Zakat
        </h2>
      </div>
    </div>
  );
}

export default AboutZakatHero;
