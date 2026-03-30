const Heading = ({heading}:{heading:string}) => {
  return (
    <>
        <div className="flex items-center justify-center gap-4 my-10">
            {/* Left Line */}
            <div className="flex items-center gap-0 w-full max-w-[400px]">
            <div className="h-[1px] bg-gradient-to-r from-transparent to-gold w-full"></div>
            <div className="w-2 h-2 rounded-full bg-gold"></div>
            </div>

            {/* Title */}
            <h2 className="text-white text-2xl md:text-3xl font-semibold tracking-wide">
            {heading}
            </h2>

            {/* Right Line */}
            <div className="flex items-center gap-0 w-full max-w-[400px]">
            <div className="w-2 h-2 rounded-full bg-gold"></div>
            <div className="h-[1px] bg-gradient-to-l from-transparent to-gold w-full"></div>
            </div>
        </div>
    </>
  )
}

export default Heading