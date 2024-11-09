import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET() {
    try {
      const education = await prisma.education.findMany();
      return NextResponse.json(education);
    } catch (error) {
      console.error("Erro ao buscar education:", error);
      return NextResponse.json({ error: "Erro ao buscar education" }, { status: 500 });
    }
  }