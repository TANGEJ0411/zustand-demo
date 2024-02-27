import useHotel from "./store/useHotel.";
import {
  createColumnHelper, // 幫忙製作表格列的工具
  flexRender, // 其實就是 flex box
  getCoreRowModel, // 取得行的資料來渲染新表格
  useReactTable, // 使用此 Hook 來掌握表格
} from "@tanstack/react-table";

// Create a client

function Hotels() {
  const { hotels: data, getHotels } = useHotel();

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor((row) => row.id, {
      id: "id",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span className="my-h3">飯店id</span>,
    }),
    columnHelper.accessor((row) => row.company_name, {
      id: "company_name",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span className="my-h3">飯店名稱</span>,
    }),
    columnHelper.accessor((row) => row.address, {
      id: "address",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span className="my-h3">飯店地址</span>,
    }),
    columnHelper.accessor((row) => row.stars, {
      id: "stars",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span className="my-h3">飯店星星</span>,
    }),
    columnHelper.accessor((row) => row.region, {
      id: "region",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span className="my-h3">飯店位置</span>,
    }),
    columnHelper.accessor((row) => row.area, {
      id: "area",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span className="my-h3">飯店地區</span>,
    }),
  ];

  const table = useReactTable({
    data, // 輸入表格的資料
    columns, // 輸入定義好的表頭
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <button onClick={getHotels}>getHotels</button>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className={`${
                row.index % 2 === 0 ? "bg-secondary-3" : "bg-secondary-5"
              }`}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className={`my-t3 my-py-1 border border-secondary-1 ${
                    cell.column.id === "id" ? "my-primary-1 my-h3" : ""
                  }`}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Hotels;
