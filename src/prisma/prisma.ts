import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();
const config = {
  dbHost: configService.get<string>('MYSQL_HOST'),
  dbName: configService.get<string>('MYSQL_DATABASE'),
  dbPassword: configService.get<string>('MYSQL_PASSWORD'),
  dbPort: configService.get<string>('MYSQL_PORT'),
  dbType: 'mysql',
  dbUser: configService.get<string>('MYSQL_USER'),
  gcpID: configService.get<string>('GCP_ID'),
  cloudRegion: configService.get<string>('CLOUD_REGION'),
  imageName: configService.get<string>('IMAGE_NAME'),
};

const url = `mysql://${config.dbUser}:${config.dbPassword}@localhost/${config.dbName}?socket=/cloudsql/${config.gcpID}:${config.cloudRegion}:${config.imageName}-database`;

process.env.DATABASE_URL = url;
