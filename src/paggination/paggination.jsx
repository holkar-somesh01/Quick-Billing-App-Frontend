import React, { useState, useEffect, useRef } from "react";

const PaginationTable = () => {
    const rowsPerPage = 4;
    const data = Array.from({ length: 129 }, (_, index) => ({
        id: `${index + 1}`,
        name: `User ${index + 1}`,
        email: `user${index + 1}@example.com`,
    }))
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / rowsPerPage);

    const paginationContainerRef = useRef(null);

    useEffect(() => {
        const activeButton = paginationContainerRef.current?.querySelector(
            `.page-button-${currentPage}`
        );
        if (activeButton) {
            activeButton.scrollIntoView({ behavior: "smooth", inline: "center" });
        }
    }, [currentPage])

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const currentData = data.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    const renderPaginationButtons = () => {
        const buttons = [];
        const start = Math.max(1, currentPage - 2);
        const end = Math.min(totalPages, currentPage + 2);

        if (start > 1) {
            buttons.push(
                <li key={1}>
                    <button
                        onClick={() => handlePageChange(1)}
                        className="page-button-1 px-3 py-1 border bg-white hover:bg-gray-100 text-gray-700"
                    >
                        1
                    </button>
                </li>
            );
            if (start > 2) {
                buttons.push(
                    <li key="start-dots" className="px-2">
                        ...
                    </li>
                );
            }
        }

        for (let i = start; i <= end; i++) {
            buttons.push(
                <li key={i}>
                    <button
                        onClick={() => handlePageChange(i)}
                        className={`page-button-${i} px-3 py-1 border ${currentPage === i
                            ? "bg-blue-500 text-white"
                            : "bg-white text-gray-700 hover:bg-gray-100"
                            }`}
                    >
                        {i}
                    </button>
                </li>
            );
        }

        if (end < totalPages) {
            if (end < totalPages - 1) {
                buttons.push(
                    <li key="end-dots" className="px-2">
                        ...
                    </li>
                );
            }
            buttons.push(
                <li key={totalPages}>
                    <button
                        onClick={() => handlePageChange(totalPages)}
                        className={`page-button-${totalPages} px-3 py-1 border bg-white hover:bg-gray-100 text-gray-700`}
                    >
                        {totalPages}
                    </button>
                </li>
            );
        }

        return buttons;
    };

    return (
        <div className="container mx-auto">
            <table className="w-full border-collapse border border-gray-300 mt-4">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">ID</th>
                        <th className="border border-gray-300 p-2">Name</th>
                        <th className="border border-gray-300 p-2">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((item) => (
                        <tr key={item.id}>
                            <td className="border border-gray-300 p-2">{item.id}</td>
                            <td className="border border-gray-300 p-2">{item.name}</td>
                            <td className="border border-gray-300 p-2">{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-center items-center mt-4">
                <nav aria-label="Page navigation">
                    <ul
                        className="flex items-center -space-x-px h-8 text-sm"
                        ref={paginationContainerRef}
                    >
                        <li>
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="px-3 py-1 border rounded-l-lg bg-white hover:bg-gray-100 text-gray-700"
                            >
                                {"<"}
                            </button>
                        </li>

                        {renderPaginationButtons()}

                        <li>
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="px-3 py-1 border rounded-r-lg bg-white hover:bg-gray-100 text-gray-700"
                            >
                                {">"}
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default PaginationTable;
