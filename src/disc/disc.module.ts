import { Module } from '@nestjs/common';
import { DiscService } from './disc.service';
import { PowerModule } from '../power/power.module'

@Module({
  imports: [PowerModule],
  providers: [DiscService],
  exports: [DiscService]
})
export class DiscModule {}
