const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const API_URL = `${SUPABASE_URL}/functions/v1/mongodb-proxy`;

interface MongoResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

async function mongoRequest<T = unknown>(payload: {
  action: string;
  database: string;
  collection: string;
  filter?: Record<string, unknown>;
  document?: Record<string, unknown>;
  update?: Record<string, unknown>;
  pipeline?: Record<string, unknown>[];
  options?: Record<string, unknown>;
}): Promise<T> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify(payload),
  });

  const result: MongoResponse<T> = await response.json();

  if (!result.success) {
    throw new Error(result.error || "MongoDB request failed");
  }

  return result.data as T;
}

export const mongoDb = {
  find<T = unknown>(
    database: string,
    collection: string,
    filter: Record<string, unknown> = {},
    options: Record<string, unknown> = {}
  ) {
    return mongoRequest<{ documents: T[] }>({
      action: "find",
      database,
      collection,
      filter,
      options,
    }).then((r) => r.documents);
  },

  findOne<T = unknown>(
    database: string,
    collection: string,
    filter: Record<string, unknown> = {},
    options: Record<string, unknown> = {}
  ) {
    return mongoRequest<{ document: T | null }>({
      action: "findOne",
      database,
      collection,
      filter,
      options,
    }).then((r) => r.document);
  },

  insertOne(
    database: string,
    collection: string,
    document: Record<string, unknown>
  ) {
    return mongoRequest({
      action: "insertOne",
      database,
      collection,
      document,
    });
  },

  updateOne(
    database: string,
    collection: string,
    filter: Record<string, unknown>,
    update: Record<string, unknown>,
    options: Record<string, unknown> = {}
  ) {
    return mongoRequest({
      action: "updateOne",
      database,
      collection,
      filter,
      update,
      options,
    });
  },

  deleteOne(
    database: string,
    collection: string,
    filter: Record<string, unknown>
  ) {
    return mongoRequest({
      action: "deleteOne",
      database,
      collection,
      filter,
    });
  },

  aggregate<T = unknown>(
    database: string,
    collection: string,
    pipeline: Record<string, unknown>[],
    options: Record<string, unknown> = {}
  ) {
    return mongoRequest<{ documents: T[] }>({
      action: "aggregate",
      database,
      collection,
      pipeline,
      options,
    }).then((r) => r.documents);
  },

  countDocuments(
    database: string,
    collection: string,
    filter: Record<string, unknown> = {},
    options: Record<string, unknown> = {}
  ) {
    return mongoRequest<{ count: number }>({
      action: "countDocuments",
      database,
      collection,
      filter,
      options,
    }).then((r) => r.count);
  },
};
