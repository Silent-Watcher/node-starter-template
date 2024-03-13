import { config as configEnv } from 'dotenv-safe';
import { z } from 'zod';
import { fromZodError } from 'zod-validation-error';
import globals from '../common/configs/globals';

configEnv({ path: globals.ENV_FILE_PATH });

const environmentSchema = z.object({
	NODE_ENV: z.string(),
});

const parsedResult = environmentSchema.safeParse(process.env);

if (!parsedResult.success) {
	console.error(fromZodError(parsedResult.error).message);
	throw new Error('There is an error with the environment variables');
}

type EnvVarSchemaType = z.infer<typeof environmentSchema>;

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace NodeJS {
		interface ProcessEnv extends EnvVarSchemaType {}
	}
}

export const environmentVariables = parsedResult.data;
