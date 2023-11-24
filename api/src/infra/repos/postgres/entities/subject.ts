import { Entity, Column, UpdateDateColumn, CreateDateColumn, ManyToOne, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { Question } from "./question"


@Entity({name: 'subjects'})
export class Subject {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name?: string

    @OneToMany(() => Question, question => question.subject, { lazy: false })
    questions?: Question[]

    @CreateDateColumn({name: 'created_at'})
    createdAt?: Date

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt?: Date

    
}