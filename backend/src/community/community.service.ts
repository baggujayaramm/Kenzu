import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CommunityService {
  constructor(private readonly prisma: PrismaService) {}

  async getCircles(userId: string) {
    // Private circles — invite-only social groups
    return [
      {
        id: 'c1',
        name: 'Silicon Valley Founders',
        members: 12,
        avatar: '🚀',
        lastActivity: '2h ago',
      },
      {
        id: 'c2',
        name: 'Wellness Leaders',
        members: 8,
        avatar: '🧘',
        lastActivity: '5h ago',
      },
      {
        id: 'c3',
        name: 'Investment Club',
        members: 15,
        avatar: '📈',
        lastActivity: '1d ago',
      },
    ];
  }

  async getEvents(userId: string) {
    // Curated events relevant to user interests
    return [
      {
        id: 'e1',
        title: 'Future of AI — Private Dinner',
        date: '2026-05-15',
        location: 'The Leela Palace, Bangalore',
        attendees: 24,
        exclusive: true,
      },
      {
        id: 'e2',
        title: 'Morning Breathwork — Rooftop Session',
        date: '2026-05-08',
        location: 'Soho House, Mumbai',
        attendees: 12,
        exclusive: false,
      },
    ];
  }

  async getMentors(userId: string) {
    // Mentorship network
    return [
      {
        id: 'm1',
        name: 'Arjun Mehta',
        title: 'Serial Entrepreneur & Angel Investor',
        expertise: ['Startups', 'Fundraising', 'Leadership'],
        rating: 4.9,
      },
      {
        id: 'm2',
        name: 'Dr. Priya Sharma',
        title: 'Wellness Coach & Neuroscientist',
        expertise: ['Mindfulness', 'Peak Performance', 'Stress Management'],
        rating: 5.0,
      },
    ];
  }
}
