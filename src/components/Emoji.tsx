import bullEye from '../assets/bulls-eye.webp';
import thumbsUp from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
  raiting: number;
}

const Emoji = ({ raiting }: Props) => {
  if (raiting < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh', boxSize: '25px' },
    4: { src: thumbsUp, alt: 'recommended', boxSize: '25px' },
    5: { src: bullEye, alt: 'exceptional', boxSize: '25px' },
  };

  return <Image {...emojiMap[raiting]} boxSize="25px" marginTop={1} />;
};

export default Emoji;
