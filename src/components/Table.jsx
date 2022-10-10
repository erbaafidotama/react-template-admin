import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";

const Table = (props) => {
  const { columnsTable, dataTable, onRowClick } = props;

  const gridStyle = { minHeight: 550 };
  return (
    <div>
      <br />
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
