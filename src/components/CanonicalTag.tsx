import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://rinteg.co.uk';

export function CanonicalTag() {
  const { pathname } = useLocation();

  useEffect(() => {
    const canonical = `${BASE_URL}${pathname}`;

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonical);
  }, [pathname]);

  return null;
}
