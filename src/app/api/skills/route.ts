import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET() {
    try {
      const skills = await prisma.skills.findMany();
      return NextResponse.json(skills);
    } catch (error) {
      console.error("Erro ao buscar skills:", error);
      return NextResponse.json({ error: "Erro ao buscar skills" }, { status: 500 });
    }
  }