// import bcrypt from 'bcrypt'
import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

// const BCRYPT_ROUNDS = 10

@Entity()
class User extends BaseEntity {
    @PrimaryGeneratedColumn() no: number

    @Column({type: 'text'})
    id: string

    @Column({type: 'text'})
    name: string

    @Column({type: 'text', nullable: true})
    password: string

//     public comparePassword(password: any) : Promise<boolean> {
//         return bcrypt.compare(password, this.password)
//     }

//     @BeforeInsert()
//     @BeforeUpdate()
//     async savePassword() : Promise<void> {
//         if(this.password) {
//             const hashedPassword = await this.hashPassword(this.password)
//             this.password = hashedPassword
//         }
//     }
//     private hashPassword(password: string) : Promise<string> {
//         return bcrypt.hash(password, BCRYPT_ROUNDS)
//     }
}

export default User