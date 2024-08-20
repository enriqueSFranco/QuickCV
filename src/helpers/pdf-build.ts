import type { CurriculumData, Education } from '@/shared/types.d'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

pdfMake.vfs = pdfFonts.pdfMake.vfs

function createListEducation (items: Education[]) {
  return items.map(item => ([
    item.school,
    item.degree,
    item.dateInit,
    item.dateEnd
  ]))
}

function createPDF ({ curriculumData }: { curriculumData: CurriculumData }) {
  const { personalInformation, websites, education, professionalProfile } = curriculumData
  const { name, lastName, job, email } = personalInformation
  const { summary } = professionalProfile

  const urls = websites.map(website => website.url)

  const documentDefinition = {
    content: [
      { text: '', style: 'text' },
      `${name} ${lastName}`,
      job,
      { text: '', style: 'row_list' },
      { ul: [email, urls] },
      { text: 'Perfil Profesional', style: 'title' },
      { text: '', style: 'text' },
      summary,
      { text: 'Educación', style: 'title' },
      { text: '', style: 'text' },
      { ul: createListEducation(education) }
    ],
    styles: {
      title: {
        fontSize: 16,
        bold: true,
        margin: [0, 10, 0, 5]
      },
      text: {
        fontSize: 14,
        bold: true,
        margin: [0, 0, 0, 0]
      },
      row_list: {
        display: 'flex'
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
