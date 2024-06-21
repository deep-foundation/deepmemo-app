import { Box, Button, Code, FormControl, FormLabel, IconButton, Input, SimpleGrid } from "@chakra-ui/react";
import { AutoGuest } from "@deep-foundation/deepcase/imports/auto-guest";
import { useDeep } from "@deep-foundation/deeplinks/imports/client";
import { AnimatePresence, motion, useAnimationControls, useMotionTemplate } from "framer-motion";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { contentAnimation, variantsSliding } from "./animation-variants";
import { useAnimationContext } from "./context";
import { useDeepPath, useDeepToken } from "./provider";
import { Discord } from "../imports/discord-logo";

export function Connection() {
  const { t } = useTranslation();
  const deep = useDeep();
  const { state, onPermission } = useAnimationContext();
  const control = useAnimationControls();
  const contentControl = useAnimationControls();

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
      contentControl.start("show");
    } else {
      control.start("hide");
      contentControl.start("hide");
    }
  }, [control, contentControl, state]);
  return (<AnimatePresence>
      <Box 
        key='1'
        as={motion.div} 
        // onTapStart={(e) => {
        //   onPermission(); 
        // }} 
        // onClick={() => {
        //   onPermission(); 
        // }} 
        sx={{ 
          width: '100vw',
          height: '100vh',
          pos: 'relative',
          overflow: 'hidden',
          backgroundColor: 'bg',
        }}
        initial={{
          rotateY: 180,
        }}
        animate={control}
        variants={variantsSliding}
      >
        <AnimatePresence>
          <Box
            as={motion.div}
            initial={{
              opacity: 0,
            }}
            animate={contentControl}
            variants={contentAnimation}
            sx={{
              display: 'flex',
              alignItems: 'center', 
              justifyContent: 'center', 
              flexDirection: 'column', 
              padding: '1.5rem',
            }}
          >

            <Box textStyle='h1' mb='1.5rem' textAlign='center' px='1rem'>
              {t('connection')}
            </Box>

            <IconButton 
              width='100%'
              bg='discord'
              borderRadius='3rem'
              mb='2.5rem'
              aria-label='Discord deep server' icon={<Discord />}
              onClick={(e) => {
                e.stopPropagation();
                console.log({ _token, _path })
              }} 
            />
            
            <FormControl id="gql-path" sx={{mb: '0.5rem'}}>
              <FormLabel>graphQL path</FormLabel>
              <Input type="text"
                defaultValue={path}
                onChange={(e) => _setPath(e.target.value)}
              />
            </FormControl>
            <FormControl id="token" sx={{mb: '1rem'}}>
              <FormLabel>token</FormLabel>
              <Input type="text"
                defaultValue={token}
                onChange={(e) => _setToken(e.target.value)}
              />
            </FormControl>
            <Button 
              variant='solid'
              onClick={() => {
                console.log({ _token, _path });
                if(!_path || !_token) return;
                setToken(_token);
                setPath(_path);
                onPermission();
              }}
              width='100%'
            >
              {t('submit')}
            </Button>
          </Box>
        </AnimatePresence>
        
        {/* <SimpleGrid pt={3} spacing={3} minChildWidth='150px'>
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
        <Code wordBreak={'break-all'}>useDeep() // {typeof(deep)}</Code> */}
        {/* {!!deep && <Box>
          <Code wordBreak={'break-all'}>useDeep().linkId // {deep?.linkId}</Code>
          <Code wordBreak={'break-all'}>useDeep().token // {deep?.token}</Code>
        </Box>} */}
      </Box>
    </AnimatePresence>
  );
}
