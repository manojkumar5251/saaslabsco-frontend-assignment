import "./App.css";
import { Pagination, Table } from "./components";
import { useEffect, useRef, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dataList = useRef([]);
  const column = useRef([
    {
      title: "S.No",
      accessorKey: "s.no",
      width: 70,
    },
    {
      title: "Percentage funded",
      accessorKey: "percentage.funded",
      width: 200,
    },
    {
      title: "Amount pledged",
      accessorKey: "amt.pledged",
      width: 170,
    },
  ]).current;

  const handlePagination = (page) => {
    setCurrentPage(page);
    const start = (page - 1) * 5;
    const end = start + 5;

    setData(dataList.current.slice(start, end));
  };

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
      );

      dataList.current = await response.json();
      handlePagination(currentPage);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Table column={column} data={data} isLoading={loading} />

      <Pagination
        currentPage={currentPage}
        pageSize={5}
        length={dataList.current.length}
        handlePagination={handlePagination}
      />
    </div>
  );
}

export default App;
