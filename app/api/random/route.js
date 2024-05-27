const { NextResponse } = require('next/server');

export async function GET() {
  return NextResponse.json({
    random: Math.floor(Math.random() * 100 + 100),
  });
}
