import { PrismaClient } from "@prisma/client";

// Assurez-vous que vous importez PrismaClient du bon chemin
declare global {
  var prisma: PrismaClient;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  // Initialisez une nouvelle instance de PrismaClient directement
  prisma = new PrismaClient();
} else {
  // Si nous sommes en dehors de la production, utilisez une instance globale pour éviter les fuites de mémoire
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
