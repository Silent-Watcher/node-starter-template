import path from 'node:path';

export default Object.freeze({
	PORT: process.env.PORT,
	ENV_FILE_PATH: path.join(process.cwd(), '.env'),
});
