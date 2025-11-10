import { defineType, defineField } from "sanity";

export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "intro",
      title: "Intro",
      type: "string",
      description:
        "A short introduction or summary that will appear as a preview of the post.",
      validation: (Rule) => Rule.required().min(40).max(80),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: "Upload a featured image that represents your post.",
      options: {
        hotspot: true,
      },
      fields: [{ name: "alt", type: "string", title: "Alt text" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "blockContent",
      description: "Main body of the post. You can add text, images or videos",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "authors",
      title: "Authors",
      type: "array",
      validation: (Rule) => Rule.required().min(1),
      of: [{ type: "reference", to: [{ type: "author" }] }],
    }),
    defineField({
      type: "array",
      title: "Files",
      name: "files",
      of: [
        {
          type: "file",

          fields: [
            {
              name: "name",
              type: "string",
              title: "Name",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              type: "string",
              title: "Description",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    }),
  ],
});
