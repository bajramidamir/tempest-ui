import Badge from "../components/Badge/Badge";
import Button from "../components/Button/Button";

export default {
  title: "Components/Badge",
  component: Badge,
};

export const AllBadgesOnButtons = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <h4>Solid Badges</h4>
      <Badge content={99} color="default">
        <Button radius="rounded" color="primary" variant="text">
          Default
        </Button>
      </Badge>
      <Badge content={5} color="success">
        <Button>Success</Button>
      </Badge>
      <Badge content="!" color="error">
        <Button>Error</Button>
      </Badge>
      <Badge content={12} color="warning">
        <Button>Warning</Button>
      </Badge>
      <Badge content={15} color="info">
        <Button>Info</Button>
      </Badge>
    </div>

    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <h4>Dot Badges</h4>
      <Badge dot color="default">
        <Button variant="text">Default</Button>
      </Badge>
      <Badge dot color="success">
        <Button>Success</Button>
      </Badge>
      <Badge dot color="error">
        <Button>Error</Button>
      </Badge>
      <Badge dot color="warning">
        <Button>Warning</Button>
      </Badge>
      <Badge dot color="info">
        <Button variant="outlined">Info</Button>
      </Badge>
    </div>
  </div>
);
