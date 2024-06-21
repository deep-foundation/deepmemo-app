import { Box, FormControl, FormLabel, Input, useToast } from '@chakra-ui/react';
import { DeviceProvider } from '@deep-foundation/deepmemo-imports/imports/device';
import { GeolocationProvider } from '@deep-foundation/deepmemo-imports/imports/geolocation';
import { SaverProvider } from '@deep-foundation/deepmemo-imports/imports/saver';
import { VoiceProvider } from '@deep-foundation/deepmemo-imports/imports/voice';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import { useTranslation } from "next-i18next";
import { memo, useEffect, useState } from 'react';
import { useAnimationContext } from '../src/context';
import { Interval } from './loading';
import { Syncing } from './syncing';
import { DeviceView, GeolocationView, VoiceView } from './viewers';
import { useLocalStore } from '@deep-foundation/store/local';
import { useDeep } from '@deep-foundation/deeplinks/imports/client';
import { variantsSliding } from '../src/animation-variants';

export const PermissionPage = memo(() => {
  const { state } = useAnimationContext();
  const { t } = useTranslation();
  const deep = useDeep();
  const toast = useToast();
  const [containerId, setContainerId] = useLocalStore('deepmemo-app-containerId', null);
  const [deviceInterval, setDeviceInterval] = useState(5000);
  const [deviceSaver, setDeviceSaver] = useState(true);
  const [geolocationInterval, setGeolocationInterval] = useState(5000);
  const [geolocationSaver, setGeolocationSaver] = useState(true);
  const [saver, setSaver] = useState<boolean>(false);
  const control = useAnimationControls();
   // @ts-ignore
   if (typeof (window) === 'object') window.deep = deep;
   console.log('deep', deep);
 
   useEffect(() => {
     if (!deep) setSaver(false);
     else deep.local = false;
   }, [deep]);

   useEffect(() => {
    if (state === 'permissions') {
      control.start("show");
    } else {
      control.start("hide");
    }
  }, [control, state]);
  console.log('click', state);

  return (<AnimatePresence>
      <Box 
        key='2'
        as={motion.div} 
        sx={{ 
          width: '100vw',
          height: '100vh',
          pos: 'relative',
          overflow: 'hidden',  
        }}
        initial={{
          rotateY: 180,
        }}
        animate={control}
        variants={variantsSliding}
      >
        <AnimatePresence>

          <Box display='flex' justifyContent='center' flexDirection='column' w='100%' h='100%' p={4}
            sx={{
              '& > *:not(:last-child)': {
                mb: '1rem',
              }
            }}
          >
            <Syncing title={'Enable syncing with deep backend?'} value={saver} setValue={setSaver} />
            <FormControl display='flex' alignItems='center'>
              <FormLabel htmlFor='syncing' mb='0'>
                ContainerId
              </FormLabel>
              <Input
                type='number'
                placeholder={`${deep?.linkId}`}
                value={containerId} onChange={(e) => setContainerId(e.target.value)}
                w='100%'
              />
            </FormControl>
            <SaverProvider onSave={({ Type, id, object, mode, promise }) => {
              toast.promise(promise, {
                success: { title: `Saved ${mode} #${id || '?'} of type (#${Type}) to deep`, isClosable: true },
                error: (e) => ({ title: `Error with saving ${mode} #${id || '?'} of type (#${Type}) to deep`, description: e.toString(), isClosable: true }),
                loading: { title: `Saving ${mode} #${id || '?'} of type (#${Type}) to deep`, isClosable: true },
              })
            }}>
              <DeviceProvider saver={saver && deviceSaver} containerId={containerId} interval={deviceInterval}>
                <GeolocationProvider saver={saver && geolocationSaver} interval={geolocationInterval}>
                  <VoiceProvider saver={saver}>
                    <VoiceView 
                      syncingSwitch={<Syncing title={'Enable voice syncing with deep backend?'} value={deviceSaver} setValue={setDeviceSaver} />}
                    />
                    
                    <Interval value={deviceInterval} onChange={setDeviceInterval} />
                    <DeviceView interval={deviceInterval} />
                    <Interval value={geolocationInterval} onChange={setGeolocationInterval} />
                    <Syncing title={'Enable geolocation syncing with deep backend?'} value={geolocationSaver} setValue={setGeolocationSaver} />
                    <GeolocationView interval={geolocationInterval} />
                  </VoiceProvider>
                </GeolocationProvider>
              </DeviceProvider>
            </SaverProvider>
          </Box>
        </AnimatePresence>
      </Box>
    </AnimatePresence>
  )
})