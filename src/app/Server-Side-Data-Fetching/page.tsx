import NavBar from "../components/Navbar/page";
import Footer from "../components/Footer/page";

interface Book {
    id: number;
    name: string;
    type: string;
    available: boolean;
}

const ServerSide = async () => {
    const url = await fetch ("https://simple-books-api.glitch.me/books/")
    const data: Book[] = await url.json()
    return (
        <div>
            <NavBar/>
            <div className="py-[50px] px-[22px]">
                <h1 className="text-center mb-[40px] text-blue-600 font-semibold text-3xl md:text-4xl lg:text-5xl">Server Side Rendering</h1>
            <div className="grid gap-[30px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((book) => (
                <div key={book.id} className="bg-gradient-to-r from-blue-100 via-pink-100 to-yellow-100 text-black text-center p-[24px] rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.05] transition">
                    <h2 className="text-[30px] font-bold">{book.name}</h2>
                    <p className="text-[18px]"><span className="font-semibold">ID:</span>{book.id}</p>
                    <p><span className="font-semibold text-[18px]">Type:</span>{book.type}</p>
                    <p className={`${book.available == true ? "text-[green]" : "text-[red]"} font-semibold text-[19px]`}>{book.available == true ? "Available": "Not Available"}</p>
                </div>
            ))}
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ServerSide
