// item.entity.ts
import { Entity, Column } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity({ name: "user" })
export class User extends BaseEntity {
  // (+) Name of user
  @Column({ type: "varchar", length: 300 })
  name: string;

  // (+) Surname of user
  @Column({ type: "varchar", length: 300 })
  surname: string;

  // (+) Email of user
  @Column({ type: "varchar", length: 300 })
  email: string;

  // (+) Password of user which will be saved in SHA-256 format
  @Column({ type: "varchar", length: 300 })
  password: string;
}
