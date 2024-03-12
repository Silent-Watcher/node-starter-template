import { config as configEnv } from 'dotenv-safe';

function bootstrap() {
	try {
		configEnv({ path: '../.env' });
	} catch (error) {
		console.error((error as Error).message);
		process.exit(1);
	}
}
bootstrap();
