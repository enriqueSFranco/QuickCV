export interface SectionCv {
  id: number
  title: string
  summary: string
  href: string
}

// FORMULARIO [INFORMACION PERSONAL]
export interface People {
  name: string
  lastName: string
}

export interface PersonalInformation extends People {
  job: string
  email: string
}
