import React from "react";
import Alert from "../components/Alert/Alert";

export default {
  title: "Components/Alert",
  component: Alert,
};

export const Alerts = () => (
  <>
    <Alert>Default (Info) Alert</Alert>
    <Alert variant="success">Success Alert</Alert>
    <Alert variant="danger">Danger Alert</Alert>
    <Alert variant="warning">Warning Alert</Alert>
  </>
);
