import { useRef } from "react";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

const SideMenu = () => {
  const menu = useRef(null);
  const toast = useRef(null);
  const items = [
    {
      label: "Options",
      items: [
        {
          label: "Update",
          icon: "pi pi-refresh",
          command: () => {
            toast.current.show({
              severity: "success",
              summary: "Updated",
              detail: "Data Updated",
              life: 3000,
            });
          },
        },
        {
          label: "Delete",
          icon: "pi pi-times",
          command: () => {
            toast.current.show({
              severity: "warn",
              summary: "Delete",
              detail: "Data Deleted",
              life: 3000,
            });
          },
        },
      ],
    },
    {
      label: "Navigate",
      items: [
        {
          label: "React Website",
          icon: "pi pi-external-link",
          url: "https://reactjs.org/",
        },
        {
          label: "Router",
          icon: "pi pi-upload",
          command: (e) => {
            window.location.hash = "/fileupload";
          },
        },
      ],
    },
  ];

  return (
    <div>
      <div className="card">
        <Menu model={items} />
      </div>
    </div>
  );
};

export default SideMenu;
