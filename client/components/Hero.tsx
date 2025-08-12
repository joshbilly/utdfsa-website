export default function Hero() {
  return (
    <section
      className="relative flex flex-col justify-center items-center h-[400px] sm:h-[600px] lg:h-[850px] px-4 py-8 lg:py-[41px]"
      style={{
        backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/f122bc18c674318d77853402b51df7cfcfa2c3dc?width=3024')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Main FSA Logo */}
      <div className="relative">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/6c659566d805b620adf05e201361ffabc2b036ea?width=1428"
          alt="FSA Logo"
          className="w-[250px] h-[227px] sm:w-[400px] sm:h-[364px] md:w-[500px] md:h-[455px] lg:w-[600px] lg:h-[546px] xl:w-[714px] xl:h-[650px] object-contain"
          style={{
            filter: 'drop-shadow(5px 9px 4px rgba(51, 43, 43, 0.73))'
          }}
        />
      </div>
    </section>
  );
}
