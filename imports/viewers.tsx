import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, SimpleGrid, Text, useColorMode } from '@chakra-ui/react';
import { useDeep } from '@deep-foundation/deeplinks/imports/client';
import { useDevice } from '@deep-foundation/deepmemo-imports/imports/device';
import { useVoice } from '@deep-foundation/deepmemo-imports/imports/voice';
import useAxios from 'axios-hooks';
import React, { memo, useEffect, useState } from 'react';
import { Graph } from './graph-viewer';
import { Loading } from './loading';
import { useGeolocation } from '@deep-foundation/deepmemo-imports/imports/geolocation';
import { Play } from './icons/play';
import { Pause } from './icons/pause';
import { Stop } from './icons/stop';
import { IconButton } from './icon-button';

export const VoicesView = memo(function VoiceView() {
  const deep = useDeep();
  const device = useDevice();
  const voice = useVoice();
  // const [voices, setVoices] = useState([]);
  const voices = deep.useMinilinksSubscription({
    type_id: deep.idLocal('@deep-foundation/core', 'AsyncFile'),
    in: { type_id: deep.idLocal('@deep-foundation/core', 'Contain'), from_id: device?.id || 0 },
    order_by: {id: 'asc'},
  });
  return <>
    <SimpleGrid columns={{sm: 1, md: 2}}>
      <Box>
        <Accordion allowToggle>
          {voices.map((v, i) => <>
            <VoicesVoiceView key={v.id} voice={v} i={i}/>
          </>)}
        </Accordion>
      </Box>
      {deep?.linkId && device?.id && <Graph linkId={device.id} query={{
        up: { parent: { type_id: deep.idLocal('@deep-foundation/core', 'AsyncFile') } }
      }}/>}
    </SimpleGrid>
  </>;
});

export const VoicesVoiceView = memo(function VoicesVoiceView({ voice, i }: { voice: any, i: number }) {
  const deep = useDeep();

  const ssl = deep.apolloClient.ssl;
  const path = deep.apolloClient.path.slice(0, -4);
  const url = `${ssl ? "https://" : "http://"}${path}/file?linkId=${voice.id}`;

  const [{ data, loading, error }, refetch] = useAxios({ 
    method: 'get', url: `${ssl ? "https://" : "http://"}${path}/file?linkId=${voice.id}`,
    headers: { 'Authorization': `Bearer ${deep.token}` },
    responseType: "blob",
  });
  const [src, setSrc] = useState<any>();
  // const [src, setSrc] = useState<string | null>(null);
  useEffect(() => {
    if (!loading && data) {
      const reader = new window.FileReader();
      reader.onload = () => {
        setSrc(reader.result);
      }
      reader.readAsDataURL(data);
    }
  }, [data, loading]);

  const [text] = deep.useMinilinksSubscription({
    type_id: deep.idLocal('@deep-foundation/core', 'SyncTextFile'),
    in: { type_id: deep.idLocal('@deep-foundation/core', 'Contain'), from_id: voice.id },
  });

  return <>
    <AccordionItem>{({ isExpanded }) => (<>
      <h2>
        <AccordionButton>
          <Box>
            <Text noOfLines={1}>
              {voice?.id || i} {text?.value?.value || ''}
            </Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        {!!isExpanded && !!src && <audio src={src} controls>Your browser does not support the audio element.</audio>}
        {!!text && <Box>{text?.value?.value}</Box>}
      </AccordionPanel>
    </>)}</AccordionItem>
  </>;
});

interface VoiceViewProps {
  syncingSwitch?: React.ReactNode;
}
export const VoiceView = memo(function VoiceView(props: VoiceViewProps) {
  const { syncingSwitch } = props;
  const deep = useDeep();
  const voice = useVoice();
  const device = useDevice();
  return <>
    <Box textStyle='h3'>Voice</Box>
    {syncingSwitch}
    {!!deep && !!device?.id && <VoicesView/>}
    <Box sx={{ 
        display: 'flex', 
        flexDirection: 'row',
        '& > *:not(:last-child)': {
          mr: '1rem',
        }
      }}
    >
      {voice.status ? (
        voice.recording ? (
          <>
            <IconButton ariaLabel='stop button' onClick={async () => {
              const record = await voice.stop();
            }}><Stop /></IconButton>
            {voice.paused ? (
              <IconButton ariaLabel='pause button' onClick={() => voice.pause()}><Pause /></IconButton>
            ) : (
              <Button onClick={() => voice.resume()}>resume</Button>
            )}
          </>
        ) : (
          <IconButton ariaLabel='play button' onClick={() => voice.start()}><Play /></IconButton>
        )) : (
        <Button onClick={() => voice.request()}>request</Button>
      )}
      {/* {voice.status ? (
        voice.recording ? (
          <>
            <IconButton aria-label='stop button' onClick={async () => {
              const record = await voice.stop();
            }} />
            {voice.paused ? (
              <IconButton aria-label='pause button' onClick={() => voice.pause()} icon={<Pause />} />
            ) : (
              <Button onClick={() => voice.resume()}>resume</Button>
            )}
          </>
        ) : (
          <IconButton aria-label='play button' variant='outline' onClick={() => voice.start()} icon={<Play />} />
        )) : (
        <Button onClick={() => voice.request()}>request</Button>
      )} */}
    </Box>
  </>;
});

export const DeviceView = memo(function DeviceView({ interval }: { interval: number }) {
  const deep = useDeep();
  const device = useDevice();
  return <>
    <Box textStyle='h3'>Device {device?.id ? <>{device?.id}</> : <>{'id not defined'}</>} <Loading factor={device} interval={interval}/></Box>
    {/* <SimpleGrid columns={{sm: 1, md: 2}}>
      <Box><pre>{JSON.stringify(device, null, 2)}</pre></Box>
      {deep?.linkId && device?.id && <Graph linkId={device.id}/>}
    </SimpleGrid> */}
  </>;
});

export const GeolocationView = memo(function GeolocationView({ interval }: { interval: number }) {
  const deep = useDeep();
  const geolocation = useGeolocation();
  return <>
    <Box textStyle='h3'>Geolocation {geolocation?.position?.id ? <>{geolocation?.position?.id}</> : <>{'id not defined'}</>} <><Loading factor={geolocation.position} interval={interval}/></></Box>
    <Button onClick={() => geolocation.request()}>request</Button>
    {/* <SimpleGrid columns={{sm: 1, md: 2}}>
      <Box><pre>{JSON.stringify(geolocation, null, 2)}</pre></Box>
      {deep?.linkId && geolocation?.position?.id && <Graph linkId={geolocation.position.id}/>}
    </SimpleGrid> */}
  </>;
});