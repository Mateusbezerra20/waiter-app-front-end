import { Container } from "./styles";
import { pagesIcons } from "../icons/pageIconsMaps";

interface HeaderProps {
  title: string;
  description: string;
  pageIcon: string;
}

export function Header({ title, description, pageIcon }: HeaderProps) {
  const Icon = pagesIcons[(pageIcon as keyof typeof pagesIcons) ?? "home"];
  return (
    <Container>
      <div className="page-details">
        <div className="title">
          <Icon />
          <h1>{title}</h1>
        </div>
        <h2>{description}</h2>
      </div>
    </Container>
  );
}
