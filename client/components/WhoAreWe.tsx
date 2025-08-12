export default function WhoAreWe() {
  return (
    <section
      className="relative w-full min-h-[500px] sm:min-h-[600px] lg:h-[721px] flex flex-col items-center justify-center px-4 lg:px-[276px] py-8 sm:py-16 lg:py-[91px] gap-6 sm:gap-8 lg:gap-11"
      style={{
        backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/5eb29b8b53e2b78cafd2ea0af3faa22cb5e317fb?width=3024')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)'
      }}
    >
      {/* WHO ARE WE? title */}
      <h2 className="text-white font-fugaz text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[96px] text-center drop-shadow-lg max-w-[669px]">
        WHO ARE WE?
      </h2>

      {/* Description text */}
      <p className="text-white font-gabarito text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[40px] text-center max-w-[960px] leading-relaxed lg:leading-normal">
        <span style={{ textShadow: '7px 4px 4px rgba(0, 0, 0, 0.25)' }}>
          UTD FSA is a student-led organization created to
          unite students who are interested in promoting
          Filipino-American culture! Through many other aspects
          of student unity such as dance, sports, and families,
          FSA aims to promote Fil-Am culture as an organization.
        </span>
      </p>

      {/* Join us button */}
      <button
        className="relative w-[160px] h-[45px] sm:w-[180px] sm:h-[50px] lg:w-[207px] lg:h-[58px] rounded-[50px] text-white font-fugaz text-lg sm:text-xl lg:text-2xl xl:text-[36px] text-center hover:opacity-90 transition-opacity"
        style={{
          background: '#27688E',
          boxShadow: '3px 4px 4px 0 rgba(0, 0, 0, 0.25)',
          textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)'
        }}
      >
        Join us!
      </button>
    </section>
  );
}
