// /src/lib/db-utils.js

import clientPromise from "./mongodb"; // or your DB client

const DB_NAME = "your_db_name"; // replace with your actual DB name

// ── Users ──────────────────────────────────────────
export async function findUserByEmail(email) {
  const client = await clientPromise;
  return client.db(DB_NAME).collection("users").findOne({ email });
}

export async function createUser(userData) {
  const client = await clientPromise;
  const result = await client.db(DB_NAME).collection("users").insertOne(userData);
  return { ...userData, _id: result.insertedId };
}

// ── Astrologers ────────────────────────────────────
export async function getAllAstrologers() {
  const client = await clientPromise;
  return client.db(DB_NAME).collection("astrologers").find({}).toArray();
}

// ── Bookings ───────────────────────────────────────
export async function getUserBookings(userId) {
  const client = await clientPromise;
  return client.db(DB_NAME).collection("bookings").find({ userId }).toArray();
}

export async function getAstrologerBookings(astrologerId) {
  const client = await clientPromise;
  return client.db(DB_NAME).collection("bookings").find({ astrologerId }).toArray();
}

export async function createBooking(bookingData) {
  const client = await clientPromise;
  const result = await client.db(DB_NAME).collection("bookings").insertOne({
    ...bookingData,
    createdAt: new Date(),
  });
  return { ...bookingData, _id: result.insertedId };
}

// ── Chats ──────────────────────────────────────────
export async function getUserChats(userId) {
  const client = await clientPromise;
  return client.db(DB_NAME).collection("chats").find({ userId }).toArray();
}

export async function createChat(chatData) {
  const client = await clientPromise;
  const result = await client.db(DB_NAME).collection("chats").insertOne({
    ...chatData,
    createdAt: new Date(),
  });
  return { ...chatData, _id: result.insertedId };
}

// ── Contact ────────────────────────────────────────
export async function createContactSubmission(formData) {
  const client = await clientPromise;
  const result = await client.db(DB_NAME).collection("contacts").insertOne({
    ...formData,
    createdAt: new Date(),
  });
  return { ...formData, _id: result.insertedId };
}

// ── Wallet ─────────────────────────────────────────
export async function getUserWallet(userId) {
  const client = await clientPromise;
  return client.db(DB_NAME).collection("wallets").findOne({ userId });
}

export async function updateWalletBalance(userId, amount) {
  const client = await clientPromise;
  return client.db(DB_NAME).collection("wallets").findOneAndUpdate(
    { userId },
    { $inc: { balance: amount } },
    { returnDocument: "after", upsert: true }
  );
}
