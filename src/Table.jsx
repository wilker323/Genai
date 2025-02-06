import React, { useState } from "react";
import { FaFilter, FaTimesCircle } from "react-icons/fa";
import { RxDotsVertical } from "react-icons/rx";

const Table = () => {
  const initialData = [
    {
      "Rcs number": "USA123456",
      "Business Name": "Basketball Inc.",
      "Abbreviation Of Business": "BBI",
      "Fegal Form": "LLC",
      "Additional Mention": "Licensed for Sports Equipment Sales",
      "Building Number": "456",
      "Street": "Sports Avenue",
      "Postcode": "12345",
      "City": "Chicago",
      "Entity_Address": "456 Sports Avenue, Chicago, IL 12345",
      "Social Object": "To promote basketball through equipment sales and training camps",
      "Social Object Incomplete": "Developing further training programs",
      "Type of Capital": "Equity",
      "Capital Amount": "500,000",
      "Denomination": "USD",
      "Contribution Type": "Cash",
      "Contribution Percentage": "100%",
      "Incorporation Date": "2020-05-10",
      "Duration": "Indefinite",
      "Duration End Date": "2030-03-22",
      "First Financial Period From": "2020-05-10",
      "First Final Period To": "2021-05-10",
      "Fiscal Year From": "2021-01-01",
      "Fiscal Year To": "2021-12-31",
      "Signatory Regime": "CEO and CFO",
      "Daily Management Signatory Regime": "CEO",
      "Liquidation Decision Date": "2024-01-13",
      "Liquidator General Powers": "To sell assets and distribute proceeds",
      "General Manager Or Executive Committee Signatory Regime": "CEO",
      "Partnership Manager Signature Regime": "CFO",
      "Entity Email Address": "contact@basketballinc.com"
    },    
    {
      "Rcs number": "CAN987654",
      "Business Name": "Tech Solutions",
      "Abbreviation Of Business": "TS",
      "Fegal Form": "Corporation",
      "Additional Mention": "Software development and consulting",
      "Building Number": "789",
      "Street": "Innovation Drive",
      "Postcode": "67890",
      "City": "Toronto",
      "Entity_Address": "789 Innovation Drive, Toronto, ON M4B 1V6",
      "Social Object": "To deliver innovative tech solutions globally",
      "Social Object Incomplete": "Expanding into AI products",
      "Type of Capital": "Venture Capital",
      "Capital Amount": "3,000,000",
      "Denomination": "CAD",
      "Contribution Type": "Equity",
      "Contribution Percentage": "80%",
      "Incorporation Date": "2018-02-15",
      "Duration": "Indefinite",
      "Duration End Date": "2028-09-12",
      "First Financial Period From": "2018-02-15",
      "First Final Period To": "2019-02-14",
      "Fiscal Year From": "2020-01-01",
      "Fiscal Year To": "2020-12-31",
      "Signatory Regime": "Founder and CEO",
      "Daily Management Signatory Regime": "Founder",
      "Liquidation Decision Date": "2025-06-20",
      "Liquidator General Powers": "To terminate contracts and settle liabilities",
      "General Manager Or Executive Committee Signatory Regime": "Founder",
      "Partnership Manager Signature Regime": "Founder",
      "Entity Email Address": "info@techsolutions.com"
    },    
    {
      "Rcs number": "UK112233",
      "Business Name": "EcoGreen Ventures",
      "Abbreviation Of Business": "EGV",
      "Fegal Form": "LLP",
      "Additional Mention": "Sustainable products and services",
      "Building Number": "123",
      "Street": "Greenway Lane",
      "Postcode": "EC1A 1AA",
      "City": "London",
      "Entity_Address": "123 Greenway Lane, London, EC1A 1AA",
      "Social Object": "To provide eco-friendly solutions and products",
      "Social Object Incomplete": "Expanding product range",
      "Type of Capital": "Private Investment",
      "Capital Amount": "1,200,000",
      "Denomination": "GBP",
      "Contribution Type": "Investment",
      "Contribution Percentage": "100%",
      "Incorporation Date": "2015-07-22",
      "Duration": "Indefinite",
      "Duration End Date": "2029-04-21",
      "First Financial Period From": "2015-07-22",
      "First Final Period To": "2016-07-22",
      "Fiscal Year From": "2021-01-01",
      "Fiscal Year To": "2021-12-31",
      "Signatory Regime": "Managing Partners",
      "Daily Management Signatory Regime": "Managing Partner",
      "Liquidation Decision Date": "2023-09-10",
      "Liquidator General Powers": "To appoint professional advisors and manage funds",
      "General Manager Or Executive Committee Signatory Regime": "Managing Partner",
      "Partnership Manager Signature Regime": "Managing Partner",
      "Entity Email Address": "contact@ecogreenventures.com"
    }    
  ];

  const [data, setData] = useState(initialData);
  const [filters, setFilters] = useState({
    "Rcs number": "",
    "Business Name": "",
    "Abbreviation Of Business": "",
    "Fegal Form": "",
    "Additional Mention": "",
    "Building Number": "",
    "Street": "",
    "Postcode": "",
    "City": "",
    "Entity_Address": "",
    "Social Object": "",
    "Social Object Incomplete": "",
    "Type of Capital": "",
    "Capital Amount": "",
    "Denomination": "",
    "Contribution Type": "",
    "Contribution Percentage": "",
    "Incorporation Date": "",
    "Duration": "",
    "Duration End Date": "",
    "First Financial Period From": "",
    "First Final Period To": "",
    "Fiscal Year From": "",
    "Fiscal Year To": "",
    "Signatory Regime": "",
    "Daily Management Signatory Regime": "",
    "Liquidation Decision Date": "",
    "Liquidator General Powers": "",
    "General Manager Or Executive Committee Signatory Regime": "",
    "Partnership Manager Signature Regime": "",
    "Entity Email Address": "",
  });
  const [selectedRows, setSelectedRows] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setData(
      initialData.filter((row) =>
        Object.keys(filters).every((filterKey) => {
          const filterValue = key === filterKey ? value : filters[filterKey];
          return row[filterKey]
            .toString()
            .toLowerCase()
            .includes(filterValue.toLowerCase());
        })
      )
    );
  };

  const handleRowSelect = (index) => {
    setSelectedRows((prev) =>
      prev.includes(index)
        ? prev.filter((row) => row !== index)
        : [...prev, index]
    );
  };

  const handleSelectAll = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((_, index) => index));
    }
  };

  const clearFilter = (key) => handleFilterChange(key, "");
  const clearAllFilters = () => {
    setFilters({
      "Rcs number": "",
      "Business Name": "",
      "Abbreviation Of Business": "",
      "Fegal Form": "",
      "Additional Mention": "",
      "Building Number": "",
      "Street": "",
      "Postcode": "",
      "City": "",
      "Entity_Address": "",
      "Social Object": "",
      "Social Object Incomplete": "",
      "Type of Capital": "",
      "Capital Amount": "",
      "Denomination": "",
      "Contribution Type": "",
      "Contribution Percentage": "",
      "Incorporation Date": "",
      "Duration": "",
      "Duration End Date": "",
      "First Financial Period From": "",
      "First Final Period To": "",
      "Fiscal Year From": "",
      "Fiscal Year To": "",
      "Signatory Regime": "",
      "Daily Management Signatory Regime": "",
      "Liquidation Decision Date": "",
      "Liquidator General Powers": "",
      "General Manager Or Executive Committee Signatory Regime": "",
      "Partnership Manager Signature Regime": "",
      "Entity Email Address": "",
    });
    setData(initialData);
  };

  const toggleDropdown = (rowIndex, event) => {
    const iconPosition = event.target.getBoundingClientRect();
    setDropdownPosition({
      top: iconPosition.bottom + window.scrollY,
      left: iconPosition.left + window.scrollX,
    });
    setDropdownOpen((prev) => (prev === rowIndex ? null : rowIndex));
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-r from-blue-50 to-indigo-100 p-6 rounded-lg shadow-xl">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-700">
          City-Information Table
        </h2>
        <button
          onClick={clearAllFilters}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-200"
        >
          Clear All Filters
        </button>
      </div>

      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border-collapse text-gray-700" style={{ tableLayout: 'auto' }}>
          <thead>
            <tr className="bg-indigo-500 text-white">
              <th className="px-6 py-3 text-left text-sm font-semibold">
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={selectedRows.length === data.length}
                />
              </th>
              {Object.keys(filters).map((header, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-center text-sm font-semibold"
                  style={{ paddingLeft: '10px', paddingRight: '10px' }}
                >
                  <div className="flex items-center justify-between text-center">
                    <div 
                      style={{
                        whiteSpace: 'nowrap', 
                        overflow: 'hidden', 
                        textOverflow: 'ellipsis',
                      }}>
                      {header.charAt(0).toUpperCase() + header.slice(1)}
                    </div>
                    <RxDotsVertical
                      onClick={(e) => toggleDropdown(index, e)}
                      className="text-gray-300 hover:text-white cursor-pointer transition"
                    />
                  </div>
                </th>
              ))}
            </tr>

            {/* Filter Row */}
            <tr className="bg-indigo-100">
              <th className="px-6 py-3"></th>
              {Object.keys(filters).map((key, index) => (
                <th
                  key={index}
                  className="px-6 py-3"
                  style={{ paddingLeft: '10px', paddingRight: '10px' }}
                >
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      placeholder="Filter..."
                      value={filters[key]}
                      onChange={(e) => handleFilterChange(key, e.target.value)}
                      className="w-full px-3 py-1 rounded border focus:ring-2 focus:ring-indigo-500 text-sm"
                    />

                    {filters[key] && (
                      <FaTimesCircle
                        onClick={() => clearFilter(key)}
                        className="absolute right-8 top-1/2 transform -translate-y-1/2 text-red-500 cursor-pointer"
                        title="Clear Filter"
                      />
                    )}

                    <FaFilter
                      className={
                        filters[key]
                          ? "text-blue-500 ml-2"
                          : "text-gray-400 ml-2"
                      }
                      title="Filter"
                    />
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`border-b hover:bg-indigo-50 transition duration-200 ease-in-out ${
                  selectedRows.includes(rowIndex) ? "bg-blue-100" : ""
                }`}
              >
                <td className="px-6 py-3 text-center">
                  <input
                    type="checkbox"
                    onChange={() => handleRowSelect(rowIndex)}
                    checked={selectedRows.includes(rowIndex)}
                  />
                </td>
                {Object.keys(filters).map((key, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-6 py-3 text-sm text-right"
                    style={{
                      paddingLeft: '10px',
                      paddingRight: '10px',
                      whiteSpace: 'nowrap', 
                      overflow: 'hidden', 
                      textOverflow: 'ellipsis', 
                    }}
                  >
                    {row[key]}
                  </td>
                ))}

                {/* Action Dropdown Menu */}
                {dropdownOpen === rowIndex && (
                  <td
                    colSpan={Object.keys(filters).length + 1}
                    className="absolute z-10"
                    style={{
                      top: `${dropdownPosition.top}px`,
                      left: `${dropdownPosition.left}px`,
                    }}
                  >
                    <div className="py-2 px-4 w-56 bg-white shadow-lg border rounded mt-1">
                      <ul className="space-y-1 text-sm">
                        <li className="cursor-pointer text-gray-700 hover:bg-gray-100 py-1 px-2">
                          Sort Ascending
                        </li>
                        <li className="cursor-pointer text-gray-700 hover:bg-gray-100 py-1 px-2">
                          Sort Descending
                        </li>
                        <li className="cursor-pointer text-gray-700 hover:bg-gray-100 py-1 px-2">
                          Pin Column
                        </li>
                        <li className="cursor-pointer text-gray-700 hover:bg-gray-100 py-1 px-2">
                          Autosize This Column
                        </li>
                        <li className="cursor-pointer text-gray-700 hover:bg-gray-100 py-1 px-2">
                          Autosize All Columns
                        </li>
                        <li className="cursor-pointer text-gray-700 hover:bg-gray-100 py-1 px-2">
                          Group by Sport
                        </li>
                        <li className="cursor-pointer text-gray-700 hover:bg-gray-100 py-1 px-2">
                          Choose Columns
                        </li>
                        <li className="cursor-pointer text-gray-700 hover:bg-gray-100 py-1 px-2">
                          Reset Columns
                        </li>
                      </ul>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
