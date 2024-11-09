import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET() {
    try {
      const certifications = await prisma.certifications.findMany();
      return NextResponse.json(certifications);
    } catch (error) {
      console.error("Erro ao buscar certifications:", error);
      return NextResponse.json({ error: "Erro ao buscar certifications" }, { status: 500 });
    }
  }