import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";

type Skill = { id: number; label: string };

const skills = ["HTML", "CSS", "Javascript", "Typescript", "React", "Nextjs"];

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

export default function MuiAutoComplete() {
  const [value, setvalue] = useState<string | null>(null);
  const [skill, setskill] = useState<Skill | null>(null);
  console.log(value);
  console.log(skill);

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(event: any, newValue: string | null) => setvalue(newValue)}
        freeSolo
      />
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(event: any, newValue: Skill | null) => setskill(newValue)}
      />
    </Stack>
  );
}
