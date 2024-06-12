import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { useDeep } from "@deep-foundation/deeplinks/imports/client";

export function Syncing({ title, value, setValue }) {
  const deep = useDeep();
  return <FormControl display='flex' alignItems='center'>
    <FormLabel htmlFor='syncing' mb='0'>
      {title}
    </FormLabel>
    <Switch id='syncing'
      isChecked={value}
      onChange={() => setValue(s => !s)}
      disabled={!deep?.id}
    />
  </FormControl>;
}
