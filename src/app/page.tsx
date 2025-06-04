export default function Home() {
    return (
        <div className="">
            <main className="">
                <h1 className="text-5xl font-extrabold bg-linear-to-b from-fuchsia-700 to-pink-500 bg-clip-text text-transparent">
                    Meds & Supplements Tracker
                </h1>
                <h2 className="text-3xl font-bold bg-linear-to-b from-fuchsia-700 to-pink-500 bg-clip-text text-transparent">
                    P1 Supplement
                </h2>
                <section>
                    <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                            <div className="p-1.5 min-w-full inline-block align-middle">
                                <div className="overflow-hidden">
                                    <table className="min-w-full divide-y divide-fuchsia-400">
                                        <thead>
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-start text-xs font-medium bg-linear-to-b from-fuchsia-700 to-pink-500 bg-clip-text text-transparent uppercase"
                                                >
                                                    Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-start text-xs font-medium bg-linear-to-b from-fuchsia-700 to-pink-500 bg-clip-text text-transparent uppercase"
                                                >
                                                    Per Day
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-start text-xs font-medium bg-linear-to-b from-fuchsia-700 to-pink-500 bg-clip-text text-transparent uppercase"
                                                >
                                                    Last update status
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-start text-xs font-medium bg-linear-to-b from-fuchsia-700 to-pink-500 bg-clip-text text-transparent uppercase"
                                                >
                                                    Estimated state
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-start text-xs font-medium bg-linear-to-b from-fuchsia-700 to-pink-500 bg-clip-text text-transparent uppercase"
                                                >
                                                    Restock due
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="odd:bg-gray-700 even:bg-gray-600 hover:bg-fuchsia-950 text-gray-100 text-md font-medium">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div>Item 1</div>
                                                    <div>
                                                        <span className="px-2 py-1 text-xs border-pink-300 border-1 rounded-lg">
                                                            Pack of 60
                                                        </span>
                                                        <span className="ml-4 px-2 py-1 text-xs border-pink-300 border-1 rounded-lg">
                                                            Supplement
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex flex-row gap-3">
                                                        <div className="flex flex-col">
                                                            <div className="px-2 py-1 text-xs border-pink-300 border-1 rounded-lg">
                                                                1 Morning
                                                            </div>
                                                            <div className="px-2 py-1 text-xs border-pink-300 border-1 rounded-lg">
                                                                1 Evening
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col justify-center">
                                                            <div className="px-2 py-1 border-pink-300 border-1 rounded-lg">
                                                                2 Total
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex flex-row gap-3">
                                                        <div className="flex flex-row items-baseline">
                                                            <div className="text-lg font-bold bg-linear-to-b from-fuchsia-700 to-pink-500 bg-clip-text text-transparent">
                                                                42
                                                            </div>
                                                            <div className="ml-2">
                                                                in current pack
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row items-baseline">
                                                            <div className="text-lg font-bold bg-linear-to-b from-fuchsia-700 to-pink-500 bg-clip-text text-transparent">
                                                                3
                                                            </div>
                                                            <div className="ml-2">
                                                                packs remaining
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-sm opacity-80">
                                                        Updated on 01/06/2025
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {" "}
                                                    <div className="flex flex-row gap-3">
                                                        <div className="flex flex-row items-baseline">
                                                            <div className="text-lg font-bold bg-linear-to-b from-fuchsia-700 to-pink-500 bg-clip-text text-transparent">
                                                                42
                                                            </div>
                                                            <div className="ml-2">
                                                                in current pack
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row items-baseline">
                                                            <div className="text-lg font-bold bg-linear-to-b from-fuchsia-700 to-pink-500 bg-clip-text text-transparent">
                                                                3
                                                            </div>
                                                            <div className="ml-2">
                                                                packs remaining
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
