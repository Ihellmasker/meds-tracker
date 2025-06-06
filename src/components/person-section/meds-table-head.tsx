export default function MedsTableHead() {
    return (
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
    );
}
