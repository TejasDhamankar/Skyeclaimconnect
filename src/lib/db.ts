// src/lib/db.ts
import mongoose, { Connection } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB_NAME = process.env.MONGODB_DB_NAME || "equity-legal";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

let cached = global as typeof global & {
  mongoose: {
    conn: Connection | null;
    promise: Promise<typeof mongoose> | null;
  };
};

if (!cached.mongoose) {
  cached.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.mongoose.conn) return { db: cached.mongoose.conn, mongoose };

  if (!cached.mongoose.promise) {
    const opts = { bufferCommands: false } as any;
    cached.mongoose.promise = mongoose.connect(`${MONGODB_URI}/${MONGODB_DB_NAME}`, opts).then((m) => m);
  }
  try {
    const m = await cached.mongoose.promise;
    cached.mongoose.conn = m.connection;
    return { db: cached.mongoose.conn, mongoose: m };
  } catch (e) {
    cached.mongoose.promise = null;
    throw e;
  }
}

const ContactFormSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    caseType: { type: String, required: true },
    exposurePeriod: { type: String },
    medicalCondition: { type: String },
    additionalInfo: { type: String },

    // TrustedForm + metadata
    trustedFormCertUrl: { type: String },
    jornayaLeadId: { type: String },
    trustedFormClaimed: { type: Boolean },
    trustedFormClaimStatus: { type: Number },
    trustedFormClaimResponse: { type: mongoose.Schema.Types.Mixed },
    trustedFormClaimError: { type: String },
    claimedAt: { type: Date },

    ipAddress: { type: String },
    userAgent: { type: String },
    referer: { type: String },
    submittedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const ContactForm =
  mongoose.models.ContactForm || mongoose.model("ContactForm", ContactFormSchema);

const VisitorSchema = new mongoose.Schema({
  ipAddress: { type: String },
  userAgent: { type: String },
  pageViewed: { type: String, required: true },
  referrer: { type: String },
  timestamp: { type: Date, default: Date.now },
});

export const Visitor = mongoose.models.Visitor || mongoose.model("Visitor", VisitorSchema);
