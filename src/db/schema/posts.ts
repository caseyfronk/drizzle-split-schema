import { text, sqliteTable } from "drizzle-orm/sqlite-core";
import { createId } from "@paralleldrive/cuid2";
import { relations } from "drizzle-orm";

import comments from "./comments";

const posts = sqliteTable("posts", {
  id: text("id", { length: 128 })
    .primaryKey()
    .$defaultFn(() => createId()),
  content: text("content").notNull(),
});

export const postsRelations = relations(posts, ({ many }) => ({
  comments: many(comments),
}));

export default posts;
