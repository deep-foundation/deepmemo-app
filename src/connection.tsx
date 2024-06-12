import { Box, Button, Code, FormControl, FormLabel, IconButton, Input, SimpleGrid } from "@chakra-ui/react";
import { AutoGuest } from "@deep-foundation/deepcase/imports/auto-guest";
import { useDeep } from "@deep-foundation/deeplinks/imports/client";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { variantsSliding } from "./animation-variants";
import { useAnimationContext } from "./context";
import { useDeepPath, useDeepToken } from "./provider";
import { Discord } from "../imports/discord-logo";

export function Connection() {
  const { t } = useTranslation();
  const deep = useDeep();
  const { state, onPermission } = useAnimationContext();
  const control = useAnimationControls();

  const [path, setPath] = useDeepPath();
  const [token, setToken] = useDeepToken();

  const [_path, _setPath] = useState<string|undefined>(path);
  const [_token, _setToken] = useState<string|undefined>(token);

  // useEffect(() => {
  //   if(!deep.linkId && connection && deepToken) {
  //     window.location.reload();
  //   }
  // }, [deep]);

  // useEffect(() => {
  //   self["connection"] = connection;
  //   self["setConnection"] = setConnection;
  //   self["deepToken"] = deepToken;
  //   self["setDeepToken"] = setDeepToken;
  //   self["deep"] = deep;
  // });

  const [autoGuest, setAutoGuest] = useState(false);
  useEffect(() => {
    if (state === 'connection') {
      control.start("show");
    } else {
      control.start("hide");
    }
  }, [control, state]);
  console.log('click', state);
  return (<AnimatePresence>
      <Box 
        key='1'
        as={motion.div} 
        onTapStart={(e) => {
          onPermission(); 
        }} 
        onClick={() => {
          onPermission(); 
        }} 
        sx={{ 
          width: '100vw',
          height: '100vh',
          pos: 'relative',
          overflow: 'hidden', 
          alignItems: 'center', 
          justifyContent: 'center', 
          flexDirection: 'column',
          padding: '0.5rem',
        }}
        initial={{
          display: 'none',
          opacity: 0,
          x: '100%'
        }}
        animate={control}
        variants={variantsSliding}
      >
        <Box textStyle='h1' mb='1rem'>
          {t('connection')}
        </Box>
        
        <FormControl id="gql-path">
          <FormLabel>GraphQL Path</FormLabel>
          <Input type="text"
            defaultValue={path}
            onChange={(e) => _setPath(e.target.value)}
          />
        </FormControl>
        <FormControl id="token" >
          <FormLabel>Token</FormLabel>
          <Input type="text"
            defaultValue={token}
            onChange={(e) => _setToken(e.target.value)}
          />
        </FormControl>
        <IconButton 
          aria-label='Discord deep server' icon={<Discord />}
          onClick={() => {console.log({ _token, _path })}} />
        <SimpleGrid pt={3} spacing={3} minChildWidth='150px'>
          <Button onClick={() => {
            console.log({ _token, _path });
            if(!_path || !_token) return;
            setToken(_token);
            setPath(_path);
          }}>
            Submit
          </Button>
          <Button onClick={() => {
            setToken(null);
          }}>
            setDeepToken(null)
          </Button>
          <Button colorScheme={autoGuest ? 'blue' : undefined} onClick={() => {
            setAutoGuest(ag => !ag);
          }}>
            {`<AutoGuest/>`}
          </Button>
          {!!autoGuest && <AutoGuest><></></AutoGuest>}
        </SimpleGrid>
      
        <Code wordBreak={'break-all'}>useDeepPath()[0] // {path || ''}</Code>
        <Code wordBreak={'break-all'}>useDeepToken()[0] // {token || ''}</Code>
        <Code wordBreak={'break-all'}>useDeep() // {typeof(deep)}</Code>
        {!!deep && <Box>
          <Code wordBreak={'break-all'}>useDeep().linkId // {deep?.linkId}</Code>
          <Code wordBreak={'break-all'}>useDeep().token // {deep?.token}</Code>
        </Box>}
      </Box>
    </AnimatePresence>
  );
}
