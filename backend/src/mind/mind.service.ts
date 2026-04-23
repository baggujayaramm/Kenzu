import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MindService {
  constructor(private prisma: PrismaService) {}

  async getMeditations() {
    return [
      { id: '1', title: 'Deep Focus', durationMintues: 10, type: 'guided' },
      { id: '2', title: 'Wind Down', durationMintues: 15, type: 'ambient' },
    ];
  }
}
