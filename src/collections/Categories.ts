import { CollectionConfig, FieldHook } from 'payload'
const formatSlug =
  (fallback: string): FieldHook =>
  ({ value, originalDoc, data }) => {
    if (typeof value === 'string') {
      return value.replace(/\s+/g, '-').toLowerCase()
    }
    const fallbackData = data?.[fallback] || originalDoc?.[fallback]
    if (fallbackData && typeof fallbackData === 'string') {
      return fallbackData.replace(/\s+/g, '-').toLowerCase()
    }
  }
const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    group: 'ecommerce',
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'url',
      type: 'text',
    },
    {
      name: 'slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [formatSlug('name')],
      },
    },
  ],
}

export default Categories
