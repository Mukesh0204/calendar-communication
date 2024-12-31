export const exportToCSV = (data, filename) => {
    const csvContent = `data:text/csv;charset=utf-8,${data
      .map(row => Object.values(row).join(','))
      .join('\n')}`;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
  };
  