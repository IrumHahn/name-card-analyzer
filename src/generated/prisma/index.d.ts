
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model BusinessCard
 * 
 */
export type BusinessCard = $Result.DefaultSelection<Prisma.$BusinessCardPayload>
/**
 * Model MessageTemplate
 * 
 */
export type MessageTemplate = $Result.DefaultSelection<Prisma.$MessageTemplatePayload>
/**
 * Model MessageHistory
 * 
 */
export type MessageHistory = $Result.DefaultSelection<Prisma.$MessageHistoryPayload>
/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model Settings
 * 
 */
export type Settings = $Result.DefaultSelection<Prisma.$SettingsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BusinessCards
 * const businessCards = await prisma.businessCard.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more BusinessCards
   * const businessCards = await prisma.businessCard.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.businessCard`: Exposes CRUD operations for the **BusinessCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessCards
    * const businessCards = await prisma.businessCard.findMany()
    * ```
    */
  get businessCard(): Prisma.BusinessCardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messageTemplate`: Exposes CRUD operations for the **MessageTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageTemplates
    * const messageTemplates = await prisma.messageTemplate.findMany()
    * ```
    */
  get messageTemplate(): Prisma.MessageTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messageHistory`: Exposes CRUD operations for the **MessageHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageHistories
    * const messageHistories = await prisma.messageHistory.findMany()
    * ```
    */
  get messageHistory(): Prisma.MessageHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.settings`: Exposes CRUD operations for the **Settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.settings.findMany()
    * ```
    */
  get settings(): Prisma.SettingsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    BusinessCard: 'BusinessCard',
    MessageTemplate: 'MessageTemplate',
    MessageHistory: 'MessageHistory',
    UserProfile: 'UserProfile',
    Settings: 'Settings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "businessCard" | "messageTemplate" | "messageHistory" | "userProfile" | "settings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      BusinessCard: {
        payload: Prisma.$BusinessCardPayload<ExtArgs>
        fields: Prisma.BusinessCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCardPayload>
          }
          findFirst: {
            args: Prisma.BusinessCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCardPayload>
          }
          findMany: {
            args: Prisma.BusinessCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCardPayload>[]
          }
          create: {
            args: Prisma.BusinessCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCardPayload>
          }
          createMany: {
            args: Prisma.BusinessCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessCardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCardPayload>[]
          }
          delete: {
            args: Prisma.BusinessCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCardPayload>
          }
          update: {
            args: Prisma.BusinessCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCardPayload>
          }
          deleteMany: {
            args: Prisma.BusinessCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusinessCardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCardPayload>[]
          }
          upsert: {
            args: Prisma.BusinessCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCardPayload>
          }
          aggregate: {
            args: Prisma.BusinessCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusinessCard>
          }
          groupBy: {
            args: Prisma.BusinessCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessCardCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessCardCountAggregateOutputType> | number
          }
        }
      }
      MessageTemplate: {
        payload: Prisma.$MessageTemplatePayload<ExtArgs>
        fields: Prisma.MessageTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload>
          }
          findFirst: {
            args: Prisma.MessageTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload>
          }
          findMany: {
            args: Prisma.MessageTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload>[]
          }
          create: {
            args: Prisma.MessageTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload>
          }
          createMany: {
            args: Prisma.MessageTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload>[]
          }
          delete: {
            args: Prisma.MessageTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload>
          }
          update: {
            args: Prisma.MessageTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload>
          }
          deleteMany: {
            args: Prisma.MessageTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload>[]
          }
          upsert: {
            args: Prisma.MessageTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload>
          }
          aggregate: {
            args: Prisma.MessageTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessageTemplate>
          }
          groupBy: {
            args: Prisma.MessageTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<MessageTemplateCountAggregateOutputType> | number
          }
        }
      }
      MessageHistory: {
        payload: Prisma.$MessageHistoryPayload<ExtArgs>
        fields: Prisma.MessageHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageHistoryPayload>
          }
          findFirst: {
            args: Prisma.MessageHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageHistoryPayload>
          }
          findMany: {
            args: Prisma.MessageHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageHistoryPayload>[]
          }
          create: {
            args: Prisma.MessageHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageHistoryPayload>
          }
          createMany: {
            args: Prisma.MessageHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageHistoryPayload>[]
          }
          delete: {
            args: Prisma.MessageHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageHistoryPayload>
          }
          update: {
            args: Prisma.MessageHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageHistoryPayload>
          }
          deleteMany: {
            args: Prisma.MessageHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageHistoryPayload>[]
          }
          upsert: {
            args: Prisma.MessageHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageHistoryPayload>
          }
          aggregate: {
            args: Prisma.MessageHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessageHistory>
          }
          groupBy: {
            args: Prisma.MessageHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<MessageHistoryCountAggregateOutputType> | number
          }
        }
      }
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      Settings: {
        payload: Prisma.$SettingsPayload<ExtArgs>
        fields: Prisma.SettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findFirst: {
            args: Prisma.SettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findMany: {
            args: Prisma.SettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          create: {
            args: Prisma.SettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          createMany: {
            args: Prisma.SettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          delete: {
            args: Prisma.SettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          update: {
            args: Prisma.SettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          deleteMany: {
            args: Prisma.SettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          upsert: {
            args: Prisma.SettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          aggregate: {
            args: Prisma.SettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettings>
          }
          groupBy: {
            args: Prisma.SettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SettingsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    businessCard?: BusinessCardOmit
    messageTemplate?: MessageTemplateOmit
    messageHistory?: MessageHistoryOmit
    userProfile?: UserProfileOmit
    settings?: SettingsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BusinessCardCountOutputType
   */

  export type BusinessCardCountOutputType = {
    messageHistory: number
  }

  export type BusinessCardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messageHistory?: boolean | BusinessCardCountOutputTypeCountMessageHistoryArgs
  }

  // Custom InputTypes
  /**
   * BusinessCardCountOutputType without action
   */
  export type BusinessCardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCardCountOutputType
     */
    select?: BusinessCardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusinessCardCountOutputType without action
   */
  export type BusinessCardCountOutputTypeCountMessageHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageHistoryWhereInput
  }


  /**
   * Count Type MessageTemplateCountOutputType
   */

  export type MessageTemplateCountOutputType = {
    messageHistory: number
  }

  export type MessageTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messageHistory?: boolean | MessageTemplateCountOutputTypeCountMessageHistoryArgs
  }

  // Custom InputTypes
  /**
   * MessageTemplateCountOutputType without action
   */
  export type MessageTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplateCountOutputType
     */
    select?: MessageTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MessageTemplateCountOutputType without action
   */
  export type MessageTemplateCountOutputTypeCountMessageHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model BusinessCard
   */

  export type AggregateBusinessCard = {
    _count: BusinessCardCountAggregateOutputType | null
    _min: BusinessCardMinAggregateOutputType | null
    _max: BusinessCardMaxAggregateOutputType | null
  }

  export type BusinessCardMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    imagePath: string | null
    companyName: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    notes: string | null
  }

  export type BusinessCardMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    imagePath: string | null
    companyName: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    notes: string | null
  }

  export type BusinessCardCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    imagePath: number
    companyName: number
    name: number
    email: number
    phone: number
    address: number
    notes: number
    _all: number
  }


  export type BusinessCardMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    imagePath?: true
    companyName?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    notes?: true
  }

  export type BusinessCardMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    imagePath?: true
    companyName?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    notes?: true
  }

  export type BusinessCardCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    imagePath?: true
    companyName?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    notes?: true
    _all?: true
  }

  export type BusinessCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessCard to aggregate.
     */
    where?: BusinessCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessCards to fetch.
     */
    orderBy?: BusinessCardOrderByWithRelationInput | BusinessCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessCards
    **/
    _count?: true | BusinessCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessCardMaxAggregateInputType
  }

  export type GetBusinessCardAggregateType<T extends BusinessCardAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessCard[P]>
      : GetScalarType<T[P], AggregateBusinessCard[P]>
  }




  export type BusinessCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessCardWhereInput
    orderBy?: BusinessCardOrderByWithAggregationInput | BusinessCardOrderByWithAggregationInput[]
    by: BusinessCardScalarFieldEnum[] | BusinessCardScalarFieldEnum
    having?: BusinessCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessCardCountAggregateInputType | true
    _min?: BusinessCardMinAggregateInputType
    _max?: BusinessCardMaxAggregateInputType
  }

  export type BusinessCardGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    imagePath: string
    companyName: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    notes: string | null
    _count: BusinessCardCountAggregateOutputType | null
    _min: BusinessCardMinAggregateOutputType | null
    _max: BusinessCardMaxAggregateOutputType | null
  }

  type GetBusinessCardGroupByPayload<T extends BusinessCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessCardGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessCardGroupByOutputType[P]>
        }
      >
    >


  export type BusinessCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imagePath?: boolean
    companyName?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    notes?: boolean
    messageHistory?: boolean | BusinessCard$messageHistoryArgs<ExtArgs>
    _count?: boolean | BusinessCardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessCard"]>

  export type BusinessCardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imagePath?: boolean
    companyName?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    notes?: boolean
  }, ExtArgs["result"]["businessCard"]>

  export type BusinessCardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imagePath?: boolean
    companyName?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    notes?: boolean
  }, ExtArgs["result"]["businessCard"]>

  export type BusinessCardSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imagePath?: boolean
    companyName?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    notes?: boolean
  }

  export type BusinessCardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "imagePath" | "companyName" | "name" | "email" | "phone" | "address" | "notes", ExtArgs["result"]["businessCard"]>
  export type BusinessCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messageHistory?: boolean | BusinessCard$messageHistoryArgs<ExtArgs>
    _count?: boolean | BusinessCardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BusinessCardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BusinessCardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BusinessCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BusinessCard"
    objects: {
      messageHistory: Prisma.$MessageHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      imagePath: string
      companyName: string | null
      name: string | null
      email: string | null
      phone: string | null
      address: string | null
      notes: string | null
    }, ExtArgs["result"]["businessCard"]>
    composites: {}
  }

  type BusinessCardGetPayload<S extends boolean | null | undefined | BusinessCardDefaultArgs> = $Result.GetResult<Prisma.$BusinessCardPayload, S>

  type BusinessCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessCardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessCardCountAggregateInputType | true
    }

  export interface BusinessCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusinessCard'], meta: { name: 'BusinessCard' } }
    /**
     * Find zero or one BusinessCard that matches the filter.
     * @param {BusinessCardFindUniqueArgs} args - Arguments to find a BusinessCard
     * @example
     * // Get one BusinessCard
     * const businessCard = await prisma.businessCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessCardFindUniqueArgs>(args: SelectSubset<T, BusinessCardFindUniqueArgs<ExtArgs>>): Prisma__BusinessCardClient<$Result.GetResult<Prisma.$BusinessCardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BusinessCard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessCardFindUniqueOrThrowArgs} args - Arguments to find a BusinessCard
     * @example
     * // Get one BusinessCard
     * const businessCard = await prisma.businessCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessCardFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessCardClient<$Result.GetResult<Prisma.$BusinessCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCardFindFirstArgs} args - Arguments to find a BusinessCard
     * @example
     * // Get one BusinessCard
     * const businessCard = await prisma.businessCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessCardFindFirstArgs>(args?: SelectSubset<T, BusinessCardFindFirstArgs<ExtArgs>>): Prisma__BusinessCardClient<$Result.GetResult<Prisma.$BusinessCardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCardFindFirstOrThrowArgs} args - Arguments to find a BusinessCard
     * @example
     * // Get one BusinessCard
     * const businessCard = await prisma.businessCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessCardFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessCardClient<$Result.GetResult<Prisma.$BusinessCardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BusinessCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessCards
     * const businessCards = await prisma.businessCard.findMany()
     * 
     * // Get first 10 BusinessCards
     * const businessCards = await prisma.businessCard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessCardWithIdOnly = await prisma.businessCard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessCardFindManyArgs>(args?: SelectSubset<T, BusinessCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BusinessCard.
     * @param {BusinessCardCreateArgs} args - Arguments to create a BusinessCard.
     * @example
     * // Create one BusinessCard
     * const BusinessCard = await prisma.businessCard.create({
     *   data: {
     *     // ... data to create a BusinessCard
     *   }
     * })
     * 
     */
    create<T extends BusinessCardCreateArgs>(args: SelectSubset<T, BusinessCardCreateArgs<ExtArgs>>): Prisma__BusinessCardClient<$Result.GetResult<Prisma.$BusinessCardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BusinessCards.
     * @param {BusinessCardCreateManyArgs} args - Arguments to create many BusinessCards.
     * @example
     * // Create many BusinessCards
     * const businessCard = await prisma.businessCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessCardCreateManyArgs>(args?: SelectSubset<T, BusinessCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BusinessCards and returns the data saved in the database.
     * @param {BusinessCardCreateManyAndReturnArgs} args - Arguments to create many BusinessCards.
     * @example
     * // Create many BusinessCards
     * const businessCard = await prisma.businessCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BusinessCards and only return the `id`
     * const businessCardWithIdOnly = await prisma.businessCard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessCardCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessCardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BusinessCard.
     * @param {BusinessCardDeleteArgs} args - Arguments to delete one BusinessCard.
     * @example
     * // Delete one BusinessCard
     * const BusinessCard = await prisma.businessCard.delete({
     *   where: {
     *     // ... filter to delete one BusinessCard
     *   }
     * })
     * 
     */
    delete<T extends BusinessCardDeleteArgs>(args: SelectSubset<T, BusinessCardDeleteArgs<ExtArgs>>): Prisma__BusinessCardClient<$Result.GetResult<Prisma.$BusinessCardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BusinessCard.
     * @param {BusinessCardUpdateArgs} args - Arguments to update one BusinessCard.
     * @example
     * // Update one BusinessCard
     * const businessCard = await prisma.businessCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessCardUpdateArgs>(args: SelectSubset<T, BusinessCardUpdateArgs<ExtArgs>>): Prisma__BusinessCardClient<$Result.GetResult<Prisma.$BusinessCardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BusinessCards.
     * @param {BusinessCardDeleteManyArgs} args - Arguments to filter BusinessCards to delete.
     * @example
     * // Delete a few BusinessCards
     * const { count } = await prisma.businessCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessCardDeleteManyArgs>(args?: SelectSubset<T, BusinessCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessCards
     * const businessCard = await prisma.businessCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessCardUpdateManyArgs>(args: SelectSubset<T, BusinessCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessCards and returns the data updated in the database.
     * @param {BusinessCardUpdateManyAndReturnArgs} args - Arguments to update many BusinessCards.
     * @example
     * // Update many BusinessCards
     * const businessCard = await prisma.businessCard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BusinessCards and only return the `id`
     * const businessCardWithIdOnly = await prisma.businessCard.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BusinessCardUpdateManyAndReturnArgs>(args: SelectSubset<T, BusinessCardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessCardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BusinessCard.
     * @param {BusinessCardUpsertArgs} args - Arguments to update or create a BusinessCard.
     * @example
     * // Update or create a BusinessCard
     * const businessCard = await prisma.businessCard.upsert({
     *   create: {
     *     // ... data to create a BusinessCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessCard we want to update
     *   }
     * })
     */
    upsert<T extends BusinessCardUpsertArgs>(args: SelectSubset<T, BusinessCardUpsertArgs<ExtArgs>>): Prisma__BusinessCardClient<$Result.GetResult<Prisma.$BusinessCardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BusinessCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCardCountArgs} args - Arguments to filter BusinessCards to count.
     * @example
     * // Count the number of BusinessCards
     * const count = await prisma.businessCard.count({
     *   where: {
     *     // ... the filter for the BusinessCards we want to count
     *   }
     * })
    **/
    count<T extends BusinessCardCountArgs>(
      args?: Subset<T, BusinessCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessCardAggregateArgs>(args: Subset<T, BusinessCardAggregateArgs>): Prisma.PrismaPromise<GetBusinessCardAggregateType<T>>

    /**
     * Group by BusinessCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessCardGroupByArgs['orderBy'] }
        : { orderBy?: BusinessCardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusinessCard model
   */
  readonly fields: BusinessCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messageHistory<T extends BusinessCard$messageHistoryArgs<ExtArgs> = {}>(args?: Subset<T, BusinessCard$messageHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BusinessCard model
   */
  interface BusinessCardFieldRefs {
    readonly id: FieldRef<"BusinessCard", 'String'>
    readonly createdAt: FieldRef<"BusinessCard", 'DateTime'>
    readonly updatedAt: FieldRef<"BusinessCard", 'DateTime'>
    readonly imagePath: FieldRef<"BusinessCard", 'String'>
    readonly companyName: FieldRef<"BusinessCard", 'String'>
    readonly name: FieldRef<"BusinessCard", 'String'>
    readonly email: FieldRef<"BusinessCard", 'String'>
    readonly phone: FieldRef<"BusinessCard", 'String'>
    readonly address: FieldRef<"BusinessCard", 'String'>
    readonly notes: FieldRef<"BusinessCard", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BusinessCard findUnique
   */
  export type BusinessCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCard
     */
    select?: BusinessCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessCard
     */
    omit?: BusinessCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCardInclude<ExtArgs> | null
    /**
     * Filter, which BusinessCard to fetch.
     */
    where: BusinessCardWhereUniqueInput
  }

  /**
   * BusinessCard findUniqueOrThrow
   */
  export type BusinessCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCard
     */
    select?: BusinessCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessCard
     */
    omit?: BusinessCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCardInclude<ExtArgs> | null
    /**
     * Filter, which BusinessCard to fetch.
     */
    where: BusinessCardWhereUniqueInput
  }

  /**
   * BusinessCard findFirst
   */
  export type BusinessCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCard
     */
    select?: BusinessCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessCard
     */
    omit?: BusinessCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCardInclude<ExtArgs> | null
    /**
     * Filter, which BusinessCard to fetch.
     */
    where?: BusinessCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessCards to fetch.
     */
    orderBy?: BusinessCardOrderByWithRelationInput | BusinessCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessCards.
     */
    cursor?: BusinessCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessCards.
     */
    distinct?: BusinessCardScalarFieldEnum | BusinessCardScalarFieldEnum[]
  }

  /**
   * BusinessCard findFirstOrThrow
   */
  export type BusinessCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCard
     */
    select?: BusinessCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessCard
     */
    omit?: BusinessCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCardInclude<ExtArgs> | null
    /**
     * Filter, which BusinessCard to fetch.
     */
    where?: BusinessCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessCards to fetch.
     */
    orderBy?: BusinessCardOrderByWithRelationInput | BusinessCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessCards.
     */
    cursor?: BusinessCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessCards.
     */
    distinct?: BusinessCardScalarFieldEnum | BusinessCardScalarFieldEnum[]
  }

  /**
   * BusinessCard findMany
   */
  export type BusinessCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCard
     */
    select?: BusinessCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessCard
     */
    omit?: BusinessCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCardInclude<ExtArgs> | null
    /**
     * Filter, which BusinessCards to fetch.
     */
    where?: BusinessCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessCards to fetch.
     */
    orderBy?: BusinessCardOrderByWithRelationInput | BusinessCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessCards.
     */
    cursor?: BusinessCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessCards.
     */
    skip?: number
    distinct?: BusinessCardScalarFieldEnum | BusinessCardScalarFieldEnum[]
  }

  /**
   * BusinessCard create
   */
  export type BusinessCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCard
     */
    select?: BusinessCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessCard
     */
    omit?: BusinessCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCardInclude<ExtArgs> | null
    /**
     * The data needed to create a BusinessCard.
     */
    data: XOR<BusinessCardCreateInput, BusinessCardUncheckedCreateInput>
  }

  /**
   * BusinessCard createMany
   */
  export type BusinessCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusinessCards.
     */
    data: BusinessCardCreateManyInput | BusinessCardCreateManyInput[]
  }

  /**
   * BusinessCard createManyAndReturn
   */
  export type BusinessCardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCard
     */
    select?: BusinessCardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessCard
     */
    omit?: BusinessCardOmit<ExtArgs> | null
    /**
     * The data used to create many BusinessCards.
     */
    data: BusinessCardCreateManyInput | BusinessCardCreateManyInput[]
  }

  /**
   * BusinessCard update
   */
  export type BusinessCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCard
     */
    select?: BusinessCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessCard
     */
    omit?: BusinessCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCardInclude<ExtArgs> | null
    /**
     * The data needed to update a BusinessCard.
     */
    data: XOR<BusinessCardUpdateInput, BusinessCardUncheckedUpdateInput>
    /**
     * Choose, which BusinessCard to update.
     */
    where: BusinessCardWhereUniqueInput
  }

  /**
   * BusinessCard updateMany
   */
  export type BusinessCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusinessCards.
     */
    data: XOR<BusinessCardUpdateManyMutationInput, BusinessCardUncheckedUpdateManyInput>
    /**
     * Filter which BusinessCards to update
     */
    where?: BusinessCardWhereInput
    /**
     * Limit how many BusinessCards to update.
     */
    limit?: number
  }

  /**
   * BusinessCard updateManyAndReturn
   */
  export type BusinessCardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCard
     */
    select?: BusinessCardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessCard
     */
    omit?: BusinessCardOmit<ExtArgs> | null
    /**
     * The data used to update BusinessCards.
     */
    data: XOR<BusinessCardUpdateManyMutationInput, BusinessCardUncheckedUpdateManyInput>
    /**
     * Filter which BusinessCards to update
     */
    where?: BusinessCardWhereInput
    /**
     * Limit how many BusinessCards to update.
     */
    limit?: number
  }

  /**
   * BusinessCard upsert
   */
  export type BusinessCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCard
     */
    select?: BusinessCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessCard
     */
    omit?: BusinessCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCardInclude<ExtArgs> | null
    /**
     * The filter to search for the BusinessCard to update in case it exists.
     */
    where: BusinessCardWhereUniqueInput
    /**
     * In case the BusinessCard found by the `where` argument doesn't exist, create a new BusinessCard with this data.
     */
    create: XOR<BusinessCardCreateInput, BusinessCardUncheckedCreateInput>
    /**
     * In case the BusinessCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessCardUpdateInput, BusinessCardUncheckedUpdateInput>
  }

  /**
   * BusinessCard delete
   */
  export type BusinessCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCard
     */
    select?: BusinessCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessCard
     */
    omit?: BusinessCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCardInclude<ExtArgs> | null
    /**
     * Filter which BusinessCard to delete.
     */
    where: BusinessCardWhereUniqueInput
  }

  /**
   * BusinessCard deleteMany
   */
  export type BusinessCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessCards to delete
     */
    where?: BusinessCardWhereInput
    /**
     * Limit how many BusinessCards to delete.
     */
    limit?: number
  }

  /**
   * BusinessCard.messageHistory
   */
  export type BusinessCard$messageHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageHistory
     */
    select?: MessageHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageHistory
     */
    omit?: MessageHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageHistoryInclude<ExtArgs> | null
    where?: MessageHistoryWhereInput
    orderBy?: MessageHistoryOrderByWithRelationInput | MessageHistoryOrderByWithRelationInput[]
    cursor?: MessageHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageHistoryScalarFieldEnum | MessageHistoryScalarFieldEnum[]
  }

  /**
   * BusinessCard without action
   */
  export type BusinessCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCard
     */
    select?: BusinessCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessCard
     */
    omit?: BusinessCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCardInclude<ExtArgs> | null
  }


  /**
   * Model MessageTemplate
   */

  export type AggregateMessageTemplate = {
    _count: MessageTemplateCountAggregateOutputType | null
    _min: MessageTemplateMinAggregateOutputType | null
    _max: MessageTemplateMaxAggregateOutputType | null
  }

  export type MessageTemplateMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    content: string | null
  }

  export type MessageTemplateMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    content: string | null
  }

  export type MessageTemplateCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    content: number
    _all: number
  }


  export type MessageTemplateMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    content?: true
  }

  export type MessageTemplateMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    content?: true
  }

  export type MessageTemplateCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    content?: true
    _all?: true
  }

  export type MessageTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageTemplate to aggregate.
     */
    where?: MessageTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageTemplates to fetch.
     */
    orderBy?: MessageTemplateOrderByWithRelationInput | MessageTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageTemplates
    **/
    _count?: true | MessageTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageTemplateMaxAggregateInputType
  }

  export type GetMessageTemplateAggregateType<T extends MessageTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageTemplate[P]>
      : GetScalarType<T[P], AggregateMessageTemplate[P]>
  }




  export type MessageTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageTemplateWhereInput
    orderBy?: MessageTemplateOrderByWithAggregationInput | MessageTemplateOrderByWithAggregationInput[]
    by: MessageTemplateScalarFieldEnum[] | MessageTemplateScalarFieldEnum
    having?: MessageTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageTemplateCountAggregateInputType | true
    _min?: MessageTemplateMinAggregateInputType
    _max?: MessageTemplateMaxAggregateInputType
  }

  export type MessageTemplateGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    content: string
    _count: MessageTemplateCountAggregateOutputType | null
    _min: MessageTemplateMinAggregateOutputType | null
    _max: MessageTemplateMaxAggregateOutputType | null
  }

  type GetMessageTemplateGroupByPayload<T extends MessageTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], MessageTemplateGroupByOutputType[P]>
        }
      >
    >


  export type MessageTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    content?: boolean
    messageHistory?: boolean | MessageTemplate$messageHistoryArgs<ExtArgs>
    _count?: boolean | MessageTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageTemplate"]>

  export type MessageTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    content?: boolean
  }, ExtArgs["result"]["messageTemplate"]>

  export type MessageTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    content?: boolean
  }, ExtArgs["result"]["messageTemplate"]>

  export type MessageTemplateSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    content?: boolean
  }

  export type MessageTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "content", ExtArgs["result"]["messageTemplate"]>
  export type MessageTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messageHistory?: boolean | MessageTemplate$messageHistoryArgs<ExtArgs>
    _count?: boolean | MessageTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MessageTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MessageTemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MessageTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MessageTemplate"
    objects: {
      messageHistory: Prisma.$MessageHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      content: string
    }, ExtArgs["result"]["messageTemplate"]>
    composites: {}
  }

  type MessageTemplateGetPayload<S extends boolean | null | undefined | MessageTemplateDefaultArgs> = $Result.GetResult<Prisma.$MessageTemplatePayload, S>

  type MessageTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageTemplateCountAggregateInputType | true
    }

  export interface MessageTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageTemplate'], meta: { name: 'MessageTemplate' } }
    /**
     * Find zero or one MessageTemplate that matches the filter.
     * @param {MessageTemplateFindUniqueArgs} args - Arguments to find a MessageTemplate
     * @example
     * // Get one MessageTemplate
     * const messageTemplate = await prisma.messageTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageTemplateFindUniqueArgs>(args: SelectSubset<T, MessageTemplateFindUniqueArgs<ExtArgs>>): Prisma__MessageTemplateClient<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MessageTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageTemplateFindUniqueOrThrowArgs} args - Arguments to find a MessageTemplate
     * @example
     * // Get one MessageTemplate
     * const messageTemplate = await prisma.messageTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageTemplateClient<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTemplateFindFirstArgs} args - Arguments to find a MessageTemplate
     * @example
     * // Get one MessageTemplate
     * const messageTemplate = await prisma.messageTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageTemplateFindFirstArgs>(args?: SelectSubset<T, MessageTemplateFindFirstArgs<ExtArgs>>): Prisma__MessageTemplateClient<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTemplateFindFirstOrThrowArgs} args - Arguments to find a MessageTemplate
     * @example
     * // Get one MessageTemplate
     * const messageTemplate = await prisma.messageTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageTemplateClient<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MessageTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageTemplates
     * const messageTemplates = await prisma.messageTemplate.findMany()
     * 
     * // Get first 10 MessageTemplates
     * const messageTemplates = await prisma.messageTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageTemplateWithIdOnly = await prisma.messageTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageTemplateFindManyArgs>(args?: SelectSubset<T, MessageTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MessageTemplate.
     * @param {MessageTemplateCreateArgs} args - Arguments to create a MessageTemplate.
     * @example
     * // Create one MessageTemplate
     * const MessageTemplate = await prisma.messageTemplate.create({
     *   data: {
     *     // ... data to create a MessageTemplate
     *   }
     * })
     * 
     */
    create<T extends MessageTemplateCreateArgs>(args: SelectSubset<T, MessageTemplateCreateArgs<ExtArgs>>): Prisma__MessageTemplateClient<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MessageTemplates.
     * @param {MessageTemplateCreateManyArgs} args - Arguments to create many MessageTemplates.
     * @example
     * // Create many MessageTemplates
     * const messageTemplate = await prisma.messageTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageTemplateCreateManyArgs>(args?: SelectSubset<T, MessageTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MessageTemplates and returns the data saved in the database.
     * @param {MessageTemplateCreateManyAndReturnArgs} args - Arguments to create many MessageTemplates.
     * @example
     * // Create many MessageTemplates
     * const messageTemplate = await prisma.messageTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MessageTemplates and only return the `id`
     * const messageTemplateWithIdOnly = await prisma.messageTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MessageTemplate.
     * @param {MessageTemplateDeleteArgs} args - Arguments to delete one MessageTemplate.
     * @example
     * // Delete one MessageTemplate
     * const MessageTemplate = await prisma.messageTemplate.delete({
     *   where: {
     *     // ... filter to delete one MessageTemplate
     *   }
     * })
     * 
     */
    delete<T extends MessageTemplateDeleteArgs>(args: SelectSubset<T, MessageTemplateDeleteArgs<ExtArgs>>): Prisma__MessageTemplateClient<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MessageTemplate.
     * @param {MessageTemplateUpdateArgs} args - Arguments to update one MessageTemplate.
     * @example
     * // Update one MessageTemplate
     * const messageTemplate = await prisma.messageTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageTemplateUpdateArgs>(args: SelectSubset<T, MessageTemplateUpdateArgs<ExtArgs>>): Prisma__MessageTemplateClient<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MessageTemplates.
     * @param {MessageTemplateDeleteManyArgs} args - Arguments to filter MessageTemplates to delete.
     * @example
     * // Delete a few MessageTemplates
     * const { count } = await prisma.messageTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageTemplateDeleteManyArgs>(args?: SelectSubset<T, MessageTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageTemplates
     * const messageTemplate = await prisma.messageTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageTemplateUpdateManyArgs>(args: SelectSubset<T, MessageTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageTemplates and returns the data updated in the database.
     * @param {MessageTemplateUpdateManyAndReturnArgs} args - Arguments to update many MessageTemplates.
     * @example
     * // Update many MessageTemplates
     * const messageTemplate = await prisma.messageTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MessageTemplates and only return the `id`
     * const messageTemplateWithIdOnly = await prisma.messageTemplate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MessageTemplate.
     * @param {MessageTemplateUpsertArgs} args - Arguments to update or create a MessageTemplate.
     * @example
     * // Update or create a MessageTemplate
     * const messageTemplate = await prisma.messageTemplate.upsert({
     *   create: {
     *     // ... data to create a MessageTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageTemplate we want to update
     *   }
     * })
     */
    upsert<T extends MessageTemplateUpsertArgs>(args: SelectSubset<T, MessageTemplateUpsertArgs<ExtArgs>>): Prisma__MessageTemplateClient<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MessageTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTemplateCountArgs} args - Arguments to filter MessageTemplates to count.
     * @example
     * // Count the number of MessageTemplates
     * const count = await prisma.messageTemplate.count({
     *   where: {
     *     // ... the filter for the MessageTemplates we want to count
     *   }
     * })
    **/
    count<T extends MessageTemplateCountArgs>(
      args?: Subset<T, MessageTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageTemplateAggregateArgs>(args: Subset<T, MessageTemplateAggregateArgs>): Prisma.PrismaPromise<GetMessageTemplateAggregateType<T>>

    /**
     * Group by MessageTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageTemplateGroupByArgs['orderBy'] }
        : { orderBy?: MessageTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessageTemplate model
   */
  readonly fields: MessageTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messageHistory<T extends MessageTemplate$messageHistoryArgs<ExtArgs> = {}>(args?: Subset<T, MessageTemplate$messageHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MessageTemplate model
   */
  interface MessageTemplateFieldRefs {
    readonly id: FieldRef<"MessageTemplate", 'String'>
    readonly createdAt: FieldRef<"MessageTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"MessageTemplate", 'DateTime'>
    readonly name: FieldRef<"MessageTemplate", 'String'>
    readonly content: FieldRef<"MessageTemplate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MessageTemplate findUnique
   */
  export type MessageTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * Filter, which MessageTemplate to fetch.
     */
    where: MessageTemplateWhereUniqueInput
  }

  /**
   * MessageTemplate findUniqueOrThrow
   */
  export type MessageTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * Filter, which MessageTemplate to fetch.
     */
    where: MessageTemplateWhereUniqueInput
  }

  /**
   * MessageTemplate findFirst
   */
  export type MessageTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * Filter, which MessageTemplate to fetch.
     */
    where?: MessageTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageTemplates to fetch.
     */
    orderBy?: MessageTemplateOrderByWithRelationInput | MessageTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageTemplates.
     */
    cursor?: MessageTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageTemplates.
     */
    distinct?: MessageTemplateScalarFieldEnum | MessageTemplateScalarFieldEnum[]
  }

  /**
   * MessageTemplate findFirstOrThrow
   */
  export type MessageTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * Filter, which MessageTemplate to fetch.
     */
    where?: MessageTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageTemplates to fetch.
     */
    orderBy?: MessageTemplateOrderByWithRelationInput | MessageTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageTemplates.
     */
    cursor?: MessageTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageTemplates.
     */
    distinct?: MessageTemplateScalarFieldEnum | MessageTemplateScalarFieldEnum[]
  }

  /**
   * MessageTemplate findMany
   */
  export type MessageTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * Filter, which MessageTemplates to fetch.
     */
    where?: MessageTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageTemplates to fetch.
     */
    orderBy?: MessageTemplateOrderByWithRelationInput | MessageTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageTemplates.
     */
    cursor?: MessageTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageTemplates.
     */
    skip?: number
    distinct?: MessageTemplateScalarFieldEnum | MessageTemplateScalarFieldEnum[]
  }

  /**
   * MessageTemplate create
   */
  export type MessageTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a MessageTemplate.
     */
    data: XOR<MessageTemplateCreateInput, MessageTemplateUncheckedCreateInput>
  }

  /**
   * MessageTemplate createMany
   */
  export type MessageTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageTemplates.
     */
    data: MessageTemplateCreateManyInput | MessageTemplateCreateManyInput[]
  }

  /**
   * MessageTemplate createManyAndReturn
   */
  export type MessageTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many MessageTemplates.
     */
    data: MessageTemplateCreateManyInput | MessageTemplateCreateManyInput[]
  }

  /**
   * MessageTemplate update
   */
  export type MessageTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a MessageTemplate.
     */
    data: XOR<MessageTemplateUpdateInput, MessageTemplateUncheckedUpdateInput>
    /**
     * Choose, which MessageTemplate to update.
     */
    where: MessageTemplateWhereUniqueInput
  }

  /**
   * MessageTemplate updateMany
   */
  export type MessageTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageTemplates.
     */
    data: XOR<MessageTemplateUpdateManyMutationInput, MessageTemplateUncheckedUpdateManyInput>
    /**
     * Filter which MessageTemplates to update
     */
    where?: MessageTemplateWhereInput
    /**
     * Limit how many MessageTemplates to update.
     */
    limit?: number
  }

  /**
   * MessageTemplate updateManyAndReturn
   */
  export type MessageTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * The data used to update MessageTemplates.
     */
    data: XOR<MessageTemplateUpdateManyMutationInput, MessageTemplateUncheckedUpdateManyInput>
    /**
     * Filter which MessageTemplates to update
     */
    where?: MessageTemplateWhereInput
    /**
     * Limit how many MessageTemplates to update.
     */
    limit?: number
  }

  /**
   * MessageTemplate upsert
   */
  export type MessageTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the MessageTemplate to update in case it exists.
     */
    where: MessageTemplateWhereUniqueInput
    /**
     * In case the MessageTemplate found by the `where` argument doesn't exist, create a new MessageTemplate with this data.
     */
    create: XOR<MessageTemplateCreateInput, MessageTemplateUncheckedCreateInput>
    /**
     * In case the MessageTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageTemplateUpdateInput, MessageTemplateUncheckedUpdateInput>
  }

  /**
   * MessageTemplate delete
   */
  export type MessageTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * Filter which MessageTemplate to delete.
     */
    where: MessageTemplateWhereUniqueInput
  }

  /**
   * MessageTemplate deleteMany
   */
  export type MessageTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageTemplates to delete
     */
    where?: MessageTemplateWhereInput
    /**
     * Limit how many MessageTemplates to delete.
     */
    limit?: number
  }

  /**
   * MessageTemplate.messageHistory
   */
  export type MessageTemplate$messageHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageHistory
     */
    select?: MessageHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageHistory
     */
    omit?: MessageHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageHistoryInclude<ExtArgs> | null
    where?: MessageHistoryWhereInput
    orderBy?: MessageHistoryOrderByWithRelationInput | MessageHistoryOrderByWithRelationInput[]
    cursor?: MessageHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageHistoryScalarFieldEnum | MessageHistoryScalarFieldEnum[]
  }

  /**
   * MessageTemplate without action
   */
  export type MessageTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
  }


  /**
   * Model MessageHistory
   */

  export type AggregateMessageHistory = {
    _count: MessageHistoryCountAggregateOutputType | null
    _min: MessageHistoryMinAggregateOutputType | null
    _max: MessageHistoryMaxAggregateOutputType | null
  }

  export type MessageHistoryMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    businessCardId: string | null
    templateId: string | null
    message: string | null
    status: string | null
  }

  export type MessageHistoryMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    businessCardId: string | null
    templateId: string | null
    message: string | null
    status: string | null
  }

  export type MessageHistoryCountAggregateOutputType = {
    id: number
    createdAt: number
    businessCardId: number
    templateId: number
    message: number
    status: number
    _all: number
  }


  export type MessageHistoryMinAggregateInputType = {
    id?: true
    createdAt?: true
    businessCardId?: true
    templateId?: true
    message?: true
    status?: true
  }

  export type MessageHistoryMaxAggregateInputType = {
    id?: true
    createdAt?: true
    businessCardId?: true
    templateId?: true
    message?: true
    status?: true
  }

  export type MessageHistoryCountAggregateInputType = {
    id?: true
    createdAt?: true
    businessCardId?: true
    templateId?: true
    message?: true
    status?: true
    _all?: true
  }

  export type MessageHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageHistory to aggregate.
     */
    where?: MessageHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageHistories to fetch.
     */
    orderBy?: MessageHistoryOrderByWithRelationInput | MessageHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageHistories
    **/
    _count?: true | MessageHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageHistoryMaxAggregateInputType
  }

  export type GetMessageHistoryAggregateType<T extends MessageHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageHistory[P]>
      : GetScalarType<T[P], AggregateMessageHistory[P]>
  }




  export type MessageHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageHistoryWhereInput
    orderBy?: MessageHistoryOrderByWithAggregationInput | MessageHistoryOrderByWithAggregationInput[]
    by: MessageHistoryScalarFieldEnum[] | MessageHistoryScalarFieldEnum
    having?: MessageHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageHistoryCountAggregateInputType | true
    _min?: MessageHistoryMinAggregateInputType
    _max?: MessageHistoryMaxAggregateInputType
  }

  export type MessageHistoryGroupByOutputType = {
    id: string
    createdAt: Date
    businessCardId: string
    templateId: string | null
    message: string
    status: string
    _count: MessageHistoryCountAggregateOutputType | null
    _min: MessageHistoryMinAggregateOutputType | null
    _max: MessageHistoryMaxAggregateOutputType | null
  }

  type GetMessageHistoryGroupByPayload<T extends MessageHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], MessageHistoryGroupByOutputType[P]>
        }
      >
    >


  export type MessageHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    businessCardId?: boolean
    templateId?: boolean
    message?: boolean
    status?: boolean
    businessCard?: boolean | BusinessCardDefaultArgs<ExtArgs>
    template?: boolean | MessageHistory$templateArgs<ExtArgs>
  }, ExtArgs["result"]["messageHistory"]>

  export type MessageHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    businessCardId?: boolean
    templateId?: boolean
    message?: boolean
    status?: boolean
    businessCard?: boolean | BusinessCardDefaultArgs<ExtArgs>
    template?: boolean | MessageHistory$templateArgs<ExtArgs>
  }, ExtArgs["result"]["messageHistory"]>

  export type MessageHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    businessCardId?: boolean
    templateId?: boolean
    message?: boolean
    status?: boolean
    businessCard?: boolean | BusinessCardDefaultArgs<ExtArgs>
    template?: boolean | MessageHistory$templateArgs<ExtArgs>
  }, ExtArgs["result"]["messageHistory"]>

  export type MessageHistorySelectScalar = {
    id?: boolean
    createdAt?: boolean
    businessCardId?: boolean
    templateId?: boolean
    message?: boolean
    status?: boolean
  }

  export type MessageHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "businessCardId" | "templateId" | "message" | "status", ExtArgs["result"]["messageHistory"]>
  export type MessageHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    businessCard?: boolean | BusinessCardDefaultArgs<ExtArgs>
    template?: boolean | MessageHistory$templateArgs<ExtArgs>
  }
  export type MessageHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    businessCard?: boolean | BusinessCardDefaultArgs<ExtArgs>
    template?: boolean | MessageHistory$templateArgs<ExtArgs>
  }
  export type MessageHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    businessCard?: boolean | BusinessCardDefaultArgs<ExtArgs>
    template?: boolean | MessageHistory$templateArgs<ExtArgs>
  }

  export type $MessageHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MessageHistory"
    objects: {
      businessCard: Prisma.$BusinessCardPayload<ExtArgs>
      template: Prisma.$MessageTemplatePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      businessCardId: string
      templateId: string | null
      message: string
      status: string
    }, ExtArgs["result"]["messageHistory"]>
    composites: {}
  }

  type MessageHistoryGetPayload<S extends boolean | null | undefined | MessageHistoryDefaultArgs> = $Result.GetResult<Prisma.$MessageHistoryPayload, S>

  type MessageHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageHistoryCountAggregateInputType | true
    }

  export interface MessageHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageHistory'], meta: { name: 'MessageHistory' } }
    /**
     * Find zero or one MessageHistory that matches the filter.
     * @param {MessageHistoryFindUniqueArgs} args - Arguments to find a MessageHistory
     * @example
     * // Get one MessageHistory
     * const messageHistory = await prisma.messageHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageHistoryFindUniqueArgs>(args: SelectSubset<T, MessageHistoryFindUniqueArgs<ExtArgs>>): Prisma__MessageHistoryClient<$Result.GetResult<Prisma.$MessageHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MessageHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageHistoryFindUniqueOrThrowArgs} args - Arguments to find a MessageHistory
     * @example
     * // Get one MessageHistory
     * const messageHistory = await prisma.messageHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageHistoryClient<$Result.GetResult<Prisma.$MessageHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageHistoryFindFirstArgs} args - Arguments to find a MessageHistory
     * @example
     * // Get one MessageHistory
     * const messageHistory = await prisma.messageHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageHistoryFindFirstArgs>(args?: SelectSubset<T, MessageHistoryFindFirstArgs<ExtArgs>>): Prisma__MessageHistoryClient<$Result.GetResult<Prisma.$MessageHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageHistoryFindFirstOrThrowArgs} args - Arguments to find a MessageHistory
     * @example
     * // Get one MessageHistory
     * const messageHistory = await prisma.messageHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageHistoryClient<$Result.GetResult<Prisma.$MessageHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MessageHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageHistories
     * const messageHistories = await prisma.messageHistory.findMany()
     * 
     * // Get first 10 MessageHistories
     * const messageHistories = await prisma.messageHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageHistoryWithIdOnly = await prisma.messageHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageHistoryFindManyArgs>(args?: SelectSubset<T, MessageHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MessageHistory.
     * @param {MessageHistoryCreateArgs} args - Arguments to create a MessageHistory.
     * @example
     * // Create one MessageHistory
     * const MessageHistory = await prisma.messageHistory.create({
     *   data: {
     *     // ... data to create a MessageHistory
     *   }
     * })
     * 
     */
    create<T extends MessageHistoryCreateArgs>(args: SelectSubset<T, MessageHistoryCreateArgs<ExtArgs>>): Prisma__MessageHistoryClient<$Result.GetResult<Prisma.$MessageHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MessageHistories.
     * @param {MessageHistoryCreateManyArgs} args - Arguments to create many MessageHistories.
     * @example
     * // Create many MessageHistories
     * const messageHistory = await prisma.messageHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageHistoryCreateManyArgs>(args?: SelectSubset<T, MessageHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MessageHistories and returns the data saved in the database.
     * @param {MessageHistoryCreateManyAndReturnArgs} args - Arguments to create many MessageHistories.
     * @example
     * // Create many MessageHistories
     * const messageHistory = await prisma.messageHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MessageHistories and only return the `id`
     * const messageHistoryWithIdOnly = await prisma.messageHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MessageHistory.
     * @param {MessageHistoryDeleteArgs} args - Arguments to delete one MessageHistory.
     * @example
     * // Delete one MessageHistory
     * const MessageHistory = await prisma.messageHistory.delete({
     *   where: {
     *     // ... filter to delete one MessageHistory
     *   }
     * })
     * 
     */
    delete<T extends MessageHistoryDeleteArgs>(args: SelectSubset<T, MessageHistoryDeleteArgs<ExtArgs>>): Prisma__MessageHistoryClient<$Result.GetResult<Prisma.$MessageHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MessageHistory.
     * @param {MessageHistoryUpdateArgs} args - Arguments to update one MessageHistory.
     * @example
     * // Update one MessageHistory
     * const messageHistory = await prisma.messageHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageHistoryUpdateArgs>(args: SelectSubset<T, MessageHistoryUpdateArgs<ExtArgs>>): Prisma__MessageHistoryClient<$Result.GetResult<Prisma.$MessageHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MessageHistories.
     * @param {MessageHistoryDeleteManyArgs} args - Arguments to filter MessageHistories to delete.
     * @example
     * // Delete a few MessageHistories
     * const { count } = await prisma.messageHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageHistoryDeleteManyArgs>(args?: SelectSubset<T, MessageHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageHistories
     * const messageHistory = await prisma.messageHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageHistoryUpdateManyArgs>(args: SelectSubset<T, MessageHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageHistories and returns the data updated in the database.
     * @param {MessageHistoryUpdateManyAndReturnArgs} args - Arguments to update many MessageHistories.
     * @example
     * // Update many MessageHistories
     * const messageHistory = await prisma.messageHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MessageHistories and only return the `id`
     * const messageHistoryWithIdOnly = await prisma.messageHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MessageHistory.
     * @param {MessageHistoryUpsertArgs} args - Arguments to update or create a MessageHistory.
     * @example
     * // Update or create a MessageHistory
     * const messageHistory = await prisma.messageHistory.upsert({
     *   create: {
     *     // ... data to create a MessageHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageHistory we want to update
     *   }
     * })
     */
    upsert<T extends MessageHistoryUpsertArgs>(args: SelectSubset<T, MessageHistoryUpsertArgs<ExtArgs>>): Prisma__MessageHistoryClient<$Result.GetResult<Prisma.$MessageHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MessageHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageHistoryCountArgs} args - Arguments to filter MessageHistories to count.
     * @example
     * // Count the number of MessageHistories
     * const count = await prisma.messageHistory.count({
     *   where: {
     *     // ... the filter for the MessageHistories we want to count
     *   }
     * })
    **/
    count<T extends MessageHistoryCountArgs>(
      args?: Subset<T, MessageHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageHistoryAggregateArgs>(args: Subset<T, MessageHistoryAggregateArgs>): Prisma.PrismaPromise<GetMessageHistoryAggregateType<T>>

    /**
     * Group by MessageHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageHistoryGroupByArgs['orderBy'] }
        : { orderBy?: MessageHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessageHistory model
   */
  readonly fields: MessageHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    businessCard<T extends BusinessCardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessCardDefaultArgs<ExtArgs>>): Prisma__BusinessCardClient<$Result.GetResult<Prisma.$BusinessCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    template<T extends MessageHistory$templateArgs<ExtArgs> = {}>(args?: Subset<T, MessageHistory$templateArgs<ExtArgs>>): Prisma__MessageTemplateClient<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MessageHistory model
   */
  interface MessageHistoryFieldRefs {
    readonly id: FieldRef<"MessageHistory", 'String'>
    readonly createdAt: FieldRef<"MessageHistory", 'DateTime'>
    readonly businessCardId: FieldRef<"MessageHistory", 'String'>
    readonly templateId: FieldRef<"MessageHistory", 'String'>
    readonly message: FieldRef<"MessageHistory", 'String'>
    readonly status: FieldRef<"MessageHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MessageHistory findUnique
   */
  export type MessageHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageHistory
     */
    select?: MessageHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageHistory
     */
    omit?: MessageHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MessageHistory to fetch.
     */
    where: MessageHistoryWhereUniqueInput
  }

  /**
   * MessageHistory findUniqueOrThrow
   */
  export type MessageHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageHistory
     */
    select?: MessageHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageHistory
     */
    omit?: MessageHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MessageHistory to fetch.
     */
    where: MessageHistoryWhereUniqueInput
  }

  /**
   * MessageHistory findFirst
   */
  export type MessageHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageHistory
     */
    select?: MessageHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageHistory
     */
    omit?: MessageHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MessageHistory to fetch.
     */
    where?: MessageHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageHistories to fetch.
     */
    orderBy?: MessageHistoryOrderByWithRelationInput | MessageHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageHistories.
     */
    cursor?: MessageHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageHistories.
     */
    distinct?: MessageHistoryScalarFieldEnum | MessageHistoryScalarFieldEnum[]
  }

  /**
   * MessageHistory findFirstOrThrow
   */
  export type MessageHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageHistory
     */
    select?: MessageHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageHistory
     */
    omit?: MessageHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MessageHistory to fetch.
     */
    where?: MessageHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageHistories to fetch.
     */
    orderBy?: MessageHistoryOrderByWithRelationInput | MessageHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageHistories.
     */
    cursor?: MessageHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageHistories.
     */
    distinct?: MessageHistoryScalarFieldEnum | MessageHistoryScalarFieldEnum[]
  }

  /**
   * MessageHistory findMany
   */
  export type MessageHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageHistory
     */
    select?: MessageHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageHistory
     */
    omit?: MessageHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MessageHistories to fetch.
     */
    where?: MessageHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageHistories to fetch.
     */
    orderBy?: MessageHistoryOrderByWithRelationInput | MessageHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageHistories.
     */
    cursor?: MessageHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageHistories.
     */
    skip?: number
    distinct?: MessageHistoryScalarFieldEnum | MessageHistoryScalarFieldEnum[]
  }

  /**
   * MessageHistory create
   */
  export type MessageHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageHistory
     */
    select?: MessageHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageHistory
     */
    omit?: MessageHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a MessageHistory.
     */
    data: XOR<MessageHistoryCreateInput, MessageHistoryUncheckedCreateInput>
  }

  /**
   * MessageHistory createMany
   */
  export type MessageHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageHistories.
     */
    data: MessageHistoryCreateManyInput | MessageHistoryCreateManyInput[]
  }

  /**
   * MessageHistory createManyAndReturn
   */
  export type MessageHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageHistory
     */
    select?: MessageHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageHistory
     */
    omit?: MessageHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many MessageHistories.
     */
    data: MessageHistoryCreateManyInput | MessageHistoryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageHistory update
   */
  export type MessageHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageHistory
     */
    select?: MessageHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageHistory
     */
    omit?: MessageHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a MessageHistory.
     */
    data: XOR<MessageHistoryUpdateInput, MessageHistoryUncheckedUpdateInput>
    /**
     * Choose, which MessageHistory to update.
     */
    where: MessageHistoryWhereUniqueInput
  }

  /**
   * MessageHistory updateMany
   */
  export type MessageHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageHistories.
     */
    data: XOR<MessageHistoryUpdateManyMutationInput, MessageHistoryUncheckedUpdateManyInput>
    /**
     * Filter which MessageHistories to update
     */
    where?: MessageHistoryWhereInput
    /**
     * Limit how many MessageHistories to update.
     */
    limit?: number
  }

  /**
   * MessageHistory updateManyAndReturn
   */
  export type MessageHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageHistory
     */
    select?: MessageHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageHistory
     */
    omit?: MessageHistoryOmit<ExtArgs> | null
    /**
     * The data used to update MessageHistories.
     */
    data: XOR<MessageHistoryUpdateManyMutationInput, MessageHistoryUncheckedUpdateManyInput>
    /**
     * Filter which MessageHistories to update
     */
    where?: MessageHistoryWhereInput
    /**
     * Limit how many MessageHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageHistory upsert
   */
  export type MessageHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageHistory
     */
    select?: MessageHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageHistory
     */
    omit?: MessageHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the MessageHistory to update in case it exists.
     */
    where: MessageHistoryWhereUniqueInput
    /**
     * In case the MessageHistory found by the `where` argument doesn't exist, create a new MessageHistory with this data.
     */
    create: XOR<MessageHistoryCreateInput, MessageHistoryUncheckedCreateInput>
    /**
     * In case the MessageHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageHistoryUpdateInput, MessageHistoryUncheckedUpdateInput>
  }

  /**
   * MessageHistory delete
   */
  export type MessageHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageHistory
     */
    select?: MessageHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageHistory
     */
    omit?: MessageHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageHistoryInclude<ExtArgs> | null
    /**
     * Filter which MessageHistory to delete.
     */
    where: MessageHistoryWhereUniqueInput
  }

  /**
   * MessageHistory deleteMany
   */
  export type MessageHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageHistories to delete
     */
    where?: MessageHistoryWhereInput
    /**
     * Limit how many MessageHistories to delete.
     */
    limit?: number
  }

  /**
   * MessageHistory.template
   */
  export type MessageHistory$templateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    where?: MessageTemplateWhereInput
  }

  /**
   * MessageHistory without action
   */
  export type MessageHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageHistory
     */
    select?: MessageHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageHistory
     */
    omit?: MessageHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageHistoryInclude<ExtArgs> | null
  }


  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    companyName: string | null
    email: string | null
    phone: string | null
    address: string | null
    title: string | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    companyName: string | null
    email: string | null
    phone: string | null
    address: string | null
    title: string | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    companyName: number
    email: number
    phone: number
    address: number
    title: number
    _all: number
  }


  export type UserProfileMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    companyName?: true
    email?: true
    phone?: true
    address?: true
    title?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    companyName?: true
    email?: true
    phone?: true
    address?: true
    title?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    companyName?: true
    email?: true
    phone?: true
    address?: true
    title?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string | null
    companyName: string | null
    email: string | null
    phone: string | null
    address: string | null
    title: string | null
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    companyName?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    title?: boolean
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    companyName?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    title?: boolean
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    companyName?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    title?: boolean
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    companyName?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    title?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "companyName" | "email" | "phone" | "address" | "title", ExtArgs["result"]["userProfile"]>

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string | null
      companyName: string | null
      email: string | null
      phone: string | null
      address: string | null
      title: string | null
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'String'>
    readonly createdAt: FieldRef<"UserProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"UserProfile", 'DateTime'>
    readonly name: FieldRef<"UserProfile", 'String'>
    readonly companyName: FieldRef<"UserProfile", 'String'>
    readonly email: FieldRef<"UserProfile", 'String'>
    readonly phone: FieldRef<"UserProfile", 'String'>
    readonly address: FieldRef<"UserProfile", 'String'>
    readonly title: FieldRef<"UserProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data?: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
  }


  /**
   * Model Settings
   */

  export type AggregateSettings = {
    _count: SettingsCountAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  export type SettingsMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    autoSendEnabled: boolean | null
    autoSendTemplateId: string | null
    defaultSenderPhone: string | null
  }

  export type SettingsMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    autoSendEnabled: boolean | null
    autoSendTemplateId: string | null
    defaultSenderPhone: string | null
  }

  export type SettingsCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    autoSendEnabled: number
    autoSendTemplateId: number
    defaultSenderPhone: number
    _all: number
  }


  export type SettingsMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    autoSendEnabled?: true
    autoSendTemplateId?: true
    defaultSenderPhone?: true
  }

  export type SettingsMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    autoSendEnabled?: true
    autoSendTemplateId?: true
    defaultSenderPhone?: true
  }

  export type SettingsCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    autoSendEnabled?: true
    autoSendTemplateId?: true
    defaultSenderPhone?: true
    _all?: true
  }

  export type SettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to aggregate.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingsMaxAggregateInputType
  }

  export type GetSettingsAggregateType<T extends SettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettings[P]>
      : GetScalarType<T[P], AggregateSettings[P]>
  }




  export type SettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingsWhereInput
    orderBy?: SettingsOrderByWithAggregationInput | SettingsOrderByWithAggregationInput[]
    by: SettingsScalarFieldEnum[] | SettingsScalarFieldEnum
    having?: SettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingsCountAggregateInputType | true
    _min?: SettingsMinAggregateInputType
    _max?: SettingsMaxAggregateInputType
  }

  export type SettingsGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    autoSendEnabled: boolean
    autoSendTemplateId: string | null
    defaultSenderPhone: string | null
    _count: SettingsCountAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  type GetSettingsGroupByPayload<T extends SettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SettingsGroupByOutputType[P]>
        }
      >
    >


  export type SettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    autoSendEnabled?: boolean
    autoSendTemplateId?: boolean
    defaultSenderPhone?: boolean
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    autoSendEnabled?: boolean
    autoSendTemplateId?: boolean
    defaultSenderPhone?: boolean
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    autoSendEnabled?: boolean
    autoSendTemplateId?: boolean
    defaultSenderPhone?: boolean
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    autoSendEnabled?: boolean
    autoSendTemplateId?: boolean
    defaultSenderPhone?: boolean
  }

  export type SettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "autoSendEnabled" | "autoSendTemplateId" | "defaultSenderPhone", ExtArgs["result"]["settings"]>

  export type $SettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Settings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      autoSendEnabled: boolean
      autoSendTemplateId: string | null
      defaultSenderPhone: string | null
    }, ExtArgs["result"]["settings"]>
    composites: {}
  }

  type SettingsGetPayload<S extends boolean | null | undefined | SettingsDefaultArgs> = $Result.GetResult<Prisma.$SettingsPayload, S>

  type SettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingsCountAggregateInputType | true
    }

  export interface SettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Settings'], meta: { name: 'Settings' } }
    /**
     * Find zero or one Settings that matches the filter.
     * @param {SettingsFindUniqueArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingsFindUniqueArgs>(args: SelectSubset<T, SettingsFindUniqueArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Settings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingsFindUniqueOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingsFindFirstArgs>(args?: SelectSubset<T, SettingsFindFirstArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.settings.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.settings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingsWithIdOnly = await prisma.settings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettingsFindManyArgs>(args?: SelectSubset<T, SettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Settings.
     * @param {SettingsCreateArgs} args - Arguments to create a Settings.
     * @example
     * // Create one Settings
     * const Settings = await prisma.settings.create({
     *   data: {
     *     // ... data to create a Settings
     *   }
     * })
     * 
     */
    create<T extends SettingsCreateArgs>(args: SelectSubset<T, SettingsCreateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingsCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingsCreateManyArgs>(args?: SelectSubset<T, SettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingsCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Settings.
     * @param {SettingsDeleteArgs} args - Arguments to delete one Settings.
     * @example
     * // Delete one Settings
     * const Settings = await prisma.settings.delete({
     *   where: {
     *     // ... filter to delete one Settings
     *   }
     * })
     * 
     */
    delete<T extends SettingsDeleteArgs>(args: SelectSubset<T, SettingsDeleteArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Settings.
     * @param {SettingsUpdateArgs} args - Arguments to update one Settings.
     * @example
     * // Update one Settings
     * const settings = await prisma.settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingsUpdateArgs>(args: SelectSubset<T, SettingsUpdateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingsDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingsDeleteManyArgs>(args?: SelectSubset<T, SettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingsUpdateManyArgs>(args: SelectSubset<T, SettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {SettingsUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, SettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Settings.
     * @param {SettingsUpsertArgs} args - Arguments to update or create a Settings.
     * @example
     * // Update or create a Settings
     * const settings = await prisma.settings.upsert({
     *   create: {
     *     // ... data to create a Settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settings we want to update
     *   }
     * })
     */
    upsert<T extends SettingsUpsertArgs>(args: SelectSubset<T, SettingsUpsertArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.settings.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingsCountArgs>(
      args?: Subset<T, SettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SettingsAggregateArgs>(args: Subset<T, SettingsAggregateArgs>): Prisma.PrismaPromise<GetSettingsAggregateType<T>>

    /**
     * Group by Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingsGroupByArgs['orderBy'] }
        : { orderBy?: SettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Settings model
   */
  readonly fields: SettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Settings model
   */
  interface SettingsFieldRefs {
    readonly id: FieldRef<"Settings", 'String'>
    readonly createdAt: FieldRef<"Settings", 'DateTime'>
    readonly updatedAt: FieldRef<"Settings", 'DateTime'>
    readonly autoSendEnabled: FieldRef<"Settings", 'Boolean'>
    readonly autoSendTemplateId: FieldRef<"Settings", 'String'>
    readonly defaultSenderPhone: FieldRef<"Settings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Settings findUnique
   */
  export type SettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findUniqueOrThrow
   */
  export type SettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findFirst
   */
  export type SettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findFirstOrThrow
   */
  export type SettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findMany
   */
  export type SettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings create
   */
  export type SettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a Settings.
     */
    data?: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
  }

  /**
   * Settings createMany
   */
  export type SettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
  }

  /**
   * Settings createManyAndReturn
   */
  export type SettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
  }

  /**
   * Settings update
   */
  export type SettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a Settings.
     */
    data: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
    /**
     * Choose, which Settings to update.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings updateMany
   */
  export type SettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Settings updateManyAndReturn
   */
  export type SettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Settings upsert
   */
  export type SettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the Settings to update in case it exists.
     */
    where: SettingsWhereUniqueInput
    /**
     * In case the Settings found by the `where` argument doesn't exist, create a new Settings with this data.
     */
    create: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
    /**
     * In case the Settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
  }

  /**
   * Settings delete
   */
  export type SettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter which Settings to delete.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings deleteMany
   */
  export type SettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Settings without action
   */
  export type SettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BusinessCardScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    imagePath: 'imagePath',
    companyName: 'companyName',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    notes: 'notes'
  };

  export type BusinessCardScalarFieldEnum = (typeof BusinessCardScalarFieldEnum)[keyof typeof BusinessCardScalarFieldEnum]


  export const MessageTemplateScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    content: 'content'
  };

  export type MessageTemplateScalarFieldEnum = (typeof MessageTemplateScalarFieldEnum)[keyof typeof MessageTemplateScalarFieldEnum]


  export const MessageHistoryScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    businessCardId: 'businessCardId',
    templateId: 'templateId',
    message: 'message',
    status: 'status'
  };

  export type MessageHistoryScalarFieldEnum = (typeof MessageHistoryScalarFieldEnum)[keyof typeof MessageHistoryScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    companyName: 'companyName',
    email: 'email',
    phone: 'phone',
    address: 'address',
    title: 'title'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const SettingsScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    autoSendEnabled: 'autoSendEnabled',
    autoSendTemplateId: 'autoSendTemplateId',
    defaultSenderPhone: 'defaultSenderPhone'
  };

  export type SettingsScalarFieldEnum = (typeof SettingsScalarFieldEnum)[keyof typeof SettingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type BusinessCardWhereInput = {
    AND?: BusinessCardWhereInput | BusinessCardWhereInput[]
    OR?: BusinessCardWhereInput[]
    NOT?: BusinessCardWhereInput | BusinessCardWhereInput[]
    id?: StringFilter<"BusinessCard"> | string
    createdAt?: DateTimeFilter<"BusinessCard"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessCard"> | Date | string
    imagePath?: StringFilter<"BusinessCard"> | string
    companyName?: StringNullableFilter<"BusinessCard"> | string | null
    name?: StringNullableFilter<"BusinessCard"> | string | null
    email?: StringNullableFilter<"BusinessCard"> | string | null
    phone?: StringNullableFilter<"BusinessCard"> | string | null
    address?: StringNullableFilter<"BusinessCard"> | string | null
    notes?: StringNullableFilter<"BusinessCard"> | string | null
    messageHistory?: MessageHistoryListRelationFilter
  }

  export type BusinessCardOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imagePath?: SortOrder
    companyName?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    messageHistory?: MessageHistoryOrderByRelationAggregateInput
  }

  export type BusinessCardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BusinessCardWhereInput | BusinessCardWhereInput[]
    OR?: BusinessCardWhereInput[]
    NOT?: BusinessCardWhereInput | BusinessCardWhereInput[]
    createdAt?: DateTimeFilter<"BusinessCard"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessCard"> | Date | string
    imagePath?: StringFilter<"BusinessCard"> | string
    companyName?: StringNullableFilter<"BusinessCard"> | string | null
    name?: StringNullableFilter<"BusinessCard"> | string | null
    email?: StringNullableFilter<"BusinessCard"> | string | null
    phone?: StringNullableFilter<"BusinessCard"> | string | null
    address?: StringNullableFilter<"BusinessCard"> | string | null
    notes?: StringNullableFilter<"BusinessCard"> | string | null
    messageHistory?: MessageHistoryListRelationFilter
  }, "id">

  export type BusinessCardOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imagePath?: SortOrder
    companyName?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: BusinessCardCountOrderByAggregateInput
    _max?: BusinessCardMaxOrderByAggregateInput
    _min?: BusinessCardMinOrderByAggregateInput
  }

  export type BusinessCardScalarWhereWithAggregatesInput = {
    AND?: BusinessCardScalarWhereWithAggregatesInput | BusinessCardScalarWhereWithAggregatesInput[]
    OR?: BusinessCardScalarWhereWithAggregatesInput[]
    NOT?: BusinessCardScalarWhereWithAggregatesInput | BusinessCardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BusinessCard"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BusinessCard"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BusinessCard"> | Date | string
    imagePath?: StringWithAggregatesFilter<"BusinessCard"> | string
    companyName?: StringNullableWithAggregatesFilter<"BusinessCard"> | string | null
    name?: StringNullableWithAggregatesFilter<"BusinessCard"> | string | null
    email?: StringNullableWithAggregatesFilter<"BusinessCard"> | string | null
    phone?: StringNullableWithAggregatesFilter<"BusinessCard"> | string | null
    address?: StringNullableWithAggregatesFilter<"BusinessCard"> | string | null
    notes?: StringNullableWithAggregatesFilter<"BusinessCard"> | string | null
  }

  export type MessageTemplateWhereInput = {
    AND?: MessageTemplateWhereInput | MessageTemplateWhereInput[]
    OR?: MessageTemplateWhereInput[]
    NOT?: MessageTemplateWhereInput | MessageTemplateWhereInput[]
    id?: StringFilter<"MessageTemplate"> | string
    createdAt?: DateTimeFilter<"MessageTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"MessageTemplate"> | Date | string
    name?: StringFilter<"MessageTemplate"> | string
    content?: StringFilter<"MessageTemplate"> | string
    messageHistory?: MessageHistoryListRelationFilter
  }

  export type MessageTemplateOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    content?: SortOrder
    messageHistory?: MessageHistoryOrderByRelationAggregateInput
  }

  export type MessageTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageTemplateWhereInput | MessageTemplateWhereInput[]
    OR?: MessageTemplateWhereInput[]
    NOT?: MessageTemplateWhereInput | MessageTemplateWhereInput[]
    createdAt?: DateTimeFilter<"MessageTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"MessageTemplate"> | Date | string
    name?: StringFilter<"MessageTemplate"> | string
    content?: StringFilter<"MessageTemplate"> | string
    messageHistory?: MessageHistoryListRelationFilter
  }, "id">

  export type MessageTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    content?: SortOrder
    _count?: MessageTemplateCountOrderByAggregateInput
    _max?: MessageTemplateMaxOrderByAggregateInput
    _min?: MessageTemplateMinOrderByAggregateInput
  }

  export type MessageTemplateScalarWhereWithAggregatesInput = {
    AND?: MessageTemplateScalarWhereWithAggregatesInput | MessageTemplateScalarWhereWithAggregatesInput[]
    OR?: MessageTemplateScalarWhereWithAggregatesInput[]
    NOT?: MessageTemplateScalarWhereWithAggregatesInput | MessageTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MessageTemplate"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MessageTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MessageTemplate"> | Date | string
    name?: StringWithAggregatesFilter<"MessageTemplate"> | string
    content?: StringWithAggregatesFilter<"MessageTemplate"> | string
  }

  export type MessageHistoryWhereInput = {
    AND?: MessageHistoryWhereInput | MessageHistoryWhereInput[]
    OR?: MessageHistoryWhereInput[]
    NOT?: MessageHistoryWhereInput | MessageHistoryWhereInput[]
    id?: StringFilter<"MessageHistory"> | string
    createdAt?: DateTimeFilter<"MessageHistory"> | Date | string
    businessCardId?: StringFilter<"MessageHistory"> | string
    templateId?: StringNullableFilter<"MessageHistory"> | string | null
    message?: StringFilter<"MessageHistory"> | string
    status?: StringFilter<"MessageHistory"> | string
    businessCard?: XOR<BusinessCardScalarRelationFilter, BusinessCardWhereInput>
    template?: XOR<MessageTemplateNullableScalarRelationFilter, MessageTemplateWhereInput> | null
  }

  export type MessageHistoryOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    businessCardId?: SortOrder
    templateId?: SortOrderInput | SortOrder
    message?: SortOrder
    status?: SortOrder
    businessCard?: BusinessCardOrderByWithRelationInput
    template?: MessageTemplateOrderByWithRelationInput
  }

  export type MessageHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageHistoryWhereInput | MessageHistoryWhereInput[]
    OR?: MessageHistoryWhereInput[]
    NOT?: MessageHistoryWhereInput | MessageHistoryWhereInput[]
    createdAt?: DateTimeFilter<"MessageHistory"> | Date | string
    businessCardId?: StringFilter<"MessageHistory"> | string
    templateId?: StringNullableFilter<"MessageHistory"> | string | null
    message?: StringFilter<"MessageHistory"> | string
    status?: StringFilter<"MessageHistory"> | string
    businessCard?: XOR<BusinessCardScalarRelationFilter, BusinessCardWhereInput>
    template?: XOR<MessageTemplateNullableScalarRelationFilter, MessageTemplateWhereInput> | null
  }, "id">

  export type MessageHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    businessCardId?: SortOrder
    templateId?: SortOrderInput | SortOrder
    message?: SortOrder
    status?: SortOrder
    _count?: MessageHistoryCountOrderByAggregateInput
    _max?: MessageHistoryMaxOrderByAggregateInput
    _min?: MessageHistoryMinOrderByAggregateInput
  }

  export type MessageHistoryScalarWhereWithAggregatesInput = {
    AND?: MessageHistoryScalarWhereWithAggregatesInput | MessageHistoryScalarWhereWithAggregatesInput[]
    OR?: MessageHistoryScalarWhereWithAggregatesInput[]
    NOT?: MessageHistoryScalarWhereWithAggregatesInput | MessageHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MessageHistory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MessageHistory"> | Date | string
    businessCardId?: StringWithAggregatesFilter<"MessageHistory"> | string
    templateId?: StringNullableWithAggregatesFilter<"MessageHistory"> | string | null
    message?: StringWithAggregatesFilter<"MessageHistory"> | string
    status?: StringWithAggregatesFilter<"MessageHistory"> | string
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: StringFilter<"UserProfile"> | string
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    name?: StringNullableFilter<"UserProfile"> | string | null
    companyName?: StringNullableFilter<"UserProfile"> | string | null
    email?: StringNullableFilter<"UserProfile"> | string | null
    phone?: StringNullableFilter<"UserProfile"> | string | null
    address?: StringNullableFilter<"UserProfile"> | string | null
    title?: StringNullableFilter<"UserProfile"> | string | null
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    name?: StringNullableFilter<"UserProfile"> | string | null
    companyName?: StringNullableFilter<"UserProfile"> | string | null
    email?: StringNullableFilter<"UserProfile"> | string | null
    phone?: StringNullableFilter<"UserProfile"> | string | null
    address?: StringNullableFilter<"UserProfile"> | string | null
    title?: StringNullableFilter<"UserProfile"> | string | null
  }, "id">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProfile"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    name?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    companyName?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    email?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    phone?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    address?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    title?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
  }

  export type SettingsWhereInput = {
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    id?: StringFilter<"Settings"> | string
    createdAt?: DateTimeFilter<"Settings"> | Date | string
    updatedAt?: DateTimeFilter<"Settings"> | Date | string
    autoSendEnabled?: BoolFilter<"Settings"> | boolean
    autoSendTemplateId?: StringNullableFilter<"Settings"> | string | null
    defaultSenderPhone?: StringNullableFilter<"Settings"> | string | null
  }

  export type SettingsOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    autoSendEnabled?: SortOrder
    autoSendTemplateId?: SortOrderInput | SortOrder
    defaultSenderPhone?: SortOrderInput | SortOrder
  }

  export type SettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    createdAt?: DateTimeFilter<"Settings"> | Date | string
    updatedAt?: DateTimeFilter<"Settings"> | Date | string
    autoSendEnabled?: BoolFilter<"Settings"> | boolean
    autoSendTemplateId?: StringNullableFilter<"Settings"> | string | null
    defaultSenderPhone?: StringNullableFilter<"Settings"> | string | null
  }, "id">

  export type SettingsOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    autoSendEnabled?: SortOrder
    autoSendTemplateId?: SortOrderInput | SortOrder
    defaultSenderPhone?: SortOrderInput | SortOrder
    _count?: SettingsCountOrderByAggregateInput
    _max?: SettingsMaxOrderByAggregateInput
    _min?: SettingsMinOrderByAggregateInput
  }

  export type SettingsScalarWhereWithAggregatesInput = {
    AND?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    OR?: SettingsScalarWhereWithAggregatesInput[]
    NOT?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Settings"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Settings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Settings"> | Date | string
    autoSendEnabled?: BoolWithAggregatesFilter<"Settings"> | boolean
    autoSendTemplateId?: StringNullableWithAggregatesFilter<"Settings"> | string | null
    defaultSenderPhone?: StringNullableWithAggregatesFilter<"Settings"> | string | null
  }

  export type BusinessCardCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imagePath: string
    companyName?: string | null
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    notes?: string | null
    messageHistory?: MessageHistoryCreateNestedManyWithoutBusinessCardInput
  }

  export type BusinessCardUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imagePath: string
    companyName?: string | null
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    notes?: string | null
    messageHistory?: MessageHistoryUncheckedCreateNestedManyWithoutBusinessCardInput
  }

  export type BusinessCardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePath?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    messageHistory?: MessageHistoryUpdateManyWithoutBusinessCardNestedInput
  }

  export type BusinessCardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePath?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    messageHistory?: MessageHistoryUncheckedUpdateManyWithoutBusinessCardNestedInput
  }

  export type BusinessCardCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imagePath: string
    companyName?: string | null
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    notes?: string | null
  }

  export type BusinessCardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePath?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BusinessCardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePath?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageTemplateCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    content: string
    messageHistory?: MessageHistoryCreateNestedManyWithoutTemplateInput
  }

  export type MessageTemplateUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    content: string
    messageHistory?: MessageHistoryUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type MessageTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    messageHistory?: MessageHistoryUpdateManyWithoutTemplateNestedInput
  }

  export type MessageTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    messageHistory?: MessageHistoryUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type MessageTemplateCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    content: string
  }

  export type MessageTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type MessageTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type MessageHistoryCreateInput = {
    id?: string
    createdAt?: Date | string
    message: string
    status: string
    businessCard: BusinessCardCreateNestedOneWithoutMessageHistoryInput
    template?: MessageTemplateCreateNestedOneWithoutMessageHistoryInput
  }

  export type MessageHistoryUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    businessCardId: string
    templateId?: string | null
    message: string
    status: string
  }

  export type MessageHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    businessCard?: BusinessCardUpdateOneRequiredWithoutMessageHistoryNestedInput
    template?: MessageTemplateUpdateOneWithoutMessageHistoryNestedInput
  }

  export type MessageHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessCardId?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type MessageHistoryCreateManyInput = {
    id?: string
    createdAt?: Date | string
    businessCardId: string
    templateId?: string | null
    message: string
    status: string
  }

  export type MessageHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type MessageHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessCardId?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UserProfileCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    companyName?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    title?: string | null
  }

  export type UserProfileUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    companyName?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    title?: string | null
  }

  export type UserProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserProfileCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    companyName?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    title?: string | null
  }

  export type UserProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SettingsCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    autoSendEnabled?: boolean
    autoSendTemplateId?: string | null
    defaultSenderPhone?: string | null
  }

  export type SettingsUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    autoSendEnabled?: boolean
    autoSendTemplateId?: string | null
    defaultSenderPhone?: string | null
  }

  export type SettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autoSendEnabled?: BoolFieldUpdateOperationsInput | boolean
    autoSendTemplateId?: NullableStringFieldUpdateOperationsInput | string | null
    defaultSenderPhone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autoSendEnabled?: BoolFieldUpdateOperationsInput | boolean
    autoSendTemplateId?: NullableStringFieldUpdateOperationsInput | string | null
    defaultSenderPhone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SettingsCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    autoSendEnabled?: boolean
    autoSendTemplateId?: string | null
    defaultSenderPhone?: string | null
  }

  export type SettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autoSendEnabled?: BoolFieldUpdateOperationsInput | boolean
    autoSendTemplateId?: NullableStringFieldUpdateOperationsInput | string | null
    defaultSenderPhone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autoSendEnabled?: BoolFieldUpdateOperationsInput | boolean
    autoSendTemplateId?: NullableStringFieldUpdateOperationsInput | string | null
    defaultSenderPhone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MessageHistoryListRelationFilter = {
    every?: MessageHistoryWhereInput
    some?: MessageHistoryWhereInput
    none?: MessageHistoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MessageHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessCardCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imagePath?: SortOrder
    companyName?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    notes?: SortOrder
  }

  export type BusinessCardMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imagePath?: SortOrder
    companyName?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    notes?: SortOrder
  }

  export type BusinessCardMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imagePath?: SortOrder
    companyName?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    notes?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type MessageTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    content?: SortOrder
  }

  export type MessageTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    content?: SortOrder
  }

  export type MessageTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    content?: SortOrder
  }

  export type BusinessCardScalarRelationFilter = {
    is?: BusinessCardWhereInput
    isNot?: BusinessCardWhereInput
  }

  export type MessageTemplateNullableScalarRelationFilter = {
    is?: MessageTemplateWhereInput | null
    isNot?: MessageTemplateWhereInput | null
  }

  export type MessageHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    businessCardId?: SortOrder
    templateId?: SortOrder
    message?: SortOrder
    status?: SortOrder
  }

  export type MessageHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    businessCardId?: SortOrder
    templateId?: SortOrder
    message?: SortOrder
    status?: SortOrder
  }

  export type MessageHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    businessCardId?: SortOrder
    templateId?: SortOrder
    message?: SortOrder
    status?: SortOrder
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    companyName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    title?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    companyName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    title?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    companyName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    title?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SettingsCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    autoSendEnabled?: SortOrder
    autoSendTemplateId?: SortOrder
    defaultSenderPhone?: SortOrder
  }

  export type SettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    autoSendEnabled?: SortOrder
    autoSendTemplateId?: SortOrder
    defaultSenderPhone?: SortOrder
  }

  export type SettingsMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    autoSendEnabled?: SortOrder
    autoSendTemplateId?: SortOrder
    defaultSenderPhone?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MessageHistoryCreateNestedManyWithoutBusinessCardInput = {
    create?: XOR<MessageHistoryCreateWithoutBusinessCardInput, MessageHistoryUncheckedCreateWithoutBusinessCardInput> | MessageHistoryCreateWithoutBusinessCardInput[] | MessageHistoryUncheckedCreateWithoutBusinessCardInput[]
    connectOrCreate?: MessageHistoryCreateOrConnectWithoutBusinessCardInput | MessageHistoryCreateOrConnectWithoutBusinessCardInput[]
    createMany?: MessageHistoryCreateManyBusinessCardInputEnvelope
    connect?: MessageHistoryWhereUniqueInput | MessageHistoryWhereUniqueInput[]
  }

  export type MessageHistoryUncheckedCreateNestedManyWithoutBusinessCardInput = {
    create?: XOR<MessageHistoryCreateWithoutBusinessCardInput, MessageHistoryUncheckedCreateWithoutBusinessCardInput> | MessageHistoryCreateWithoutBusinessCardInput[] | MessageHistoryUncheckedCreateWithoutBusinessCardInput[]
    connectOrCreate?: MessageHistoryCreateOrConnectWithoutBusinessCardInput | MessageHistoryCreateOrConnectWithoutBusinessCardInput[]
    createMany?: MessageHistoryCreateManyBusinessCardInputEnvelope
    connect?: MessageHistoryWhereUniqueInput | MessageHistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MessageHistoryUpdateManyWithoutBusinessCardNestedInput = {
    create?: XOR<MessageHistoryCreateWithoutBusinessCardInput, MessageHistoryUncheckedCreateWithoutBusinessCardInput> | MessageHistoryCreateWithoutBusinessCardInput[] | MessageHistoryUncheckedCreateWithoutBusinessCardInput[]
    connectOrCreate?: MessageHistoryCreateOrConnectWithoutBusinessCardInput | MessageHistoryCreateOrConnectWithoutBusinessCardInput[]
    upsert?: MessageHistoryUpsertWithWhereUniqueWithoutBusinessCardInput | MessageHistoryUpsertWithWhereUniqueWithoutBusinessCardInput[]
    createMany?: MessageHistoryCreateManyBusinessCardInputEnvelope
    set?: MessageHistoryWhereUniqueInput | MessageHistoryWhereUniqueInput[]
    disconnect?: MessageHistoryWhereUniqueInput | MessageHistoryWhereUniqueInput[]
    delete?: MessageHistoryWhereUniqueInput | MessageHistoryWhereUniqueInput[]
    connect?: MessageHistoryWhereUniqueInput | MessageHistoryWhereUniqueInput[]
    update?: MessageHistoryUpdateWithWhereUniqueWithoutBusinessCardInput | MessageHistoryUpdateWithWhereUniqueWithoutBusinessCardInput[]
    updateMany?: MessageHistoryUpdateManyWithWhereWithoutBusinessCardInput | MessageHistoryUpdateManyWithWhereWithoutBusinessCardInput[]
    deleteMany?: MessageHistoryScalarWhereInput | MessageHistoryScalarWhereInput[]
  }

  export type MessageHistoryUncheckedUpdateManyWithoutBusinessCardNestedInput = {
    create?: XOR<MessageHistoryCreateWithoutBusinessCardInput, MessageHistoryUncheckedCreateWithoutBusinessCardInput> | MessageHistoryCreateWithoutBusinessCardInput[] | MessageHistoryUncheckedCreateWithoutBusinessCardInput[]
    connectOrCreate?: MessageHistoryCreateOrConnectWithoutBusinessCardInput | MessageHistoryCreateOrConnectWithoutBusinessCardInput[]
    upsert?: MessageHistoryUpsertWithWhereUniqueWithoutBusinessCardInput | MessageHistoryUpsertWithWhereUniqueWithoutBusinessCardInput[]
    createMany?: MessageHistoryCreateManyBusinessCardInputEnvelope
    set?: MessageHistoryWhereUniqueInput | MessageHistoryWhereUniqueInput[]
    disconnect?: MessageHistoryWhereUniqueInput | MessageHistoryWhereUniqueInput[]
    delete?: MessageHistoryWhereUniqueInput | MessageHistoryWhereUniqueInput[]
    connect?: MessageHistoryWhereUniqueInput | MessageHistoryWhereUniqueInput[]
    update?: MessageHistoryUpdateWithWhereUniqueWithoutBusinessCardInput | MessageHistoryUpdateWithWhereUniqueWithoutBusinessCardInput[]
    updateMany?: MessageHistoryUpdateManyWithWhereWithoutBusinessCardInput | MessageHistoryUpdateManyWithWhereWithoutBusinessCardInput[]
    deleteMany?: MessageHistoryScalarWhereInput | MessageHistoryScalarWhereInput[]
  }

  export type MessageHistoryCreateNestedManyWithoutTemplateInput = {
    create?: XOR<MessageHistoryCreateWithoutTemplateInput, MessageHistoryUncheckedCreateWithoutTemplateInput> | MessageHistoryCreateWithoutTemplateInput[] | MessageHistoryUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: MessageHistoryCreateOrConnectWithoutTemplateInput | MessageHistoryCreateOrConnectWithoutTemplateInput[]
    createMany?: MessageHistoryCreateManyTemplateInputEnvelope
    connect?: MessageHistoryWhereUniqueInput | MessageHistoryWhereUniqueInput[]
  }

  export type MessageHistoryUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<MessageHistoryCreateWithoutTemplateInput, MessageHistoryUncheckedCreateWithoutTemplateInput> | MessageHistoryCreateWithoutTemplateInput[] | MessageHistoryUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: MessageHistoryCreateOrConnectWithoutTemplateInput | MessageHistoryCreateOrConnectWithoutTemplateInput[]
    createMany?: MessageHistoryCreateManyTemplateInputEnvelope
    connect?: MessageHistoryWhereUniqueInput | MessageHistoryWhereUniqueInput[]
  }

  export type MessageHistoryUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<MessageHistoryCreateWithoutTemplateInput, MessageHistoryUncheckedCreateWithoutTemplateInput> | MessageHistoryCreateWithoutTemplateInput[] | MessageHistoryUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: MessageHistoryCreateOrConnectWithoutTemplateInput | MessageHistoryCreateOrConnectWithoutTemplateInput[]
    upsert?: MessageHistoryUpsertWithWhereUniqueWithoutTemplateInput | MessageHistoryUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: MessageHistoryCreateManyTemplateInputEnvelope
    set?: MessageHistoryWhereUniqueInput | MessageHistoryWhereUniqueInput[]
    disconnect?: MessageHistoryWhereUniqueInput | MessageHistoryWhereUniqueInput[]
    delete?: MessageHistoryWhereUniqueInput | MessageHistoryWhereUniqueInput[]
    connect?: MessageHistoryWhereUniqueInput | MessageHistoryWhereUniqueInput[]
    update?: MessageHistoryUpdateWithWhereUniqueWithoutTemplateInput | MessageHistoryUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: MessageHistoryUpdateManyWithWhereWithoutTemplateInput | MessageHistoryUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: MessageHistoryScalarWhereInput | MessageHistoryScalarWhereInput[]
  }

  export type MessageHistoryUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<MessageHistoryCreateWithoutTemplateInput, MessageHistoryUncheckedCreateWithoutTemplateInput> | MessageHistoryCreateWithoutTemplateInput[] | MessageHistoryUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: MessageHistoryCreateOrConnectWithoutTemplateInput | MessageHistoryCreateOrConnectWithoutTemplateInput[]
    upsert?: MessageHistoryUpsertWithWhereUniqueWithoutTemplateInput | MessageHistoryUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: MessageHistoryCreateManyTemplateInputEnvelope
    set?: MessageHistoryWhereUniqueInput | MessageHistoryWhereUniqueInput[]
    disconnect?: MessageHistoryWhereUniqueInput | MessageHistoryWhereUniqueInput[]
    delete?: MessageHistoryWhereUniqueInput | MessageHistoryWhereUniqueInput[]
    connect?: MessageHistoryWhereUniqueInput | MessageHistoryWhereUniqueInput[]
    update?: MessageHistoryUpdateWithWhereUniqueWithoutTemplateInput | MessageHistoryUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: MessageHistoryUpdateManyWithWhereWithoutTemplateInput | MessageHistoryUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: MessageHistoryScalarWhereInput | MessageHistoryScalarWhereInput[]
  }

  export type BusinessCardCreateNestedOneWithoutMessageHistoryInput = {
    create?: XOR<BusinessCardCreateWithoutMessageHistoryInput, BusinessCardUncheckedCreateWithoutMessageHistoryInput>
    connectOrCreate?: BusinessCardCreateOrConnectWithoutMessageHistoryInput
    connect?: BusinessCardWhereUniqueInput
  }

  export type MessageTemplateCreateNestedOneWithoutMessageHistoryInput = {
    create?: XOR<MessageTemplateCreateWithoutMessageHistoryInput, MessageTemplateUncheckedCreateWithoutMessageHistoryInput>
    connectOrCreate?: MessageTemplateCreateOrConnectWithoutMessageHistoryInput
    connect?: MessageTemplateWhereUniqueInput
  }

  export type BusinessCardUpdateOneRequiredWithoutMessageHistoryNestedInput = {
    create?: XOR<BusinessCardCreateWithoutMessageHistoryInput, BusinessCardUncheckedCreateWithoutMessageHistoryInput>
    connectOrCreate?: BusinessCardCreateOrConnectWithoutMessageHistoryInput
    upsert?: BusinessCardUpsertWithoutMessageHistoryInput
    connect?: BusinessCardWhereUniqueInput
    update?: XOR<XOR<BusinessCardUpdateToOneWithWhereWithoutMessageHistoryInput, BusinessCardUpdateWithoutMessageHistoryInput>, BusinessCardUncheckedUpdateWithoutMessageHistoryInput>
  }

  export type MessageTemplateUpdateOneWithoutMessageHistoryNestedInput = {
    create?: XOR<MessageTemplateCreateWithoutMessageHistoryInput, MessageTemplateUncheckedCreateWithoutMessageHistoryInput>
    connectOrCreate?: MessageTemplateCreateOrConnectWithoutMessageHistoryInput
    upsert?: MessageTemplateUpsertWithoutMessageHistoryInput
    disconnect?: MessageTemplateWhereInput | boolean
    delete?: MessageTemplateWhereInput | boolean
    connect?: MessageTemplateWhereUniqueInput
    update?: XOR<XOR<MessageTemplateUpdateToOneWithWhereWithoutMessageHistoryInput, MessageTemplateUpdateWithoutMessageHistoryInput>, MessageTemplateUncheckedUpdateWithoutMessageHistoryInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MessageHistoryCreateWithoutBusinessCardInput = {
    id?: string
    createdAt?: Date | string
    message: string
    status: string
    template?: MessageTemplateCreateNestedOneWithoutMessageHistoryInput
  }

  export type MessageHistoryUncheckedCreateWithoutBusinessCardInput = {
    id?: string
    createdAt?: Date | string
    templateId?: string | null
    message: string
    status: string
  }

  export type MessageHistoryCreateOrConnectWithoutBusinessCardInput = {
    where: MessageHistoryWhereUniqueInput
    create: XOR<MessageHistoryCreateWithoutBusinessCardInput, MessageHistoryUncheckedCreateWithoutBusinessCardInput>
  }

  export type MessageHistoryCreateManyBusinessCardInputEnvelope = {
    data: MessageHistoryCreateManyBusinessCardInput | MessageHistoryCreateManyBusinessCardInput[]
  }

  export type MessageHistoryUpsertWithWhereUniqueWithoutBusinessCardInput = {
    where: MessageHistoryWhereUniqueInput
    update: XOR<MessageHistoryUpdateWithoutBusinessCardInput, MessageHistoryUncheckedUpdateWithoutBusinessCardInput>
    create: XOR<MessageHistoryCreateWithoutBusinessCardInput, MessageHistoryUncheckedCreateWithoutBusinessCardInput>
  }

  export type MessageHistoryUpdateWithWhereUniqueWithoutBusinessCardInput = {
    where: MessageHistoryWhereUniqueInput
    data: XOR<MessageHistoryUpdateWithoutBusinessCardInput, MessageHistoryUncheckedUpdateWithoutBusinessCardInput>
  }

  export type MessageHistoryUpdateManyWithWhereWithoutBusinessCardInput = {
    where: MessageHistoryScalarWhereInput
    data: XOR<MessageHistoryUpdateManyMutationInput, MessageHistoryUncheckedUpdateManyWithoutBusinessCardInput>
  }

  export type MessageHistoryScalarWhereInput = {
    AND?: MessageHistoryScalarWhereInput | MessageHistoryScalarWhereInput[]
    OR?: MessageHistoryScalarWhereInput[]
    NOT?: MessageHistoryScalarWhereInput | MessageHistoryScalarWhereInput[]
    id?: StringFilter<"MessageHistory"> | string
    createdAt?: DateTimeFilter<"MessageHistory"> | Date | string
    businessCardId?: StringFilter<"MessageHistory"> | string
    templateId?: StringNullableFilter<"MessageHistory"> | string | null
    message?: StringFilter<"MessageHistory"> | string
    status?: StringFilter<"MessageHistory"> | string
  }

  export type MessageHistoryCreateWithoutTemplateInput = {
    id?: string
    createdAt?: Date | string
    message: string
    status: string
    businessCard: BusinessCardCreateNestedOneWithoutMessageHistoryInput
  }

  export type MessageHistoryUncheckedCreateWithoutTemplateInput = {
    id?: string
    createdAt?: Date | string
    businessCardId: string
    message: string
    status: string
  }

  export type MessageHistoryCreateOrConnectWithoutTemplateInput = {
    where: MessageHistoryWhereUniqueInput
    create: XOR<MessageHistoryCreateWithoutTemplateInput, MessageHistoryUncheckedCreateWithoutTemplateInput>
  }

  export type MessageHistoryCreateManyTemplateInputEnvelope = {
    data: MessageHistoryCreateManyTemplateInput | MessageHistoryCreateManyTemplateInput[]
  }

  export type MessageHistoryUpsertWithWhereUniqueWithoutTemplateInput = {
    where: MessageHistoryWhereUniqueInput
    update: XOR<MessageHistoryUpdateWithoutTemplateInput, MessageHistoryUncheckedUpdateWithoutTemplateInput>
    create: XOR<MessageHistoryCreateWithoutTemplateInput, MessageHistoryUncheckedCreateWithoutTemplateInput>
  }

  export type MessageHistoryUpdateWithWhereUniqueWithoutTemplateInput = {
    where: MessageHistoryWhereUniqueInput
    data: XOR<MessageHistoryUpdateWithoutTemplateInput, MessageHistoryUncheckedUpdateWithoutTemplateInput>
  }

  export type MessageHistoryUpdateManyWithWhereWithoutTemplateInput = {
    where: MessageHistoryScalarWhereInput
    data: XOR<MessageHistoryUpdateManyMutationInput, MessageHistoryUncheckedUpdateManyWithoutTemplateInput>
  }

  export type BusinessCardCreateWithoutMessageHistoryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imagePath: string
    companyName?: string | null
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    notes?: string | null
  }

  export type BusinessCardUncheckedCreateWithoutMessageHistoryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imagePath: string
    companyName?: string | null
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    notes?: string | null
  }

  export type BusinessCardCreateOrConnectWithoutMessageHistoryInput = {
    where: BusinessCardWhereUniqueInput
    create: XOR<BusinessCardCreateWithoutMessageHistoryInput, BusinessCardUncheckedCreateWithoutMessageHistoryInput>
  }

  export type MessageTemplateCreateWithoutMessageHistoryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    content: string
  }

  export type MessageTemplateUncheckedCreateWithoutMessageHistoryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    content: string
  }

  export type MessageTemplateCreateOrConnectWithoutMessageHistoryInput = {
    where: MessageTemplateWhereUniqueInput
    create: XOR<MessageTemplateCreateWithoutMessageHistoryInput, MessageTemplateUncheckedCreateWithoutMessageHistoryInput>
  }

  export type BusinessCardUpsertWithoutMessageHistoryInput = {
    update: XOR<BusinessCardUpdateWithoutMessageHistoryInput, BusinessCardUncheckedUpdateWithoutMessageHistoryInput>
    create: XOR<BusinessCardCreateWithoutMessageHistoryInput, BusinessCardUncheckedCreateWithoutMessageHistoryInput>
    where?: BusinessCardWhereInput
  }

  export type BusinessCardUpdateToOneWithWhereWithoutMessageHistoryInput = {
    where?: BusinessCardWhereInput
    data: XOR<BusinessCardUpdateWithoutMessageHistoryInput, BusinessCardUncheckedUpdateWithoutMessageHistoryInput>
  }

  export type BusinessCardUpdateWithoutMessageHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePath?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BusinessCardUncheckedUpdateWithoutMessageHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePath?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageTemplateUpsertWithoutMessageHistoryInput = {
    update: XOR<MessageTemplateUpdateWithoutMessageHistoryInput, MessageTemplateUncheckedUpdateWithoutMessageHistoryInput>
    create: XOR<MessageTemplateCreateWithoutMessageHistoryInput, MessageTemplateUncheckedCreateWithoutMessageHistoryInput>
    where?: MessageTemplateWhereInput
  }

  export type MessageTemplateUpdateToOneWithWhereWithoutMessageHistoryInput = {
    where?: MessageTemplateWhereInput
    data: XOR<MessageTemplateUpdateWithoutMessageHistoryInput, MessageTemplateUncheckedUpdateWithoutMessageHistoryInput>
  }

  export type MessageTemplateUpdateWithoutMessageHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type MessageTemplateUncheckedUpdateWithoutMessageHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type MessageHistoryCreateManyBusinessCardInput = {
    id?: string
    createdAt?: Date | string
    templateId?: string | null
    message: string
    status: string
  }

  export type MessageHistoryUpdateWithoutBusinessCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    template?: MessageTemplateUpdateOneWithoutMessageHistoryNestedInput
  }

  export type MessageHistoryUncheckedUpdateWithoutBusinessCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type MessageHistoryUncheckedUpdateManyWithoutBusinessCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type MessageHistoryCreateManyTemplateInput = {
    id?: string
    createdAt?: Date | string
    businessCardId: string
    message: string
    status: string
  }

  export type MessageHistoryUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    businessCard?: BusinessCardUpdateOneRequiredWithoutMessageHistoryNestedInput
  }

  export type MessageHistoryUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessCardId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type MessageHistoryUncheckedUpdateManyWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessCardId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}