import { Entity , Column, PrimaryGeneratedColumn} from "typeorm"

export enum rolUser{
    admin = 'ADMINISTRADOR',
    user = 'USUARIO',
    proveedor = 'PROVEEDOR'
}
@Entity({name: 'users'})
export class User{
    @PrimaryGeneratedColumn()
    idUsuario: number
    @Column({unique: true})
    correo: string
    @Column()
    contraseña: string
    @Column()
    nombre: string
    @Column()
    apellidos: string
    @Column()
    edad: number
    @Column()
    rol: rolUser
    @Column()
    puntos: number
    @Column({nullable: true})
    profileImg: string
}