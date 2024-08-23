import PDFMerger from 'pdf-merger-js';

const merger = new PDFMerger();

export const mergePdfs = async (p1, p2) => {
  await merger.add(p1);  // Merge all pages from the first PDF
  await merger.add(p2);  // Merge all pages from the second PDF
  const d = new Date().getTime();
  await merger.save(`public/${d}.pdf`); // Save the merged PDF with a timestamped filename
  return d;
  // Optionally, you could export the merged PDF as a Buffer:
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
};
