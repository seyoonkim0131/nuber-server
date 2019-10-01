import { Entity, BaseEntity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm'
import User from './User'

@Entity()
class Board extends BaseEntity {
    @PrimaryColumn() no: number

    @Column({type: 'text'})
    title: string

    @Column({type: 'text'})
    body: string

    @Column({type: 'text'})
    file: string

    @OneToMany(type => User, create => create.no)
    create: User

    @CreateDateColumn()
    createDate: string

    @OneToMany(type => User, update => update.no)
    update: User
    
    @UpdateDateColumn()
    updateDate: string
}

export default Board