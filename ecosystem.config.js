module.exports = {
  apps: [
    {
      name: 'strapi',
      cwd: '/home/ubuntu/strapi',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        DATABASE_HOST: 'RDS endpoint',
        DATABASE_PORT: '5432',
        DATABASE_NAME: 'strapi',
        DATABASE_USERNAME: 'db user',
        DATABASE_PASSWORD: 'db pass',
        AWS_ACCESS_KEY_ID: 'access key',
        AWS_ACCESS_SECRET: 'access secret',
        AWS_REGION: 'us-east-1',
        AWS_BUCKET_NAME: 'S3 bucket',
      },
    },
  ],
};