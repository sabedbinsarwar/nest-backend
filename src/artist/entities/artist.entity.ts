<<<<<<< HEAD
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Art } from 'src/modules/art/entities/art.entity';

@Entity('artist')
export class Artist  {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', unique: true })
  username: string;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar' })
  passwordHash: string;

  @Column({ type: 'text', nullable: true })
  bio?: string | null;

  @OneToMany(() => Art, art => art.artist)
  arts: Art[];
=======
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Art } from 'src/modules/art/entities/art.entity';

@Entity('artist')
export class Artist  {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', unique: true })
  username: string;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar' })
  passwordHash: string;

  @Column({ type: 'text', nullable: true })
  bio?: string | null;

  @OneToMany(() => Art, art => art.artist)
  arts: Art[];
>>>>>>> 52ebfe7e64a0aa28a39f7f2ba31071b6d8378541
}