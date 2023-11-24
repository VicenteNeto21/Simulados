import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'error_logs' })
export class ErrorLog {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  message?: string

  @CreateDateColumn({ name: 'created_at', nullable: true })
  createdAt?: Date
}
