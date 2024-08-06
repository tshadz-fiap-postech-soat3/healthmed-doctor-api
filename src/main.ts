import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://your-allowed-origin.com'], // Substitua pelo domínio que você deseja permitir
    credentials: true, // Habilitar o suporte a credenciais
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos HTTP permitidos
    allowedHeaders: 'Content-Type, Accept', // Cabeçalhos permitidos
  });
  // Configurar helmet para adicionar cabeçalhos de segurança
  app.use(helmet());

  // Configurar CSP usando helmet
  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", 'https://trusted-cdn.com'],
        styleSrc: ["'self'", 'https://trusted-cdn.com'],
        imgSrc: ["'self'", 'https://images.example.com'],
        connectSrc: ["'self'", 'https://api.example.com'],
        fontSrc: ["'self'", 'https://fonts.example.com'],
        objectSrc: ["'none'"],
        frameSrc: ["'none'"],
        upgradeInsecureRequests: [], // Para forçar a HTTPS
      },
    }),
  );
  await app.listen(8080);
}
bootstrap();
