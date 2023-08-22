import { Entity , Column, PrimaryGeneratedColumn} from "typeorm"

enum rolUser{
    admin = 'ADMIN',
    user = '',
    proveedor = ''
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
    edad: string
    @Column()
    rol: rolUser
    @Column()
    puntos: string
    @Column({nullable: true})
    profileImg: string
}