import { useEffect } from 'react';

const useDocumentTitle = (title) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `CalComm ${title ? '| ' + title : ''}`;

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};

export default useDocumentTitle; 