import React from "react";
import Table from "../components/Table/Table";
import Button from "../components/Button/Button";

export default {
  title: "Components/Table",
  component: Table,
};

export const Default = () => {
  const columns = ["name", "age", "email", ""];
  const data = [
    { name: "Alice", age: 25, email: "alice@example.com" },
    { name: "Bob", age: 30, email: "bob@example.com" },
  ];

  return <Table columns={columns} data={data} />;
};
