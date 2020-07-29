export const config = {
  'username': POSTGRES_USERNAME,
  'password': POSTGRES_PASSWORD,
  'database': POSTGRES_DB,
  'host': POSTGRES_HOST,
  'dialect': 'postgres',
  'aws_region': AWS_REGION,
  'aws_profile': AWS_PROFILE,
  'aws_media_bucket': AWS_BUCKET,
  'url': URL,
  'jwt': {
    'secret': JWT_SECRET,
  },
};
