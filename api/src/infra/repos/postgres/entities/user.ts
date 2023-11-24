import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Question, Log, Notification } from '.'

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  public name?: string

  @Column()
  public email?: string

  @Column({ nullable: true })
  public avatar?: string

  @Column()
  public password?: string

  @CreateDateColumn({ name: 'created_at', nullable: true })
  createdAt?: Date

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt?: Date

  @OneToMany(() => Log, log => log.user, { lazy: false })
  logs?: Log[]

  @OneToMany(() => Question, question => question.user, { lazy: false })
  questions?: Question[]

  @OneToMany(() => Notification, notification => notification.user, { lazy: false })
  notifications?: Notification[]

}
