
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model TherapistProfile
 * 
 */
export type TherapistProfile = $Result.DefaultSelection<Prisma.$TherapistProfilePayload>
/**
 * Model Specialzation
 * 
 */
export type Specialzation = $Result.DefaultSelection<Prisma.$SpecialzationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  THERAPIST: 'THERAPIST',
  PATIENT: 'PATIENT',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.therapistProfile`: Exposes CRUD operations for the **TherapistProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TherapistProfiles
    * const therapistProfiles = await prisma.therapistProfile.findMany()
    * ```
    */
  get therapistProfile(): Prisma.TherapistProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.specialzation`: Exposes CRUD operations for the **Specialzation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Specialzations
    * const specialzations = await prisma.specialzation.findMany()
    * ```
    */
  get specialzation(): Prisma.SpecialzationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
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
    User: 'User',
    TherapistProfile: 'TherapistProfile',
    Specialzation: 'Specialzation'
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
      modelProps: "user" | "therapistProfile" | "specialzation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      TherapistProfile: {
        payload: Prisma.$TherapistProfilePayload<ExtArgs>
        fields: Prisma.TherapistProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TherapistProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TherapistProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistProfilePayload>
          }
          findFirst: {
            args: Prisma.TherapistProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TherapistProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistProfilePayload>
          }
          findMany: {
            args: Prisma.TherapistProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistProfilePayload>[]
          }
          create: {
            args: Prisma.TherapistProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistProfilePayload>
          }
          createMany: {
            args: Prisma.TherapistProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TherapistProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistProfilePayload>[]
          }
          delete: {
            args: Prisma.TherapistProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistProfilePayload>
          }
          update: {
            args: Prisma.TherapistProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistProfilePayload>
          }
          deleteMany: {
            args: Prisma.TherapistProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TherapistProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TherapistProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistProfilePayload>[]
          }
          upsert: {
            args: Prisma.TherapistProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistProfilePayload>
          }
          aggregate: {
            args: Prisma.TherapistProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTherapistProfile>
          }
          groupBy: {
            args: Prisma.TherapistProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<TherapistProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.TherapistProfileCountArgs<ExtArgs>
            result: $Utils.Optional<TherapistProfileCountAggregateOutputType> | number
          }
        }
      }
      Specialzation: {
        payload: Prisma.$SpecialzationPayload<ExtArgs>
        fields: Prisma.SpecialzationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpecialzationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialzationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpecialzationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialzationPayload>
          }
          findFirst: {
            args: Prisma.SpecialzationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialzationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpecialzationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialzationPayload>
          }
          findMany: {
            args: Prisma.SpecialzationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialzationPayload>[]
          }
          create: {
            args: Prisma.SpecialzationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialzationPayload>
          }
          createMany: {
            args: Prisma.SpecialzationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpecialzationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialzationPayload>[]
          }
          delete: {
            args: Prisma.SpecialzationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialzationPayload>
          }
          update: {
            args: Prisma.SpecialzationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialzationPayload>
          }
          deleteMany: {
            args: Prisma.SpecialzationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpecialzationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpecialzationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialzationPayload>[]
          }
          upsert: {
            args: Prisma.SpecialzationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialzationPayload>
          }
          aggregate: {
            args: Prisma.SpecialzationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecialzation>
          }
          groupBy: {
            args: Prisma.SpecialzationGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpecialzationGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpecialzationCountArgs<ExtArgs>
            result: $Utils.Optional<SpecialzationCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    user?: UserOmit
    therapistProfile?: TherapistProfileOmit
    specialzation?: SpecialzationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type TherapistProfileCountOutputType
   */

  export type TherapistProfileCountOutputType = {
    specializations: number
  }

  export type TherapistProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specializations?: boolean | TherapistProfileCountOutputTypeCountSpecializationsArgs
  }

  // Custom InputTypes
  /**
   * TherapistProfileCountOutputType without action
   */
  export type TherapistProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistProfileCountOutputType
     */
    select?: TherapistProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TherapistProfileCountOutputType without action
   */
  export type TherapistProfileCountOutputTypeCountSpecializationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialzationWhereInput
  }


  /**
   * Count Type SpecialzationCountOutputType
   */

  export type SpecialzationCountOutputType = {
    therapistProfile: number
  }

  export type SpecialzationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    therapistProfile?: boolean | SpecialzationCountOutputTypeCountTherapistProfileArgs
  }

  // Custom InputTypes
  /**
   * SpecialzationCountOutputType without action
   */
  export type SpecialzationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialzationCountOutputType
     */
    select?: SpecialzationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpecialzationCountOutputType without action
   */
  export type SpecialzationCountOutputTypeCountTherapistProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TherapistProfileWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    therapistProfile?: boolean | User$therapistProfileArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    therapistProfile?: boolean | User$therapistProfileArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      therapistProfile: Prisma.$TherapistProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    therapistProfile<T extends User$therapistProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$therapistProfileArgs<ExtArgs>>): Prisma__TherapistProfileClient<$Result.GetResult<Prisma.$TherapistProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.therapistProfile
   */
  export type User$therapistProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistProfile
     */
    select?: TherapistProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TherapistProfile
     */
    omit?: TherapistProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistProfileInclude<ExtArgs> | null
    where?: TherapistProfileWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model TherapistProfile
   */

  export type AggregateTherapistProfile = {
    _count: TherapistProfileCountAggregateOutputType | null
    _avg: TherapistProfileAvgAggregateOutputType | null
    _sum: TherapistProfileSumAggregateOutputType | null
    _min: TherapistProfileMinAggregateOutputType | null
    _max: TherapistProfileMaxAggregateOutputType | null
  }

  export type TherapistProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TherapistProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TherapistProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    bio: string | null
  }

  export type TherapistProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    bio: string | null
  }

  export type TherapistProfileCountAggregateOutputType = {
    id: number
    userId: number
    bio: number
    _all: number
  }


  export type TherapistProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TherapistProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TherapistProfileMinAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
  }

  export type TherapistProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
  }

  export type TherapistProfileCountAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    _all?: true
  }

  export type TherapistProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TherapistProfile to aggregate.
     */
    where?: TherapistProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TherapistProfiles to fetch.
     */
    orderBy?: TherapistProfileOrderByWithRelationInput | TherapistProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TherapistProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TherapistProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TherapistProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TherapistProfiles
    **/
    _count?: true | TherapistProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TherapistProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TherapistProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TherapistProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TherapistProfileMaxAggregateInputType
  }

  export type GetTherapistProfileAggregateType<T extends TherapistProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateTherapistProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTherapistProfile[P]>
      : GetScalarType<T[P], AggregateTherapistProfile[P]>
  }




  export type TherapistProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TherapistProfileWhereInput
    orderBy?: TherapistProfileOrderByWithAggregationInput | TherapistProfileOrderByWithAggregationInput[]
    by: TherapistProfileScalarFieldEnum[] | TherapistProfileScalarFieldEnum
    having?: TherapistProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TherapistProfileCountAggregateInputType | true
    _avg?: TherapistProfileAvgAggregateInputType
    _sum?: TherapistProfileSumAggregateInputType
    _min?: TherapistProfileMinAggregateInputType
    _max?: TherapistProfileMaxAggregateInputType
  }

  export type TherapistProfileGroupByOutputType = {
    id: number
    userId: number
    bio: string | null
    _count: TherapistProfileCountAggregateOutputType | null
    _avg: TherapistProfileAvgAggregateOutputType | null
    _sum: TherapistProfileSumAggregateOutputType | null
    _min: TherapistProfileMinAggregateOutputType | null
    _max: TherapistProfileMaxAggregateOutputType | null
  }

  type GetTherapistProfileGroupByPayload<T extends TherapistProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TherapistProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TherapistProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TherapistProfileGroupByOutputType[P]>
            : GetScalarType<T[P], TherapistProfileGroupByOutputType[P]>
        }
      >
    >


  export type TherapistProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    specializations?: boolean | TherapistProfile$specializationsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | TherapistProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["therapistProfile"]>

  export type TherapistProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["therapistProfile"]>

  export type TherapistProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["therapistProfile"]>

  export type TherapistProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    bio?: boolean
  }

  export type TherapistProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bio", ExtArgs["result"]["therapistProfile"]>
  export type TherapistProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specializations?: boolean | TherapistProfile$specializationsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | TherapistProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TherapistProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TherapistProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TherapistProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TherapistProfile"
    objects: {
      specializations: Prisma.$SpecialzationPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      bio: string | null
    }, ExtArgs["result"]["therapistProfile"]>
    composites: {}
  }

  type TherapistProfileGetPayload<S extends boolean | null | undefined | TherapistProfileDefaultArgs> = $Result.GetResult<Prisma.$TherapistProfilePayload, S>

  type TherapistProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TherapistProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TherapistProfileCountAggregateInputType | true
    }

  export interface TherapistProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TherapistProfile'], meta: { name: 'TherapistProfile' } }
    /**
     * Find zero or one TherapistProfile that matches the filter.
     * @param {TherapistProfileFindUniqueArgs} args - Arguments to find a TherapistProfile
     * @example
     * // Get one TherapistProfile
     * const therapistProfile = await prisma.therapistProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TherapistProfileFindUniqueArgs>(args: SelectSubset<T, TherapistProfileFindUniqueArgs<ExtArgs>>): Prisma__TherapistProfileClient<$Result.GetResult<Prisma.$TherapistProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TherapistProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TherapistProfileFindUniqueOrThrowArgs} args - Arguments to find a TherapistProfile
     * @example
     * // Get one TherapistProfile
     * const therapistProfile = await prisma.therapistProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TherapistProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, TherapistProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TherapistProfileClient<$Result.GetResult<Prisma.$TherapistProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TherapistProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistProfileFindFirstArgs} args - Arguments to find a TherapistProfile
     * @example
     * // Get one TherapistProfile
     * const therapistProfile = await prisma.therapistProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TherapistProfileFindFirstArgs>(args?: SelectSubset<T, TherapistProfileFindFirstArgs<ExtArgs>>): Prisma__TherapistProfileClient<$Result.GetResult<Prisma.$TherapistProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TherapistProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistProfileFindFirstOrThrowArgs} args - Arguments to find a TherapistProfile
     * @example
     * // Get one TherapistProfile
     * const therapistProfile = await prisma.therapistProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TherapistProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, TherapistProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__TherapistProfileClient<$Result.GetResult<Prisma.$TherapistProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TherapistProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TherapistProfiles
     * const therapistProfiles = await prisma.therapistProfile.findMany()
     * 
     * // Get first 10 TherapistProfiles
     * const therapistProfiles = await prisma.therapistProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const therapistProfileWithIdOnly = await prisma.therapistProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TherapistProfileFindManyArgs>(args?: SelectSubset<T, TherapistProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapistProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TherapistProfile.
     * @param {TherapistProfileCreateArgs} args - Arguments to create a TherapistProfile.
     * @example
     * // Create one TherapistProfile
     * const TherapistProfile = await prisma.therapistProfile.create({
     *   data: {
     *     // ... data to create a TherapistProfile
     *   }
     * })
     * 
     */
    create<T extends TherapistProfileCreateArgs>(args: SelectSubset<T, TherapistProfileCreateArgs<ExtArgs>>): Prisma__TherapistProfileClient<$Result.GetResult<Prisma.$TherapistProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TherapistProfiles.
     * @param {TherapistProfileCreateManyArgs} args - Arguments to create many TherapistProfiles.
     * @example
     * // Create many TherapistProfiles
     * const therapistProfile = await prisma.therapistProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TherapistProfileCreateManyArgs>(args?: SelectSubset<T, TherapistProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TherapistProfiles and returns the data saved in the database.
     * @param {TherapistProfileCreateManyAndReturnArgs} args - Arguments to create many TherapistProfiles.
     * @example
     * // Create many TherapistProfiles
     * const therapistProfile = await prisma.therapistProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TherapistProfiles and only return the `id`
     * const therapistProfileWithIdOnly = await prisma.therapistProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TherapistProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, TherapistProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapistProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TherapistProfile.
     * @param {TherapistProfileDeleteArgs} args - Arguments to delete one TherapistProfile.
     * @example
     * // Delete one TherapistProfile
     * const TherapistProfile = await prisma.therapistProfile.delete({
     *   where: {
     *     // ... filter to delete one TherapistProfile
     *   }
     * })
     * 
     */
    delete<T extends TherapistProfileDeleteArgs>(args: SelectSubset<T, TherapistProfileDeleteArgs<ExtArgs>>): Prisma__TherapistProfileClient<$Result.GetResult<Prisma.$TherapistProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TherapistProfile.
     * @param {TherapistProfileUpdateArgs} args - Arguments to update one TherapistProfile.
     * @example
     * // Update one TherapistProfile
     * const therapistProfile = await prisma.therapistProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TherapistProfileUpdateArgs>(args: SelectSubset<T, TherapistProfileUpdateArgs<ExtArgs>>): Prisma__TherapistProfileClient<$Result.GetResult<Prisma.$TherapistProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TherapistProfiles.
     * @param {TherapistProfileDeleteManyArgs} args - Arguments to filter TherapistProfiles to delete.
     * @example
     * // Delete a few TherapistProfiles
     * const { count } = await prisma.therapistProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TherapistProfileDeleteManyArgs>(args?: SelectSubset<T, TherapistProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TherapistProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TherapistProfiles
     * const therapistProfile = await prisma.therapistProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TherapistProfileUpdateManyArgs>(args: SelectSubset<T, TherapistProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TherapistProfiles and returns the data updated in the database.
     * @param {TherapistProfileUpdateManyAndReturnArgs} args - Arguments to update many TherapistProfiles.
     * @example
     * // Update many TherapistProfiles
     * const therapistProfile = await prisma.therapistProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TherapistProfiles and only return the `id`
     * const therapistProfileWithIdOnly = await prisma.therapistProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends TherapistProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, TherapistProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapistProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TherapistProfile.
     * @param {TherapistProfileUpsertArgs} args - Arguments to update or create a TherapistProfile.
     * @example
     * // Update or create a TherapistProfile
     * const therapistProfile = await prisma.therapistProfile.upsert({
     *   create: {
     *     // ... data to create a TherapistProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TherapistProfile we want to update
     *   }
     * })
     */
    upsert<T extends TherapistProfileUpsertArgs>(args: SelectSubset<T, TherapistProfileUpsertArgs<ExtArgs>>): Prisma__TherapistProfileClient<$Result.GetResult<Prisma.$TherapistProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TherapistProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistProfileCountArgs} args - Arguments to filter TherapistProfiles to count.
     * @example
     * // Count the number of TherapistProfiles
     * const count = await prisma.therapistProfile.count({
     *   where: {
     *     // ... the filter for the TherapistProfiles we want to count
     *   }
     * })
    **/
    count<T extends TherapistProfileCountArgs>(
      args?: Subset<T, TherapistProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TherapistProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TherapistProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TherapistProfileAggregateArgs>(args: Subset<T, TherapistProfileAggregateArgs>): Prisma.PrismaPromise<GetTherapistProfileAggregateType<T>>

    /**
     * Group by TherapistProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistProfileGroupByArgs} args - Group by arguments.
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
      T extends TherapistProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TherapistProfileGroupByArgs['orderBy'] }
        : { orderBy?: TherapistProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TherapistProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTherapistProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TherapistProfile model
   */
  readonly fields: TherapistProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TherapistProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TherapistProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    specializations<T extends TherapistProfile$specializationsArgs<ExtArgs> = {}>(args?: Subset<T, TherapistProfile$specializationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialzationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TherapistProfile model
   */
  interface TherapistProfileFieldRefs {
    readonly id: FieldRef<"TherapistProfile", 'Int'>
    readonly userId: FieldRef<"TherapistProfile", 'Int'>
    readonly bio: FieldRef<"TherapistProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TherapistProfile findUnique
   */
  export type TherapistProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistProfile
     */
    select?: TherapistProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TherapistProfile
     */
    omit?: TherapistProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistProfileInclude<ExtArgs> | null
    /**
     * Filter, which TherapistProfile to fetch.
     */
    where: TherapistProfileWhereUniqueInput
  }

  /**
   * TherapistProfile findUniqueOrThrow
   */
  export type TherapistProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistProfile
     */
    select?: TherapistProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TherapistProfile
     */
    omit?: TherapistProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistProfileInclude<ExtArgs> | null
    /**
     * Filter, which TherapistProfile to fetch.
     */
    where: TherapistProfileWhereUniqueInput
  }

  /**
   * TherapistProfile findFirst
   */
  export type TherapistProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistProfile
     */
    select?: TherapistProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TherapistProfile
     */
    omit?: TherapistProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistProfileInclude<ExtArgs> | null
    /**
     * Filter, which TherapistProfile to fetch.
     */
    where?: TherapistProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TherapistProfiles to fetch.
     */
    orderBy?: TherapistProfileOrderByWithRelationInput | TherapistProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TherapistProfiles.
     */
    cursor?: TherapistProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TherapistProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TherapistProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TherapistProfiles.
     */
    distinct?: TherapistProfileScalarFieldEnum | TherapistProfileScalarFieldEnum[]
  }

  /**
   * TherapistProfile findFirstOrThrow
   */
  export type TherapistProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistProfile
     */
    select?: TherapistProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TherapistProfile
     */
    omit?: TherapistProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistProfileInclude<ExtArgs> | null
    /**
     * Filter, which TherapistProfile to fetch.
     */
    where?: TherapistProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TherapistProfiles to fetch.
     */
    orderBy?: TherapistProfileOrderByWithRelationInput | TherapistProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TherapistProfiles.
     */
    cursor?: TherapistProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TherapistProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TherapistProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TherapistProfiles.
     */
    distinct?: TherapistProfileScalarFieldEnum | TherapistProfileScalarFieldEnum[]
  }

  /**
   * TherapistProfile findMany
   */
  export type TherapistProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistProfile
     */
    select?: TherapistProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TherapistProfile
     */
    omit?: TherapistProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistProfileInclude<ExtArgs> | null
    /**
     * Filter, which TherapistProfiles to fetch.
     */
    where?: TherapistProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TherapistProfiles to fetch.
     */
    orderBy?: TherapistProfileOrderByWithRelationInput | TherapistProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TherapistProfiles.
     */
    cursor?: TherapistProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TherapistProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TherapistProfiles.
     */
    skip?: number
    distinct?: TherapistProfileScalarFieldEnum | TherapistProfileScalarFieldEnum[]
  }

  /**
   * TherapistProfile create
   */
  export type TherapistProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistProfile
     */
    select?: TherapistProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TherapistProfile
     */
    omit?: TherapistProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a TherapistProfile.
     */
    data: XOR<TherapistProfileCreateInput, TherapistProfileUncheckedCreateInput>
  }

  /**
   * TherapistProfile createMany
   */
  export type TherapistProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TherapistProfiles.
     */
    data: TherapistProfileCreateManyInput | TherapistProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TherapistProfile createManyAndReturn
   */
  export type TherapistProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistProfile
     */
    select?: TherapistProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TherapistProfile
     */
    omit?: TherapistProfileOmit<ExtArgs> | null
    /**
     * The data used to create many TherapistProfiles.
     */
    data: TherapistProfileCreateManyInput | TherapistProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TherapistProfile update
   */
  export type TherapistProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistProfile
     */
    select?: TherapistProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TherapistProfile
     */
    omit?: TherapistProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a TherapistProfile.
     */
    data: XOR<TherapistProfileUpdateInput, TherapistProfileUncheckedUpdateInput>
    /**
     * Choose, which TherapistProfile to update.
     */
    where: TherapistProfileWhereUniqueInput
  }

  /**
   * TherapistProfile updateMany
   */
  export type TherapistProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TherapistProfiles.
     */
    data: XOR<TherapistProfileUpdateManyMutationInput, TherapistProfileUncheckedUpdateManyInput>
    /**
     * Filter which TherapistProfiles to update
     */
    where?: TherapistProfileWhereInput
    /**
     * Limit how many TherapistProfiles to update.
     */
    limit?: number
  }

  /**
   * TherapistProfile updateManyAndReturn
   */
  export type TherapistProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistProfile
     */
    select?: TherapistProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TherapistProfile
     */
    omit?: TherapistProfileOmit<ExtArgs> | null
    /**
     * The data used to update TherapistProfiles.
     */
    data: XOR<TherapistProfileUpdateManyMutationInput, TherapistProfileUncheckedUpdateManyInput>
    /**
     * Filter which TherapistProfiles to update
     */
    where?: TherapistProfileWhereInput
    /**
     * Limit how many TherapistProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TherapistProfile upsert
   */
  export type TherapistProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistProfile
     */
    select?: TherapistProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TherapistProfile
     */
    omit?: TherapistProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the TherapistProfile to update in case it exists.
     */
    where: TherapistProfileWhereUniqueInput
    /**
     * In case the TherapistProfile found by the `where` argument doesn't exist, create a new TherapistProfile with this data.
     */
    create: XOR<TherapistProfileCreateInput, TherapistProfileUncheckedCreateInput>
    /**
     * In case the TherapistProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TherapistProfileUpdateInput, TherapistProfileUncheckedUpdateInput>
  }

  /**
   * TherapistProfile delete
   */
  export type TherapistProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistProfile
     */
    select?: TherapistProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TherapistProfile
     */
    omit?: TherapistProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistProfileInclude<ExtArgs> | null
    /**
     * Filter which TherapistProfile to delete.
     */
    where: TherapistProfileWhereUniqueInput
  }

  /**
   * TherapistProfile deleteMany
   */
  export type TherapistProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TherapistProfiles to delete
     */
    where?: TherapistProfileWhereInput
    /**
     * Limit how many TherapistProfiles to delete.
     */
    limit?: number
  }

  /**
   * TherapistProfile.specializations
   */
  export type TherapistProfile$specializationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialzation
     */
    select?: SpecialzationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialzation
     */
    omit?: SpecialzationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialzationInclude<ExtArgs> | null
    where?: SpecialzationWhereInput
    orderBy?: SpecialzationOrderByWithRelationInput | SpecialzationOrderByWithRelationInput[]
    cursor?: SpecialzationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpecialzationScalarFieldEnum | SpecialzationScalarFieldEnum[]
  }

  /**
   * TherapistProfile without action
   */
  export type TherapistProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistProfile
     */
    select?: TherapistProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TherapistProfile
     */
    omit?: TherapistProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistProfileInclude<ExtArgs> | null
  }


  /**
   * Model Specialzation
   */

  export type AggregateSpecialzation = {
    _count: SpecialzationCountAggregateOutputType | null
    _avg: SpecialzationAvgAggregateOutputType | null
    _sum: SpecialzationSumAggregateOutputType | null
    _min: SpecialzationMinAggregateOutputType | null
    _max: SpecialzationMaxAggregateOutputType | null
  }

  export type SpecialzationAvgAggregateOutputType = {
    id: number | null
  }

  export type SpecialzationSumAggregateOutputType = {
    id: number | null
  }

  export type SpecialzationMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SpecialzationMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SpecialzationCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type SpecialzationAvgAggregateInputType = {
    id?: true
  }

  export type SpecialzationSumAggregateInputType = {
    id?: true
  }

  export type SpecialzationMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type SpecialzationMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type SpecialzationCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type SpecialzationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Specialzation to aggregate.
     */
    where?: SpecialzationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialzations to fetch.
     */
    orderBy?: SpecialzationOrderByWithRelationInput | SpecialzationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpecialzationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialzations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialzations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Specialzations
    **/
    _count?: true | SpecialzationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpecialzationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpecialzationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecialzationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecialzationMaxAggregateInputType
  }

  export type GetSpecialzationAggregateType<T extends SpecialzationAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecialzation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecialzation[P]>
      : GetScalarType<T[P], AggregateSpecialzation[P]>
  }




  export type SpecialzationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialzationWhereInput
    orderBy?: SpecialzationOrderByWithAggregationInput | SpecialzationOrderByWithAggregationInput[]
    by: SpecialzationScalarFieldEnum[] | SpecialzationScalarFieldEnum
    having?: SpecialzationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecialzationCountAggregateInputType | true
    _avg?: SpecialzationAvgAggregateInputType
    _sum?: SpecialzationSumAggregateInputType
    _min?: SpecialzationMinAggregateInputType
    _max?: SpecialzationMaxAggregateInputType
  }

  export type SpecialzationGroupByOutputType = {
    id: number
    name: string
    _count: SpecialzationCountAggregateOutputType | null
    _avg: SpecialzationAvgAggregateOutputType | null
    _sum: SpecialzationSumAggregateOutputType | null
    _min: SpecialzationMinAggregateOutputType | null
    _max: SpecialzationMaxAggregateOutputType | null
  }

  type GetSpecialzationGroupByPayload<T extends SpecialzationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecialzationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecialzationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecialzationGroupByOutputType[P]>
            : GetScalarType<T[P], SpecialzationGroupByOutputType[P]>
        }
      >
    >


  export type SpecialzationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    therapistProfile?: boolean | Specialzation$therapistProfileArgs<ExtArgs>
    _count?: boolean | SpecialzationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specialzation"]>

  export type SpecialzationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["specialzation"]>

  export type SpecialzationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["specialzation"]>

  export type SpecialzationSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type SpecialzationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["specialzation"]>
  export type SpecialzationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    therapistProfile?: boolean | Specialzation$therapistProfileArgs<ExtArgs>
    _count?: boolean | SpecialzationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SpecialzationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SpecialzationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SpecialzationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Specialzation"
    objects: {
      therapistProfile: Prisma.$TherapistProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["specialzation"]>
    composites: {}
  }

  type SpecialzationGetPayload<S extends boolean | null | undefined | SpecialzationDefaultArgs> = $Result.GetResult<Prisma.$SpecialzationPayload, S>

  type SpecialzationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpecialzationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpecialzationCountAggregateInputType | true
    }

  export interface SpecialzationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Specialzation'], meta: { name: 'Specialzation' } }
    /**
     * Find zero or one Specialzation that matches the filter.
     * @param {SpecialzationFindUniqueArgs} args - Arguments to find a Specialzation
     * @example
     * // Get one Specialzation
     * const specialzation = await prisma.specialzation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpecialzationFindUniqueArgs>(args: SelectSubset<T, SpecialzationFindUniqueArgs<ExtArgs>>): Prisma__SpecialzationClient<$Result.GetResult<Prisma.$SpecialzationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Specialzation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpecialzationFindUniqueOrThrowArgs} args - Arguments to find a Specialzation
     * @example
     * // Get one Specialzation
     * const specialzation = await prisma.specialzation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpecialzationFindUniqueOrThrowArgs>(args: SelectSubset<T, SpecialzationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpecialzationClient<$Result.GetResult<Prisma.$SpecialzationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Specialzation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialzationFindFirstArgs} args - Arguments to find a Specialzation
     * @example
     * // Get one Specialzation
     * const specialzation = await prisma.specialzation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpecialzationFindFirstArgs>(args?: SelectSubset<T, SpecialzationFindFirstArgs<ExtArgs>>): Prisma__SpecialzationClient<$Result.GetResult<Prisma.$SpecialzationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Specialzation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialzationFindFirstOrThrowArgs} args - Arguments to find a Specialzation
     * @example
     * // Get one Specialzation
     * const specialzation = await prisma.specialzation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpecialzationFindFirstOrThrowArgs>(args?: SelectSubset<T, SpecialzationFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpecialzationClient<$Result.GetResult<Prisma.$SpecialzationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Specialzations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialzationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Specialzations
     * const specialzations = await prisma.specialzation.findMany()
     * 
     * // Get first 10 Specialzations
     * const specialzations = await prisma.specialzation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const specialzationWithIdOnly = await prisma.specialzation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpecialzationFindManyArgs>(args?: SelectSubset<T, SpecialzationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialzationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Specialzation.
     * @param {SpecialzationCreateArgs} args - Arguments to create a Specialzation.
     * @example
     * // Create one Specialzation
     * const Specialzation = await prisma.specialzation.create({
     *   data: {
     *     // ... data to create a Specialzation
     *   }
     * })
     * 
     */
    create<T extends SpecialzationCreateArgs>(args: SelectSubset<T, SpecialzationCreateArgs<ExtArgs>>): Prisma__SpecialzationClient<$Result.GetResult<Prisma.$SpecialzationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Specialzations.
     * @param {SpecialzationCreateManyArgs} args - Arguments to create many Specialzations.
     * @example
     * // Create many Specialzations
     * const specialzation = await prisma.specialzation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpecialzationCreateManyArgs>(args?: SelectSubset<T, SpecialzationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Specialzations and returns the data saved in the database.
     * @param {SpecialzationCreateManyAndReturnArgs} args - Arguments to create many Specialzations.
     * @example
     * // Create many Specialzations
     * const specialzation = await prisma.specialzation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Specialzations and only return the `id`
     * const specialzationWithIdOnly = await prisma.specialzation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpecialzationCreateManyAndReturnArgs>(args?: SelectSubset<T, SpecialzationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialzationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Specialzation.
     * @param {SpecialzationDeleteArgs} args - Arguments to delete one Specialzation.
     * @example
     * // Delete one Specialzation
     * const Specialzation = await prisma.specialzation.delete({
     *   where: {
     *     // ... filter to delete one Specialzation
     *   }
     * })
     * 
     */
    delete<T extends SpecialzationDeleteArgs>(args: SelectSubset<T, SpecialzationDeleteArgs<ExtArgs>>): Prisma__SpecialzationClient<$Result.GetResult<Prisma.$SpecialzationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Specialzation.
     * @param {SpecialzationUpdateArgs} args - Arguments to update one Specialzation.
     * @example
     * // Update one Specialzation
     * const specialzation = await prisma.specialzation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpecialzationUpdateArgs>(args: SelectSubset<T, SpecialzationUpdateArgs<ExtArgs>>): Prisma__SpecialzationClient<$Result.GetResult<Prisma.$SpecialzationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Specialzations.
     * @param {SpecialzationDeleteManyArgs} args - Arguments to filter Specialzations to delete.
     * @example
     * // Delete a few Specialzations
     * const { count } = await prisma.specialzation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpecialzationDeleteManyArgs>(args?: SelectSubset<T, SpecialzationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specialzations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialzationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Specialzations
     * const specialzation = await prisma.specialzation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpecialzationUpdateManyArgs>(args: SelectSubset<T, SpecialzationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specialzations and returns the data updated in the database.
     * @param {SpecialzationUpdateManyAndReturnArgs} args - Arguments to update many Specialzations.
     * @example
     * // Update many Specialzations
     * const specialzation = await prisma.specialzation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Specialzations and only return the `id`
     * const specialzationWithIdOnly = await prisma.specialzation.updateManyAndReturn({
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
    updateManyAndReturn<T extends SpecialzationUpdateManyAndReturnArgs>(args: SelectSubset<T, SpecialzationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialzationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Specialzation.
     * @param {SpecialzationUpsertArgs} args - Arguments to update or create a Specialzation.
     * @example
     * // Update or create a Specialzation
     * const specialzation = await prisma.specialzation.upsert({
     *   create: {
     *     // ... data to create a Specialzation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Specialzation we want to update
     *   }
     * })
     */
    upsert<T extends SpecialzationUpsertArgs>(args: SelectSubset<T, SpecialzationUpsertArgs<ExtArgs>>): Prisma__SpecialzationClient<$Result.GetResult<Prisma.$SpecialzationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Specialzations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialzationCountArgs} args - Arguments to filter Specialzations to count.
     * @example
     * // Count the number of Specialzations
     * const count = await prisma.specialzation.count({
     *   where: {
     *     // ... the filter for the Specialzations we want to count
     *   }
     * })
    **/
    count<T extends SpecialzationCountArgs>(
      args?: Subset<T, SpecialzationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecialzationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Specialzation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialzationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpecialzationAggregateArgs>(args: Subset<T, SpecialzationAggregateArgs>): Prisma.PrismaPromise<GetSpecialzationAggregateType<T>>

    /**
     * Group by Specialzation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialzationGroupByArgs} args - Group by arguments.
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
      T extends SpecialzationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpecialzationGroupByArgs['orderBy'] }
        : { orderBy?: SpecialzationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SpecialzationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecialzationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Specialzation model
   */
  readonly fields: SpecialzationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Specialzation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpecialzationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    therapistProfile<T extends Specialzation$therapistProfileArgs<ExtArgs> = {}>(args?: Subset<T, Specialzation$therapistProfileArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapistProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Specialzation model
   */
  interface SpecialzationFieldRefs {
    readonly id: FieldRef<"Specialzation", 'Int'>
    readonly name: FieldRef<"Specialzation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Specialzation findUnique
   */
  export type SpecialzationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialzation
     */
    select?: SpecialzationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialzation
     */
    omit?: SpecialzationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialzationInclude<ExtArgs> | null
    /**
     * Filter, which Specialzation to fetch.
     */
    where: SpecialzationWhereUniqueInput
  }

  /**
   * Specialzation findUniqueOrThrow
   */
  export type SpecialzationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialzation
     */
    select?: SpecialzationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialzation
     */
    omit?: SpecialzationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialzationInclude<ExtArgs> | null
    /**
     * Filter, which Specialzation to fetch.
     */
    where: SpecialzationWhereUniqueInput
  }

  /**
   * Specialzation findFirst
   */
  export type SpecialzationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialzation
     */
    select?: SpecialzationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialzation
     */
    omit?: SpecialzationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialzationInclude<ExtArgs> | null
    /**
     * Filter, which Specialzation to fetch.
     */
    where?: SpecialzationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialzations to fetch.
     */
    orderBy?: SpecialzationOrderByWithRelationInput | SpecialzationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specialzations.
     */
    cursor?: SpecialzationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialzations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialzations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specialzations.
     */
    distinct?: SpecialzationScalarFieldEnum | SpecialzationScalarFieldEnum[]
  }

  /**
   * Specialzation findFirstOrThrow
   */
  export type SpecialzationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialzation
     */
    select?: SpecialzationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialzation
     */
    omit?: SpecialzationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialzationInclude<ExtArgs> | null
    /**
     * Filter, which Specialzation to fetch.
     */
    where?: SpecialzationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialzations to fetch.
     */
    orderBy?: SpecialzationOrderByWithRelationInput | SpecialzationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specialzations.
     */
    cursor?: SpecialzationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialzations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialzations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specialzations.
     */
    distinct?: SpecialzationScalarFieldEnum | SpecialzationScalarFieldEnum[]
  }

  /**
   * Specialzation findMany
   */
  export type SpecialzationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialzation
     */
    select?: SpecialzationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialzation
     */
    omit?: SpecialzationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialzationInclude<ExtArgs> | null
    /**
     * Filter, which Specialzations to fetch.
     */
    where?: SpecialzationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialzations to fetch.
     */
    orderBy?: SpecialzationOrderByWithRelationInput | SpecialzationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Specialzations.
     */
    cursor?: SpecialzationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialzations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialzations.
     */
    skip?: number
    distinct?: SpecialzationScalarFieldEnum | SpecialzationScalarFieldEnum[]
  }

  /**
   * Specialzation create
   */
  export type SpecialzationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialzation
     */
    select?: SpecialzationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialzation
     */
    omit?: SpecialzationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialzationInclude<ExtArgs> | null
    /**
     * The data needed to create a Specialzation.
     */
    data: XOR<SpecialzationCreateInput, SpecialzationUncheckedCreateInput>
  }

  /**
   * Specialzation createMany
   */
  export type SpecialzationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Specialzations.
     */
    data: SpecialzationCreateManyInput | SpecialzationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Specialzation createManyAndReturn
   */
  export type SpecialzationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialzation
     */
    select?: SpecialzationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Specialzation
     */
    omit?: SpecialzationOmit<ExtArgs> | null
    /**
     * The data used to create many Specialzations.
     */
    data: SpecialzationCreateManyInput | SpecialzationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Specialzation update
   */
  export type SpecialzationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialzation
     */
    select?: SpecialzationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialzation
     */
    omit?: SpecialzationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialzationInclude<ExtArgs> | null
    /**
     * The data needed to update a Specialzation.
     */
    data: XOR<SpecialzationUpdateInput, SpecialzationUncheckedUpdateInput>
    /**
     * Choose, which Specialzation to update.
     */
    where: SpecialzationWhereUniqueInput
  }

  /**
   * Specialzation updateMany
   */
  export type SpecialzationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Specialzations.
     */
    data: XOR<SpecialzationUpdateManyMutationInput, SpecialzationUncheckedUpdateManyInput>
    /**
     * Filter which Specialzations to update
     */
    where?: SpecialzationWhereInput
    /**
     * Limit how many Specialzations to update.
     */
    limit?: number
  }

  /**
   * Specialzation updateManyAndReturn
   */
  export type SpecialzationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialzation
     */
    select?: SpecialzationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Specialzation
     */
    omit?: SpecialzationOmit<ExtArgs> | null
    /**
     * The data used to update Specialzations.
     */
    data: XOR<SpecialzationUpdateManyMutationInput, SpecialzationUncheckedUpdateManyInput>
    /**
     * Filter which Specialzations to update
     */
    where?: SpecialzationWhereInput
    /**
     * Limit how many Specialzations to update.
     */
    limit?: number
  }

  /**
   * Specialzation upsert
   */
  export type SpecialzationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialzation
     */
    select?: SpecialzationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialzation
     */
    omit?: SpecialzationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialzationInclude<ExtArgs> | null
    /**
     * The filter to search for the Specialzation to update in case it exists.
     */
    where: SpecialzationWhereUniqueInput
    /**
     * In case the Specialzation found by the `where` argument doesn't exist, create a new Specialzation with this data.
     */
    create: XOR<SpecialzationCreateInput, SpecialzationUncheckedCreateInput>
    /**
     * In case the Specialzation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpecialzationUpdateInput, SpecialzationUncheckedUpdateInput>
  }

  /**
   * Specialzation delete
   */
  export type SpecialzationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialzation
     */
    select?: SpecialzationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialzation
     */
    omit?: SpecialzationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialzationInclude<ExtArgs> | null
    /**
     * Filter which Specialzation to delete.
     */
    where: SpecialzationWhereUniqueInput
  }

  /**
   * Specialzation deleteMany
   */
  export type SpecialzationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Specialzations to delete
     */
    where?: SpecialzationWhereInput
    /**
     * Limit how many Specialzations to delete.
     */
    limit?: number
  }

  /**
   * Specialzation.therapistProfile
   */
  export type Specialzation$therapistProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistProfile
     */
    select?: TherapistProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TherapistProfile
     */
    omit?: TherapistProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistProfileInclude<ExtArgs> | null
    where?: TherapistProfileWhereInput
    orderBy?: TherapistProfileOrderByWithRelationInput | TherapistProfileOrderByWithRelationInput[]
    cursor?: TherapistProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TherapistProfileScalarFieldEnum | TherapistProfileScalarFieldEnum[]
  }

  /**
   * Specialzation without action
   */
  export type SpecialzationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialzation
     */
    select?: SpecialzationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialzation
     */
    omit?: SpecialzationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialzationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TherapistProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bio: 'bio'
  };

  export type TherapistProfileScalarFieldEnum = (typeof TherapistProfileScalarFieldEnum)[keyof typeof TherapistProfileScalarFieldEnum]


  export const SpecialzationScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type SpecialzationScalarFieldEnum = (typeof SpecialzationScalarFieldEnum)[keyof typeof SpecialzationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    therapistProfile?: XOR<TherapistProfileNullableScalarRelationFilter, TherapistProfileWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    therapistProfile?: TherapistProfileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    therapistProfile?: XOR<TherapistProfileNullableScalarRelationFilter, TherapistProfileWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TherapistProfileWhereInput = {
    AND?: TherapistProfileWhereInput | TherapistProfileWhereInput[]
    OR?: TherapistProfileWhereInput[]
    NOT?: TherapistProfileWhereInput | TherapistProfileWhereInput[]
    id?: IntFilter<"TherapistProfile"> | number
    userId?: IntFilter<"TherapistProfile"> | number
    bio?: StringNullableFilter<"TherapistProfile"> | string | null
    specializations?: SpecialzationListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TherapistProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrderInput | SortOrder
    specializations?: SpecialzationOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type TherapistProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: TherapistProfileWhereInput | TherapistProfileWhereInput[]
    OR?: TherapistProfileWhereInput[]
    NOT?: TherapistProfileWhereInput | TherapistProfileWhereInput[]
    bio?: StringNullableFilter<"TherapistProfile"> | string | null
    specializations?: SpecialzationListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type TherapistProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrderInput | SortOrder
    _count?: TherapistProfileCountOrderByAggregateInput
    _avg?: TherapistProfileAvgOrderByAggregateInput
    _max?: TherapistProfileMaxOrderByAggregateInput
    _min?: TherapistProfileMinOrderByAggregateInput
    _sum?: TherapistProfileSumOrderByAggregateInput
  }

  export type TherapistProfileScalarWhereWithAggregatesInput = {
    AND?: TherapistProfileScalarWhereWithAggregatesInput | TherapistProfileScalarWhereWithAggregatesInput[]
    OR?: TherapistProfileScalarWhereWithAggregatesInput[]
    NOT?: TherapistProfileScalarWhereWithAggregatesInput | TherapistProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TherapistProfile"> | number
    userId?: IntWithAggregatesFilter<"TherapistProfile"> | number
    bio?: StringNullableWithAggregatesFilter<"TherapistProfile"> | string | null
  }

  export type SpecialzationWhereInput = {
    AND?: SpecialzationWhereInput | SpecialzationWhereInput[]
    OR?: SpecialzationWhereInput[]
    NOT?: SpecialzationWhereInput | SpecialzationWhereInput[]
    id?: IntFilter<"Specialzation"> | number
    name?: StringFilter<"Specialzation"> | string
    therapistProfile?: TherapistProfileListRelationFilter
  }

  export type SpecialzationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    therapistProfile?: TherapistProfileOrderByRelationAggregateInput
  }

  export type SpecialzationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SpecialzationWhereInput | SpecialzationWhereInput[]
    OR?: SpecialzationWhereInput[]
    NOT?: SpecialzationWhereInput | SpecialzationWhereInput[]
    therapistProfile?: TherapistProfileListRelationFilter
  }, "id" | "name">

  export type SpecialzationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: SpecialzationCountOrderByAggregateInput
    _avg?: SpecialzationAvgOrderByAggregateInput
    _max?: SpecialzationMaxOrderByAggregateInput
    _min?: SpecialzationMinOrderByAggregateInput
    _sum?: SpecialzationSumOrderByAggregateInput
  }

  export type SpecialzationScalarWhereWithAggregatesInput = {
    AND?: SpecialzationScalarWhereWithAggregatesInput | SpecialzationScalarWhereWithAggregatesInput[]
    OR?: SpecialzationScalarWhereWithAggregatesInput[]
    NOT?: SpecialzationScalarWhereWithAggregatesInput | SpecialzationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Specialzation"> | number
    name?: StringWithAggregatesFilter<"Specialzation"> | string
  }

  export type UserCreateInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    therapistProfile?: TherapistProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    therapistProfile?: TherapistProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapistProfile?: TherapistProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapistProfile?: TherapistProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapistProfileCreateInput = {
    bio?: string | null
    specializations?: SpecialzationCreateNestedManyWithoutTherapistProfileInput
    user: UserCreateNestedOneWithoutTherapistProfileInput
  }

  export type TherapistProfileUncheckedCreateInput = {
    id?: number
    userId: number
    bio?: string | null
    specializations?: SpecialzationUncheckedCreateNestedManyWithoutTherapistProfileInput
  }

  export type TherapistProfileUpdateInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    specializations?: SpecialzationUpdateManyWithoutTherapistProfileNestedInput
    user?: UserUpdateOneRequiredWithoutTherapistProfileNestedInput
  }

  export type TherapistProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    specializations?: SpecialzationUncheckedUpdateManyWithoutTherapistProfileNestedInput
  }

  export type TherapistProfileCreateManyInput = {
    id?: number
    userId: number
    bio?: string | null
  }

  export type TherapistProfileUpdateManyMutationInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TherapistProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SpecialzationCreateInput = {
    name: string
    therapistProfile?: TherapistProfileCreateNestedManyWithoutSpecializationsInput
  }

  export type SpecialzationUncheckedCreateInput = {
    id?: number
    name: string
    therapistProfile?: TherapistProfileUncheckedCreateNestedManyWithoutSpecializationsInput
  }

  export type SpecialzationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    therapistProfile?: TherapistProfileUpdateManyWithoutSpecializationsNestedInput
  }

  export type SpecialzationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    therapistProfile?: TherapistProfileUncheckedUpdateManyWithoutSpecializationsNestedInput
  }

  export type SpecialzationCreateManyInput = {
    id?: number
    name: string
  }

  export type SpecialzationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SpecialzationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TherapistProfileNullableScalarRelationFilter = {
    is?: TherapistProfileWhereInput | null
    isNot?: TherapistProfileWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SpecialzationListRelationFilter = {
    every?: SpecialzationWhereInput
    some?: SpecialzationWhereInput
    none?: SpecialzationWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SpecialzationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TherapistProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
  }

  export type TherapistProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TherapistProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
  }

  export type TherapistProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
  }

  export type TherapistProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type TherapistProfileListRelationFilter = {
    every?: TherapistProfileWhereInput
    some?: TherapistProfileWhereInput
    none?: TherapistProfileWhereInput
  }

  export type TherapistProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpecialzationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SpecialzationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SpecialzationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SpecialzationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SpecialzationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TherapistProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<TherapistProfileCreateWithoutUserInput, TherapistProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TherapistProfileCreateOrConnectWithoutUserInput
    connect?: TherapistProfileWhereUniqueInput
  }

  export type TherapistProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TherapistProfileCreateWithoutUserInput, TherapistProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TherapistProfileCreateOrConnectWithoutUserInput
    connect?: TherapistProfileWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TherapistProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<TherapistProfileCreateWithoutUserInput, TherapistProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TherapistProfileCreateOrConnectWithoutUserInput
    upsert?: TherapistProfileUpsertWithoutUserInput
    disconnect?: TherapistProfileWhereInput | boolean
    delete?: TherapistProfileWhereInput | boolean
    connect?: TherapistProfileWhereUniqueInput
    update?: XOR<XOR<TherapistProfileUpdateToOneWithWhereWithoutUserInput, TherapistProfileUpdateWithoutUserInput>, TherapistProfileUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TherapistProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TherapistProfileCreateWithoutUserInput, TherapistProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TherapistProfileCreateOrConnectWithoutUserInput
    upsert?: TherapistProfileUpsertWithoutUserInput
    disconnect?: TherapistProfileWhereInput | boolean
    delete?: TherapistProfileWhereInput | boolean
    connect?: TherapistProfileWhereUniqueInput
    update?: XOR<XOR<TherapistProfileUpdateToOneWithWhereWithoutUserInput, TherapistProfileUpdateWithoutUserInput>, TherapistProfileUncheckedUpdateWithoutUserInput>
  }

  export type SpecialzationCreateNestedManyWithoutTherapistProfileInput = {
    create?: XOR<SpecialzationCreateWithoutTherapistProfileInput, SpecialzationUncheckedCreateWithoutTherapistProfileInput> | SpecialzationCreateWithoutTherapistProfileInput[] | SpecialzationUncheckedCreateWithoutTherapistProfileInput[]
    connectOrCreate?: SpecialzationCreateOrConnectWithoutTherapistProfileInput | SpecialzationCreateOrConnectWithoutTherapistProfileInput[]
    connect?: SpecialzationWhereUniqueInput | SpecialzationWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutTherapistProfileInput = {
    create?: XOR<UserCreateWithoutTherapistProfileInput, UserUncheckedCreateWithoutTherapistProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutTherapistProfileInput
    connect?: UserWhereUniqueInput
  }

  export type SpecialzationUncheckedCreateNestedManyWithoutTherapistProfileInput = {
    create?: XOR<SpecialzationCreateWithoutTherapistProfileInput, SpecialzationUncheckedCreateWithoutTherapistProfileInput> | SpecialzationCreateWithoutTherapistProfileInput[] | SpecialzationUncheckedCreateWithoutTherapistProfileInput[]
    connectOrCreate?: SpecialzationCreateOrConnectWithoutTherapistProfileInput | SpecialzationCreateOrConnectWithoutTherapistProfileInput[]
    connect?: SpecialzationWhereUniqueInput | SpecialzationWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SpecialzationUpdateManyWithoutTherapistProfileNestedInput = {
    create?: XOR<SpecialzationCreateWithoutTherapistProfileInput, SpecialzationUncheckedCreateWithoutTherapistProfileInput> | SpecialzationCreateWithoutTherapistProfileInput[] | SpecialzationUncheckedCreateWithoutTherapistProfileInput[]
    connectOrCreate?: SpecialzationCreateOrConnectWithoutTherapistProfileInput | SpecialzationCreateOrConnectWithoutTherapistProfileInput[]
    upsert?: SpecialzationUpsertWithWhereUniqueWithoutTherapistProfileInput | SpecialzationUpsertWithWhereUniqueWithoutTherapistProfileInput[]
    set?: SpecialzationWhereUniqueInput | SpecialzationWhereUniqueInput[]
    disconnect?: SpecialzationWhereUniqueInput | SpecialzationWhereUniqueInput[]
    delete?: SpecialzationWhereUniqueInput | SpecialzationWhereUniqueInput[]
    connect?: SpecialzationWhereUniqueInput | SpecialzationWhereUniqueInput[]
    update?: SpecialzationUpdateWithWhereUniqueWithoutTherapistProfileInput | SpecialzationUpdateWithWhereUniqueWithoutTherapistProfileInput[]
    updateMany?: SpecialzationUpdateManyWithWhereWithoutTherapistProfileInput | SpecialzationUpdateManyWithWhereWithoutTherapistProfileInput[]
    deleteMany?: SpecialzationScalarWhereInput | SpecialzationScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutTherapistProfileNestedInput = {
    create?: XOR<UserCreateWithoutTherapistProfileInput, UserUncheckedCreateWithoutTherapistProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutTherapistProfileInput
    upsert?: UserUpsertWithoutTherapistProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTherapistProfileInput, UserUpdateWithoutTherapistProfileInput>, UserUncheckedUpdateWithoutTherapistProfileInput>
  }

  export type SpecialzationUncheckedUpdateManyWithoutTherapistProfileNestedInput = {
    create?: XOR<SpecialzationCreateWithoutTherapistProfileInput, SpecialzationUncheckedCreateWithoutTherapistProfileInput> | SpecialzationCreateWithoutTherapistProfileInput[] | SpecialzationUncheckedCreateWithoutTherapistProfileInput[]
    connectOrCreate?: SpecialzationCreateOrConnectWithoutTherapistProfileInput | SpecialzationCreateOrConnectWithoutTherapistProfileInput[]
    upsert?: SpecialzationUpsertWithWhereUniqueWithoutTherapistProfileInput | SpecialzationUpsertWithWhereUniqueWithoutTherapistProfileInput[]
    set?: SpecialzationWhereUniqueInput | SpecialzationWhereUniqueInput[]
    disconnect?: SpecialzationWhereUniqueInput | SpecialzationWhereUniqueInput[]
    delete?: SpecialzationWhereUniqueInput | SpecialzationWhereUniqueInput[]
    connect?: SpecialzationWhereUniqueInput | SpecialzationWhereUniqueInput[]
    update?: SpecialzationUpdateWithWhereUniqueWithoutTherapistProfileInput | SpecialzationUpdateWithWhereUniqueWithoutTherapistProfileInput[]
    updateMany?: SpecialzationUpdateManyWithWhereWithoutTherapistProfileInput | SpecialzationUpdateManyWithWhereWithoutTherapistProfileInput[]
    deleteMany?: SpecialzationScalarWhereInput | SpecialzationScalarWhereInput[]
  }

  export type TherapistProfileCreateNestedManyWithoutSpecializationsInput = {
    create?: XOR<TherapistProfileCreateWithoutSpecializationsInput, TherapistProfileUncheckedCreateWithoutSpecializationsInput> | TherapistProfileCreateWithoutSpecializationsInput[] | TherapistProfileUncheckedCreateWithoutSpecializationsInput[]
    connectOrCreate?: TherapistProfileCreateOrConnectWithoutSpecializationsInput | TherapistProfileCreateOrConnectWithoutSpecializationsInput[]
    connect?: TherapistProfileWhereUniqueInput | TherapistProfileWhereUniqueInput[]
  }

  export type TherapistProfileUncheckedCreateNestedManyWithoutSpecializationsInput = {
    create?: XOR<TherapistProfileCreateWithoutSpecializationsInput, TherapistProfileUncheckedCreateWithoutSpecializationsInput> | TherapistProfileCreateWithoutSpecializationsInput[] | TherapistProfileUncheckedCreateWithoutSpecializationsInput[]
    connectOrCreate?: TherapistProfileCreateOrConnectWithoutSpecializationsInput | TherapistProfileCreateOrConnectWithoutSpecializationsInput[]
    connect?: TherapistProfileWhereUniqueInput | TherapistProfileWhereUniqueInput[]
  }

  export type TherapistProfileUpdateManyWithoutSpecializationsNestedInput = {
    create?: XOR<TherapistProfileCreateWithoutSpecializationsInput, TherapistProfileUncheckedCreateWithoutSpecializationsInput> | TherapistProfileCreateWithoutSpecializationsInput[] | TherapistProfileUncheckedCreateWithoutSpecializationsInput[]
    connectOrCreate?: TherapistProfileCreateOrConnectWithoutSpecializationsInput | TherapistProfileCreateOrConnectWithoutSpecializationsInput[]
    upsert?: TherapistProfileUpsertWithWhereUniqueWithoutSpecializationsInput | TherapistProfileUpsertWithWhereUniqueWithoutSpecializationsInput[]
    set?: TherapistProfileWhereUniqueInput | TherapistProfileWhereUniqueInput[]
    disconnect?: TherapistProfileWhereUniqueInput | TherapistProfileWhereUniqueInput[]
    delete?: TherapistProfileWhereUniqueInput | TherapistProfileWhereUniqueInput[]
    connect?: TherapistProfileWhereUniqueInput | TherapistProfileWhereUniqueInput[]
    update?: TherapistProfileUpdateWithWhereUniqueWithoutSpecializationsInput | TherapistProfileUpdateWithWhereUniqueWithoutSpecializationsInput[]
    updateMany?: TherapistProfileUpdateManyWithWhereWithoutSpecializationsInput | TherapistProfileUpdateManyWithWhereWithoutSpecializationsInput[]
    deleteMany?: TherapistProfileScalarWhereInput | TherapistProfileScalarWhereInput[]
  }

  export type TherapistProfileUncheckedUpdateManyWithoutSpecializationsNestedInput = {
    create?: XOR<TherapistProfileCreateWithoutSpecializationsInput, TherapistProfileUncheckedCreateWithoutSpecializationsInput> | TherapistProfileCreateWithoutSpecializationsInput[] | TherapistProfileUncheckedCreateWithoutSpecializationsInput[]
    connectOrCreate?: TherapistProfileCreateOrConnectWithoutSpecializationsInput | TherapistProfileCreateOrConnectWithoutSpecializationsInput[]
    upsert?: TherapistProfileUpsertWithWhereUniqueWithoutSpecializationsInput | TherapistProfileUpsertWithWhereUniqueWithoutSpecializationsInput[]
    set?: TherapistProfileWhereUniqueInput | TherapistProfileWhereUniqueInput[]
    disconnect?: TherapistProfileWhereUniqueInput | TherapistProfileWhereUniqueInput[]
    delete?: TherapistProfileWhereUniqueInput | TherapistProfileWhereUniqueInput[]
    connect?: TherapistProfileWhereUniqueInput | TherapistProfileWhereUniqueInput[]
    update?: TherapistProfileUpdateWithWhereUniqueWithoutSpecializationsInput | TherapistProfileUpdateWithWhereUniqueWithoutSpecializationsInput[]
    updateMany?: TherapistProfileUpdateManyWithWhereWithoutSpecializationsInput | TherapistProfileUpdateManyWithWhereWithoutSpecializationsInput[]
    deleteMany?: TherapistProfileScalarWhereInput | TherapistProfileScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TherapistProfileCreateWithoutUserInput = {
    bio?: string | null
    specializations?: SpecialzationCreateNestedManyWithoutTherapistProfileInput
  }

  export type TherapistProfileUncheckedCreateWithoutUserInput = {
    id?: number
    bio?: string | null
    specializations?: SpecialzationUncheckedCreateNestedManyWithoutTherapistProfileInput
  }

  export type TherapistProfileCreateOrConnectWithoutUserInput = {
    where: TherapistProfileWhereUniqueInput
    create: XOR<TherapistProfileCreateWithoutUserInput, TherapistProfileUncheckedCreateWithoutUserInput>
  }

  export type TherapistProfileUpsertWithoutUserInput = {
    update: XOR<TherapistProfileUpdateWithoutUserInput, TherapistProfileUncheckedUpdateWithoutUserInput>
    create: XOR<TherapistProfileCreateWithoutUserInput, TherapistProfileUncheckedCreateWithoutUserInput>
    where?: TherapistProfileWhereInput
  }

  export type TherapistProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: TherapistProfileWhereInput
    data: XOR<TherapistProfileUpdateWithoutUserInput, TherapistProfileUncheckedUpdateWithoutUserInput>
  }

  export type TherapistProfileUpdateWithoutUserInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    specializations?: SpecialzationUpdateManyWithoutTherapistProfileNestedInput
  }

  export type TherapistProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    specializations?: SpecialzationUncheckedUpdateManyWithoutTherapistProfileNestedInput
  }

  export type SpecialzationCreateWithoutTherapistProfileInput = {
    name: string
  }

  export type SpecialzationUncheckedCreateWithoutTherapistProfileInput = {
    id?: number
    name: string
  }

  export type SpecialzationCreateOrConnectWithoutTherapistProfileInput = {
    where: SpecialzationWhereUniqueInput
    create: XOR<SpecialzationCreateWithoutTherapistProfileInput, SpecialzationUncheckedCreateWithoutTherapistProfileInput>
  }

  export type UserCreateWithoutTherapistProfileInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutTherapistProfileInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutTherapistProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTherapistProfileInput, UserUncheckedCreateWithoutTherapistProfileInput>
  }

  export type SpecialzationUpsertWithWhereUniqueWithoutTherapistProfileInput = {
    where: SpecialzationWhereUniqueInput
    update: XOR<SpecialzationUpdateWithoutTherapistProfileInput, SpecialzationUncheckedUpdateWithoutTherapistProfileInput>
    create: XOR<SpecialzationCreateWithoutTherapistProfileInput, SpecialzationUncheckedCreateWithoutTherapistProfileInput>
  }

  export type SpecialzationUpdateWithWhereUniqueWithoutTherapistProfileInput = {
    where: SpecialzationWhereUniqueInput
    data: XOR<SpecialzationUpdateWithoutTherapistProfileInput, SpecialzationUncheckedUpdateWithoutTherapistProfileInput>
  }

  export type SpecialzationUpdateManyWithWhereWithoutTherapistProfileInput = {
    where: SpecialzationScalarWhereInput
    data: XOR<SpecialzationUpdateManyMutationInput, SpecialzationUncheckedUpdateManyWithoutTherapistProfileInput>
  }

  export type SpecialzationScalarWhereInput = {
    AND?: SpecialzationScalarWhereInput | SpecialzationScalarWhereInput[]
    OR?: SpecialzationScalarWhereInput[]
    NOT?: SpecialzationScalarWhereInput | SpecialzationScalarWhereInput[]
    id?: IntFilter<"Specialzation"> | number
    name?: StringFilter<"Specialzation"> | string
  }

  export type UserUpsertWithoutTherapistProfileInput = {
    update: XOR<UserUpdateWithoutTherapistProfileInput, UserUncheckedUpdateWithoutTherapistProfileInput>
    create: XOR<UserCreateWithoutTherapistProfileInput, UserUncheckedCreateWithoutTherapistProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTherapistProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTherapistProfileInput, UserUncheckedUpdateWithoutTherapistProfileInput>
  }

  export type UserUpdateWithoutTherapistProfileInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutTherapistProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapistProfileCreateWithoutSpecializationsInput = {
    bio?: string | null
    user: UserCreateNestedOneWithoutTherapistProfileInput
  }

  export type TherapistProfileUncheckedCreateWithoutSpecializationsInput = {
    id?: number
    userId: number
    bio?: string | null
  }

  export type TherapistProfileCreateOrConnectWithoutSpecializationsInput = {
    where: TherapistProfileWhereUniqueInput
    create: XOR<TherapistProfileCreateWithoutSpecializationsInput, TherapistProfileUncheckedCreateWithoutSpecializationsInput>
  }

  export type TherapistProfileUpsertWithWhereUniqueWithoutSpecializationsInput = {
    where: TherapistProfileWhereUniqueInput
    update: XOR<TherapistProfileUpdateWithoutSpecializationsInput, TherapistProfileUncheckedUpdateWithoutSpecializationsInput>
    create: XOR<TherapistProfileCreateWithoutSpecializationsInput, TherapistProfileUncheckedCreateWithoutSpecializationsInput>
  }

  export type TherapistProfileUpdateWithWhereUniqueWithoutSpecializationsInput = {
    where: TherapistProfileWhereUniqueInput
    data: XOR<TherapistProfileUpdateWithoutSpecializationsInput, TherapistProfileUncheckedUpdateWithoutSpecializationsInput>
  }

  export type TherapistProfileUpdateManyWithWhereWithoutSpecializationsInput = {
    where: TherapistProfileScalarWhereInput
    data: XOR<TherapistProfileUpdateManyMutationInput, TherapistProfileUncheckedUpdateManyWithoutSpecializationsInput>
  }

  export type TherapistProfileScalarWhereInput = {
    AND?: TherapistProfileScalarWhereInput | TherapistProfileScalarWhereInput[]
    OR?: TherapistProfileScalarWhereInput[]
    NOT?: TherapistProfileScalarWhereInput | TherapistProfileScalarWhereInput[]
    id?: IntFilter<"TherapistProfile"> | number
    userId?: IntFilter<"TherapistProfile"> | number
    bio?: StringNullableFilter<"TherapistProfile"> | string | null
  }

  export type SpecialzationUpdateWithoutTherapistProfileInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SpecialzationUncheckedUpdateWithoutTherapistProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SpecialzationUncheckedUpdateManyWithoutTherapistProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TherapistProfileUpdateWithoutSpecializationsInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutTherapistProfileNestedInput
  }

  export type TherapistProfileUncheckedUpdateWithoutSpecializationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TherapistProfileUncheckedUpdateManyWithoutSpecializationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
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