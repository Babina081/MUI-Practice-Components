import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

export default function MuiToggleButton() {
  const [formats, setFormats] = useState<string|null>(null);
  console.log({ formats });

  const handleFormatChange = (
    event: React.MouseEvent<HTMLElement>,
    updatedFormats: string | null
  ) => {
    setFormats(updatedFormats);
  };
  return (
    <Stack direction="row">
      <ToggleButtonGroup
        aria-label="text formatting"
        value={formats}
        onChange={handleFormatChange}
        size="large"
        color="success"
        orientation="vertical"
        exclusive
      >
        <ToggleButton value="bold" aria-label="bold">
          <FormatBoldIcon></FormatBoldIcon>
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FormatItalicIcon></FormatItalicIcon>
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FormatUnderlinedIcon></FormatUnderlinedIcon>
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}
