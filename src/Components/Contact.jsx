

const Contact = () => {
    return (
        <div id="contact" className="max-w-[1140px] w-full p-4 m-auto py-16">
            <h2 className="text-center text-gray-700 py-2">Contact Us</h2>
            <div className="grid md:grid-cols-2">
                <img src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzb3J0c3xlbnwwfHwwfHx8MA%3D%3D" alt="/" className="w-full md:h-full object-cover p-2 max-h-[500px] h-[250px]" />
                <form >
                    <div className="grid grid-cols-2">
                        <input className="m-2 p-2 border " type="text" placeholder="First" />
                        <input className="m-2 p-2 border " type="text" placeholder="Last" />
                        <input className="m-2 p-2 border " type="email" placeholder="Email" />
                        <input className="m-2 p-2 border " type="tel" placeholder="Ph no" />
                        <input className="border col-span-2 m-2 p-2" type="text" placeholder="Address" />
                        <textarea className="border col-span-2 m-2 p-2" cols="30" rows="10"></textarea>
                        <button className="m-2 col-span-2">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact