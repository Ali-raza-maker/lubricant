import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyController } from './company.controller';
import { Company, CompanySchema } from './entity/company.model';
import { CompanyService } from './company.service';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Company.name,
        schema: CompanySchema,
      },
    ]),
  ],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class TodoModule {}
