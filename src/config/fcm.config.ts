import { ConfigService } from '@nestjs/config';

export const getFcmConfig = (config: ConfigService) => ({
  apiKey: config.getOrThrow('FCM_API_KEY'),
  senderId: config.getOrThrow('FCM_SENDER_ID'),
});
