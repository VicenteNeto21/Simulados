import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Question } from './question'

@Entity({ name: 'status' })
export class Status {
  @PrimaryGeneratedColumn({ name: 'id' })
  id!: number

  @Column()
  public status?: string

  @OneToMany(() => Question, question => question.status, { lazy: false })
  questions?: Question[]
}
