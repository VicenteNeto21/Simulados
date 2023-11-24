import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { User, Question } from '.'

@Entity({ name: 'notifications' })
export class Notification {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ default: false })
  evaluation?: boolean

  @Column({ default: false })
  answered?: boolean

  @CreateDateColumn({ name: 'created_at', nullable: true })
  createdAt?: Date

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt?: Date

  @ManyToOne(() => User, user => user.notifications, { cascade: false })
  @JoinColumn({ name: 'user', referencedColumnName: 'id' })
  user?: User

  @ManyToOne(() => Question, question => question.notifications, { cascade: false })
  @JoinColumn({ name: 'question', referencedColumnName: 'id' })
  question?: Question
}
