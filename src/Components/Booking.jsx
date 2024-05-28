
const Booking = () => {
    return (
        <div id="booking" className="max-w-[1140px] m-auto w-full p-4">
            <form className="lg:flex lg:justify-between items-center w-full">
                <div className="flex flex-col my-2 py-2">
                    <label>Destination</label>
                    <select className="lg:w-[300px] md:w-full border rounded-md p-2 mr-2">
                        <option>Thailand</option>
                        <option>Maldives</option>
                        <option>Andaman Nicobar</option>
                        <option>Indonesia</option>
                    </select>
                </div>
                <div className="flex w-full">
                    <div className="flex flex-col w-full lg:max-w-[250px] my-2 py-2 mr-2">
                        <label>CheckIn</label>
                        <input type="date" className="border rounded-md p-2" />
                    </div>
                    <div className="flex flex-col w-full lg:max-w-[250px] my-2 py-2">
                        <label>CheckOut</label>
                        <input type="date" className="border rounded-md p-2" />
                    </div>
                </div>
                <div className="flex flex-col w-full my-2 p-2">
                    <label>Search</label>
                    <button className="w-full">Rates & Availability</button>
                </div>
            </form>
        </div>
    )
}

export default Booking