

const Hero = () => {
    return (
        <div className="w-full h-[90vh]">
            <img src="https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hero" className="w-full h-full " />


            <div className="max-w-[1140px] mx-auto ">
                <div className="absolute top-[40%] w-full md:[50%] max-w-[600px] h-full flex flex-col p-4 text-white">
                    <h1 className="font-bold text-4xl">Find your special trip</h1>
                    <h2 className="text-4xl py-4 italic">With Weekaway</h2>
                    <p>Finding your special trip has never been easier with Weekaway. Whether youre dreaming of serene beaches, adventurous mountains, bustling cityscapes, or quaint countryside retreats, Weekaway curates personalized travel experiences tailored just for you. </p>
                </div>
            </div>
        </div >
    )
}

export default Hero



