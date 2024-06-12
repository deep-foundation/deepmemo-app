import { Box } from '@chakra-ui/react';
import CytoGraph from '@deep-foundation/deepcase/imports/cyto/graph';
import { useRefstarter } from '@deep-foundation/deepcase/imports/refstater';
import { useDeep } from '@deep-foundation/deeplinks/imports/client';
import { memo, useRef } from 'react';
import { Id, Link } from '@deep-foundation/deeplinks/imports/minilinks';

export const Graph = memo(function Graph({ linkId, query = {} }: { linkId: Id; query?: any }) {
  const deep = useDeep();
  const cyRef = useRef();
  const cytoViewportRef = useRefstarter<{ pan: { x: number; y: number; }; zoom: number }>();
  const { data: links = [] }: { data?: Link<Id>[] } = deep.useDeepSubscription({
    up: { parent_id: linkId || 0, tree_id: deep.idLocal('@deep-foundation/core', 'containTree') },
    _not: { type_id: { _in: [
      deep.idLocal('@deep-foundation/core', 'Promise'),
      deep.idLocal('@deep-foundation/core', 'Then'),
      deep.idLocal('@deep-foundation/core', 'Resolved'),
      deep.idLocal('@deep-foundation/core', 'Rejected'),
      deep.idLocal('@deep-foundation/core', 'PromiseResult'),
    ] } },
    ...(query)
  });
  return <>
    {!!linkId && <Box w={500} h={500} border={'1px'} rounded='md' position="relative">
      {deep?.linkId && <CytoGraph links={links} cyRef={cyRef} cytoViewportRef={cytoViewportRef}/>}
    </Box>}
  </>;
});