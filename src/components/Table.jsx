import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";

const Table = (props) => {
  const { columnsTable, dataTable, onRowClick } = props;
  console.log("props.dataTable", props.dataTable);

  const gridStyle = { minHeight: 550 };
  return (
    <div>
      <ReactDataGrid
        idProperty="id"
        columns={columnsTable}
        dataSource={dataTable}
        style={gridStyle}
        enableSelection
        onSelectionChange={onRowClick}
      />
    </div>
  );
};

export default Table;
