import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CreditCard, CreditCardSchema } from './schemas/creditCard.schema';
import { CreditCardController } from './creditCard.controller';
import { CreditCardService } from './creditCard.service';
import { CreditCardRepository } from './creditCard.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: CreditCard.name, schema: CreditCardSchema }]),
  ],
  controllers: [CreditCardController],
  providers: [CreditCardService, CreditCardRepository],
})
export class CreditCardModule {}
