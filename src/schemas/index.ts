import { string, object } from 'zod'

const PersonalInformationSchema = object({
  name: string().min(1, { message: 'El nombre es requerido' }),
  lastName: string().min(1, { message: 'El apellido es requerido' }),
  job: string().min(1, { message: 'El trabajo es requerido' }),
  email: string().email('El correo electrónico no es válido')
})

export { PersonalInformationSchema }
