<<<<<<< HEAD
import { CartItem } from "src/modules/cart-item/entities/cart-item.entity";
import { Customer } from "src/modules/customer/entities/customer.entity";
import { Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('cart')
export class Cart {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => Customer, customer => customer.cart)
    @JoinColumn()
    customer: Customer

    @OneToMany(() => CartItem, cartItem => cartItem.cart, {nullable: true})
    cartItems?: CartItem[]

    getTotal() : number {
        return this.cartItems?.reduce((total, item) => total + (item.quantity * item.price), 0) ?? 0;
    }
}
=======
import { CartItem } from "src/modules/cart-item/entities/cart-item.entity";
import { Customer } from "src/modules/customer/entities/customer.entity";
import { Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('cart')
export class Cart {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => Customer, customer => customer.cart)
    @JoinColumn()
    customer: Customer

    @OneToMany(() => CartItem, cartItem => cartItem.cart, {nullable: true})
    cartItems?: CartItem[]

    getTotal() : number {
        return this.cartItems?.reduce((total, item) => total + (item.quantity * item.price), 0) ?? 0;
    }
}
>>>>>>> 52ebfe7e64a0aa28a39f7f2ba31071b6d8378541
