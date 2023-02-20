import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { TodoModule } from './task/task.module';
import { UserModule } from './user/user.module';
import { ClientModule } from './client/client.module';
import { ExpenseModule } from './expense/expense.module';
import { ProductModule } from './product/product.module';
import { InvoiceModule } from './invoice/invoice.module';
import { CashInvoiceModule } from './cashInvoice/cash-invoice.module';
import { Company } from './company/entity/company.model';
import { CompanyModule } from './company/company.module';

// Test Code Build
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://ali:ali@cluster0.kznlky8.mongodb.net/User?retryWrites=true&w=majority',
    ),
    TodoModule,
    UserModule,
    ClientModule,
    ExpenseModule,
    ProductModule,
    InvoiceModule,
    CashInvoiceModule,
    CompanyModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
