import { z } from "zod"

const envSchema = z.object({
  PORT: z.string().optional().transform(Number),
  NODE_ENV: z.enum(["development", "staging", "production", "test"]),
  FRONTEND_URL: z.string().url(),
  AUTH0_ISSUER_BASE_URL: z.string().url(),
  AUTH0_AUDIENCE: z.string().min(1),
})

const parseEnvVariables = () => {
  const parsed = envSchema.safeParse(process.env)

  if (!parsed.success) {
    console.error("Invalid environment variables:", parsed.error.format())
    throw new Error("Invalid environment variables")
  }

  return parsed.data
}

export const env = parseEnvVariables()
