import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Question } from '.'

@Entity({ name: 'options' })
export class Option {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  option?: string


  @ManyToOne(() => Question, question => question.options, { cascade: false })
  @JoinColumn({ name: 'question', referencedColumnName: 'id' })
  question?: Question
}
