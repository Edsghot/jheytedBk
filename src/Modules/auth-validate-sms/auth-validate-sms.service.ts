import { Injectable } from '@nestjs/common';
import twilio from 'twilio';

@Injectable()
export class AuthValidateSmsService {
    private twilioClient: twilio.Twilio;

  constructor() {
    this.twilioClient = twilio(
      'ACa9c24fdab76555907f88cc241b9a06e5', // Reemplaza con tu SID de cuenta Twilio
      '4187a59d8d22811c2ea726c0bea005e0'   // Reemplaza con tu token de autenticación Twilio
    );
  }

  async sendVerificationCode(phoneNumber: string, code: string): Promise<void> {
    try {
      await this.twilioClient.messages.create({
        body: `Tu código de verificación es: ${code}`,
        from: 'TU_NUMERO_TWILIO', // Reemplaza con tu número de Twilio
        to: phoneNumber,
      });
    } catch (error) {
      // Manejar errores en el envío de mensajes
      console.error(error.message);
      throw new Error('Error al enviar el código de verificación por SMS');
    }
  }
}
