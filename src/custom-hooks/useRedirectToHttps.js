import { useEffect } from 'react';

const useRedirectToHttps = () => {
  useEffect(() => {
    if (window.location.protocol!=="https:" && !window.location.host.includes('localhost')) {
      window.location.replace(`https://${window.location.host}${window.location.pathname}`);
    }
  })
};

export default useRedirectToHttps;