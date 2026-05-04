import { MongoClient, ObjectId } from "npm:mongodb@6.12.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface MongoRequest {
  action: "find" | "findOne" | "insertOne" | "updateOne" | "deleteOne" | "aggregate" | "countDocuments" | "ping";
  database: string;
  collection: string;
  filter?: Record<string, unknown>;
  document?: Record<string, unknown>;
  update?: Record<string, unknown>;
  pipeline?: Record<string, unknown>[];
  options?: Record<string, unknown>;
}

function serializeDoc(doc: Record<string, unknown>): Record<string, unknown> {
  if (!doc) return doc;
  const result = { ...doc };
  if (result._id instanceof ObjectId) {
    result._id = (result._id as ObjectId).toString();
  }
  for (const key of Object.keys(result)) {
    if (result[key] && typeof result[key] === "object" && !(result[key] instanceof Date)) {
      result[key] = serializeDoc(result[key] as Record<string, unknown>);
    }
  }
  return result;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const MONGO_URI = Deno.env.get("MONGO_URI");
    if (!MONGO_URI) {
      throw new Error("MONGO_URI environment variable is not set. Please configure it in your Supabase project secrets.");
    }

    if (MONGO_URI.includes("127.0.0.1") || MONGO_URI.includes("localhost")) {
      throw new Error("MONGO_URI points to a local address which is not reachable from Supabase Edge Functions. Please use a MongoDB Atlas connection string (mongodb+srv://...).");
    }

    const body: MongoRequest = await req.json();
    const { action, database, collection, filter = {}, document, update, pipeline, options = {} } = body;

    const client = new MongoClient(MONGO_URI);
    await client.connect();

    try {
      if (action === "ping") {
        const adminDb = client.db("admin");
        await adminDb.command({ ping: 1 });
        return new Response(JSON.stringify({ success: true, data: { status: "ok" } }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      const db = client.db(database);
      const coll = db.collection(collection);
      let result: unknown;

      switch (action) {
        case "find": {
          const cursor = coll.find(filter, options);
          const docs = await cursor.toArray();
          result = { documents: docs.map(serializeDoc) };
          break;
        }
        case "findOne": {
          const doc = await coll.findOne(filter, options);
          result = { document: doc ? serializeDoc(doc as Record<string, unknown>) : null };
          break;
        }
        case "insertOne": {
          if (!document) throw new Error("document is required for insertOne");
          const insertResult = await coll.insertOne(document);
          result = { insertedId: insertResult.insertedId.toString(), acknowledged: insertResult.acknowledged };
          break;
        }
        case "updateOne": {
          if (!update) throw new Error("update is required for updateOne");
          const updateResult = await coll.updateOne(filter, update, options);
          result = {
            matchedCount: updateResult.matchedCount,
            modifiedCount: updateResult.modifiedCount,
            acknowledged: updateResult.acknowledged,
          };
          break;
        }
        case "deleteOne": {
          const deleteResult = await coll.deleteOne(filter);
          result = {
            deletedCount: deleteResult.deletedCount,
            acknowledged: deleteResult.acknowledged,
          };
          break;
        }
        case "aggregate": {
          if (!pipeline) throw new Error("pipeline is required for aggregate");
          const aggCursor = coll.aggregate(pipeline, options);
          const docs = await aggCursor.toArray();
          result = { documents: docs.map(serializeDoc) };
          break;
        }
        case "countDocuments": {
          const count = await coll.countDocuments(filter, options);
          result = { count };
          break;
        }
        default:
          throw new Error(`Unknown action: ${action}`);
      }

      return new Response(JSON.stringify({ success: true, data: result }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    } finally {
      await client.close();
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ success: false, error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
