// contentlayer.config.js
import {
  defineNestedType,
  defineDocumentType,
  makeSource
} from "contentlayer/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "the title of the post ",
      required: true
    },
    excerpt: {
      type: "string",
      description: "the description of the post ",
      required: true
    },
    date: {
      type: "date",
      description: "the date of the post ",
      required: true
    },
    image: {
      type: "string",
      description: "the  featured image of the post ",
      required: true
    },
    author: {
      type: "string",
      description: "the  author image of the post ",
      required: true
    },
    categories: {
      type: "list",
      of: Category,
      description: "the  categories image of the post ",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `${doc._raw.flattenedPath}`
    }
  }
}));
var Category = defineNestedType(() => ({
  name: "Category",
  fields: {
    title: {
      type: "string",
      description: "The title of the category",
      required: true
    }
  }
}));
var Document = defineDocumentType(() => ({
  name: "Document",
  filePathPattern: `document/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the document",
      require: true
    },
    // excerpt: {
    //   type: 'string',
    //   description: 'the description of the document ',
    //   required: true,
    // },
    date: {
      type: "date",
      description: "The date of the document",
      require: true
    },
    author: {
      type: "string",
      description: "the  author image of the document ",
      required: true
    },
    description: {
      type: "string",
      description: "the  description content of the document ",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Document]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-T2NIYVX6.mjs.map
