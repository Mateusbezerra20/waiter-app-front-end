import * as RdxDropdownMenu from "@radix-ui/react-dropdown-menu";
import "./styles.css";

function Root({ children }: { children: React.ReactNode }) {
  return <RdxDropdownMenu.Root>{children}</RdxDropdownMenu.Root>;
}

function Trigger({ children }: { children: React.ReactNode }) {
  return <RdxDropdownMenu.Trigger asChild>{children}</RdxDropdownMenu.Trigger>;
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <RdxDropdownMenu.Portal>
      <RdxDropdownMenu.Content className="content" side="bottom" align="end">
        {children}
      </RdxDropdownMenu.Content>
    </RdxDropdownMenu.Portal>
  );
}

function Item({
  children,
  onSelect,
}: {
  children: React.ReactNode;
  onSelect: () => void;
}) {
  return (
    <RdxDropdownMenu.Item className="item" onSelect={onSelect}>
      {children}
    </RdxDropdownMenu.Item>
  );
}

export const DropdownMenu = {
  Root,
  Trigger,
  Content,
  Item,
};
