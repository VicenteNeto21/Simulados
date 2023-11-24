import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from '.'

@Entity({ name: 'logs' })
export class Log {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  message!: string

  @Column({ nullable: true })
  origin!: string

  @Column({ default: false })
  type?: string

  @CreateDateColumn({ name: 'created_at', nullable: true })
  createdAt?: Date

  @ManyToOne(() => User, user => user.logs, { cascade: false })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user?: User
}
