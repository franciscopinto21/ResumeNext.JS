import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET() {
    try {
      const languages = await prisma.languages.findMany();
      return NextResponse.json(languages);
    } catch (error) {
      console.error("Erro ao buscar languages:", error);
      return NextResponse.json({ error: "Erro ao buscar languages" }, { status: 500 });
    }
  }