import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET() {
    try {
      const workExperience = await prisma.workExperience.findMany();
      return NextResponse.json(workExperience);
    } catch (error) {
      console.error("Erro ao buscar workExperience:", error);
      return NextResponse.json({ error: "Erro ao buscar workExperience" }, { status: 500 });
    }
  }