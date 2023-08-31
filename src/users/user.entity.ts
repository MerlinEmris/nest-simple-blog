import { Entity, PrimaryGeneratedColumn, Column, } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length:30})
    name: string;

    @Column({type: 'varchar', length:30})
    email: string;

    // @Column({ type: 'enum', enum: ['m', 'f', 'u'] })
    // /**
    //  * m - male
    //  * f - female
    //  * u - unspecified
    //  */
    // gender: string;
}
