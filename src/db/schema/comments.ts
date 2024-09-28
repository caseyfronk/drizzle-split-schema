import { integer, text, sqliteTable } from "drizzle-orm/sqlite-core";
import { createId } from "@paralleldrive/cuid2";
import { relations } from "drizzle-orm";

import posts from "./posts";

const comments = sqliteTable("comments", {
  id: text("id", { length: 128 })
    .primaryKey()
    .$default(() => createId()),
  content: text("content").notNull(),
  postId: text("post_id", { length: 128 })
    .notNull()
    .references(() => posts.id, { onDelete: "cascade", onUpdate: "cascade" }),
});

export const commentsRelations = relations(comments, ({ one }) => ({
  post: one(posts, { fields: [comments.postId], references: [posts.id] }),
}));

export default comments;
