import { BeatLoader } from 'react-spinners';

const Loader = () => {
  return (
    <BeatLoader
      cssOverride={{ textAlign: 'center', margin: '20px 0' }}
      margin={5}
      color="#007D7E"
    />
  );
};

export default Loader;
