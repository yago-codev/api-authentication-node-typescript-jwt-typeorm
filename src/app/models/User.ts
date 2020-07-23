import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  email: string

  @Column()
  password: string
}