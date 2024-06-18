import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { useDeep } from "@deep-foundation/deeplinks/imports/client";

export function Syncing({ title, value, setValue }) {
  const deep = useDeep();
  console.log('Syncing deep', deep);
  return <FormControl display='flex' alignItems='center' justifyContent='space-between'>
    <FormLabel htmlFor='syncing'>
      {title}
    </FormLabel>
    <Switch id='syncing'
      isChecked={value}
      onChange={() => setValue(s => !s)}
      // disabled={!deep?.id}
    />
  </FormControl>;
}
