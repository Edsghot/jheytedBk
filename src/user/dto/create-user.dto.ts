import { rolUser } from "../user.entity"

export class createUserDto{
    correo: string
    contraseña: string
    nombre: string
    apellidos: string
    edad: number
    rol: rolUser
    puntos: number
    profileImg: string 
}