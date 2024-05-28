
const Gallery = () => {
    return (
        <div id="gallery" className="max-w-[1140px] w-full m-auto px-4 py-16">
            <h2 className="text-center text-gray-700 p-4">Gallery</h2>
            <div className="grid sm:grid-cols-5 gap-4">
                <div className="sm:col-span-3 col-span-2 row-span-2">
                    <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc29ydHN8ZW58MHx8MHx8fDA%3D" alt="/" />
                </div>
                <div>
                    <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHJlc29ydHN8ZW58MHx8MHx8fDA%3D" alt="/" />
                </div>
                <div>
                    <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzb3J0c3xlbnwwfHwwfHx8MA%3D%3D" alt="/" />
                </div>
                <div>
                    <img className="w-full h-full object-cover" src="https://plus.unsplash.com/premium_photo-1663093806285-d905ca96c661?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHJlc29ydHN8ZW58MHx8MHx8fDA%3D" alt="/" />
                </div>
                <div>
                    <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1582610116397-edb318620f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc29ydHN8ZW58MHx8MHx8fDA%3D" alt="/" />
                </div>
            </div>
        </div>
    )
}

export default Gallery