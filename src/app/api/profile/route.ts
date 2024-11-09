import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET() {
    try {
      const profile = await prisma.profile.findMany();
      return NextResponse.json(profile);
    } catch (error) {
      console.error("Erro ao buscar profiles:", error);
      return NextResponse.json({ error: "Erro ao buscar profiles" }, { status: 500 });
    }
  }