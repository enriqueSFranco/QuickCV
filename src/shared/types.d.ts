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

export interface ProfessionalProfile {
  summary: string
}

// FORMULARIO [FORMAS DE CONTACTO]
export interface ContactForm {
  id: string
  url: string
}

// ENUMS
export enum STORE_NAME {
  PERSONAL_INFORMATION = 'Personal_Information',
  PROFESSIONAL_PROFILE = 'Professional_Profile'
}
