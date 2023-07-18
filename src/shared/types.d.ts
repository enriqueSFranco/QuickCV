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

export interface Website {
  id: `${string}-${string}-${string}-${string}-${string}`
  url: string
}

// ENUMS
export enum STORE_NAME {
  PERSONAL_INFORMATION = 'Personal_Information',
  PROFESSIONAL_PROFILE = 'Professional_Profile',
  WEBSITE = 'Website',
  EXPERIENCE = 'Experience',
  KNOWLEDGE = 'knowledge'
}
