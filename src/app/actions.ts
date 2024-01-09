"use server";

import { db } from "@/lib/db/client";

export async function joinHackathon(email: string) {
  const existingUser = await db.hackathon.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return {
      status: 400,
      message: "You're already registered!",
    };
  } else {
    const user = await db.hackathon.create({
      data: {
        email,
      },
    });
    if (user) {
      return {
        status: 200,
        message: "You have been registered successfully !",
      };
    }
  }
}
