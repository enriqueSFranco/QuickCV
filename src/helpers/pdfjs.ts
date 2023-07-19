import * as pdfjs from 'pdfjs-dist/legacy/build/pdf'

if (pdfjs.GlobalWorkerOptions.workerSrc !== undefined) {
  const WORKER_URL = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
  pdfjs.GlobalWorkerOptions.workerSrc = WORKER_URL
}

export { pdfjs }
