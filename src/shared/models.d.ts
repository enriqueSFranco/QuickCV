export interface SectionCv {
  id: number
  title: string
  summary: string
  href?: stirng
  isComplete: boolean
}

export interface HeaderCv {
  name: string
  lastname: string
  fullname: string
  job: string
  summary: string
  phone: string
  socialNetworks: string[]
}

export interface ProfileCv { summary: string }

export interface EducationCv {
  id: number
  school: string
  degree: string
  dateInit: string
  dateEnd: string
}

export interface ExperienceCv {
  id: number
  company: string
  job: string
  dateInit: string
  dateEnd: string
  summary: string
}

export interface KnowledgeCv {
  id: number
  skill: string
}
