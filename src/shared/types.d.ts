type Id = `${string}-${string}-${string}-${string}-${string}`

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
  id: Id
  url: string
}

export interface Education {
  id: Id
  school: string
  degree: string
  dateInit: string
  dateEnd: string
}

export interface Skill {
  id: Id
  skill: string
}

// ENUMS
export enum STORE_NAME {
  PERSONAL_INFORMATION = 'Personal_Information',
  PROFESSIONAL_PROFILE = 'Professional_Profile',
  WEBSITE = 'Website',
  EXPERIENCE = 'Experience',
  EDUCATION = 'Education',
  SKILLS = 'skills'
}
