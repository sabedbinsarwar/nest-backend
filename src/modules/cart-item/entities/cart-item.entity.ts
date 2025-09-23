<<<<<<< HEAD
import { Art } from "src/modules/art/entities/art.entity";
import { Cart } from "src/modules/cart/entities/cart.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('cartItem')
export class CartItem {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'int'})
    quantity: number;

    @Column({ type: 'decimal' })
    price: number;

    @ManyToOne(() => Art)
    art: Art;

    @ManyToOne(() => Cart, cart => cart.cartItems, {cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    @JoinColumn()
    cart: Cart;
}

=======
import { Art } from "src/modules/art/entities/art.entity";
import { Cart } from "src/modules/cart/entities/cart.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('cartItem')
export class CartItem {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'int'})
    quantity: number;

    @Column({ type: 'decimal' })
    price: number;

    @ManyToOne(() => Art)
    art: Art;

    @ManyToOne(() => Cart, cart => cart.cartItems, {cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    @JoinColumn()
    cart: Cart;
}

>>>>>>> 52ebfe7e64a0aa28a39f7f2ba31071b6d8378541
