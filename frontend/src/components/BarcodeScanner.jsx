import  { useRef, useCallback, useEffect } from 'react';
import Webcam from 'react-webcam';
import { BrowserMultiFormatReader } from '@zxing/library';

const BarcodeScanner = ({ onScan }) => {
  const webcamRef = useRef(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const codeReader = new BrowserMultiFormatReader();

  const capture = useCallback(async () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        const img = new Image();
        img.src = imageSrc;
        img.onload = async () => {
          try {
            const result = await codeReader.decodeFromImageElement(img);
            if (result) {
              onScan(result.getText());
            }
          } catch (err) {
            console.error('Barcode decoding error:', err);
          }
        };
      }
    }
  }, [webcamRef, codeReader, onScan]);

  useEffect(() => {
    const interval = setInterval(() => {
      capture();
    }, 1000);
    return () => clearInterval(interval);
  }, [capture]);

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={{
          facingMode: 'environment', // Arka kamerayı kullanmak için
          width: 1280, // Çözünürlük ayarları
          height: 720,
        }}
      />
    </div>
  );
};

export default BarcodeScanner;
