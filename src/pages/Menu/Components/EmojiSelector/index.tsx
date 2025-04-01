import { DropdownMenu } from "../DropdownMenu";
import { EmojiButton } from "./styles";
import { emojis } from "../../../../assets/emojis";

interface EmojiSelectorProps {
  onSelect: (value: string) => void;
  value: string;
}

export function EmojiSelector({ onSelect, value }: EmojiSelectorProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <EmojiButton>{value}</EmojiButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        {emojis.map((emoji) => (
          <DropdownMenu.Item onSelect={() => onSelect(emoji)} key={emoji}>
            {emoji}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
