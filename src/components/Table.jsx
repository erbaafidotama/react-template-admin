import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";

const Table = (props) => {
  const { columnsTable, dataTable } = props;
  console.log("props.dataTable", props.dataTable);

  const gridStyle = { minHeight: 550 };
  return (
    <div>
      <ReactDataGrid
        idProperty="ID"
        columns={columnsTable}
        dataSource={dataTable}
        style={gridStyle}
      />
    </div>
  );
};

export default Table;
