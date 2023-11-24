import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Status, User, Option, Notification } from '.'
import { Subject } from './subject'

@Entity({ name: 'questions' })
export class Question {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  statement?: string

  @Column()
  type?: 'OBJETIVA' | 'ABCD' | 'V/F'

  @Column({ default: false })
  denunciation?: boolean

  @CreateDateColumn({ name: 'created_at', nullable: true })
  createdAt?: Date

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt?: Date

  @ManyToOne(() => User, user => user.questions, { cascade: false })
  @JoinColumn({ name: 'user', referencedColumnName: 'id' })
  user?: User

  @ManyToOne(() => Status, status => status.questions, { cascade: false })
  @JoinColumn({ name: 'status', referencedColumnName: 'id' })
  status?: Status

  @OneToMany(() => Option, question => question.question, { lazy: false })
  options?: Option[]

  @OneToMany(() => Notification, question => question.question, { lazy: false })
  notifications?: Notification[]

  
  @ManyToOne(() => Subject, subject => subject.questions, { onDelete: 'CASCADE', onUpdate: 'CASCADE', cascade: true, nullable: false })
  @JoinColumn({ name: 'id_subject', referencedColumnName: 'id' })
  subject?: Subject
}
