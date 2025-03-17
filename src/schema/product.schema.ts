import { z } from 'zod'

const AttributeSchema = z.object({
  ram: z.string().optional(),
  color: z.string().optional(),
  storage: z.string().optional()
})

const ProductVariantSchema = z.object({
  variant_id: z.number(),
  product_id: z.number(),
  variant_name: z.string(),
  variant_price: z.number(),
  product_image_main: z.string().optional(),
  product_image_hover: z.string().optional(),
  product_status: z.string(),
  rating: z.number().optional(),
  attributes: AttributeSchema.optional(),
  update_at: z.string(),
  created_at: z.string()
})

const CategorySchema = z.object({
  category_id: z.number(),
  category_name: z.string()
})

const BrandSchema = z.object({
  brand_id: z.number(),
  brand_name: z.string()
})

const ProductSchema = z.object({
  product_id: z.number(),
  product_name: z.string(),
  description: z.string(),
  category_id: z.number(),
  brand_id: z.number(),
  product_status: z.string(),
  update_at: z.string(),
  created_at: z.string(),
  categories: CategorySchema,
  brands: BrandSchema,
  product_variants: z.array(ProductVariantSchema)
})

export const ProductListSchema = z.object({
  data: z.array(ProductSchema),
  message: z.string(),
  statusCode: z.number(),
  date: z.string()
})

export type ProductType = z.infer<typeof ProductSchema>
export type ProductVariantType = z.infer<typeof ProductVariantSchema>
export type ProductListType = z.infer<typeof ProductListSchema>
