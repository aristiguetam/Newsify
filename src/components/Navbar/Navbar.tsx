
export const Navbar = () => {
    return (
        <nav className="bg-zinc-400 h-14 w-screen">

            <div className="container mx-auto flex sm:justify-between sm:items-center py-4 px-2 md:px-0 ">
                <div className="flex gap-2  items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-7 h-7">

                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                    </svg>
                    <h1 className="text-2xl font-bold text-slate-100">Newsify</h1>
                </div>

                <div className="hidden md:flex ">
                    <input
                        type="text"
                        placeholder="Search"
                        className="rounded-xl px-3 py-1 outline-none w-96"
                    />
                </div>

                <div className="hidden md:flex gap-4">
                    <div>Top Stories</div>
                    <div>Languages</div>
                    <div>Location</div>
                </div>

            </div>
        </nav>
    )
}
