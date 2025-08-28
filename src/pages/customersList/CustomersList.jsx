import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { TextField } from "@mui/material";
import { FiLink2, FiArrowRight } from "react-icons/fi";
import { Card, CardContent } from "@mui/material";
import { Button } from "@mui/material";
import accountList1 from "../../assets/accountList1.png"
import accountList2 from "../../assets/accountList2.png"
import accountList3 from "../../assets/accountList3.png"
import accountList4 from "../../assets/accountList4.png"
import accountList5 from "../../assets/accountList5.png"

const customers = [
  {
    id: 1,
    name: "Carson Darrin",
    email: "carson.darrin@devias.io",
    location: "Cleveland, Ohio, USA",
    orders: 3,
    spent: "$300.00",
    avatar: accountList1
  },
  {
    id: 2,
    name: "Fran Perez",
    email: "fran.perez@devias.io",
    location: "Atlanta, Georgia, USA",
    orders: 0,
    spent: "$0.00",
    avatar: accountList2
  },
  {
    id: 3,
    name: "Jie Yan Song",
    email: "jie.yan.song@devias.io",
    location: "North Canton, Ohio, USA",
    orders: 6,
    spent: "$5,600.00",
    avatar: accountList3
  },
  {
    id: 4,
    name: "Anika Visser",
    email: "anika.visser@devias.io",
    location: "Madrid, Madrid, Spain",
    orders: 1,
    spent: "$500.00",
    avatar: accountList4
  },
  {
    id: 5,
    name: "Miron Vitold",
    email: "miron.vitold@devias.io",
    location: "San Diego, California, USA",
    orders: 0,
    spent: "$0.00",
    avatar: accountList5
  },
];

export default function CustomersList() {
  const [search, setSearch] = useState("");

  const filteredCustomers = customers.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h2 className='font-bold text-[34px]'>Customers</h2>
      <Card className="rounded-2xl shadow-md" style={{
        marginTop: "32px"
      }}>
        <CardContent>
          {/* Tabs */}
          <div className="flex gap-6 border-b pb-2 mb-4 text-sm font-medium">
            <button className="text-blue-600 border-b-2 border-blue-600">
              All
            </button>
            <button>Accepts Marketing</button>
            <button>Prospect</button>
            <button>Returning</button>
          </div>

          {/* Search and Sort */}
          <div className="flex justify-between items-center mb-4">
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search customers"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-1/2"
              style={{
                paddingTop: "20px"
              }}
            />
            <select className="border rounded-md px-3 py-2 text-sm">
              <option>Last update (newest)</option>
              <option>Last update (oldest)</option>
            </select>
          </div>

          {/* Table */}
          <div className="overflow-x-auto" style={{
            marginTop: "10px",
          }}>
            <table className="w-full text-left text-sm border-separate border-spacing-y-[20px]">
              <thead>
                <tr className="text-gray-500 border-b">
                  <th className="p-2"><input type="checkbox" /></th>
                  <th className="p-2">Name</th>
                  <th className="p-2">Location</th>
                  <th className="p-2">Orders</th>
                  <th className="p-2">Spent</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody style={{
                paddingTop: "10px"
              }}>
                {filteredCustomers.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-50">
                    <td className="p-2">
                      <input type="checkbox" />
                    </td>
                    <td className="p-2 flex items-center gap-2">
                      {/* Avatar joyi */}
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <img src={item.avatar} alt='img' className="w-[42px] h-[42px] rounded-full" />
                      </div>
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-gray-500 text-xs">{item.email}</p>
                      </div>
                    </td>
                    <td className="p-2">{item.location}</td>
                    <td className="p-2">{item.orders}</td>
                    <td className="p-2">{item.spent}</td>
                    <td className="p-2 flex gap-3">
                      <FiLink2 className="cursor-pointer text-gray-500 hover:text-gray-700" />
                      <FiArrowRight className="cursor-pointer text-gray-500 hover:text-gray-700" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
            <p>Rows per page: 5</p>
            <p>1–5 of 10</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
