import { z } from 'nestjs-zod/z';
import { createZodDto } from 'nestjs-zod';

export const UserSchema = z.object({
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

export class CreateUserDTO extends createZodDto(UserSchema) {}

export const ProfileUserDTO = UserSchema.omit({ password: true });
export type ProfileUserDTO = z.infer<typeof ProfileUserDTO>;
