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
import { CompanyModule } from './company/company.module';
import { StockModule } from './stocks/stock.module';
import { PriceListModule } from './price/price.module';


// Test Code Build
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://user:user@cluster0.9xmshku.mongodb.net/?retryWrites=true&w=majority',
    ),
    TodoModule,
    UserModule,
    ClientModule,
    ExpenseModule,
    ProductModule,
    InvoiceModule,
    CashInvoiceModule,
    CompanyModule,
    StockModule,
    PriceListModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
