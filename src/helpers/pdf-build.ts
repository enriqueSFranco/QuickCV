import type { CurriculumData } from '@/shared/types.d'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

pdfMake.vfs = pdfFonts.pdfMake.vfs

function createPDF ({ curriculumData }: { curriculumData: CurriculumData }) {
  const { personalInformation } = curriculumData
  const { name, lastName, job, email } = personalInformation
  const documentDefinition = {
    content: [
      { text: 'Mi Curriculum Vitae', style: 'header' },
      { text: 'Información personal:', style: 'subheader' },
      `${name} ${lastName}`,
      job,
      email,
      { text: 'Experiencia laboral:', style: 'subheader' },
      `Puesto: ${job}`,
      'Empresa: ABC Company',
      'Duración: 2 años'
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 10]
      },
      subheader: {
        fontSize: 14,
        bold: true,
        margin: [0, 10, 0, 5]
      }
    }
  }
  return documentDefinition
}

export function download ({ curriculumData }: { curriculumData: CurriculumData }): void {
  const documentDefinition = createPDF({ curriculumData })
  const { personalInformation } = curriculumData
  const { name, lastName, job } = personalInformation
  const pdfDoc = pdfMake.createPdf(documentDefinition)
  pdfDoc.download(`CV ${name} ${lastName} ${job}.pdf`)
}
