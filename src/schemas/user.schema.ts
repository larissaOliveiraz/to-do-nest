import { z } from 'nestjs-zod/z';
import { createZodDto } from 'nestjs-zod';

export const UserSchema = z.object({
  id: z.string(),
  name: z.string({
    required_error: 'Name is required.',
  }),
  username: z.string({
    required_error: 'Username is required.',
  }),
  email: z
    .string({
      required_error: 'Email is required.',
    })
    .email(),
  password: z.string({
    required_error: 'Password is required.',
  }),
});

export const UserSchemaWithoutId = UserSchema.omit({ id: true });
export class CreateUserDTO extends createZodDto(UserSchemaWithoutId) {}

export const ProfileUserDTO = UserSchema.omit({ password: true });
export type ProfileUserDTO = z.infer<typeof ProfileUserDTO>;
