import { createContext, useContext } from 'react';

const ImageSrcContext = createContext('');

export const useImageSrc = () => {
  return useContext(ImageSrcContext);
};

export default ImageSrcContext;
