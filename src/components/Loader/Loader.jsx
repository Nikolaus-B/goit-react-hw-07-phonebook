import { RotatingLines } from 'react-loader-spinner';
import { LoaderContainer, Backbrop } from './Loader.styled';

export const Loader = () => {
  return (
    <Backbrop>
      <LoaderContainer>
        <RotatingLines
          strokeColor="#4f58fd"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </LoaderContainer>
    </Backbrop>
  );
};
