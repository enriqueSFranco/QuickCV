import { type z } from 'zod'
import { type PersonalInformationSchema } from '@/schemas'

type Id = `${string}-${string}-${string}-${string}-${string}`
type CanvasContex = CanvasRenderingContext2D
type HexadecimalColor = `#${string}`

export interface SectionCv {
  id: number
  title: string
  summary: string
  href: string
  isComplete: boolean
}

// FORMULARIO [INFORMACION PERSONAL]
export type PersonalInfo = z.infer<typeof PersonalInformationSchema>

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

export interface Experience {
  id: Id
  company: string
  job: string
  dateInit: string
  dateEnd: string
  details: string
}

export interface Skill {
  id: Id
  skill: string
}

export interface CurriculumData {
  personalInformation: PersonalInformation
  websites: Website[]
  education: Education[]
  professionalProfile: ProfessionalProfile
}

// ENUMS
export enum STORE_NAME {
  PERSONAL_INFORMATION = 'Personal_Information',
  PROFESSIONAL_PROFILE = 'Professional_Profile',
  WEBSITE = 'Website',
  EXPERIENCE = 'Experience',
  EDUCATION = 'Education',
  SKILLS = 'Skills',
  PREVIEW_CURRICULUM = 'Preview_Curriculum'
}

// UTILS
export interface DrawTextProps {
  ctx: CanvasContex
  colorText?: HexadecimalColor
  text: string
  font: string
  x: number
  y: number
}

export interface SplitTextIntoLinesProps {
  ctx: CanvasContex
  txt: string
  maxWidth: number
}

interface RenderCurriculumSection {
  ctx: CanvasContex
  currentLineHeght: number
}

export interface RenderPersonalInformationProps extends RenderCurriculumSection {
  personalInformation: PersonalInformation
}

export interface RenderEducationProps extends RenderCurriculumSection {
  education: Education[]
}

export interface RenderProfessionalProfileProps extends RenderCurriculumSection {
  canvasElement: HTMLCanvasElement
  professionalProfile: ProfessionalProfile
}
