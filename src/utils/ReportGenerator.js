import { jsPDF } from 'jspdf';
import { Parser } from 'json2csv';

export const generatePDFReport = (data) => {
  const doc = new jsPDF();
  
  // Add company header
  doc.setFontSize(20);
  doc.text('Communication Analytics Report', 20, 20);
  
  // Add date
  doc.setFontSize(12);
  doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 30);
  
  // Add communication frequency
  doc.setFontSize(16);
  doc.text('Communication Frequency', 20, 50);
  
  // Add data tables and charts
  // ... implementation for adding charts and tables to PDF
  
  return doc.save('communication-report.pdf');
};

export const generateCSVReport = (data) => {
  const fields = ['date', 'company', 'type', 'status', 'notes'];
  const opts = { fields };
  
  try {
    const parser = new Parser(opts);
    const csv = parser.parse(data);
    
    // Create and download CSV file
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'communication-report.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  } catch (err) {
    console.error('Error generating CSV:', err);
  }
}; 