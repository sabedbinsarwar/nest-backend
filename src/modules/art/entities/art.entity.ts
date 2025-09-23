<<<<<<< HEAD
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Artist } from 'src/artist/entities/artist.entity';
import { Admin } from 'src/admin/entities/admin.entity';

@Entity('art')
export class Art {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar' })
  style: string;

  @Column({ type: 'text', nullable: true })
  description?: string | null;

  @Column({ type: 'decimal' })
  price: number;

  @ManyToOne(() => Artist, artist => artist.arts, { onDelete: 'CASCADE' })
  artist: Artist;

  @Column({ type: 'text', nullable: true })
  imageUrl: string | null; 


  @ManyToOne(() => Admin, admin => admin.art, { nullable: true, onDelete: 'SET NULL' })
  admin?: Admin | null;
=======
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Artist } from 'src/artist/entities/artist.entity';
import { Admin } from 'src/admin/entities/admin.entity';

@Entity('art')
export class Art {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar' })
  style: string;

  @Column({ type: 'text', nullable: true })
  description?: string | null;

  @Column({ type: 'decimal' })
  price: number;

  @ManyToOne(() => Artist, artist => artist.arts, { onDelete: 'CASCADE' })
  artist: Artist;

  @Column({ type: 'text', nullable: true })
  imageUrl: string | null; 


  @ManyToOne(() => Admin, admin => admin.art, { nullable: true, onDelete: 'SET NULL' })
  admin?: Admin | null;
>>>>>>> 52ebfe7e64a0aa28a39f7f2ba31071b6d8378541
}