import { relations } from "drizzle-orm";
import { integer, text, boolean, pgTable, serial, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
})

export const todo = pgTable("todo", {
  id: integer("id").primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
  userId: integer("user_id").notNull().references(() => users.id)
});

export const todoRelations = relations(
    todo, ({one}) => ({
        user: one(users, {fields: [todo.userId], references: [users.id]})
    })
)

export const usersRelations = relations(
    users, ({many}) => ({
        todo: many(todo),
    })
)