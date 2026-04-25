import { useEffect } from 'react';

const SITE_NAME = '마이리얼트립 할인쿠폰';

export const usePageTitle = (pageTitle?: string) => {
  useEffect(() => {
    document.title = pageTitle ? `${pageTitle} - ${SITE_NAME}` : SITE_NAME;
  }, [pageTitle]);
};
