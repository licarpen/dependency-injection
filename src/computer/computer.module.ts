import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller';
import { CpuModule} from '../cpu/cpu.module'
import { DiscModule } from '../disc/disc.module'

@Module({
  imports: [CpuModule, DiscModule],
  controllers: [ComputerController]
})
export class ComputerModule {}
