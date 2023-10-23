import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

const GameCardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box borderRadius={10} overflow="hidden" width="280px">
      {children}
    </Box>
  );
};

export default GameCardContainer;
