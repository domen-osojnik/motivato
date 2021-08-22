import {
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm";

export abstract class BaseEntity {
  // (+) Basic ID which every entity will have.
  @PrimaryGeneratedColumn("uuid")
  id: string;

  // (+) If we delete anything, we don't want to completely erase the record.
  @Column({ type: "boolean", default: true })
  active: boolean;

  // (+) Time of insertion of column
  @CreateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  SysInserted: Date;

  // (+) Time of update of column
  @UpdateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  SysUpdated: Date;
}
