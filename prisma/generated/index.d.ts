
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Concurso
 * 
 */
export type Concurso = $Result.DefaultSelection<Prisma.$ConcursoPayload>
/**
 * Model Cargo
 * 
 */
export type Cargo = $Result.DefaultSelection<Prisma.$CargoPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Registro
 * 
 */
export type Registro = $Result.DefaultSelection<Prisma.$RegistroPayload>
/**
 * Model Banca
 * 
 */
export type Banca = $Result.DefaultSelection<Prisma.$BancaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Fase: {
  INSCRICOES: 'INSCRICOES',
  GABARITO_EXTRAOFICIAL: 'GABARITO_EXTRAOFICIAL',
  GABARITO_PRELIMINAR: 'GABARITO_PRELIMINAR',
  GABARITO_DEFINITIVO: 'GABARITO_DEFINITIVO',
  RESULTADO: 'RESULTADO'
};

export type Fase = (typeof Fase)[keyof typeof Fase]


export const Participacao: {
  OFICIAL: 'OFICIAL',
  SIMULADO: 'SIMULADO'
};

export type Participacao = (typeof Participacao)[keyof typeof Participacao]

}

export type Fase = $Enums.Fase

export const Fase: typeof $Enums.Fase

export type Participacao = $Enums.Participacao

export const Participacao: typeof $Enums.Participacao

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Concursos
 * const concursos = await prisma.concurso.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Concursos
   * const concursos = await prisma.concurso.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.concurso`: Exposes CRUD operations for the **Concurso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Concursos
    * const concursos = await prisma.concurso.findMany()
    * ```
    */
  get concurso(): Prisma.ConcursoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cargo`: Exposes CRUD operations for the **Cargo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cargos
    * const cargos = await prisma.cargo.findMany()
    * ```
    */
  get cargo(): Prisma.CargoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registro`: Exposes CRUD operations for the **Registro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Registros
    * const registros = await prisma.registro.findMany()
    * ```
    */
  get registro(): Prisma.RegistroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.banca`: Exposes CRUD operations for the **Banca** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bancas
    * const bancas = await prisma.banca.findMany()
    * ```
    */
  get banca(): Prisma.BancaDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Concurso: 'Concurso',
    Cargo: 'Cargo',
    Usuario: 'Usuario',
    Registro: 'Registro',
    Banca: 'Banca'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "concurso" | "cargo" | "usuario" | "registro" | "banca"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Concurso: {
        payload: Prisma.$ConcursoPayload<ExtArgs>
        fields: Prisma.ConcursoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConcursoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConcursoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConcursoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConcursoPayload>
          }
          findFirst: {
            args: Prisma.ConcursoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConcursoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConcursoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConcursoPayload>
          }
          findMany: {
            args: Prisma.ConcursoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConcursoPayload>[]
          }
          create: {
            args: Prisma.ConcursoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConcursoPayload>
          }
          createMany: {
            args: Prisma.ConcursoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConcursoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConcursoPayload>[]
          }
          delete: {
            args: Prisma.ConcursoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConcursoPayload>
          }
          update: {
            args: Prisma.ConcursoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConcursoPayload>
          }
          deleteMany: {
            args: Prisma.ConcursoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConcursoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConcursoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConcursoPayload>[]
          }
          upsert: {
            args: Prisma.ConcursoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConcursoPayload>
          }
          aggregate: {
            args: Prisma.ConcursoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConcurso>
          }
          groupBy: {
            args: Prisma.ConcursoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConcursoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConcursoCountArgs<ExtArgs>
            result: $Utils.Optional<ConcursoCountAggregateOutputType> | number
          }
        }
      }
      Cargo: {
        payload: Prisma.$CargoPayload<ExtArgs>
        fields: Prisma.CargoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CargoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CargoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          findFirst: {
            args: Prisma.CargoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CargoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          findMany: {
            args: Prisma.CargoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>[]
          }
          create: {
            args: Prisma.CargoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          createMany: {
            args: Prisma.CargoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CargoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>[]
          }
          delete: {
            args: Prisma.CargoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          update: {
            args: Prisma.CargoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          deleteMany: {
            args: Prisma.CargoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CargoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CargoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>[]
          }
          upsert: {
            args: Prisma.CargoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          aggregate: {
            args: Prisma.CargoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCargo>
          }
          groupBy: {
            args: Prisma.CargoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CargoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CargoCountArgs<ExtArgs>
            result: $Utils.Optional<CargoCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Registro: {
        payload: Prisma.$RegistroPayload<ExtArgs>
        fields: Prisma.RegistroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPayload>
          }
          findFirst: {
            args: Prisma.RegistroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPayload>
          }
          findMany: {
            args: Prisma.RegistroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPayload>[]
          }
          create: {
            args: Prisma.RegistroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPayload>
          }
          createMany: {
            args: Prisma.RegistroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegistroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPayload>[]
          }
          delete: {
            args: Prisma.RegistroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPayload>
          }
          update: {
            args: Prisma.RegistroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPayload>
          }
          deleteMany: {
            args: Prisma.RegistroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegistroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPayload>[]
          }
          upsert: {
            args: Prisma.RegistroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPayload>
          }
          aggregate: {
            args: Prisma.RegistroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistro>
          }
          groupBy: {
            args: Prisma.RegistroGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistroGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistroCountArgs<ExtArgs>
            result: $Utils.Optional<RegistroCountAggregateOutputType> | number
          }
        }
      }
      Banca: {
        payload: Prisma.$BancaPayload<ExtArgs>
        fields: Prisma.BancaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BancaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BancaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancaPayload>
          }
          findFirst: {
            args: Prisma.BancaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BancaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancaPayload>
          }
          findMany: {
            args: Prisma.BancaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancaPayload>[]
          }
          create: {
            args: Prisma.BancaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancaPayload>
          }
          createMany: {
            args: Prisma.BancaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BancaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancaPayload>[]
          }
          delete: {
            args: Prisma.BancaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancaPayload>
          }
          update: {
            args: Prisma.BancaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancaPayload>
          }
          deleteMany: {
            args: Prisma.BancaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BancaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BancaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancaPayload>[]
          }
          upsert: {
            args: Prisma.BancaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancaPayload>
          }
          aggregate: {
            args: Prisma.BancaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBanca>
          }
          groupBy: {
            args: Prisma.BancaGroupByArgs<ExtArgs>
            result: $Utils.Optional<BancaGroupByOutputType>[]
          }
          count: {
            args: Prisma.BancaCountArgs<ExtArgs>
            result: $Utils.Optional<BancaCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    concurso?: ConcursoOmit
    cargo?: CargoOmit
    usuario?: UsuarioOmit
    registro?: RegistroOmit
    banca?: BancaOmit
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
   * Count Type ConcursoCountOutputType
   */

  export type ConcursoCountOutputType = {
    cargos: number
  }

  export type ConcursoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cargos?: boolean | ConcursoCountOutputTypeCountCargosArgs
  }

  // Custom InputTypes
  /**
   * ConcursoCountOutputType without action
   */
  export type ConcursoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConcursoCountOutputType
     */
    select?: ConcursoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConcursoCountOutputType without action
   */
  export type ConcursoCountOutputTypeCountCargosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CargoWhereInput
  }


  /**
   * Count Type CargoCountOutputType
   */

  export type CargoCountOutputType = {
    registros: number
  }

  export type CargoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registros?: boolean | CargoCountOutputTypeCountRegistrosArgs
  }

  // Custom InputTypes
  /**
   * CargoCountOutputType without action
   */
  export type CargoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargoCountOutputType
     */
    select?: CargoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CargoCountOutputType without action
   */
  export type CargoCountOutputTypeCountRegistrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    registros: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registros?: boolean | UsuarioCountOutputTypeCountRegistrosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountRegistrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroWhereInput
  }


  /**
   * Count Type BancaCountOutputType
   */

  export type BancaCountOutputType = {
    concursos: number
  }

  export type BancaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    concursos?: boolean | BancaCountOutputTypeCountConcursosArgs
  }

  // Custom InputTypes
  /**
   * BancaCountOutputType without action
   */
  export type BancaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BancaCountOutputType
     */
    select?: BancaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BancaCountOutputType without action
   */
  export type BancaCountOutputTypeCountConcursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConcursoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Concurso
   */

  export type AggregateConcurso = {
    _count: ConcursoCountAggregateOutputType | null
    _min: ConcursoMinAggregateOutputType | null
    _max: ConcursoMaxAggregateOutputType | null
  }

  export type ConcursoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    data_publicacao: Date | null
    data_inscricao: Date | null
    data_prova: Date | null
    data_gabarito: Date | null
    data_resultado: Date | null
    link_edital: string | null
    link_pagina: string | null
    orgao: string | null
    fase: $Enums.Fase | null
    banca_id: string | null
    criado_em: Date | null
    atualizado_em: Date | null
  }

  export type ConcursoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    data_publicacao: Date | null
    data_inscricao: Date | null
    data_prova: Date | null
    data_gabarito: Date | null
    data_resultado: Date | null
    link_edital: string | null
    link_pagina: string | null
    orgao: string | null
    fase: $Enums.Fase | null
    banca_id: string | null
    criado_em: Date | null
    atualizado_em: Date | null
  }

  export type ConcursoCountAggregateOutputType = {
    id: number
    nome: number
    data_publicacao: number
    data_inscricao: number
    data_prova: number
    data_gabarito: number
    data_resultado: number
    link_edital: number
    link_pagina: number
    orgao: number
    fase: number
    banca_id: number
    cotas: number
    versoes_prova: number
    criado_em: number
    atualizado_em: number
    _all: number
  }


  export type ConcursoMinAggregateInputType = {
    id?: true
    nome?: true
    data_publicacao?: true
    data_inscricao?: true
    data_prova?: true
    data_gabarito?: true
    data_resultado?: true
    link_edital?: true
    link_pagina?: true
    orgao?: true
    fase?: true
    banca_id?: true
    criado_em?: true
    atualizado_em?: true
  }

  export type ConcursoMaxAggregateInputType = {
    id?: true
    nome?: true
    data_publicacao?: true
    data_inscricao?: true
    data_prova?: true
    data_gabarito?: true
    data_resultado?: true
    link_edital?: true
    link_pagina?: true
    orgao?: true
    fase?: true
    banca_id?: true
    criado_em?: true
    atualizado_em?: true
  }

  export type ConcursoCountAggregateInputType = {
    id?: true
    nome?: true
    data_publicacao?: true
    data_inscricao?: true
    data_prova?: true
    data_gabarito?: true
    data_resultado?: true
    link_edital?: true
    link_pagina?: true
    orgao?: true
    fase?: true
    banca_id?: true
    cotas?: true
    versoes_prova?: true
    criado_em?: true
    atualizado_em?: true
    _all?: true
  }

  export type ConcursoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Concurso to aggregate.
     */
    where?: ConcursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Concursos to fetch.
     */
    orderBy?: ConcursoOrderByWithRelationInput | ConcursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConcursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Concursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Concursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Concursos
    **/
    _count?: true | ConcursoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConcursoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConcursoMaxAggregateInputType
  }

  export type GetConcursoAggregateType<T extends ConcursoAggregateArgs> = {
        [P in keyof T & keyof AggregateConcurso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConcurso[P]>
      : GetScalarType<T[P], AggregateConcurso[P]>
  }




  export type ConcursoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConcursoWhereInput
    orderBy?: ConcursoOrderByWithAggregationInput | ConcursoOrderByWithAggregationInput[]
    by: ConcursoScalarFieldEnum[] | ConcursoScalarFieldEnum
    having?: ConcursoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConcursoCountAggregateInputType | true
    _min?: ConcursoMinAggregateInputType
    _max?: ConcursoMaxAggregateInputType
  }

  export type ConcursoGroupByOutputType = {
    id: string
    nome: string
    data_publicacao: Date | null
    data_inscricao: Date | null
    data_prova: Date | null
    data_gabarito: Date | null
    data_resultado: Date | null
    link_edital: string | null
    link_pagina: string | null
    orgao: string
    fase: $Enums.Fase
    banca_id: string
    cotas: string[]
    versoes_prova: string[]
    criado_em: Date
    atualizado_em: Date
    _count: ConcursoCountAggregateOutputType | null
    _min: ConcursoMinAggregateOutputType | null
    _max: ConcursoMaxAggregateOutputType | null
  }

  type GetConcursoGroupByPayload<T extends ConcursoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConcursoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConcursoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConcursoGroupByOutputType[P]>
            : GetScalarType<T[P], ConcursoGroupByOutputType[P]>
        }
      >
    >


  export type ConcursoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    data_publicacao?: boolean
    data_inscricao?: boolean
    data_prova?: boolean
    data_gabarito?: boolean
    data_resultado?: boolean
    link_edital?: boolean
    link_pagina?: boolean
    orgao?: boolean
    fase?: boolean
    banca_id?: boolean
    cotas?: boolean
    versoes_prova?: boolean
    criado_em?: boolean
    atualizado_em?: boolean
    banca?: boolean | BancaDefaultArgs<ExtArgs>
    cargos?: boolean | Concurso$cargosArgs<ExtArgs>
    _count?: boolean | ConcursoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["concurso"]>

  export type ConcursoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    data_publicacao?: boolean
    data_inscricao?: boolean
    data_prova?: boolean
    data_gabarito?: boolean
    data_resultado?: boolean
    link_edital?: boolean
    link_pagina?: boolean
    orgao?: boolean
    fase?: boolean
    banca_id?: boolean
    cotas?: boolean
    versoes_prova?: boolean
    criado_em?: boolean
    atualizado_em?: boolean
    banca?: boolean | BancaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["concurso"]>

  export type ConcursoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    data_publicacao?: boolean
    data_inscricao?: boolean
    data_prova?: boolean
    data_gabarito?: boolean
    data_resultado?: boolean
    link_edital?: boolean
    link_pagina?: boolean
    orgao?: boolean
    fase?: boolean
    banca_id?: boolean
    cotas?: boolean
    versoes_prova?: boolean
    criado_em?: boolean
    atualizado_em?: boolean
    banca?: boolean | BancaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["concurso"]>

  export type ConcursoSelectScalar = {
    id?: boolean
    nome?: boolean
    data_publicacao?: boolean
    data_inscricao?: boolean
    data_prova?: boolean
    data_gabarito?: boolean
    data_resultado?: boolean
    link_edital?: boolean
    link_pagina?: boolean
    orgao?: boolean
    fase?: boolean
    banca_id?: boolean
    cotas?: boolean
    versoes_prova?: boolean
    criado_em?: boolean
    atualizado_em?: boolean
  }

  export type ConcursoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "data_publicacao" | "data_inscricao" | "data_prova" | "data_gabarito" | "data_resultado" | "link_edital" | "link_pagina" | "orgao" | "fase" | "banca_id" | "cotas" | "versoes_prova" | "criado_em" | "atualizado_em", ExtArgs["result"]["concurso"]>
  export type ConcursoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    banca?: boolean | BancaDefaultArgs<ExtArgs>
    cargos?: boolean | Concurso$cargosArgs<ExtArgs>
    _count?: boolean | ConcursoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConcursoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    banca?: boolean | BancaDefaultArgs<ExtArgs>
  }
  export type ConcursoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    banca?: boolean | BancaDefaultArgs<ExtArgs>
  }

  export type $ConcursoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Concurso"
    objects: {
      banca: Prisma.$BancaPayload<ExtArgs>
      cargos: Prisma.$CargoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      data_publicacao: Date | null
      data_inscricao: Date | null
      data_prova: Date | null
      data_gabarito: Date | null
      data_resultado: Date | null
      link_edital: string | null
      link_pagina: string | null
      orgao: string
      fase: $Enums.Fase
      banca_id: string
      cotas: string[]
      versoes_prova: string[]
      criado_em: Date
      atualizado_em: Date
    }, ExtArgs["result"]["concurso"]>
    composites: {}
  }

  type ConcursoGetPayload<S extends boolean | null | undefined | ConcursoDefaultArgs> = $Result.GetResult<Prisma.$ConcursoPayload, S>

  type ConcursoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConcursoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConcursoCountAggregateInputType | true
    }

  export interface ConcursoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Concurso'], meta: { name: 'Concurso' } }
    /**
     * Find zero or one Concurso that matches the filter.
     * @param {ConcursoFindUniqueArgs} args - Arguments to find a Concurso
     * @example
     * // Get one Concurso
     * const concurso = await prisma.concurso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConcursoFindUniqueArgs>(args: SelectSubset<T, ConcursoFindUniqueArgs<ExtArgs>>): Prisma__ConcursoClient<$Result.GetResult<Prisma.$ConcursoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Concurso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConcursoFindUniqueOrThrowArgs} args - Arguments to find a Concurso
     * @example
     * // Get one Concurso
     * const concurso = await prisma.concurso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConcursoFindUniqueOrThrowArgs>(args: SelectSubset<T, ConcursoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConcursoClient<$Result.GetResult<Prisma.$ConcursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Concurso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConcursoFindFirstArgs} args - Arguments to find a Concurso
     * @example
     * // Get one Concurso
     * const concurso = await prisma.concurso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConcursoFindFirstArgs>(args?: SelectSubset<T, ConcursoFindFirstArgs<ExtArgs>>): Prisma__ConcursoClient<$Result.GetResult<Prisma.$ConcursoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Concurso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConcursoFindFirstOrThrowArgs} args - Arguments to find a Concurso
     * @example
     * // Get one Concurso
     * const concurso = await prisma.concurso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConcursoFindFirstOrThrowArgs>(args?: SelectSubset<T, ConcursoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConcursoClient<$Result.GetResult<Prisma.$ConcursoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Concursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConcursoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Concursos
     * const concursos = await prisma.concurso.findMany()
     * 
     * // Get first 10 Concursos
     * const concursos = await prisma.concurso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const concursoWithIdOnly = await prisma.concurso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConcursoFindManyArgs>(args?: SelectSubset<T, ConcursoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConcursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Concurso.
     * @param {ConcursoCreateArgs} args - Arguments to create a Concurso.
     * @example
     * // Create one Concurso
     * const Concurso = await prisma.concurso.create({
     *   data: {
     *     // ... data to create a Concurso
     *   }
     * })
     * 
     */
    create<T extends ConcursoCreateArgs>(args: SelectSubset<T, ConcursoCreateArgs<ExtArgs>>): Prisma__ConcursoClient<$Result.GetResult<Prisma.$ConcursoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Concursos.
     * @param {ConcursoCreateManyArgs} args - Arguments to create many Concursos.
     * @example
     * // Create many Concursos
     * const concurso = await prisma.concurso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConcursoCreateManyArgs>(args?: SelectSubset<T, ConcursoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Concursos and returns the data saved in the database.
     * @param {ConcursoCreateManyAndReturnArgs} args - Arguments to create many Concursos.
     * @example
     * // Create many Concursos
     * const concurso = await prisma.concurso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Concursos and only return the `id`
     * const concursoWithIdOnly = await prisma.concurso.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConcursoCreateManyAndReturnArgs>(args?: SelectSubset<T, ConcursoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConcursoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Concurso.
     * @param {ConcursoDeleteArgs} args - Arguments to delete one Concurso.
     * @example
     * // Delete one Concurso
     * const Concurso = await prisma.concurso.delete({
     *   where: {
     *     // ... filter to delete one Concurso
     *   }
     * })
     * 
     */
    delete<T extends ConcursoDeleteArgs>(args: SelectSubset<T, ConcursoDeleteArgs<ExtArgs>>): Prisma__ConcursoClient<$Result.GetResult<Prisma.$ConcursoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Concurso.
     * @param {ConcursoUpdateArgs} args - Arguments to update one Concurso.
     * @example
     * // Update one Concurso
     * const concurso = await prisma.concurso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConcursoUpdateArgs>(args: SelectSubset<T, ConcursoUpdateArgs<ExtArgs>>): Prisma__ConcursoClient<$Result.GetResult<Prisma.$ConcursoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Concursos.
     * @param {ConcursoDeleteManyArgs} args - Arguments to filter Concursos to delete.
     * @example
     * // Delete a few Concursos
     * const { count } = await prisma.concurso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConcursoDeleteManyArgs>(args?: SelectSubset<T, ConcursoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Concursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConcursoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Concursos
     * const concurso = await prisma.concurso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConcursoUpdateManyArgs>(args: SelectSubset<T, ConcursoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Concursos and returns the data updated in the database.
     * @param {ConcursoUpdateManyAndReturnArgs} args - Arguments to update many Concursos.
     * @example
     * // Update many Concursos
     * const concurso = await prisma.concurso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Concursos and only return the `id`
     * const concursoWithIdOnly = await prisma.concurso.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConcursoUpdateManyAndReturnArgs>(args: SelectSubset<T, ConcursoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConcursoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Concurso.
     * @param {ConcursoUpsertArgs} args - Arguments to update or create a Concurso.
     * @example
     * // Update or create a Concurso
     * const concurso = await prisma.concurso.upsert({
     *   create: {
     *     // ... data to create a Concurso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Concurso we want to update
     *   }
     * })
     */
    upsert<T extends ConcursoUpsertArgs>(args: SelectSubset<T, ConcursoUpsertArgs<ExtArgs>>): Prisma__ConcursoClient<$Result.GetResult<Prisma.$ConcursoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Concursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConcursoCountArgs} args - Arguments to filter Concursos to count.
     * @example
     * // Count the number of Concursos
     * const count = await prisma.concurso.count({
     *   where: {
     *     // ... the filter for the Concursos we want to count
     *   }
     * })
    **/
    count<T extends ConcursoCountArgs>(
      args?: Subset<T, ConcursoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConcursoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Concurso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConcursoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConcursoAggregateArgs>(args: Subset<T, ConcursoAggregateArgs>): Prisma.PrismaPromise<GetConcursoAggregateType<T>>

    /**
     * Group by Concurso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConcursoGroupByArgs} args - Group by arguments.
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
      T extends ConcursoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConcursoGroupByArgs['orderBy'] }
        : { orderBy?: ConcursoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConcursoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConcursoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Concurso model
   */
  readonly fields: ConcursoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Concurso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConcursoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    banca<T extends BancaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BancaDefaultArgs<ExtArgs>>): Prisma__BancaClient<$Result.GetResult<Prisma.$BancaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cargos<T extends Concurso$cargosArgs<ExtArgs> = {}>(args?: Subset<T, Concurso$cargosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Concurso model
   */
  interface ConcursoFieldRefs {
    readonly id: FieldRef<"Concurso", 'String'>
    readonly nome: FieldRef<"Concurso", 'String'>
    readonly data_publicacao: FieldRef<"Concurso", 'DateTime'>
    readonly data_inscricao: FieldRef<"Concurso", 'DateTime'>
    readonly data_prova: FieldRef<"Concurso", 'DateTime'>
    readonly data_gabarito: FieldRef<"Concurso", 'DateTime'>
    readonly data_resultado: FieldRef<"Concurso", 'DateTime'>
    readonly link_edital: FieldRef<"Concurso", 'String'>
    readonly link_pagina: FieldRef<"Concurso", 'String'>
    readonly orgao: FieldRef<"Concurso", 'String'>
    readonly fase: FieldRef<"Concurso", 'Fase'>
    readonly banca_id: FieldRef<"Concurso", 'String'>
    readonly cotas: FieldRef<"Concurso", 'String[]'>
    readonly versoes_prova: FieldRef<"Concurso", 'String[]'>
    readonly criado_em: FieldRef<"Concurso", 'DateTime'>
    readonly atualizado_em: FieldRef<"Concurso", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Concurso findUnique
   */
  export type ConcursoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concurso
     */
    select?: ConcursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Concurso
     */
    omit?: ConcursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcursoInclude<ExtArgs> | null
    /**
     * Filter, which Concurso to fetch.
     */
    where: ConcursoWhereUniqueInput
  }

  /**
   * Concurso findUniqueOrThrow
   */
  export type ConcursoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concurso
     */
    select?: ConcursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Concurso
     */
    omit?: ConcursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcursoInclude<ExtArgs> | null
    /**
     * Filter, which Concurso to fetch.
     */
    where: ConcursoWhereUniqueInput
  }

  /**
   * Concurso findFirst
   */
  export type ConcursoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concurso
     */
    select?: ConcursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Concurso
     */
    omit?: ConcursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcursoInclude<ExtArgs> | null
    /**
     * Filter, which Concurso to fetch.
     */
    where?: ConcursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Concursos to fetch.
     */
    orderBy?: ConcursoOrderByWithRelationInput | ConcursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Concursos.
     */
    cursor?: ConcursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Concursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Concursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Concursos.
     */
    distinct?: ConcursoScalarFieldEnum | ConcursoScalarFieldEnum[]
  }

  /**
   * Concurso findFirstOrThrow
   */
  export type ConcursoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concurso
     */
    select?: ConcursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Concurso
     */
    omit?: ConcursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcursoInclude<ExtArgs> | null
    /**
     * Filter, which Concurso to fetch.
     */
    where?: ConcursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Concursos to fetch.
     */
    orderBy?: ConcursoOrderByWithRelationInput | ConcursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Concursos.
     */
    cursor?: ConcursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Concursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Concursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Concursos.
     */
    distinct?: ConcursoScalarFieldEnum | ConcursoScalarFieldEnum[]
  }

  /**
   * Concurso findMany
   */
  export type ConcursoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concurso
     */
    select?: ConcursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Concurso
     */
    omit?: ConcursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcursoInclude<ExtArgs> | null
    /**
     * Filter, which Concursos to fetch.
     */
    where?: ConcursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Concursos to fetch.
     */
    orderBy?: ConcursoOrderByWithRelationInput | ConcursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Concursos.
     */
    cursor?: ConcursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Concursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Concursos.
     */
    skip?: number
    distinct?: ConcursoScalarFieldEnum | ConcursoScalarFieldEnum[]
  }

  /**
   * Concurso create
   */
  export type ConcursoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concurso
     */
    select?: ConcursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Concurso
     */
    omit?: ConcursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcursoInclude<ExtArgs> | null
    /**
     * The data needed to create a Concurso.
     */
    data: XOR<ConcursoCreateInput, ConcursoUncheckedCreateInput>
  }

  /**
   * Concurso createMany
   */
  export type ConcursoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Concursos.
     */
    data: ConcursoCreateManyInput | ConcursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Concurso createManyAndReturn
   */
  export type ConcursoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concurso
     */
    select?: ConcursoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Concurso
     */
    omit?: ConcursoOmit<ExtArgs> | null
    /**
     * The data used to create many Concursos.
     */
    data: ConcursoCreateManyInput | ConcursoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcursoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Concurso update
   */
  export type ConcursoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concurso
     */
    select?: ConcursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Concurso
     */
    omit?: ConcursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcursoInclude<ExtArgs> | null
    /**
     * The data needed to update a Concurso.
     */
    data: XOR<ConcursoUpdateInput, ConcursoUncheckedUpdateInput>
    /**
     * Choose, which Concurso to update.
     */
    where: ConcursoWhereUniqueInput
  }

  /**
   * Concurso updateMany
   */
  export type ConcursoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Concursos.
     */
    data: XOR<ConcursoUpdateManyMutationInput, ConcursoUncheckedUpdateManyInput>
    /**
     * Filter which Concursos to update
     */
    where?: ConcursoWhereInput
    /**
     * Limit how many Concursos to update.
     */
    limit?: number
  }

  /**
   * Concurso updateManyAndReturn
   */
  export type ConcursoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concurso
     */
    select?: ConcursoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Concurso
     */
    omit?: ConcursoOmit<ExtArgs> | null
    /**
     * The data used to update Concursos.
     */
    data: XOR<ConcursoUpdateManyMutationInput, ConcursoUncheckedUpdateManyInput>
    /**
     * Filter which Concursos to update
     */
    where?: ConcursoWhereInput
    /**
     * Limit how many Concursos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcursoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Concurso upsert
   */
  export type ConcursoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concurso
     */
    select?: ConcursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Concurso
     */
    omit?: ConcursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcursoInclude<ExtArgs> | null
    /**
     * The filter to search for the Concurso to update in case it exists.
     */
    where: ConcursoWhereUniqueInput
    /**
     * In case the Concurso found by the `where` argument doesn't exist, create a new Concurso with this data.
     */
    create: XOR<ConcursoCreateInput, ConcursoUncheckedCreateInput>
    /**
     * In case the Concurso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConcursoUpdateInput, ConcursoUncheckedUpdateInput>
  }

  /**
   * Concurso delete
   */
  export type ConcursoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concurso
     */
    select?: ConcursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Concurso
     */
    omit?: ConcursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcursoInclude<ExtArgs> | null
    /**
     * Filter which Concurso to delete.
     */
    where: ConcursoWhereUniqueInput
  }

  /**
   * Concurso deleteMany
   */
  export type ConcursoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Concursos to delete
     */
    where?: ConcursoWhereInput
    /**
     * Limit how many Concursos to delete.
     */
    limit?: number
  }

  /**
   * Concurso.cargos
   */
  export type Concurso$cargosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    where?: CargoWhereInput
    orderBy?: CargoOrderByWithRelationInput | CargoOrderByWithRelationInput[]
    cursor?: CargoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CargoScalarFieldEnum | CargoScalarFieldEnum[]
  }

  /**
   * Concurso without action
   */
  export type ConcursoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concurso
     */
    select?: ConcursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Concurso
     */
    omit?: ConcursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcursoInclude<ExtArgs> | null
  }


  /**
   * Model Cargo
   */

  export type AggregateCargo = {
    _count: CargoCountAggregateOutputType | null
    _avg: CargoAvgAggregateOutputType | null
    _sum: CargoSumAggregateOutputType | null
    _min: CargoMinAggregateOutputType | null
    _max: CargoMaxAggregateOutputType | null
  }

  export type CargoAvgAggregateOutputType = {
    total_vagas: number | null
  }

  export type CargoSumAggregateOutputType = {
    total_vagas: number | null
  }

  export type CargoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    total_vagas: number | null
    concurso_id: string | null
    estado: string | null
    cidade: string | null
    regiao: string | null
    criado_em: Date | null
  }

  export type CargoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    total_vagas: number | null
    concurso_id: string | null
    estado: string | null
    cidade: string | null
    regiao: string | null
    criado_em: Date | null
  }

  export type CargoCountAggregateOutputType = {
    id: number
    nome: number
    total_vagas: number
    vagas_cotas: number
    concurso_id: number
    estado: number
    cidade: number
    regiao: number
    materias: number
    criado_em: number
    _all: number
  }


  export type CargoAvgAggregateInputType = {
    total_vagas?: true
  }

  export type CargoSumAggregateInputType = {
    total_vagas?: true
  }

  export type CargoMinAggregateInputType = {
    id?: true
    nome?: true
    total_vagas?: true
    concurso_id?: true
    estado?: true
    cidade?: true
    regiao?: true
    criado_em?: true
  }

  export type CargoMaxAggregateInputType = {
    id?: true
    nome?: true
    total_vagas?: true
    concurso_id?: true
    estado?: true
    cidade?: true
    regiao?: true
    criado_em?: true
  }

  export type CargoCountAggregateInputType = {
    id?: true
    nome?: true
    total_vagas?: true
    vagas_cotas?: true
    concurso_id?: true
    estado?: true
    cidade?: true
    regiao?: true
    materias?: true
    criado_em?: true
    _all?: true
  }

  export type CargoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cargo to aggregate.
     */
    where?: CargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cargos to fetch.
     */
    orderBy?: CargoOrderByWithRelationInput | CargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cargos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cargos
    **/
    _count?: true | CargoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CargoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CargoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CargoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CargoMaxAggregateInputType
  }

  export type GetCargoAggregateType<T extends CargoAggregateArgs> = {
        [P in keyof T & keyof AggregateCargo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCargo[P]>
      : GetScalarType<T[P], AggregateCargo[P]>
  }




  export type CargoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CargoWhereInput
    orderBy?: CargoOrderByWithAggregationInput | CargoOrderByWithAggregationInput[]
    by: CargoScalarFieldEnum[] | CargoScalarFieldEnum
    having?: CargoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CargoCountAggregateInputType | true
    _avg?: CargoAvgAggregateInputType
    _sum?: CargoSumAggregateInputType
    _min?: CargoMinAggregateInputType
    _max?: CargoMaxAggregateInputType
  }

  export type CargoGroupByOutputType = {
    id: string
    nome: string
    total_vagas: number
    vagas_cotas: JsonValue
    concurso_id: string
    estado: string
    cidade: string
    regiao: string
    materias: JsonValue[]
    criado_em: Date
    _count: CargoCountAggregateOutputType | null
    _avg: CargoAvgAggregateOutputType | null
    _sum: CargoSumAggregateOutputType | null
    _min: CargoMinAggregateOutputType | null
    _max: CargoMaxAggregateOutputType | null
  }

  type GetCargoGroupByPayload<T extends CargoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CargoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CargoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CargoGroupByOutputType[P]>
            : GetScalarType<T[P], CargoGroupByOutputType[P]>
        }
      >
    >


  export type CargoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    total_vagas?: boolean
    vagas_cotas?: boolean
    concurso_id?: boolean
    estado?: boolean
    cidade?: boolean
    regiao?: boolean
    materias?: boolean
    criado_em?: boolean
    concurso?: boolean | ConcursoDefaultArgs<ExtArgs>
    registros?: boolean | Cargo$registrosArgs<ExtArgs>
    _count?: boolean | CargoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cargo"]>

  export type CargoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    total_vagas?: boolean
    vagas_cotas?: boolean
    concurso_id?: boolean
    estado?: boolean
    cidade?: boolean
    regiao?: boolean
    materias?: boolean
    criado_em?: boolean
    concurso?: boolean | ConcursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cargo"]>

  export type CargoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    total_vagas?: boolean
    vagas_cotas?: boolean
    concurso_id?: boolean
    estado?: boolean
    cidade?: boolean
    regiao?: boolean
    materias?: boolean
    criado_em?: boolean
    concurso?: boolean | ConcursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cargo"]>

  export type CargoSelectScalar = {
    id?: boolean
    nome?: boolean
    total_vagas?: boolean
    vagas_cotas?: boolean
    concurso_id?: boolean
    estado?: boolean
    cidade?: boolean
    regiao?: boolean
    materias?: boolean
    criado_em?: boolean
  }

  export type CargoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "total_vagas" | "vagas_cotas" | "concurso_id" | "estado" | "cidade" | "regiao" | "materias" | "criado_em", ExtArgs["result"]["cargo"]>
  export type CargoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    concurso?: boolean | ConcursoDefaultArgs<ExtArgs>
    registros?: boolean | Cargo$registrosArgs<ExtArgs>
    _count?: boolean | CargoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CargoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    concurso?: boolean | ConcursoDefaultArgs<ExtArgs>
  }
  export type CargoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    concurso?: boolean | ConcursoDefaultArgs<ExtArgs>
  }

  export type $CargoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cargo"
    objects: {
      concurso: Prisma.$ConcursoPayload<ExtArgs>
      registros: Prisma.$RegistroPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      total_vagas: number
      vagas_cotas: Prisma.JsonValue
      concurso_id: string
      estado: string
      cidade: string
      regiao: string
      materias: Prisma.JsonValue[]
      criado_em: Date
    }, ExtArgs["result"]["cargo"]>
    composites: {}
  }

  type CargoGetPayload<S extends boolean | null | undefined | CargoDefaultArgs> = $Result.GetResult<Prisma.$CargoPayload, S>

  type CargoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CargoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CargoCountAggregateInputType | true
    }

  export interface CargoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cargo'], meta: { name: 'Cargo' } }
    /**
     * Find zero or one Cargo that matches the filter.
     * @param {CargoFindUniqueArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CargoFindUniqueArgs>(args: SelectSubset<T, CargoFindUniqueArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cargo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CargoFindUniqueOrThrowArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CargoFindUniqueOrThrowArgs>(args: SelectSubset<T, CargoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cargo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoFindFirstArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CargoFindFirstArgs>(args?: SelectSubset<T, CargoFindFirstArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cargo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoFindFirstOrThrowArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CargoFindFirstOrThrowArgs>(args?: SelectSubset<T, CargoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cargos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cargos
     * const cargos = await prisma.cargo.findMany()
     * 
     * // Get first 10 Cargos
     * const cargos = await prisma.cargo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cargoWithIdOnly = await prisma.cargo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CargoFindManyArgs>(args?: SelectSubset<T, CargoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cargo.
     * @param {CargoCreateArgs} args - Arguments to create a Cargo.
     * @example
     * // Create one Cargo
     * const Cargo = await prisma.cargo.create({
     *   data: {
     *     // ... data to create a Cargo
     *   }
     * })
     * 
     */
    create<T extends CargoCreateArgs>(args: SelectSubset<T, CargoCreateArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cargos.
     * @param {CargoCreateManyArgs} args - Arguments to create many Cargos.
     * @example
     * // Create many Cargos
     * const cargo = await prisma.cargo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CargoCreateManyArgs>(args?: SelectSubset<T, CargoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cargos and returns the data saved in the database.
     * @param {CargoCreateManyAndReturnArgs} args - Arguments to create many Cargos.
     * @example
     * // Create many Cargos
     * const cargo = await prisma.cargo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cargos and only return the `id`
     * const cargoWithIdOnly = await prisma.cargo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CargoCreateManyAndReturnArgs>(args?: SelectSubset<T, CargoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cargo.
     * @param {CargoDeleteArgs} args - Arguments to delete one Cargo.
     * @example
     * // Delete one Cargo
     * const Cargo = await prisma.cargo.delete({
     *   where: {
     *     // ... filter to delete one Cargo
     *   }
     * })
     * 
     */
    delete<T extends CargoDeleteArgs>(args: SelectSubset<T, CargoDeleteArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cargo.
     * @param {CargoUpdateArgs} args - Arguments to update one Cargo.
     * @example
     * // Update one Cargo
     * const cargo = await prisma.cargo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CargoUpdateArgs>(args: SelectSubset<T, CargoUpdateArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cargos.
     * @param {CargoDeleteManyArgs} args - Arguments to filter Cargos to delete.
     * @example
     * // Delete a few Cargos
     * const { count } = await prisma.cargo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CargoDeleteManyArgs>(args?: SelectSubset<T, CargoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cargos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cargos
     * const cargo = await prisma.cargo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CargoUpdateManyArgs>(args: SelectSubset<T, CargoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cargos and returns the data updated in the database.
     * @param {CargoUpdateManyAndReturnArgs} args - Arguments to update many Cargos.
     * @example
     * // Update many Cargos
     * const cargo = await prisma.cargo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cargos and only return the `id`
     * const cargoWithIdOnly = await prisma.cargo.updateManyAndReturn({
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
    updateManyAndReturn<T extends CargoUpdateManyAndReturnArgs>(args: SelectSubset<T, CargoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cargo.
     * @param {CargoUpsertArgs} args - Arguments to update or create a Cargo.
     * @example
     * // Update or create a Cargo
     * const cargo = await prisma.cargo.upsert({
     *   create: {
     *     // ... data to create a Cargo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cargo we want to update
     *   }
     * })
     */
    upsert<T extends CargoUpsertArgs>(args: SelectSubset<T, CargoUpsertArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cargos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoCountArgs} args - Arguments to filter Cargos to count.
     * @example
     * // Count the number of Cargos
     * const count = await prisma.cargo.count({
     *   where: {
     *     // ... the filter for the Cargos we want to count
     *   }
     * })
    **/
    count<T extends CargoCountArgs>(
      args?: Subset<T, CargoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CargoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cargo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CargoAggregateArgs>(args: Subset<T, CargoAggregateArgs>): Prisma.PrismaPromise<GetCargoAggregateType<T>>

    /**
     * Group by Cargo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoGroupByArgs} args - Group by arguments.
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
      T extends CargoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CargoGroupByArgs['orderBy'] }
        : { orderBy?: CargoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CargoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCargoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cargo model
   */
  readonly fields: CargoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cargo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CargoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    concurso<T extends ConcursoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConcursoDefaultArgs<ExtArgs>>): Prisma__ConcursoClient<$Result.GetResult<Prisma.$ConcursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    registros<T extends Cargo$registrosArgs<ExtArgs> = {}>(args?: Subset<T, Cargo$registrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cargo model
   */
  interface CargoFieldRefs {
    readonly id: FieldRef<"Cargo", 'String'>
    readonly nome: FieldRef<"Cargo", 'String'>
    readonly total_vagas: FieldRef<"Cargo", 'Int'>
    readonly vagas_cotas: FieldRef<"Cargo", 'Json'>
    readonly concurso_id: FieldRef<"Cargo", 'String'>
    readonly estado: FieldRef<"Cargo", 'String'>
    readonly cidade: FieldRef<"Cargo", 'String'>
    readonly regiao: FieldRef<"Cargo", 'String'>
    readonly materias: FieldRef<"Cargo", 'Json[]'>
    readonly criado_em: FieldRef<"Cargo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cargo findUnique
   */
  export type CargoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter, which Cargo to fetch.
     */
    where: CargoWhereUniqueInput
  }

  /**
   * Cargo findUniqueOrThrow
   */
  export type CargoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter, which Cargo to fetch.
     */
    where: CargoWhereUniqueInput
  }

  /**
   * Cargo findFirst
   */
  export type CargoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter, which Cargo to fetch.
     */
    where?: CargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cargos to fetch.
     */
    orderBy?: CargoOrderByWithRelationInput | CargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cargos.
     */
    cursor?: CargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cargos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cargos.
     */
    distinct?: CargoScalarFieldEnum | CargoScalarFieldEnum[]
  }

  /**
   * Cargo findFirstOrThrow
   */
  export type CargoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter, which Cargo to fetch.
     */
    where?: CargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cargos to fetch.
     */
    orderBy?: CargoOrderByWithRelationInput | CargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cargos.
     */
    cursor?: CargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cargos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cargos.
     */
    distinct?: CargoScalarFieldEnum | CargoScalarFieldEnum[]
  }

  /**
   * Cargo findMany
   */
  export type CargoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter, which Cargos to fetch.
     */
    where?: CargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cargos to fetch.
     */
    orderBy?: CargoOrderByWithRelationInput | CargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cargos.
     */
    cursor?: CargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cargos.
     */
    skip?: number
    distinct?: CargoScalarFieldEnum | CargoScalarFieldEnum[]
  }

  /**
   * Cargo create
   */
  export type CargoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * The data needed to create a Cargo.
     */
    data: XOR<CargoCreateInput, CargoUncheckedCreateInput>
  }

  /**
   * Cargo createMany
   */
  export type CargoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cargos.
     */
    data: CargoCreateManyInput | CargoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cargo createManyAndReturn
   */
  export type CargoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * The data used to create many Cargos.
     */
    data: CargoCreateManyInput | CargoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cargo update
   */
  export type CargoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * The data needed to update a Cargo.
     */
    data: XOR<CargoUpdateInput, CargoUncheckedUpdateInput>
    /**
     * Choose, which Cargo to update.
     */
    where: CargoWhereUniqueInput
  }

  /**
   * Cargo updateMany
   */
  export type CargoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cargos.
     */
    data: XOR<CargoUpdateManyMutationInput, CargoUncheckedUpdateManyInput>
    /**
     * Filter which Cargos to update
     */
    where?: CargoWhereInput
    /**
     * Limit how many Cargos to update.
     */
    limit?: number
  }

  /**
   * Cargo updateManyAndReturn
   */
  export type CargoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * The data used to update Cargos.
     */
    data: XOR<CargoUpdateManyMutationInput, CargoUncheckedUpdateManyInput>
    /**
     * Filter which Cargos to update
     */
    where?: CargoWhereInput
    /**
     * Limit how many Cargos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cargo upsert
   */
  export type CargoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * The filter to search for the Cargo to update in case it exists.
     */
    where: CargoWhereUniqueInput
    /**
     * In case the Cargo found by the `where` argument doesn't exist, create a new Cargo with this data.
     */
    create: XOR<CargoCreateInput, CargoUncheckedCreateInput>
    /**
     * In case the Cargo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CargoUpdateInput, CargoUncheckedUpdateInput>
  }

  /**
   * Cargo delete
   */
  export type CargoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter which Cargo to delete.
     */
    where: CargoWhereUniqueInput
  }

  /**
   * Cargo deleteMany
   */
  export type CargoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cargos to delete
     */
    where?: CargoWhereInput
    /**
     * Limit how many Cargos to delete.
     */
    limit?: number
  }

  /**
   * Cargo.registros
   */
  export type Cargo$registrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
    where?: RegistroWhereInput
    orderBy?: RegistroOrderByWithRelationInput | RegistroOrderByWithRelationInput[]
    cursor?: RegistroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistroScalarFieldEnum | RegistroScalarFieldEnum[]
  }

  /**
   * Cargo without action
   */
  export type CargoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    email: string | null
    nome: string | null
    senha_hash: string | null
    oauth_provider: string | null
    oauth_id: string | null
    criado_em: Date | null
    atualizado_em: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    email: string | null
    nome: string | null
    senha_hash: string | null
    oauth_provider: string | null
    oauth_id: string | null
    criado_em: Date | null
    atualizado_em: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    email: number
    nome: number
    senha_hash: number
    oauth_provider: number
    oauth_id: number
    criado_em: number
    atualizado_em: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    email?: true
    nome?: true
    senha_hash?: true
    oauth_provider?: true
    oauth_id?: true
    criado_em?: true
    atualizado_em?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    email?: true
    nome?: true
    senha_hash?: true
    oauth_provider?: true
    oauth_id?: true
    criado_em?: true
    atualizado_em?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    email?: true
    nome?: true
    senha_hash?: true
    oauth_provider?: true
    oauth_id?: true
    criado_em?: true
    atualizado_em?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    email: string
    nome: string
    senha_hash: string | null
    oauth_provider: string | null
    oauth_id: string | null
    criado_em: Date
    atualizado_em: Date
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nome?: boolean
    senha_hash?: boolean
    oauth_provider?: boolean
    oauth_id?: boolean
    criado_em?: boolean
    atualizado_em?: boolean
    registros?: boolean | Usuario$registrosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nome?: boolean
    senha_hash?: boolean
    oauth_provider?: boolean
    oauth_id?: boolean
    criado_em?: boolean
    atualizado_em?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nome?: boolean
    senha_hash?: boolean
    oauth_provider?: boolean
    oauth_id?: boolean
    criado_em?: boolean
    atualizado_em?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    email?: boolean
    nome?: boolean
    senha_hash?: boolean
    oauth_provider?: boolean
    oauth_id?: boolean
    criado_em?: boolean
    atualizado_em?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "nome" | "senha_hash" | "oauth_provider" | "oauth_id" | "criado_em" | "atualizado_em", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registros?: boolean | Usuario$registrosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      registros: Prisma.$RegistroPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      nome: string
      senha_hash: string | null
      oauth_provider: string | null
      oauth_id: string | null
      criado_em: Date
      atualizado_em: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    registros<T extends Usuario$registrosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$registrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly senha_hash: FieldRef<"Usuario", 'String'>
    readonly oauth_provider: FieldRef<"Usuario", 'String'>
    readonly oauth_id: FieldRef<"Usuario", 'String'>
    readonly criado_em: FieldRef<"Usuario", 'DateTime'>
    readonly atualizado_em: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.registros
   */
  export type Usuario$registrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
    where?: RegistroWhereInput
    orderBy?: RegistroOrderByWithRelationInput | RegistroOrderByWithRelationInput[]
    cursor?: RegistroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistroScalarFieldEnum | RegistroScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Registro
   */

  export type AggregateRegistro = {
    _count: RegistroCountAggregateOutputType | null
    _min: RegistroMinAggregateOutputType | null
    _max: RegistroMaxAggregateOutputType | null
  }

  export type RegistroMinAggregateOutputType = {
    id: string | null
    usuario_id: string | null
    cota: string | null
    inscricao_id: string | null
    participacao: $Enums.Participacao | null
    versao_prova: string | null
    cargo_id: string | null
    criado_em: Date | null
    atualizado_em: Date | null
  }

  export type RegistroMaxAggregateOutputType = {
    id: string | null
    usuario_id: string | null
    cota: string | null
    inscricao_id: string | null
    participacao: $Enums.Participacao | null
    versao_prova: string | null
    cargo_id: string | null
    criado_em: Date | null
    atualizado_em: Date | null
  }

  export type RegistroCountAggregateOutputType = {
    id: number
    usuario_id: number
    cota: number
    respostas: number
    inscricao_id: number
    participacao: number
    versao_prova: number
    cargo_id: number
    criado_em: number
    atualizado_em: number
    _all: number
  }


  export type RegistroMinAggregateInputType = {
    id?: true
    usuario_id?: true
    cota?: true
    inscricao_id?: true
    participacao?: true
    versao_prova?: true
    cargo_id?: true
    criado_em?: true
    atualizado_em?: true
  }

  export type RegistroMaxAggregateInputType = {
    id?: true
    usuario_id?: true
    cota?: true
    inscricao_id?: true
    participacao?: true
    versao_prova?: true
    cargo_id?: true
    criado_em?: true
    atualizado_em?: true
  }

  export type RegistroCountAggregateInputType = {
    id?: true
    usuario_id?: true
    cota?: true
    respostas?: true
    inscricao_id?: true
    participacao?: true
    versao_prova?: true
    cargo_id?: true
    criado_em?: true
    atualizado_em?: true
    _all?: true
  }

  export type RegistroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registro to aggregate.
     */
    where?: RegistroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registros to fetch.
     */
    orderBy?: RegistroOrderByWithRelationInput | RegistroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Registros
    **/
    _count?: true | RegistroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistroMaxAggregateInputType
  }

  export type GetRegistroAggregateType<T extends RegistroAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistro[P]>
      : GetScalarType<T[P], AggregateRegistro[P]>
  }




  export type RegistroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroWhereInput
    orderBy?: RegistroOrderByWithAggregationInput | RegistroOrderByWithAggregationInput[]
    by: RegistroScalarFieldEnum[] | RegistroScalarFieldEnum
    having?: RegistroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistroCountAggregateInputType | true
    _min?: RegistroMinAggregateInputType
    _max?: RegistroMaxAggregateInputType
  }

  export type RegistroGroupByOutputType = {
    id: string
    usuario_id: string
    cota: string
    respostas: string[]
    inscricao_id: string
    participacao: $Enums.Participacao
    versao_prova: string
    cargo_id: string
    criado_em: Date
    atualizado_em: Date
    _count: RegistroCountAggregateOutputType | null
    _min: RegistroMinAggregateOutputType | null
    _max: RegistroMaxAggregateOutputType | null
  }

  type GetRegistroGroupByPayload<T extends RegistroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistroGroupByOutputType[P]>
            : GetScalarType<T[P], RegistroGroupByOutputType[P]>
        }
      >
    >


  export type RegistroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    cota?: boolean
    respostas?: boolean
    inscricao_id?: boolean
    participacao?: boolean
    versao_prova?: boolean
    cargo_id?: boolean
    criado_em?: boolean
    atualizado_em?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    cargo?: boolean | CargoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registro"]>

  export type RegistroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    cota?: boolean
    respostas?: boolean
    inscricao_id?: boolean
    participacao?: boolean
    versao_prova?: boolean
    cargo_id?: boolean
    criado_em?: boolean
    atualizado_em?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    cargo?: boolean | CargoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registro"]>

  export type RegistroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    cota?: boolean
    respostas?: boolean
    inscricao_id?: boolean
    participacao?: boolean
    versao_prova?: boolean
    cargo_id?: boolean
    criado_em?: boolean
    atualizado_em?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    cargo?: boolean | CargoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registro"]>

  export type RegistroSelectScalar = {
    id?: boolean
    usuario_id?: boolean
    cota?: boolean
    respostas?: boolean
    inscricao_id?: boolean
    participacao?: boolean
    versao_prova?: boolean
    cargo_id?: boolean
    criado_em?: boolean
    atualizado_em?: boolean
  }

  export type RegistroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario_id" | "cota" | "respostas" | "inscricao_id" | "participacao" | "versao_prova" | "cargo_id" | "criado_em" | "atualizado_em", ExtArgs["result"]["registro"]>
  export type RegistroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    cargo?: boolean | CargoDefaultArgs<ExtArgs>
  }
  export type RegistroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    cargo?: boolean | CargoDefaultArgs<ExtArgs>
  }
  export type RegistroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    cargo?: boolean | CargoDefaultArgs<ExtArgs>
  }

  export type $RegistroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Registro"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      cargo: Prisma.$CargoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuario_id: string
      cota: string
      respostas: string[]
      inscricao_id: string
      participacao: $Enums.Participacao
      versao_prova: string
      cargo_id: string
      criado_em: Date
      atualizado_em: Date
    }, ExtArgs["result"]["registro"]>
    composites: {}
  }

  type RegistroGetPayload<S extends boolean | null | undefined | RegistroDefaultArgs> = $Result.GetResult<Prisma.$RegistroPayload, S>

  type RegistroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistroCountAggregateInputType | true
    }

  export interface RegistroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Registro'], meta: { name: 'Registro' } }
    /**
     * Find zero or one Registro that matches the filter.
     * @param {RegistroFindUniqueArgs} args - Arguments to find a Registro
     * @example
     * // Get one Registro
     * const registro = await prisma.registro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistroFindUniqueArgs>(args: SelectSubset<T, RegistroFindUniqueArgs<ExtArgs>>): Prisma__RegistroClient<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Registro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistroFindUniqueOrThrowArgs} args - Arguments to find a Registro
     * @example
     * // Get one Registro
     * const registro = await prisma.registro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistroFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistroClient<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroFindFirstArgs} args - Arguments to find a Registro
     * @example
     * // Get one Registro
     * const registro = await prisma.registro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistroFindFirstArgs>(args?: SelectSubset<T, RegistroFindFirstArgs<ExtArgs>>): Prisma__RegistroClient<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroFindFirstOrThrowArgs} args - Arguments to find a Registro
     * @example
     * // Get one Registro
     * const registro = await prisma.registro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistroFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistroFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistroClient<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Registros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Registros
     * const registros = await prisma.registro.findMany()
     * 
     * // Get first 10 Registros
     * const registros = await prisma.registro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registroWithIdOnly = await prisma.registro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistroFindManyArgs>(args?: SelectSubset<T, RegistroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Registro.
     * @param {RegistroCreateArgs} args - Arguments to create a Registro.
     * @example
     * // Create one Registro
     * const Registro = await prisma.registro.create({
     *   data: {
     *     // ... data to create a Registro
     *   }
     * })
     * 
     */
    create<T extends RegistroCreateArgs>(args: SelectSubset<T, RegistroCreateArgs<ExtArgs>>): Prisma__RegistroClient<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Registros.
     * @param {RegistroCreateManyArgs} args - Arguments to create many Registros.
     * @example
     * // Create many Registros
     * const registro = await prisma.registro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistroCreateManyArgs>(args?: SelectSubset<T, RegistroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Registros and returns the data saved in the database.
     * @param {RegistroCreateManyAndReturnArgs} args - Arguments to create many Registros.
     * @example
     * // Create many Registros
     * const registro = await prisma.registro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Registros and only return the `id`
     * const registroWithIdOnly = await prisma.registro.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegistroCreateManyAndReturnArgs>(args?: SelectSubset<T, RegistroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Registro.
     * @param {RegistroDeleteArgs} args - Arguments to delete one Registro.
     * @example
     * // Delete one Registro
     * const Registro = await prisma.registro.delete({
     *   where: {
     *     // ... filter to delete one Registro
     *   }
     * })
     * 
     */
    delete<T extends RegistroDeleteArgs>(args: SelectSubset<T, RegistroDeleteArgs<ExtArgs>>): Prisma__RegistroClient<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Registro.
     * @param {RegistroUpdateArgs} args - Arguments to update one Registro.
     * @example
     * // Update one Registro
     * const registro = await prisma.registro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistroUpdateArgs>(args: SelectSubset<T, RegistroUpdateArgs<ExtArgs>>): Prisma__RegistroClient<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Registros.
     * @param {RegistroDeleteManyArgs} args - Arguments to filter Registros to delete.
     * @example
     * // Delete a few Registros
     * const { count } = await prisma.registro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistroDeleteManyArgs>(args?: SelectSubset<T, RegistroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Registros
     * const registro = await prisma.registro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistroUpdateManyArgs>(args: SelectSubset<T, RegistroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registros and returns the data updated in the database.
     * @param {RegistroUpdateManyAndReturnArgs} args - Arguments to update many Registros.
     * @example
     * // Update many Registros
     * const registro = await prisma.registro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Registros and only return the `id`
     * const registroWithIdOnly = await prisma.registro.updateManyAndReturn({
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
    updateManyAndReturn<T extends RegistroUpdateManyAndReturnArgs>(args: SelectSubset<T, RegistroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Registro.
     * @param {RegistroUpsertArgs} args - Arguments to update or create a Registro.
     * @example
     * // Update or create a Registro
     * const registro = await prisma.registro.upsert({
     *   create: {
     *     // ... data to create a Registro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Registro we want to update
     *   }
     * })
     */
    upsert<T extends RegistroUpsertArgs>(args: SelectSubset<T, RegistroUpsertArgs<ExtArgs>>): Prisma__RegistroClient<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Registros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroCountArgs} args - Arguments to filter Registros to count.
     * @example
     * // Count the number of Registros
     * const count = await prisma.registro.count({
     *   where: {
     *     // ... the filter for the Registros we want to count
     *   }
     * })
    **/
    count<T extends RegistroCountArgs>(
      args?: Subset<T, RegistroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Registro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegistroAggregateArgs>(args: Subset<T, RegistroAggregateArgs>): Prisma.PrismaPromise<GetRegistroAggregateType<T>>

    /**
     * Group by Registro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroGroupByArgs} args - Group by arguments.
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
      T extends RegistroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistroGroupByArgs['orderBy'] }
        : { orderBy?: RegistroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegistroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Registro model
   */
  readonly fields: RegistroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Registro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cargo<T extends CargoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CargoDefaultArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Registro model
   */
  interface RegistroFieldRefs {
    readonly id: FieldRef<"Registro", 'String'>
    readonly usuario_id: FieldRef<"Registro", 'String'>
    readonly cota: FieldRef<"Registro", 'String'>
    readonly respostas: FieldRef<"Registro", 'String[]'>
    readonly inscricao_id: FieldRef<"Registro", 'String'>
    readonly participacao: FieldRef<"Registro", 'Participacao'>
    readonly versao_prova: FieldRef<"Registro", 'String'>
    readonly cargo_id: FieldRef<"Registro", 'String'>
    readonly criado_em: FieldRef<"Registro", 'DateTime'>
    readonly atualizado_em: FieldRef<"Registro", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Registro findUnique
   */
  export type RegistroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
    /**
     * Filter, which Registro to fetch.
     */
    where: RegistroWhereUniqueInput
  }

  /**
   * Registro findUniqueOrThrow
   */
  export type RegistroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
    /**
     * Filter, which Registro to fetch.
     */
    where: RegistroWhereUniqueInput
  }

  /**
   * Registro findFirst
   */
  export type RegistroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
    /**
     * Filter, which Registro to fetch.
     */
    where?: RegistroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registros to fetch.
     */
    orderBy?: RegistroOrderByWithRelationInput | RegistroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registros.
     */
    cursor?: RegistroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registros.
     */
    distinct?: RegistroScalarFieldEnum | RegistroScalarFieldEnum[]
  }

  /**
   * Registro findFirstOrThrow
   */
  export type RegistroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
    /**
     * Filter, which Registro to fetch.
     */
    where?: RegistroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registros to fetch.
     */
    orderBy?: RegistroOrderByWithRelationInput | RegistroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registros.
     */
    cursor?: RegistroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registros.
     */
    distinct?: RegistroScalarFieldEnum | RegistroScalarFieldEnum[]
  }

  /**
   * Registro findMany
   */
  export type RegistroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
    /**
     * Filter, which Registros to fetch.
     */
    where?: RegistroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registros to fetch.
     */
    orderBy?: RegistroOrderByWithRelationInput | RegistroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Registros.
     */
    cursor?: RegistroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registros.
     */
    skip?: number
    distinct?: RegistroScalarFieldEnum | RegistroScalarFieldEnum[]
  }

  /**
   * Registro create
   */
  export type RegistroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
    /**
     * The data needed to create a Registro.
     */
    data: XOR<RegistroCreateInput, RegistroUncheckedCreateInput>
  }

  /**
   * Registro createMany
   */
  export type RegistroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Registros.
     */
    data: RegistroCreateManyInput | RegistroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Registro createManyAndReturn
   */
  export type RegistroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * The data used to create many Registros.
     */
    data: RegistroCreateManyInput | RegistroCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Registro update
   */
  export type RegistroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
    /**
     * The data needed to update a Registro.
     */
    data: XOR<RegistroUpdateInput, RegistroUncheckedUpdateInput>
    /**
     * Choose, which Registro to update.
     */
    where: RegistroWhereUniqueInput
  }

  /**
   * Registro updateMany
   */
  export type RegistroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Registros.
     */
    data: XOR<RegistroUpdateManyMutationInput, RegistroUncheckedUpdateManyInput>
    /**
     * Filter which Registros to update
     */
    where?: RegistroWhereInput
    /**
     * Limit how many Registros to update.
     */
    limit?: number
  }

  /**
   * Registro updateManyAndReturn
   */
  export type RegistroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * The data used to update Registros.
     */
    data: XOR<RegistroUpdateManyMutationInput, RegistroUncheckedUpdateManyInput>
    /**
     * Filter which Registros to update
     */
    where?: RegistroWhereInput
    /**
     * Limit how many Registros to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Registro upsert
   */
  export type RegistroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
    /**
     * The filter to search for the Registro to update in case it exists.
     */
    where: RegistroWhereUniqueInput
    /**
     * In case the Registro found by the `where` argument doesn't exist, create a new Registro with this data.
     */
    create: XOR<RegistroCreateInput, RegistroUncheckedCreateInput>
    /**
     * In case the Registro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistroUpdateInput, RegistroUncheckedUpdateInput>
  }

  /**
   * Registro delete
   */
  export type RegistroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
    /**
     * Filter which Registro to delete.
     */
    where: RegistroWhereUniqueInput
  }

  /**
   * Registro deleteMany
   */
  export type RegistroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registros to delete
     */
    where?: RegistroWhereInput
    /**
     * Limit how many Registros to delete.
     */
    limit?: number
  }

  /**
   * Registro without action
   */
  export type RegistroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
  }


  /**
   * Model Banca
   */

  export type AggregateBanca = {
    _count: BancaCountAggregateOutputType | null
    _min: BancaMinAggregateOutputType | null
    _max: BancaMaxAggregateOutputType | null
  }

  export type BancaMinAggregateOutputType = {
    id: string | null
    nome: string | null
    imagem: string | null
  }

  export type BancaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    imagem: string | null
  }

  export type BancaCountAggregateOutputType = {
    id: number
    nome: number
    imagem: number
    _all: number
  }


  export type BancaMinAggregateInputType = {
    id?: true
    nome?: true
    imagem?: true
  }

  export type BancaMaxAggregateInputType = {
    id?: true
    nome?: true
    imagem?: true
  }

  export type BancaCountAggregateInputType = {
    id?: true
    nome?: true
    imagem?: true
    _all?: true
  }

  export type BancaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banca to aggregate.
     */
    where?: BancaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bancas to fetch.
     */
    orderBy?: BancaOrderByWithRelationInput | BancaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BancaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bancas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bancas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bancas
    **/
    _count?: true | BancaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BancaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BancaMaxAggregateInputType
  }

  export type GetBancaAggregateType<T extends BancaAggregateArgs> = {
        [P in keyof T & keyof AggregateBanca]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBanca[P]>
      : GetScalarType<T[P], AggregateBanca[P]>
  }




  export type BancaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BancaWhereInput
    orderBy?: BancaOrderByWithAggregationInput | BancaOrderByWithAggregationInput[]
    by: BancaScalarFieldEnum[] | BancaScalarFieldEnum
    having?: BancaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BancaCountAggregateInputType | true
    _min?: BancaMinAggregateInputType
    _max?: BancaMaxAggregateInputType
  }

  export type BancaGroupByOutputType = {
    id: string
    nome: string
    imagem: string | null
    _count: BancaCountAggregateOutputType | null
    _min: BancaMinAggregateOutputType | null
    _max: BancaMaxAggregateOutputType | null
  }

  type GetBancaGroupByPayload<T extends BancaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BancaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BancaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BancaGroupByOutputType[P]>
            : GetScalarType<T[P], BancaGroupByOutputType[P]>
        }
      >
    >


  export type BancaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    imagem?: boolean
    concursos?: boolean | Banca$concursosArgs<ExtArgs>
    _count?: boolean | BancaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["banca"]>

  export type BancaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    imagem?: boolean
  }, ExtArgs["result"]["banca"]>

  export type BancaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    imagem?: boolean
  }, ExtArgs["result"]["banca"]>

  export type BancaSelectScalar = {
    id?: boolean
    nome?: boolean
    imagem?: boolean
  }

  export type BancaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "imagem", ExtArgs["result"]["banca"]>
  export type BancaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    concursos?: boolean | Banca$concursosArgs<ExtArgs>
    _count?: boolean | BancaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BancaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BancaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BancaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Banca"
    objects: {
      concursos: Prisma.$ConcursoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      imagem: string | null
    }, ExtArgs["result"]["banca"]>
    composites: {}
  }

  type BancaGetPayload<S extends boolean | null | undefined | BancaDefaultArgs> = $Result.GetResult<Prisma.$BancaPayload, S>

  type BancaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BancaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BancaCountAggregateInputType | true
    }

  export interface BancaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Banca'], meta: { name: 'Banca' } }
    /**
     * Find zero or one Banca that matches the filter.
     * @param {BancaFindUniqueArgs} args - Arguments to find a Banca
     * @example
     * // Get one Banca
     * const banca = await prisma.banca.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BancaFindUniqueArgs>(args: SelectSubset<T, BancaFindUniqueArgs<ExtArgs>>): Prisma__BancaClient<$Result.GetResult<Prisma.$BancaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Banca that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BancaFindUniqueOrThrowArgs} args - Arguments to find a Banca
     * @example
     * // Get one Banca
     * const banca = await prisma.banca.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BancaFindUniqueOrThrowArgs>(args: SelectSubset<T, BancaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BancaClient<$Result.GetResult<Prisma.$BancaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banca that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancaFindFirstArgs} args - Arguments to find a Banca
     * @example
     * // Get one Banca
     * const banca = await prisma.banca.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BancaFindFirstArgs>(args?: SelectSubset<T, BancaFindFirstArgs<ExtArgs>>): Prisma__BancaClient<$Result.GetResult<Prisma.$BancaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banca that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancaFindFirstOrThrowArgs} args - Arguments to find a Banca
     * @example
     * // Get one Banca
     * const banca = await prisma.banca.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BancaFindFirstOrThrowArgs>(args?: SelectSubset<T, BancaFindFirstOrThrowArgs<ExtArgs>>): Prisma__BancaClient<$Result.GetResult<Prisma.$BancaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bancas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bancas
     * const bancas = await prisma.banca.findMany()
     * 
     * // Get first 10 Bancas
     * const bancas = await prisma.banca.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bancaWithIdOnly = await prisma.banca.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BancaFindManyArgs>(args?: SelectSubset<T, BancaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BancaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Banca.
     * @param {BancaCreateArgs} args - Arguments to create a Banca.
     * @example
     * // Create one Banca
     * const Banca = await prisma.banca.create({
     *   data: {
     *     // ... data to create a Banca
     *   }
     * })
     * 
     */
    create<T extends BancaCreateArgs>(args: SelectSubset<T, BancaCreateArgs<ExtArgs>>): Prisma__BancaClient<$Result.GetResult<Prisma.$BancaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bancas.
     * @param {BancaCreateManyArgs} args - Arguments to create many Bancas.
     * @example
     * // Create many Bancas
     * const banca = await prisma.banca.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BancaCreateManyArgs>(args?: SelectSubset<T, BancaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bancas and returns the data saved in the database.
     * @param {BancaCreateManyAndReturnArgs} args - Arguments to create many Bancas.
     * @example
     * // Create many Bancas
     * const banca = await prisma.banca.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bancas and only return the `id`
     * const bancaWithIdOnly = await prisma.banca.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BancaCreateManyAndReturnArgs>(args?: SelectSubset<T, BancaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BancaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Banca.
     * @param {BancaDeleteArgs} args - Arguments to delete one Banca.
     * @example
     * // Delete one Banca
     * const Banca = await prisma.banca.delete({
     *   where: {
     *     // ... filter to delete one Banca
     *   }
     * })
     * 
     */
    delete<T extends BancaDeleteArgs>(args: SelectSubset<T, BancaDeleteArgs<ExtArgs>>): Prisma__BancaClient<$Result.GetResult<Prisma.$BancaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Banca.
     * @param {BancaUpdateArgs} args - Arguments to update one Banca.
     * @example
     * // Update one Banca
     * const banca = await prisma.banca.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BancaUpdateArgs>(args: SelectSubset<T, BancaUpdateArgs<ExtArgs>>): Prisma__BancaClient<$Result.GetResult<Prisma.$BancaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bancas.
     * @param {BancaDeleteManyArgs} args - Arguments to filter Bancas to delete.
     * @example
     * // Delete a few Bancas
     * const { count } = await prisma.banca.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BancaDeleteManyArgs>(args?: SelectSubset<T, BancaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bancas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bancas
     * const banca = await prisma.banca.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BancaUpdateManyArgs>(args: SelectSubset<T, BancaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bancas and returns the data updated in the database.
     * @param {BancaUpdateManyAndReturnArgs} args - Arguments to update many Bancas.
     * @example
     * // Update many Bancas
     * const banca = await prisma.banca.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bancas and only return the `id`
     * const bancaWithIdOnly = await prisma.banca.updateManyAndReturn({
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
    updateManyAndReturn<T extends BancaUpdateManyAndReturnArgs>(args: SelectSubset<T, BancaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BancaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Banca.
     * @param {BancaUpsertArgs} args - Arguments to update or create a Banca.
     * @example
     * // Update or create a Banca
     * const banca = await prisma.banca.upsert({
     *   create: {
     *     // ... data to create a Banca
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Banca we want to update
     *   }
     * })
     */
    upsert<T extends BancaUpsertArgs>(args: SelectSubset<T, BancaUpsertArgs<ExtArgs>>): Prisma__BancaClient<$Result.GetResult<Prisma.$BancaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bancas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancaCountArgs} args - Arguments to filter Bancas to count.
     * @example
     * // Count the number of Bancas
     * const count = await prisma.banca.count({
     *   where: {
     *     // ... the filter for the Bancas we want to count
     *   }
     * })
    **/
    count<T extends BancaCountArgs>(
      args?: Subset<T, BancaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BancaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Banca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BancaAggregateArgs>(args: Subset<T, BancaAggregateArgs>): Prisma.PrismaPromise<GetBancaAggregateType<T>>

    /**
     * Group by Banca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancaGroupByArgs} args - Group by arguments.
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
      T extends BancaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BancaGroupByArgs['orderBy'] }
        : { orderBy?: BancaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BancaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBancaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Banca model
   */
  readonly fields: BancaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Banca.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BancaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    concursos<T extends Banca$concursosArgs<ExtArgs> = {}>(args?: Subset<T, Banca$concursosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConcursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Banca model
   */
  interface BancaFieldRefs {
    readonly id: FieldRef<"Banca", 'String'>
    readonly nome: FieldRef<"Banca", 'String'>
    readonly imagem: FieldRef<"Banca", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Banca findUnique
   */
  export type BancaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banca
     */
    select?: BancaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banca
     */
    omit?: BancaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancaInclude<ExtArgs> | null
    /**
     * Filter, which Banca to fetch.
     */
    where: BancaWhereUniqueInput
  }

  /**
   * Banca findUniqueOrThrow
   */
  export type BancaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banca
     */
    select?: BancaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banca
     */
    omit?: BancaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancaInclude<ExtArgs> | null
    /**
     * Filter, which Banca to fetch.
     */
    where: BancaWhereUniqueInput
  }

  /**
   * Banca findFirst
   */
  export type BancaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banca
     */
    select?: BancaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banca
     */
    omit?: BancaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancaInclude<ExtArgs> | null
    /**
     * Filter, which Banca to fetch.
     */
    where?: BancaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bancas to fetch.
     */
    orderBy?: BancaOrderByWithRelationInput | BancaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bancas.
     */
    cursor?: BancaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bancas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bancas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bancas.
     */
    distinct?: BancaScalarFieldEnum | BancaScalarFieldEnum[]
  }

  /**
   * Banca findFirstOrThrow
   */
  export type BancaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banca
     */
    select?: BancaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banca
     */
    omit?: BancaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancaInclude<ExtArgs> | null
    /**
     * Filter, which Banca to fetch.
     */
    where?: BancaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bancas to fetch.
     */
    orderBy?: BancaOrderByWithRelationInput | BancaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bancas.
     */
    cursor?: BancaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bancas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bancas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bancas.
     */
    distinct?: BancaScalarFieldEnum | BancaScalarFieldEnum[]
  }

  /**
   * Banca findMany
   */
  export type BancaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banca
     */
    select?: BancaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banca
     */
    omit?: BancaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancaInclude<ExtArgs> | null
    /**
     * Filter, which Bancas to fetch.
     */
    where?: BancaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bancas to fetch.
     */
    orderBy?: BancaOrderByWithRelationInput | BancaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bancas.
     */
    cursor?: BancaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bancas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bancas.
     */
    skip?: number
    distinct?: BancaScalarFieldEnum | BancaScalarFieldEnum[]
  }

  /**
   * Banca create
   */
  export type BancaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banca
     */
    select?: BancaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banca
     */
    omit?: BancaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancaInclude<ExtArgs> | null
    /**
     * The data needed to create a Banca.
     */
    data: XOR<BancaCreateInput, BancaUncheckedCreateInput>
  }

  /**
   * Banca createMany
   */
  export type BancaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bancas.
     */
    data: BancaCreateManyInput | BancaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Banca createManyAndReturn
   */
  export type BancaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banca
     */
    select?: BancaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Banca
     */
    omit?: BancaOmit<ExtArgs> | null
    /**
     * The data used to create many Bancas.
     */
    data: BancaCreateManyInput | BancaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Banca update
   */
  export type BancaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banca
     */
    select?: BancaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banca
     */
    omit?: BancaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancaInclude<ExtArgs> | null
    /**
     * The data needed to update a Banca.
     */
    data: XOR<BancaUpdateInput, BancaUncheckedUpdateInput>
    /**
     * Choose, which Banca to update.
     */
    where: BancaWhereUniqueInput
  }

  /**
   * Banca updateMany
   */
  export type BancaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bancas.
     */
    data: XOR<BancaUpdateManyMutationInput, BancaUncheckedUpdateManyInput>
    /**
     * Filter which Bancas to update
     */
    where?: BancaWhereInput
    /**
     * Limit how many Bancas to update.
     */
    limit?: number
  }

  /**
   * Banca updateManyAndReturn
   */
  export type BancaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banca
     */
    select?: BancaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Banca
     */
    omit?: BancaOmit<ExtArgs> | null
    /**
     * The data used to update Bancas.
     */
    data: XOR<BancaUpdateManyMutationInput, BancaUncheckedUpdateManyInput>
    /**
     * Filter which Bancas to update
     */
    where?: BancaWhereInput
    /**
     * Limit how many Bancas to update.
     */
    limit?: number
  }

  /**
   * Banca upsert
   */
  export type BancaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banca
     */
    select?: BancaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banca
     */
    omit?: BancaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancaInclude<ExtArgs> | null
    /**
     * The filter to search for the Banca to update in case it exists.
     */
    where: BancaWhereUniqueInput
    /**
     * In case the Banca found by the `where` argument doesn't exist, create a new Banca with this data.
     */
    create: XOR<BancaCreateInput, BancaUncheckedCreateInput>
    /**
     * In case the Banca was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BancaUpdateInput, BancaUncheckedUpdateInput>
  }

  /**
   * Banca delete
   */
  export type BancaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banca
     */
    select?: BancaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banca
     */
    omit?: BancaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancaInclude<ExtArgs> | null
    /**
     * Filter which Banca to delete.
     */
    where: BancaWhereUniqueInput
  }

  /**
   * Banca deleteMany
   */
  export type BancaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bancas to delete
     */
    where?: BancaWhereInput
    /**
     * Limit how many Bancas to delete.
     */
    limit?: number
  }

  /**
   * Banca.concursos
   */
  export type Banca$concursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concurso
     */
    select?: ConcursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Concurso
     */
    omit?: ConcursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcursoInclude<ExtArgs> | null
    where?: ConcursoWhereInput
    orderBy?: ConcursoOrderByWithRelationInput | ConcursoOrderByWithRelationInput[]
    cursor?: ConcursoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConcursoScalarFieldEnum | ConcursoScalarFieldEnum[]
  }

  /**
   * Banca without action
   */
  export type BancaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banca
     */
    select?: BancaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banca
     */
    omit?: BancaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancaInclude<ExtArgs> | null
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


  export const ConcursoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    data_publicacao: 'data_publicacao',
    data_inscricao: 'data_inscricao',
    data_prova: 'data_prova',
    data_gabarito: 'data_gabarito',
    data_resultado: 'data_resultado',
    link_edital: 'link_edital',
    link_pagina: 'link_pagina',
    orgao: 'orgao',
    fase: 'fase',
    banca_id: 'banca_id',
    cotas: 'cotas',
    versoes_prova: 'versoes_prova',
    criado_em: 'criado_em',
    atualizado_em: 'atualizado_em'
  };

  export type ConcursoScalarFieldEnum = (typeof ConcursoScalarFieldEnum)[keyof typeof ConcursoScalarFieldEnum]


  export const CargoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    total_vagas: 'total_vagas',
    vagas_cotas: 'vagas_cotas',
    concurso_id: 'concurso_id',
    estado: 'estado',
    cidade: 'cidade',
    regiao: 'regiao',
    materias: 'materias',
    criado_em: 'criado_em'
  };

  export type CargoScalarFieldEnum = (typeof CargoScalarFieldEnum)[keyof typeof CargoScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    email: 'email',
    nome: 'nome',
    senha_hash: 'senha_hash',
    oauth_provider: 'oauth_provider',
    oauth_id: 'oauth_id',
    criado_em: 'criado_em',
    atualizado_em: 'atualizado_em'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const RegistroScalarFieldEnum: {
    id: 'id',
    usuario_id: 'usuario_id',
    cota: 'cota',
    respostas: 'respostas',
    inscricao_id: 'inscricao_id',
    participacao: 'participacao',
    versao_prova: 'versao_prova',
    cargo_id: 'cargo_id',
    criado_em: 'criado_em',
    atualizado_em: 'atualizado_em'
  };

  export type RegistroScalarFieldEnum = (typeof RegistroScalarFieldEnum)[keyof typeof RegistroScalarFieldEnum]


  export const BancaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    imagem: 'imagem'
  };

  export type BancaScalarFieldEnum = (typeof BancaScalarFieldEnum)[keyof typeof BancaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Fase'
   */
  export type EnumFaseFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Fase'>
    


  /**
   * Reference to a field of type 'Fase[]'
   */
  export type ListEnumFaseFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Fase[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Json[]'
   */
  export type ListJsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json[]'>
    


  /**
   * Reference to a field of type 'Participacao'
   */
  export type EnumParticipacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Participacao'>
    


  /**
   * Reference to a field of type 'Participacao[]'
   */
  export type ListEnumParticipacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Participacao[]'>
    


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


  export type ConcursoWhereInput = {
    AND?: ConcursoWhereInput | ConcursoWhereInput[]
    OR?: ConcursoWhereInput[]
    NOT?: ConcursoWhereInput | ConcursoWhereInput[]
    id?: StringFilter<"Concurso"> | string
    nome?: StringFilter<"Concurso"> | string
    data_publicacao?: DateTimeNullableFilter<"Concurso"> | Date | string | null
    data_inscricao?: DateTimeNullableFilter<"Concurso"> | Date | string | null
    data_prova?: DateTimeNullableFilter<"Concurso"> | Date | string | null
    data_gabarito?: DateTimeNullableFilter<"Concurso"> | Date | string | null
    data_resultado?: DateTimeNullableFilter<"Concurso"> | Date | string | null
    link_edital?: StringNullableFilter<"Concurso"> | string | null
    link_pagina?: StringNullableFilter<"Concurso"> | string | null
    orgao?: StringFilter<"Concurso"> | string
    fase?: EnumFaseFilter<"Concurso"> | $Enums.Fase
    banca_id?: StringFilter<"Concurso"> | string
    cotas?: StringNullableListFilter<"Concurso">
    versoes_prova?: StringNullableListFilter<"Concurso">
    criado_em?: DateTimeFilter<"Concurso"> | Date | string
    atualizado_em?: DateTimeFilter<"Concurso"> | Date | string
    banca?: XOR<BancaScalarRelationFilter, BancaWhereInput>
    cargos?: CargoListRelationFilter
  }

  export type ConcursoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    data_publicacao?: SortOrderInput | SortOrder
    data_inscricao?: SortOrderInput | SortOrder
    data_prova?: SortOrderInput | SortOrder
    data_gabarito?: SortOrderInput | SortOrder
    data_resultado?: SortOrderInput | SortOrder
    link_edital?: SortOrderInput | SortOrder
    link_pagina?: SortOrderInput | SortOrder
    orgao?: SortOrder
    fase?: SortOrder
    banca_id?: SortOrder
    cotas?: SortOrder
    versoes_prova?: SortOrder
    criado_em?: SortOrder
    atualizado_em?: SortOrder
    banca?: BancaOrderByWithRelationInput
    cargos?: CargoOrderByRelationAggregateInput
  }

  export type ConcursoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConcursoWhereInput | ConcursoWhereInput[]
    OR?: ConcursoWhereInput[]
    NOT?: ConcursoWhereInput | ConcursoWhereInput[]
    nome?: StringFilter<"Concurso"> | string
    data_publicacao?: DateTimeNullableFilter<"Concurso"> | Date | string | null
    data_inscricao?: DateTimeNullableFilter<"Concurso"> | Date | string | null
    data_prova?: DateTimeNullableFilter<"Concurso"> | Date | string | null
    data_gabarito?: DateTimeNullableFilter<"Concurso"> | Date | string | null
    data_resultado?: DateTimeNullableFilter<"Concurso"> | Date | string | null
    link_edital?: StringNullableFilter<"Concurso"> | string | null
    link_pagina?: StringNullableFilter<"Concurso"> | string | null
    orgao?: StringFilter<"Concurso"> | string
    fase?: EnumFaseFilter<"Concurso"> | $Enums.Fase
    banca_id?: StringFilter<"Concurso"> | string
    cotas?: StringNullableListFilter<"Concurso">
    versoes_prova?: StringNullableListFilter<"Concurso">
    criado_em?: DateTimeFilter<"Concurso"> | Date | string
    atualizado_em?: DateTimeFilter<"Concurso"> | Date | string
    banca?: XOR<BancaScalarRelationFilter, BancaWhereInput>
    cargos?: CargoListRelationFilter
  }, "id">

  export type ConcursoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    data_publicacao?: SortOrderInput | SortOrder
    data_inscricao?: SortOrderInput | SortOrder
    data_prova?: SortOrderInput | SortOrder
    data_gabarito?: SortOrderInput | SortOrder
    data_resultado?: SortOrderInput | SortOrder
    link_edital?: SortOrderInput | SortOrder
    link_pagina?: SortOrderInput | SortOrder
    orgao?: SortOrder
    fase?: SortOrder
    banca_id?: SortOrder
    cotas?: SortOrder
    versoes_prova?: SortOrder
    criado_em?: SortOrder
    atualizado_em?: SortOrder
    _count?: ConcursoCountOrderByAggregateInput
    _max?: ConcursoMaxOrderByAggregateInput
    _min?: ConcursoMinOrderByAggregateInput
  }

  export type ConcursoScalarWhereWithAggregatesInput = {
    AND?: ConcursoScalarWhereWithAggregatesInput | ConcursoScalarWhereWithAggregatesInput[]
    OR?: ConcursoScalarWhereWithAggregatesInput[]
    NOT?: ConcursoScalarWhereWithAggregatesInput | ConcursoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Concurso"> | string
    nome?: StringWithAggregatesFilter<"Concurso"> | string
    data_publicacao?: DateTimeNullableWithAggregatesFilter<"Concurso"> | Date | string | null
    data_inscricao?: DateTimeNullableWithAggregatesFilter<"Concurso"> | Date | string | null
    data_prova?: DateTimeNullableWithAggregatesFilter<"Concurso"> | Date | string | null
    data_gabarito?: DateTimeNullableWithAggregatesFilter<"Concurso"> | Date | string | null
    data_resultado?: DateTimeNullableWithAggregatesFilter<"Concurso"> | Date | string | null
    link_edital?: StringNullableWithAggregatesFilter<"Concurso"> | string | null
    link_pagina?: StringNullableWithAggregatesFilter<"Concurso"> | string | null
    orgao?: StringWithAggregatesFilter<"Concurso"> | string
    fase?: EnumFaseWithAggregatesFilter<"Concurso"> | $Enums.Fase
    banca_id?: StringWithAggregatesFilter<"Concurso"> | string
    cotas?: StringNullableListFilter<"Concurso">
    versoes_prova?: StringNullableListFilter<"Concurso">
    criado_em?: DateTimeWithAggregatesFilter<"Concurso"> | Date | string
    atualizado_em?: DateTimeWithAggregatesFilter<"Concurso"> | Date | string
  }

  export type CargoWhereInput = {
    AND?: CargoWhereInput | CargoWhereInput[]
    OR?: CargoWhereInput[]
    NOT?: CargoWhereInput | CargoWhereInput[]
    id?: StringFilter<"Cargo"> | string
    nome?: StringFilter<"Cargo"> | string
    total_vagas?: IntFilter<"Cargo"> | number
    vagas_cotas?: JsonFilter<"Cargo">
    concurso_id?: StringFilter<"Cargo"> | string
    estado?: StringFilter<"Cargo"> | string
    cidade?: StringFilter<"Cargo"> | string
    regiao?: StringFilter<"Cargo"> | string
    materias?: JsonNullableListFilter<"Cargo">
    criado_em?: DateTimeFilter<"Cargo"> | Date | string
    concurso?: XOR<ConcursoScalarRelationFilter, ConcursoWhereInput>
    registros?: RegistroListRelationFilter
  }

  export type CargoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    total_vagas?: SortOrder
    vagas_cotas?: SortOrder
    concurso_id?: SortOrder
    estado?: SortOrder
    cidade?: SortOrder
    regiao?: SortOrder
    materias?: SortOrder
    criado_em?: SortOrder
    concurso?: ConcursoOrderByWithRelationInput
    registros?: RegistroOrderByRelationAggregateInput
  }

  export type CargoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CargoWhereInput | CargoWhereInput[]
    OR?: CargoWhereInput[]
    NOT?: CargoWhereInput | CargoWhereInput[]
    nome?: StringFilter<"Cargo"> | string
    total_vagas?: IntFilter<"Cargo"> | number
    vagas_cotas?: JsonFilter<"Cargo">
    concurso_id?: StringFilter<"Cargo"> | string
    estado?: StringFilter<"Cargo"> | string
    cidade?: StringFilter<"Cargo"> | string
    regiao?: StringFilter<"Cargo"> | string
    materias?: JsonNullableListFilter<"Cargo">
    criado_em?: DateTimeFilter<"Cargo"> | Date | string
    concurso?: XOR<ConcursoScalarRelationFilter, ConcursoWhereInput>
    registros?: RegistroListRelationFilter
  }, "id">

  export type CargoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    total_vagas?: SortOrder
    vagas_cotas?: SortOrder
    concurso_id?: SortOrder
    estado?: SortOrder
    cidade?: SortOrder
    regiao?: SortOrder
    materias?: SortOrder
    criado_em?: SortOrder
    _count?: CargoCountOrderByAggregateInput
    _avg?: CargoAvgOrderByAggregateInput
    _max?: CargoMaxOrderByAggregateInput
    _min?: CargoMinOrderByAggregateInput
    _sum?: CargoSumOrderByAggregateInput
  }

  export type CargoScalarWhereWithAggregatesInput = {
    AND?: CargoScalarWhereWithAggregatesInput | CargoScalarWhereWithAggregatesInput[]
    OR?: CargoScalarWhereWithAggregatesInput[]
    NOT?: CargoScalarWhereWithAggregatesInput | CargoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cargo"> | string
    nome?: StringWithAggregatesFilter<"Cargo"> | string
    total_vagas?: IntWithAggregatesFilter<"Cargo"> | number
    vagas_cotas?: JsonWithAggregatesFilter<"Cargo">
    concurso_id?: StringWithAggregatesFilter<"Cargo"> | string
    estado?: StringWithAggregatesFilter<"Cargo"> | string
    cidade?: StringWithAggregatesFilter<"Cargo"> | string
    regiao?: StringWithAggregatesFilter<"Cargo"> | string
    materias?: JsonNullableListFilter<"Cargo">
    criado_em?: DateTimeWithAggregatesFilter<"Cargo"> | Date | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    senha_hash?: StringNullableFilter<"Usuario"> | string | null
    oauth_provider?: StringNullableFilter<"Usuario"> | string | null
    oauth_id?: StringNullableFilter<"Usuario"> | string | null
    criado_em?: DateTimeFilter<"Usuario"> | Date | string
    atualizado_em?: DateTimeFilter<"Usuario"> | Date | string
    registros?: RegistroListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha_hash?: SortOrderInput | SortOrder
    oauth_provider?: SortOrderInput | SortOrder
    oauth_id?: SortOrderInput | SortOrder
    criado_em?: SortOrder
    atualizado_em?: SortOrder
    registros?: RegistroOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    oauth_provider_oauth_id?: UsuarioOauth_providerOauth_idCompoundUniqueInput
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha_hash?: StringNullableFilter<"Usuario"> | string | null
    oauth_provider?: StringNullableFilter<"Usuario"> | string | null
    oauth_id?: StringNullableFilter<"Usuario"> | string | null
    criado_em?: DateTimeFilter<"Usuario"> | Date | string
    atualizado_em?: DateTimeFilter<"Usuario"> | Date | string
    registros?: RegistroListRelationFilter
  }, "id" | "email" | "oauth_provider_oauth_id">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha_hash?: SortOrderInput | SortOrder
    oauth_provider?: SortOrderInput | SortOrder
    oauth_id?: SortOrderInput | SortOrder
    criado_em?: SortOrder
    atualizado_em?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    senha_hash?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    oauth_provider?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    oauth_id?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    criado_em?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    atualizado_em?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type RegistroWhereInput = {
    AND?: RegistroWhereInput | RegistroWhereInput[]
    OR?: RegistroWhereInput[]
    NOT?: RegistroWhereInput | RegistroWhereInput[]
    id?: StringFilter<"Registro"> | string
    usuario_id?: StringFilter<"Registro"> | string
    cota?: StringFilter<"Registro"> | string
    respostas?: StringNullableListFilter<"Registro">
    inscricao_id?: StringFilter<"Registro"> | string
    participacao?: EnumParticipacaoFilter<"Registro"> | $Enums.Participacao
    versao_prova?: StringFilter<"Registro"> | string
    cargo_id?: StringFilter<"Registro"> | string
    criado_em?: DateTimeFilter<"Registro"> | Date | string
    atualizado_em?: DateTimeFilter<"Registro"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    cargo?: XOR<CargoScalarRelationFilter, CargoWhereInput>
  }

  export type RegistroOrderByWithRelationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    cota?: SortOrder
    respostas?: SortOrder
    inscricao_id?: SortOrder
    participacao?: SortOrder
    versao_prova?: SortOrder
    cargo_id?: SortOrder
    criado_em?: SortOrder
    atualizado_em?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    cargo?: CargoOrderByWithRelationInput
  }

  export type RegistroWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    usuario_id_cargo_id?: RegistroUsuario_idCargo_idCompoundUniqueInput
    AND?: RegistroWhereInput | RegistroWhereInput[]
    OR?: RegistroWhereInput[]
    NOT?: RegistroWhereInput | RegistroWhereInput[]
    usuario_id?: StringFilter<"Registro"> | string
    cota?: StringFilter<"Registro"> | string
    respostas?: StringNullableListFilter<"Registro">
    inscricao_id?: StringFilter<"Registro"> | string
    participacao?: EnumParticipacaoFilter<"Registro"> | $Enums.Participacao
    versao_prova?: StringFilter<"Registro"> | string
    cargo_id?: StringFilter<"Registro"> | string
    criado_em?: DateTimeFilter<"Registro"> | Date | string
    atualizado_em?: DateTimeFilter<"Registro"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    cargo?: XOR<CargoScalarRelationFilter, CargoWhereInput>
  }, "id" | "usuario_id_cargo_id">

  export type RegistroOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    cota?: SortOrder
    respostas?: SortOrder
    inscricao_id?: SortOrder
    participacao?: SortOrder
    versao_prova?: SortOrder
    cargo_id?: SortOrder
    criado_em?: SortOrder
    atualizado_em?: SortOrder
    _count?: RegistroCountOrderByAggregateInput
    _max?: RegistroMaxOrderByAggregateInput
    _min?: RegistroMinOrderByAggregateInput
  }

  export type RegistroScalarWhereWithAggregatesInput = {
    AND?: RegistroScalarWhereWithAggregatesInput | RegistroScalarWhereWithAggregatesInput[]
    OR?: RegistroScalarWhereWithAggregatesInput[]
    NOT?: RegistroScalarWhereWithAggregatesInput | RegistroScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Registro"> | string
    usuario_id?: StringWithAggregatesFilter<"Registro"> | string
    cota?: StringWithAggregatesFilter<"Registro"> | string
    respostas?: StringNullableListFilter<"Registro">
    inscricao_id?: StringWithAggregatesFilter<"Registro"> | string
    participacao?: EnumParticipacaoWithAggregatesFilter<"Registro"> | $Enums.Participacao
    versao_prova?: StringWithAggregatesFilter<"Registro"> | string
    cargo_id?: StringWithAggregatesFilter<"Registro"> | string
    criado_em?: DateTimeWithAggregatesFilter<"Registro"> | Date | string
    atualizado_em?: DateTimeWithAggregatesFilter<"Registro"> | Date | string
  }

  export type BancaWhereInput = {
    AND?: BancaWhereInput | BancaWhereInput[]
    OR?: BancaWhereInput[]
    NOT?: BancaWhereInput | BancaWhereInput[]
    id?: StringFilter<"Banca"> | string
    nome?: StringFilter<"Banca"> | string
    imagem?: StringNullableFilter<"Banca"> | string | null
    concursos?: ConcursoListRelationFilter
  }

  export type BancaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    imagem?: SortOrderInput | SortOrder
    concursos?: ConcursoOrderByRelationAggregateInput
  }

  export type BancaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BancaWhereInput | BancaWhereInput[]
    OR?: BancaWhereInput[]
    NOT?: BancaWhereInput | BancaWhereInput[]
    nome?: StringFilter<"Banca"> | string
    imagem?: StringNullableFilter<"Banca"> | string | null
    concursos?: ConcursoListRelationFilter
  }, "id">

  export type BancaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    imagem?: SortOrderInput | SortOrder
    _count?: BancaCountOrderByAggregateInput
    _max?: BancaMaxOrderByAggregateInput
    _min?: BancaMinOrderByAggregateInput
  }

  export type BancaScalarWhereWithAggregatesInput = {
    AND?: BancaScalarWhereWithAggregatesInput | BancaScalarWhereWithAggregatesInput[]
    OR?: BancaScalarWhereWithAggregatesInput[]
    NOT?: BancaScalarWhereWithAggregatesInput | BancaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Banca"> | string
    nome?: StringWithAggregatesFilter<"Banca"> | string
    imagem?: StringNullableWithAggregatesFilter<"Banca"> | string | null
  }

  export type ConcursoCreateInput = {
    id?: string
    nome: string
    data_publicacao?: Date | string | null
    data_inscricao?: Date | string | null
    data_prova?: Date | string | null
    data_gabarito?: Date | string | null
    data_resultado?: Date | string | null
    link_edital?: string | null
    link_pagina?: string | null
    orgao: string
    fase?: $Enums.Fase
    cotas?: ConcursoCreatecotasInput | string[]
    versoes_prova?: ConcursoCreateversoes_provaInput | string[]
    criado_em?: Date | string
    atualizado_em?: Date | string
    banca: BancaCreateNestedOneWithoutConcursosInput
    cargos?: CargoCreateNestedManyWithoutConcursoInput
  }

  export type ConcursoUncheckedCreateInput = {
    id?: string
    nome: string
    data_publicacao?: Date | string | null
    data_inscricao?: Date | string | null
    data_prova?: Date | string | null
    data_gabarito?: Date | string | null
    data_resultado?: Date | string | null
    link_edital?: string | null
    link_pagina?: string | null
    orgao: string
    fase?: $Enums.Fase
    banca_id: string
    cotas?: ConcursoCreatecotasInput | string[]
    versoes_prova?: ConcursoCreateversoes_provaInput | string[]
    criado_em?: Date | string
    atualizado_em?: Date | string
    cargos?: CargoUncheckedCreateNestedManyWithoutConcursoInput
  }

  export type ConcursoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    data_publicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_inscricao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_prova?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_gabarito?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_resultado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    link_edital?: NullableStringFieldUpdateOperationsInput | string | null
    link_pagina?: NullableStringFieldUpdateOperationsInput | string | null
    orgao?: StringFieldUpdateOperationsInput | string
    fase?: EnumFaseFieldUpdateOperationsInput | $Enums.Fase
    cotas?: ConcursoUpdatecotasInput | string[]
    versoes_prova?: ConcursoUpdateversoes_provaInput | string[]
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    banca?: BancaUpdateOneRequiredWithoutConcursosNestedInput
    cargos?: CargoUpdateManyWithoutConcursoNestedInput
  }

  export type ConcursoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    data_publicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_inscricao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_prova?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_gabarito?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_resultado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    link_edital?: NullableStringFieldUpdateOperationsInput | string | null
    link_pagina?: NullableStringFieldUpdateOperationsInput | string | null
    orgao?: StringFieldUpdateOperationsInput | string
    fase?: EnumFaseFieldUpdateOperationsInput | $Enums.Fase
    banca_id?: StringFieldUpdateOperationsInput | string
    cotas?: ConcursoUpdatecotasInput | string[]
    versoes_prova?: ConcursoUpdateversoes_provaInput | string[]
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    cargos?: CargoUncheckedUpdateManyWithoutConcursoNestedInput
  }

  export type ConcursoCreateManyInput = {
    id?: string
    nome: string
    data_publicacao?: Date | string | null
    data_inscricao?: Date | string | null
    data_prova?: Date | string | null
    data_gabarito?: Date | string | null
    data_resultado?: Date | string | null
    link_edital?: string | null
    link_pagina?: string | null
    orgao: string
    fase?: $Enums.Fase
    banca_id: string
    cotas?: ConcursoCreatecotasInput | string[]
    versoes_prova?: ConcursoCreateversoes_provaInput | string[]
    criado_em?: Date | string
    atualizado_em?: Date | string
  }

  export type ConcursoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    data_publicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_inscricao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_prova?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_gabarito?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_resultado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    link_edital?: NullableStringFieldUpdateOperationsInput | string | null
    link_pagina?: NullableStringFieldUpdateOperationsInput | string | null
    orgao?: StringFieldUpdateOperationsInput | string
    fase?: EnumFaseFieldUpdateOperationsInput | $Enums.Fase
    cotas?: ConcursoUpdatecotasInput | string[]
    versoes_prova?: ConcursoUpdateversoes_provaInput | string[]
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConcursoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    data_publicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_inscricao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_prova?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_gabarito?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_resultado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    link_edital?: NullableStringFieldUpdateOperationsInput | string | null
    link_pagina?: NullableStringFieldUpdateOperationsInput | string | null
    orgao?: StringFieldUpdateOperationsInput | string
    fase?: EnumFaseFieldUpdateOperationsInput | $Enums.Fase
    banca_id?: StringFieldUpdateOperationsInput | string
    cotas?: ConcursoUpdatecotasInput | string[]
    versoes_prova?: ConcursoUpdateversoes_provaInput | string[]
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CargoCreateInput = {
    id?: string
    nome: string
    total_vagas?: number
    vagas_cotas: JsonNullValueInput | InputJsonValue
    estado: string
    cidade: string
    regiao: string
    materias?: CargoCreatemateriasInput | InputJsonValue[]
    criado_em?: Date | string
    concurso: ConcursoCreateNestedOneWithoutCargosInput
    registros?: RegistroCreateNestedManyWithoutCargoInput
  }

  export type CargoUncheckedCreateInput = {
    id?: string
    nome: string
    total_vagas?: number
    vagas_cotas: JsonNullValueInput | InputJsonValue
    concurso_id: string
    estado: string
    cidade: string
    regiao: string
    materias?: CargoCreatemateriasInput | InputJsonValue[]
    criado_em?: Date | string
    registros?: RegistroUncheckedCreateNestedManyWithoutCargoInput
  }

  export type CargoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    total_vagas?: IntFieldUpdateOperationsInput | number
    vagas_cotas?: JsonNullValueInput | InputJsonValue
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    regiao?: StringFieldUpdateOperationsInput | string
    materias?: CargoUpdatemateriasInput | InputJsonValue[]
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    concurso?: ConcursoUpdateOneRequiredWithoutCargosNestedInput
    registros?: RegistroUpdateManyWithoutCargoNestedInput
  }

  export type CargoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    total_vagas?: IntFieldUpdateOperationsInput | number
    vagas_cotas?: JsonNullValueInput | InputJsonValue
    concurso_id?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    regiao?: StringFieldUpdateOperationsInput | string
    materias?: CargoUpdatemateriasInput | InputJsonValue[]
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    registros?: RegistroUncheckedUpdateManyWithoutCargoNestedInput
  }

  export type CargoCreateManyInput = {
    id?: string
    nome: string
    total_vagas?: number
    vagas_cotas: JsonNullValueInput | InputJsonValue
    concurso_id: string
    estado: string
    cidade: string
    regiao: string
    materias?: CargoCreatemateriasInput | InputJsonValue[]
    criado_em?: Date | string
  }

  export type CargoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    total_vagas?: IntFieldUpdateOperationsInput | number
    vagas_cotas?: JsonNullValueInput | InputJsonValue
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    regiao?: StringFieldUpdateOperationsInput | string
    materias?: CargoUpdatemateriasInput | InputJsonValue[]
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CargoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    total_vagas?: IntFieldUpdateOperationsInput | number
    vagas_cotas?: JsonNullValueInput | InputJsonValue
    concurso_id?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    regiao?: StringFieldUpdateOperationsInput | string
    materias?: CargoUpdatemateriasInput | InputJsonValue[]
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateInput = {
    id?: string
    email: string
    nome: string
    senha_hash?: string | null
    oauth_provider?: string | null
    oauth_id?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    registros?: RegistroCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    email: string
    nome: string
    senha_hash?: string | null
    oauth_provider?: string | null
    oauth_id?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    registros?: RegistroUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha_hash?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_provider?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_id?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    registros?: RegistroUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha_hash?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_provider?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_id?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    registros?: RegistroUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    email: string
    nome: string
    senha_hash?: string | null
    oauth_provider?: string | null
    oauth_id?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha_hash?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_provider?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_id?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha_hash?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_provider?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_id?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroCreateInput = {
    id?: string
    cota: string
    respostas?: RegistroCreaterespostasInput | string[]
    inscricao_id: string
    participacao?: $Enums.Participacao
    versao_prova: string
    criado_em?: Date | string
    atualizado_em?: Date | string
    usuario: UsuarioCreateNestedOneWithoutRegistrosInput
    cargo: CargoCreateNestedOneWithoutRegistrosInput
  }

  export type RegistroUncheckedCreateInput = {
    id?: string
    usuario_id: string
    cota: string
    respostas?: RegistroCreaterespostasInput | string[]
    inscricao_id: string
    participacao?: $Enums.Participacao
    versao_prova: string
    cargo_id: string
    criado_em?: Date | string
    atualizado_em?: Date | string
  }

  export type RegistroUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cota?: StringFieldUpdateOperationsInput | string
    respostas?: RegistroUpdaterespostasInput | string[]
    inscricao_id?: StringFieldUpdateOperationsInput | string
    participacao?: EnumParticipacaoFieldUpdateOperationsInput | $Enums.Participacao
    versao_prova?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutRegistrosNestedInput
    cargo?: CargoUpdateOneRequiredWithoutRegistrosNestedInput
  }

  export type RegistroUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario_id?: StringFieldUpdateOperationsInput | string
    cota?: StringFieldUpdateOperationsInput | string
    respostas?: RegistroUpdaterespostasInput | string[]
    inscricao_id?: StringFieldUpdateOperationsInput | string
    participacao?: EnumParticipacaoFieldUpdateOperationsInput | $Enums.Participacao
    versao_prova?: StringFieldUpdateOperationsInput | string
    cargo_id?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroCreateManyInput = {
    id?: string
    usuario_id: string
    cota: string
    respostas?: RegistroCreaterespostasInput | string[]
    inscricao_id: string
    participacao?: $Enums.Participacao
    versao_prova: string
    cargo_id: string
    criado_em?: Date | string
    atualizado_em?: Date | string
  }

  export type RegistroUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cota?: StringFieldUpdateOperationsInput | string
    respostas?: RegistroUpdaterespostasInput | string[]
    inscricao_id?: StringFieldUpdateOperationsInput | string
    participacao?: EnumParticipacaoFieldUpdateOperationsInput | $Enums.Participacao
    versao_prova?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario_id?: StringFieldUpdateOperationsInput | string
    cota?: StringFieldUpdateOperationsInput | string
    respostas?: RegistroUpdaterespostasInput | string[]
    inscricao_id?: StringFieldUpdateOperationsInput | string
    participacao?: EnumParticipacaoFieldUpdateOperationsInput | $Enums.Participacao
    versao_prova?: StringFieldUpdateOperationsInput | string
    cargo_id?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BancaCreateInput = {
    id?: string
    nome: string
    imagem?: string | null
    concursos?: ConcursoCreateNestedManyWithoutBancaInput
  }

  export type BancaUncheckedCreateInput = {
    id?: string
    nome: string
    imagem?: string | null
    concursos?: ConcursoUncheckedCreateNestedManyWithoutBancaInput
  }

  export type BancaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    concursos?: ConcursoUpdateManyWithoutBancaNestedInput
  }

  export type BancaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    concursos?: ConcursoUncheckedUpdateManyWithoutBancaNestedInput
  }

  export type BancaCreateManyInput = {
    id?: string
    nome: string
    imagem?: string | null
  }

  export type BancaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BancaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type EnumFaseFilter<$PrismaModel = never> = {
    equals?: $Enums.Fase | EnumFaseFieldRefInput<$PrismaModel>
    in?: $Enums.Fase[] | ListEnumFaseFieldRefInput<$PrismaModel>
    notIn?: $Enums.Fase[] | ListEnumFaseFieldRefInput<$PrismaModel>
    not?: NestedEnumFaseFilter<$PrismaModel> | $Enums.Fase
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type BancaScalarRelationFilter = {
    is?: BancaWhereInput
    isNot?: BancaWhereInput
  }

  export type CargoListRelationFilter = {
    every?: CargoWhereInput
    some?: CargoWhereInput
    none?: CargoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CargoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConcursoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    data_publicacao?: SortOrder
    data_inscricao?: SortOrder
    data_prova?: SortOrder
    data_gabarito?: SortOrder
    data_resultado?: SortOrder
    link_edital?: SortOrder
    link_pagina?: SortOrder
    orgao?: SortOrder
    fase?: SortOrder
    banca_id?: SortOrder
    cotas?: SortOrder
    versoes_prova?: SortOrder
    criado_em?: SortOrder
    atualizado_em?: SortOrder
  }

  export type ConcursoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    data_publicacao?: SortOrder
    data_inscricao?: SortOrder
    data_prova?: SortOrder
    data_gabarito?: SortOrder
    data_resultado?: SortOrder
    link_edital?: SortOrder
    link_pagina?: SortOrder
    orgao?: SortOrder
    fase?: SortOrder
    banca_id?: SortOrder
    criado_em?: SortOrder
    atualizado_em?: SortOrder
  }

  export type ConcursoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    data_publicacao?: SortOrder
    data_inscricao?: SortOrder
    data_prova?: SortOrder
    data_gabarito?: SortOrder
    data_resultado?: SortOrder
    link_edital?: SortOrder
    link_pagina?: SortOrder
    orgao?: SortOrder
    fase?: SortOrder
    banca_id?: SortOrder
    criado_em?: SortOrder
    atualizado_em?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type EnumFaseWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Fase | EnumFaseFieldRefInput<$PrismaModel>
    in?: $Enums.Fase[] | ListEnumFaseFieldRefInput<$PrismaModel>
    notIn?: $Enums.Fase[] | ListEnumFaseFieldRefInput<$PrismaModel>
    not?: NestedEnumFaseWithAggregatesFilter<$PrismaModel> | $Enums.Fase
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFaseFilter<$PrismaModel>
    _max?: NestedEnumFaseFilter<$PrismaModel>
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type JsonNullableListFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableListFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableListFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableListFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel> | null
    has?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    hasEvery?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    hasSome?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ConcursoScalarRelationFilter = {
    is?: ConcursoWhereInput
    isNot?: ConcursoWhereInput
  }

  export type RegistroListRelationFilter = {
    every?: RegistroWhereInput
    some?: RegistroWhereInput
    none?: RegistroWhereInput
  }

  export type RegistroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CargoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    total_vagas?: SortOrder
    vagas_cotas?: SortOrder
    concurso_id?: SortOrder
    estado?: SortOrder
    cidade?: SortOrder
    regiao?: SortOrder
    materias?: SortOrder
    criado_em?: SortOrder
  }

  export type CargoAvgOrderByAggregateInput = {
    total_vagas?: SortOrder
  }

  export type CargoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    total_vagas?: SortOrder
    concurso_id?: SortOrder
    estado?: SortOrder
    cidade?: SortOrder
    regiao?: SortOrder
    criado_em?: SortOrder
  }

  export type CargoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    total_vagas?: SortOrder
    concurso_id?: SortOrder
    estado?: SortOrder
    cidade?: SortOrder
    regiao?: SortOrder
    criado_em?: SortOrder
  }

  export type CargoSumOrderByAggregateInput = {
    total_vagas?: SortOrder
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type UsuarioOauth_providerOauth_idCompoundUniqueInput = {
    oauth_provider: string
    oauth_id: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha_hash?: SortOrder
    oauth_provider?: SortOrder
    oauth_id?: SortOrder
    criado_em?: SortOrder
    atualizado_em?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha_hash?: SortOrder
    oauth_provider?: SortOrder
    oauth_id?: SortOrder
    criado_em?: SortOrder
    atualizado_em?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha_hash?: SortOrder
    oauth_provider?: SortOrder
    oauth_id?: SortOrder
    criado_em?: SortOrder
    atualizado_em?: SortOrder
  }

  export type EnumParticipacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.Participacao | EnumParticipacaoFieldRefInput<$PrismaModel>
    in?: $Enums.Participacao[] | ListEnumParticipacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Participacao[] | ListEnumParticipacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipacaoFilter<$PrismaModel> | $Enums.Participacao
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type CargoScalarRelationFilter = {
    is?: CargoWhereInput
    isNot?: CargoWhereInput
  }

  export type RegistroUsuario_idCargo_idCompoundUniqueInput = {
    usuario_id: string
    cargo_id: string
  }

  export type RegistroCountOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    cota?: SortOrder
    respostas?: SortOrder
    inscricao_id?: SortOrder
    participacao?: SortOrder
    versao_prova?: SortOrder
    cargo_id?: SortOrder
    criado_em?: SortOrder
    atualizado_em?: SortOrder
  }

  export type RegistroMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    cota?: SortOrder
    inscricao_id?: SortOrder
    participacao?: SortOrder
    versao_prova?: SortOrder
    cargo_id?: SortOrder
    criado_em?: SortOrder
    atualizado_em?: SortOrder
  }

  export type RegistroMinOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    cota?: SortOrder
    inscricao_id?: SortOrder
    participacao?: SortOrder
    versao_prova?: SortOrder
    cargo_id?: SortOrder
    criado_em?: SortOrder
    atualizado_em?: SortOrder
  }

  export type EnumParticipacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Participacao | EnumParticipacaoFieldRefInput<$PrismaModel>
    in?: $Enums.Participacao[] | ListEnumParticipacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Participacao[] | ListEnumParticipacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipacaoWithAggregatesFilter<$PrismaModel> | $Enums.Participacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParticipacaoFilter<$PrismaModel>
    _max?: NestedEnumParticipacaoFilter<$PrismaModel>
  }

  export type ConcursoListRelationFilter = {
    every?: ConcursoWhereInput
    some?: ConcursoWhereInput
    none?: ConcursoWhereInput
  }

  export type ConcursoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BancaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    imagem?: SortOrder
  }

  export type BancaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    imagem?: SortOrder
  }

  export type BancaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    imagem?: SortOrder
  }

  export type ConcursoCreatecotasInput = {
    set: string[]
  }

  export type ConcursoCreateversoes_provaInput = {
    set: string[]
  }

  export type BancaCreateNestedOneWithoutConcursosInput = {
    create?: XOR<BancaCreateWithoutConcursosInput, BancaUncheckedCreateWithoutConcursosInput>
    connectOrCreate?: BancaCreateOrConnectWithoutConcursosInput
    connect?: BancaWhereUniqueInput
  }

  export type CargoCreateNestedManyWithoutConcursoInput = {
    create?: XOR<CargoCreateWithoutConcursoInput, CargoUncheckedCreateWithoutConcursoInput> | CargoCreateWithoutConcursoInput[] | CargoUncheckedCreateWithoutConcursoInput[]
    connectOrCreate?: CargoCreateOrConnectWithoutConcursoInput | CargoCreateOrConnectWithoutConcursoInput[]
    createMany?: CargoCreateManyConcursoInputEnvelope
    connect?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
  }

  export type CargoUncheckedCreateNestedManyWithoutConcursoInput = {
    create?: XOR<CargoCreateWithoutConcursoInput, CargoUncheckedCreateWithoutConcursoInput> | CargoCreateWithoutConcursoInput[] | CargoUncheckedCreateWithoutConcursoInput[]
    connectOrCreate?: CargoCreateOrConnectWithoutConcursoInput | CargoCreateOrConnectWithoutConcursoInput[]
    createMany?: CargoCreateManyConcursoInputEnvelope
    connect?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumFaseFieldUpdateOperationsInput = {
    set?: $Enums.Fase
  }

  export type ConcursoUpdatecotasInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ConcursoUpdateversoes_provaInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BancaUpdateOneRequiredWithoutConcursosNestedInput = {
    create?: XOR<BancaCreateWithoutConcursosInput, BancaUncheckedCreateWithoutConcursosInput>
    connectOrCreate?: BancaCreateOrConnectWithoutConcursosInput
    upsert?: BancaUpsertWithoutConcursosInput
    connect?: BancaWhereUniqueInput
    update?: XOR<XOR<BancaUpdateToOneWithWhereWithoutConcursosInput, BancaUpdateWithoutConcursosInput>, BancaUncheckedUpdateWithoutConcursosInput>
  }

  export type CargoUpdateManyWithoutConcursoNestedInput = {
    create?: XOR<CargoCreateWithoutConcursoInput, CargoUncheckedCreateWithoutConcursoInput> | CargoCreateWithoutConcursoInput[] | CargoUncheckedCreateWithoutConcursoInput[]
    connectOrCreate?: CargoCreateOrConnectWithoutConcursoInput | CargoCreateOrConnectWithoutConcursoInput[]
    upsert?: CargoUpsertWithWhereUniqueWithoutConcursoInput | CargoUpsertWithWhereUniqueWithoutConcursoInput[]
    createMany?: CargoCreateManyConcursoInputEnvelope
    set?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    disconnect?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    delete?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    connect?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    update?: CargoUpdateWithWhereUniqueWithoutConcursoInput | CargoUpdateWithWhereUniqueWithoutConcursoInput[]
    updateMany?: CargoUpdateManyWithWhereWithoutConcursoInput | CargoUpdateManyWithWhereWithoutConcursoInput[]
    deleteMany?: CargoScalarWhereInput | CargoScalarWhereInput[]
  }

  export type CargoUncheckedUpdateManyWithoutConcursoNestedInput = {
    create?: XOR<CargoCreateWithoutConcursoInput, CargoUncheckedCreateWithoutConcursoInput> | CargoCreateWithoutConcursoInput[] | CargoUncheckedCreateWithoutConcursoInput[]
    connectOrCreate?: CargoCreateOrConnectWithoutConcursoInput | CargoCreateOrConnectWithoutConcursoInput[]
    upsert?: CargoUpsertWithWhereUniqueWithoutConcursoInput | CargoUpsertWithWhereUniqueWithoutConcursoInput[]
    createMany?: CargoCreateManyConcursoInputEnvelope
    set?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    disconnect?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    delete?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    connect?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    update?: CargoUpdateWithWhereUniqueWithoutConcursoInput | CargoUpdateWithWhereUniqueWithoutConcursoInput[]
    updateMany?: CargoUpdateManyWithWhereWithoutConcursoInput | CargoUpdateManyWithWhereWithoutConcursoInput[]
    deleteMany?: CargoScalarWhereInput | CargoScalarWhereInput[]
  }

  export type CargoCreatemateriasInput = {
    set: InputJsonValue[]
  }

  export type ConcursoCreateNestedOneWithoutCargosInput = {
    create?: XOR<ConcursoCreateWithoutCargosInput, ConcursoUncheckedCreateWithoutCargosInput>
    connectOrCreate?: ConcursoCreateOrConnectWithoutCargosInput
    connect?: ConcursoWhereUniqueInput
  }

  export type RegistroCreateNestedManyWithoutCargoInput = {
    create?: XOR<RegistroCreateWithoutCargoInput, RegistroUncheckedCreateWithoutCargoInput> | RegistroCreateWithoutCargoInput[] | RegistroUncheckedCreateWithoutCargoInput[]
    connectOrCreate?: RegistroCreateOrConnectWithoutCargoInput | RegistroCreateOrConnectWithoutCargoInput[]
    createMany?: RegistroCreateManyCargoInputEnvelope
    connect?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
  }

  export type RegistroUncheckedCreateNestedManyWithoutCargoInput = {
    create?: XOR<RegistroCreateWithoutCargoInput, RegistroUncheckedCreateWithoutCargoInput> | RegistroCreateWithoutCargoInput[] | RegistroUncheckedCreateWithoutCargoInput[]
    connectOrCreate?: RegistroCreateOrConnectWithoutCargoInput | RegistroCreateOrConnectWithoutCargoInput[]
    createMany?: RegistroCreateManyCargoInputEnvelope
    connect?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CargoUpdatemateriasInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type ConcursoUpdateOneRequiredWithoutCargosNestedInput = {
    create?: XOR<ConcursoCreateWithoutCargosInput, ConcursoUncheckedCreateWithoutCargosInput>
    connectOrCreate?: ConcursoCreateOrConnectWithoutCargosInput
    upsert?: ConcursoUpsertWithoutCargosInput
    connect?: ConcursoWhereUniqueInput
    update?: XOR<XOR<ConcursoUpdateToOneWithWhereWithoutCargosInput, ConcursoUpdateWithoutCargosInput>, ConcursoUncheckedUpdateWithoutCargosInput>
  }

  export type RegistroUpdateManyWithoutCargoNestedInput = {
    create?: XOR<RegistroCreateWithoutCargoInput, RegistroUncheckedCreateWithoutCargoInput> | RegistroCreateWithoutCargoInput[] | RegistroUncheckedCreateWithoutCargoInput[]
    connectOrCreate?: RegistroCreateOrConnectWithoutCargoInput | RegistroCreateOrConnectWithoutCargoInput[]
    upsert?: RegistroUpsertWithWhereUniqueWithoutCargoInput | RegistroUpsertWithWhereUniqueWithoutCargoInput[]
    createMany?: RegistroCreateManyCargoInputEnvelope
    set?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    disconnect?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    delete?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    connect?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    update?: RegistroUpdateWithWhereUniqueWithoutCargoInput | RegistroUpdateWithWhereUniqueWithoutCargoInput[]
    updateMany?: RegistroUpdateManyWithWhereWithoutCargoInput | RegistroUpdateManyWithWhereWithoutCargoInput[]
    deleteMany?: RegistroScalarWhereInput | RegistroScalarWhereInput[]
  }

  export type RegistroUncheckedUpdateManyWithoutCargoNestedInput = {
    create?: XOR<RegistroCreateWithoutCargoInput, RegistroUncheckedCreateWithoutCargoInput> | RegistroCreateWithoutCargoInput[] | RegistroUncheckedCreateWithoutCargoInput[]
    connectOrCreate?: RegistroCreateOrConnectWithoutCargoInput | RegistroCreateOrConnectWithoutCargoInput[]
    upsert?: RegistroUpsertWithWhereUniqueWithoutCargoInput | RegistroUpsertWithWhereUniqueWithoutCargoInput[]
    createMany?: RegistroCreateManyCargoInputEnvelope
    set?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    disconnect?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    delete?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    connect?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    update?: RegistroUpdateWithWhereUniqueWithoutCargoInput | RegistroUpdateWithWhereUniqueWithoutCargoInput[]
    updateMany?: RegistroUpdateManyWithWhereWithoutCargoInput | RegistroUpdateManyWithWhereWithoutCargoInput[]
    deleteMany?: RegistroScalarWhereInput | RegistroScalarWhereInput[]
  }

  export type RegistroCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RegistroCreateWithoutUsuarioInput, RegistroUncheckedCreateWithoutUsuarioInput> | RegistroCreateWithoutUsuarioInput[] | RegistroUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RegistroCreateOrConnectWithoutUsuarioInput | RegistroCreateOrConnectWithoutUsuarioInput[]
    createMany?: RegistroCreateManyUsuarioInputEnvelope
    connect?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
  }

  export type RegistroUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RegistroCreateWithoutUsuarioInput, RegistroUncheckedCreateWithoutUsuarioInput> | RegistroCreateWithoutUsuarioInput[] | RegistroUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RegistroCreateOrConnectWithoutUsuarioInput | RegistroCreateOrConnectWithoutUsuarioInput[]
    createMany?: RegistroCreateManyUsuarioInputEnvelope
    connect?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
  }

  export type RegistroUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RegistroCreateWithoutUsuarioInput, RegistroUncheckedCreateWithoutUsuarioInput> | RegistroCreateWithoutUsuarioInput[] | RegistroUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RegistroCreateOrConnectWithoutUsuarioInput | RegistroCreateOrConnectWithoutUsuarioInput[]
    upsert?: RegistroUpsertWithWhereUniqueWithoutUsuarioInput | RegistroUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RegistroCreateManyUsuarioInputEnvelope
    set?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    disconnect?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    delete?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    connect?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    update?: RegistroUpdateWithWhereUniqueWithoutUsuarioInput | RegistroUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RegistroUpdateManyWithWhereWithoutUsuarioInput | RegistroUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RegistroScalarWhereInput | RegistroScalarWhereInput[]
  }

  export type RegistroUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RegistroCreateWithoutUsuarioInput, RegistroUncheckedCreateWithoutUsuarioInput> | RegistroCreateWithoutUsuarioInput[] | RegistroUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RegistroCreateOrConnectWithoutUsuarioInput | RegistroCreateOrConnectWithoutUsuarioInput[]
    upsert?: RegistroUpsertWithWhereUniqueWithoutUsuarioInput | RegistroUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RegistroCreateManyUsuarioInputEnvelope
    set?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    disconnect?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    delete?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    connect?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    update?: RegistroUpdateWithWhereUniqueWithoutUsuarioInput | RegistroUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RegistroUpdateManyWithWhereWithoutUsuarioInput | RegistroUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RegistroScalarWhereInput | RegistroScalarWhereInput[]
  }

  export type RegistroCreaterespostasInput = {
    set: string[]
  }

  export type UsuarioCreateNestedOneWithoutRegistrosInput = {
    create?: XOR<UsuarioCreateWithoutRegistrosInput, UsuarioUncheckedCreateWithoutRegistrosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRegistrosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type CargoCreateNestedOneWithoutRegistrosInput = {
    create?: XOR<CargoCreateWithoutRegistrosInput, CargoUncheckedCreateWithoutRegistrosInput>
    connectOrCreate?: CargoCreateOrConnectWithoutRegistrosInput
    connect?: CargoWhereUniqueInput
  }

  export type RegistroUpdaterespostasInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumParticipacaoFieldUpdateOperationsInput = {
    set?: $Enums.Participacao
  }

  export type UsuarioUpdateOneRequiredWithoutRegistrosNestedInput = {
    create?: XOR<UsuarioCreateWithoutRegistrosInput, UsuarioUncheckedCreateWithoutRegistrosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRegistrosInput
    upsert?: UsuarioUpsertWithoutRegistrosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutRegistrosInput, UsuarioUpdateWithoutRegistrosInput>, UsuarioUncheckedUpdateWithoutRegistrosInput>
  }

  export type CargoUpdateOneRequiredWithoutRegistrosNestedInput = {
    create?: XOR<CargoCreateWithoutRegistrosInput, CargoUncheckedCreateWithoutRegistrosInput>
    connectOrCreate?: CargoCreateOrConnectWithoutRegistrosInput
    upsert?: CargoUpsertWithoutRegistrosInput
    connect?: CargoWhereUniqueInput
    update?: XOR<XOR<CargoUpdateToOneWithWhereWithoutRegistrosInput, CargoUpdateWithoutRegistrosInput>, CargoUncheckedUpdateWithoutRegistrosInput>
  }

  export type ConcursoCreateNestedManyWithoutBancaInput = {
    create?: XOR<ConcursoCreateWithoutBancaInput, ConcursoUncheckedCreateWithoutBancaInput> | ConcursoCreateWithoutBancaInput[] | ConcursoUncheckedCreateWithoutBancaInput[]
    connectOrCreate?: ConcursoCreateOrConnectWithoutBancaInput | ConcursoCreateOrConnectWithoutBancaInput[]
    createMany?: ConcursoCreateManyBancaInputEnvelope
    connect?: ConcursoWhereUniqueInput | ConcursoWhereUniqueInput[]
  }

  export type ConcursoUncheckedCreateNestedManyWithoutBancaInput = {
    create?: XOR<ConcursoCreateWithoutBancaInput, ConcursoUncheckedCreateWithoutBancaInput> | ConcursoCreateWithoutBancaInput[] | ConcursoUncheckedCreateWithoutBancaInput[]
    connectOrCreate?: ConcursoCreateOrConnectWithoutBancaInput | ConcursoCreateOrConnectWithoutBancaInput[]
    createMany?: ConcursoCreateManyBancaInputEnvelope
    connect?: ConcursoWhereUniqueInput | ConcursoWhereUniqueInput[]
  }

  export type ConcursoUpdateManyWithoutBancaNestedInput = {
    create?: XOR<ConcursoCreateWithoutBancaInput, ConcursoUncheckedCreateWithoutBancaInput> | ConcursoCreateWithoutBancaInput[] | ConcursoUncheckedCreateWithoutBancaInput[]
    connectOrCreate?: ConcursoCreateOrConnectWithoutBancaInput | ConcursoCreateOrConnectWithoutBancaInput[]
    upsert?: ConcursoUpsertWithWhereUniqueWithoutBancaInput | ConcursoUpsertWithWhereUniqueWithoutBancaInput[]
    createMany?: ConcursoCreateManyBancaInputEnvelope
    set?: ConcursoWhereUniqueInput | ConcursoWhereUniqueInput[]
    disconnect?: ConcursoWhereUniqueInput | ConcursoWhereUniqueInput[]
    delete?: ConcursoWhereUniqueInput | ConcursoWhereUniqueInput[]
    connect?: ConcursoWhereUniqueInput | ConcursoWhereUniqueInput[]
    update?: ConcursoUpdateWithWhereUniqueWithoutBancaInput | ConcursoUpdateWithWhereUniqueWithoutBancaInput[]
    updateMany?: ConcursoUpdateManyWithWhereWithoutBancaInput | ConcursoUpdateManyWithWhereWithoutBancaInput[]
    deleteMany?: ConcursoScalarWhereInput | ConcursoScalarWhereInput[]
  }

  export type ConcursoUncheckedUpdateManyWithoutBancaNestedInput = {
    create?: XOR<ConcursoCreateWithoutBancaInput, ConcursoUncheckedCreateWithoutBancaInput> | ConcursoCreateWithoutBancaInput[] | ConcursoUncheckedCreateWithoutBancaInput[]
    connectOrCreate?: ConcursoCreateOrConnectWithoutBancaInput | ConcursoCreateOrConnectWithoutBancaInput[]
    upsert?: ConcursoUpsertWithWhereUniqueWithoutBancaInput | ConcursoUpsertWithWhereUniqueWithoutBancaInput[]
    createMany?: ConcursoCreateManyBancaInputEnvelope
    set?: ConcursoWhereUniqueInput | ConcursoWhereUniqueInput[]
    disconnect?: ConcursoWhereUniqueInput | ConcursoWhereUniqueInput[]
    delete?: ConcursoWhereUniqueInput | ConcursoWhereUniqueInput[]
    connect?: ConcursoWhereUniqueInput | ConcursoWhereUniqueInput[]
    update?: ConcursoUpdateWithWhereUniqueWithoutBancaInput | ConcursoUpdateWithWhereUniqueWithoutBancaInput[]
    updateMany?: ConcursoUpdateManyWithWhereWithoutBancaInput | ConcursoUpdateManyWithWhereWithoutBancaInput[]
    deleteMany?: ConcursoScalarWhereInput | ConcursoScalarWhereInput[]
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedEnumFaseFilter<$PrismaModel = never> = {
    equals?: $Enums.Fase | EnumFaseFieldRefInput<$PrismaModel>
    in?: $Enums.Fase[] | ListEnumFaseFieldRefInput<$PrismaModel>
    notIn?: $Enums.Fase[] | ListEnumFaseFieldRefInput<$PrismaModel>
    not?: NestedEnumFaseFilter<$PrismaModel> | $Enums.Fase
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedEnumFaseWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Fase | EnumFaseFieldRefInput<$PrismaModel>
    in?: $Enums.Fase[] | ListEnumFaseFieldRefInput<$PrismaModel>
    notIn?: $Enums.Fase[] | ListEnumFaseFieldRefInput<$PrismaModel>
    not?: NestedEnumFaseWithAggregatesFilter<$PrismaModel> | $Enums.Fase
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFaseFilter<$PrismaModel>
    _max?: NestedEnumFaseFilter<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumParticipacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.Participacao | EnumParticipacaoFieldRefInput<$PrismaModel>
    in?: $Enums.Participacao[] | ListEnumParticipacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Participacao[] | ListEnumParticipacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipacaoFilter<$PrismaModel> | $Enums.Participacao
  }

  export type NestedEnumParticipacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Participacao | EnumParticipacaoFieldRefInput<$PrismaModel>
    in?: $Enums.Participacao[] | ListEnumParticipacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Participacao[] | ListEnumParticipacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipacaoWithAggregatesFilter<$PrismaModel> | $Enums.Participacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParticipacaoFilter<$PrismaModel>
    _max?: NestedEnumParticipacaoFilter<$PrismaModel>
  }

  export type BancaCreateWithoutConcursosInput = {
    id?: string
    nome: string
    imagem?: string | null
  }

  export type BancaUncheckedCreateWithoutConcursosInput = {
    id?: string
    nome: string
    imagem?: string | null
  }

  export type BancaCreateOrConnectWithoutConcursosInput = {
    where: BancaWhereUniqueInput
    create: XOR<BancaCreateWithoutConcursosInput, BancaUncheckedCreateWithoutConcursosInput>
  }

  export type CargoCreateWithoutConcursoInput = {
    id?: string
    nome: string
    total_vagas?: number
    vagas_cotas: JsonNullValueInput | InputJsonValue
    estado: string
    cidade: string
    regiao: string
    materias?: CargoCreatemateriasInput | InputJsonValue[]
    criado_em?: Date | string
    registros?: RegistroCreateNestedManyWithoutCargoInput
  }

  export type CargoUncheckedCreateWithoutConcursoInput = {
    id?: string
    nome: string
    total_vagas?: number
    vagas_cotas: JsonNullValueInput | InputJsonValue
    estado: string
    cidade: string
    regiao: string
    materias?: CargoCreatemateriasInput | InputJsonValue[]
    criado_em?: Date | string
    registros?: RegistroUncheckedCreateNestedManyWithoutCargoInput
  }

  export type CargoCreateOrConnectWithoutConcursoInput = {
    where: CargoWhereUniqueInput
    create: XOR<CargoCreateWithoutConcursoInput, CargoUncheckedCreateWithoutConcursoInput>
  }

  export type CargoCreateManyConcursoInputEnvelope = {
    data: CargoCreateManyConcursoInput | CargoCreateManyConcursoInput[]
    skipDuplicates?: boolean
  }

  export type BancaUpsertWithoutConcursosInput = {
    update: XOR<BancaUpdateWithoutConcursosInput, BancaUncheckedUpdateWithoutConcursosInput>
    create: XOR<BancaCreateWithoutConcursosInput, BancaUncheckedCreateWithoutConcursosInput>
    where?: BancaWhereInput
  }

  export type BancaUpdateToOneWithWhereWithoutConcursosInput = {
    where?: BancaWhereInput
    data: XOR<BancaUpdateWithoutConcursosInput, BancaUncheckedUpdateWithoutConcursosInput>
  }

  export type BancaUpdateWithoutConcursosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BancaUncheckedUpdateWithoutConcursosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CargoUpsertWithWhereUniqueWithoutConcursoInput = {
    where: CargoWhereUniqueInput
    update: XOR<CargoUpdateWithoutConcursoInput, CargoUncheckedUpdateWithoutConcursoInput>
    create: XOR<CargoCreateWithoutConcursoInput, CargoUncheckedCreateWithoutConcursoInput>
  }

  export type CargoUpdateWithWhereUniqueWithoutConcursoInput = {
    where: CargoWhereUniqueInput
    data: XOR<CargoUpdateWithoutConcursoInput, CargoUncheckedUpdateWithoutConcursoInput>
  }

  export type CargoUpdateManyWithWhereWithoutConcursoInput = {
    where: CargoScalarWhereInput
    data: XOR<CargoUpdateManyMutationInput, CargoUncheckedUpdateManyWithoutConcursoInput>
  }

  export type CargoScalarWhereInput = {
    AND?: CargoScalarWhereInput | CargoScalarWhereInput[]
    OR?: CargoScalarWhereInput[]
    NOT?: CargoScalarWhereInput | CargoScalarWhereInput[]
    id?: StringFilter<"Cargo"> | string
    nome?: StringFilter<"Cargo"> | string
    total_vagas?: IntFilter<"Cargo"> | number
    vagas_cotas?: JsonFilter<"Cargo">
    concurso_id?: StringFilter<"Cargo"> | string
    estado?: StringFilter<"Cargo"> | string
    cidade?: StringFilter<"Cargo"> | string
    regiao?: StringFilter<"Cargo"> | string
    materias?: JsonNullableListFilter<"Cargo">
    criado_em?: DateTimeFilter<"Cargo"> | Date | string
  }

  export type ConcursoCreateWithoutCargosInput = {
    id?: string
    nome: string
    data_publicacao?: Date | string | null
    data_inscricao?: Date | string | null
    data_prova?: Date | string | null
    data_gabarito?: Date | string | null
    data_resultado?: Date | string | null
    link_edital?: string | null
    link_pagina?: string | null
    orgao: string
    fase?: $Enums.Fase
    cotas?: ConcursoCreatecotasInput | string[]
    versoes_prova?: ConcursoCreateversoes_provaInput | string[]
    criado_em?: Date | string
    atualizado_em?: Date | string
    banca: BancaCreateNestedOneWithoutConcursosInput
  }

  export type ConcursoUncheckedCreateWithoutCargosInput = {
    id?: string
    nome: string
    data_publicacao?: Date | string | null
    data_inscricao?: Date | string | null
    data_prova?: Date | string | null
    data_gabarito?: Date | string | null
    data_resultado?: Date | string | null
    link_edital?: string | null
    link_pagina?: string | null
    orgao: string
    fase?: $Enums.Fase
    banca_id: string
    cotas?: ConcursoCreatecotasInput | string[]
    versoes_prova?: ConcursoCreateversoes_provaInput | string[]
    criado_em?: Date | string
    atualizado_em?: Date | string
  }

  export type ConcursoCreateOrConnectWithoutCargosInput = {
    where: ConcursoWhereUniqueInput
    create: XOR<ConcursoCreateWithoutCargosInput, ConcursoUncheckedCreateWithoutCargosInput>
  }

  export type RegistroCreateWithoutCargoInput = {
    id?: string
    cota: string
    respostas?: RegistroCreaterespostasInput | string[]
    inscricao_id: string
    participacao?: $Enums.Participacao
    versao_prova: string
    criado_em?: Date | string
    atualizado_em?: Date | string
    usuario: UsuarioCreateNestedOneWithoutRegistrosInput
  }

  export type RegistroUncheckedCreateWithoutCargoInput = {
    id?: string
    usuario_id: string
    cota: string
    respostas?: RegistroCreaterespostasInput | string[]
    inscricao_id: string
    participacao?: $Enums.Participacao
    versao_prova: string
    criado_em?: Date | string
    atualizado_em?: Date | string
  }

  export type RegistroCreateOrConnectWithoutCargoInput = {
    where: RegistroWhereUniqueInput
    create: XOR<RegistroCreateWithoutCargoInput, RegistroUncheckedCreateWithoutCargoInput>
  }

  export type RegistroCreateManyCargoInputEnvelope = {
    data: RegistroCreateManyCargoInput | RegistroCreateManyCargoInput[]
    skipDuplicates?: boolean
  }

  export type ConcursoUpsertWithoutCargosInput = {
    update: XOR<ConcursoUpdateWithoutCargosInput, ConcursoUncheckedUpdateWithoutCargosInput>
    create: XOR<ConcursoCreateWithoutCargosInput, ConcursoUncheckedCreateWithoutCargosInput>
    where?: ConcursoWhereInput
  }

  export type ConcursoUpdateToOneWithWhereWithoutCargosInput = {
    where?: ConcursoWhereInput
    data: XOR<ConcursoUpdateWithoutCargosInput, ConcursoUncheckedUpdateWithoutCargosInput>
  }

  export type ConcursoUpdateWithoutCargosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    data_publicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_inscricao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_prova?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_gabarito?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_resultado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    link_edital?: NullableStringFieldUpdateOperationsInput | string | null
    link_pagina?: NullableStringFieldUpdateOperationsInput | string | null
    orgao?: StringFieldUpdateOperationsInput | string
    fase?: EnumFaseFieldUpdateOperationsInput | $Enums.Fase
    cotas?: ConcursoUpdatecotasInput | string[]
    versoes_prova?: ConcursoUpdateversoes_provaInput | string[]
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    banca?: BancaUpdateOneRequiredWithoutConcursosNestedInput
  }

  export type ConcursoUncheckedUpdateWithoutCargosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    data_publicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_inscricao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_prova?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_gabarito?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_resultado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    link_edital?: NullableStringFieldUpdateOperationsInput | string | null
    link_pagina?: NullableStringFieldUpdateOperationsInput | string | null
    orgao?: StringFieldUpdateOperationsInput | string
    fase?: EnumFaseFieldUpdateOperationsInput | $Enums.Fase
    banca_id?: StringFieldUpdateOperationsInput | string
    cotas?: ConcursoUpdatecotasInput | string[]
    versoes_prova?: ConcursoUpdateversoes_provaInput | string[]
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroUpsertWithWhereUniqueWithoutCargoInput = {
    where: RegistroWhereUniqueInput
    update: XOR<RegistroUpdateWithoutCargoInput, RegistroUncheckedUpdateWithoutCargoInput>
    create: XOR<RegistroCreateWithoutCargoInput, RegistroUncheckedCreateWithoutCargoInput>
  }

  export type RegistroUpdateWithWhereUniqueWithoutCargoInput = {
    where: RegistroWhereUniqueInput
    data: XOR<RegistroUpdateWithoutCargoInput, RegistroUncheckedUpdateWithoutCargoInput>
  }

  export type RegistroUpdateManyWithWhereWithoutCargoInput = {
    where: RegistroScalarWhereInput
    data: XOR<RegistroUpdateManyMutationInput, RegistroUncheckedUpdateManyWithoutCargoInput>
  }

  export type RegistroScalarWhereInput = {
    AND?: RegistroScalarWhereInput | RegistroScalarWhereInput[]
    OR?: RegistroScalarWhereInput[]
    NOT?: RegistroScalarWhereInput | RegistroScalarWhereInput[]
    id?: StringFilter<"Registro"> | string
    usuario_id?: StringFilter<"Registro"> | string
    cota?: StringFilter<"Registro"> | string
    respostas?: StringNullableListFilter<"Registro">
    inscricao_id?: StringFilter<"Registro"> | string
    participacao?: EnumParticipacaoFilter<"Registro"> | $Enums.Participacao
    versao_prova?: StringFilter<"Registro"> | string
    cargo_id?: StringFilter<"Registro"> | string
    criado_em?: DateTimeFilter<"Registro"> | Date | string
    atualizado_em?: DateTimeFilter<"Registro"> | Date | string
  }

  export type RegistroCreateWithoutUsuarioInput = {
    id?: string
    cota: string
    respostas?: RegistroCreaterespostasInput | string[]
    inscricao_id: string
    participacao?: $Enums.Participacao
    versao_prova: string
    criado_em?: Date | string
    atualizado_em?: Date | string
    cargo: CargoCreateNestedOneWithoutRegistrosInput
  }

  export type RegistroUncheckedCreateWithoutUsuarioInput = {
    id?: string
    cota: string
    respostas?: RegistroCreaterespostasInput | string[]
    inscricao_id: string
    participacao?: $Enums.Participacao
    versao_prova: string
    cargo_id: string
    criado_em?: Date | string
    atualizado_em?: Date | string
  }

  export type RegistroCreateOrConnectWithoutUsuarioInput = {
    where: RegistroWhereUniqueInput
    create: XOR<RegistroCreateWithoutUsuarioInput, RegistroUncheckedCreateWithoutUsuarioInput>
  }

  export type RegistroCreateManyUsuarioInputEnvelope = {
    data: RegistroCreateManyUsuarioInput | RegistroCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type RegistroUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: RegistroWhereUniqueInput
    update: XOR<RegistroUpdateWithoutUsuarioInput, RegistroUncheckedUpdateWithoutUsuarioInput>
    create: XOR<RegistroCreateWithoutUsuarioInput, RegistroUncheckedCreateWithoutUsuarioInput>
  }

  export type RegistroUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: RegistroWhereUniqueInput
    data: XOR<RegistroUpdateWithoutUsuarioInput, RegistroUncheckedUpdateWithoutUsuarioInput>
  }

  export type RegistroUpdateManyWithWhereWithoutUsuarioInput = {
    where: RegistroScalarWhereInput
    data: XOR<RegistroUpdateManyMutationInput, RegistroUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type UsuarioCreateWithoutRegistrosInput = {
    id?: string
    email: string
    nome: string
    senha_hash?: string | null
    oauth_provider?: string | null
    oauth_id?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
  }

  export type UsuarioUncheckedCreateWithoutRegistrosInput = {
    id?: string
    email: string
    nome: string
    senha_hash?: string | null
    oauth_provider?: string | null
    oauth_id?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
  }

  export type UsuarioCreateOrConnectWithoutRegistrosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRegistrosInput, UsuarioUncheckedCreateWithoutRegistrosInput>
  }

  export type CargoCreateWithoutRegistrosInput = {
    id?: string
    nome: string
    total_vagas?: number
    vagas_cotas: JsonNullValueInput | InputJsonValue
    estado: string
    cidade: string
    regiao: string
    materias?: CargoCreatemateriasInput | InputJsonValue[]
    criado_em?: Date | string
    concurso: ConcursoCreateNestedOneWithoutCargosInput
  }

  export type CargoUncheckedCreateWithoutRegistrosInput = {
    id?: string
    nome: string
    total_vagas?: number
    vagas_cotas: JsonNullValueInput | InputJsonValue
    concurso_id: string
    estado: string
    cidade: string
    regiao: string
    materias?: CargoCreatemateriasInput | InputJsonValue[]
    criado_em?: Date | string
  }

  export type CargoCreateOrConnectWithoutRegistrosInput = {
    where: CargoWhereUniqueInput
    create: XOR<CargoCreateWithoutRegistrosInput, CargoUncheckedCreateWithoutRegistrosInput>
  }

  export type UsuarioUpsertWithoutRegistrosInput = {
    update: XOR<UsuarioUpdateWithoutRegistrosInput, UsuarioUncheckedUpdateWithoutRegistrosInput>
    create: XOR<UsuarioCreateWithoutRegistrosInput, UsuarioUncheckedCreateWithoutRegistrosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutRegistrosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutRegistrosInput, UsuarioUncheckedUpdateWithoutRegistrosInput>
  }

  export type UsuarioUpdateWithoutRegistrosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha_hash?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_provider?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_id?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateWithoutRegistrosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha_hash?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_provider?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_id?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CargoUpsertWithoutRegistrosInput = {
    update: XOR<CargoUpdateWithoutRegistrosInput, CargoUncheckedUpdateWithoutRegistrosInput>
    create: XOR<CargoCreateWithoutRegistrosInput, CargoUncheckedCreateWithoutRegistrosInput>
    where?: CargoWhereInput
  }

  export type CargoUpdateToOneWithWhereWithoutRegistrosInput = {
    where?: CargoWhereInput
    data: XOR<CargoUpdateWithoutRegistrosInput, CargoUncheckedUpdateWithoutRegistrosInput>
  }

  export type CargoUpdateWithoutRegistrosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    total_vagas?: IntFieldUpdateOperationsInput | number
    vagas_cotas?: JsonNullValueInput | InputJsonValue
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    regiao?: StringFieldUpdateOperationsInput | string
    materias?: CargoUpdatemateriasInput | InputJsonValue[]
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    concurso?: ConcursoUpdateOneRequiredWithoutCargosNestedInput
  }

  export type CargoUncheckedUpdateWithoutRegistrosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    total_vagas?: IntFieldUpdateOperationsInput | number
    vagas_cotas?: JsonNullValueInput | InputJsonValue
    concurso_id?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    regiao?: StringFieldUpdateOperationsInput | string
    materias?: CargoUpdatemateriasInput | InputJsonValue[]
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConcursoCreateWithoutBancaInput = {
    id?: string
    nome: string
    data_publicacao?: Date | string | null
    data_inscricao?: Date | string | null
    data_prova?: Date | string | null
    data_gabarito?: Date | string | null
    data_resultado?: Date | string | null
    link_edital?: string | null
    link_pagina?: string | null
    orgao: string
    fase?: $Enums.Fase
    cotas?: ConcursoCreatecotasInput | string[]
    versoes_prova?: ConcursoCreateversoes_provaInput | string[]
    criado_em?: Date | string
    atualizado_em?: Date | string
    cargos?: CargoCreateNestedManyWithoutConcursoInput
  }

  export type ConcursoUncheckedCreateWithoutBancaInput = {
    id?: string
    nome: string
    data_publicacao?: Date | string | null
    data_inscricao?: Date | string | null
    data_prova?: Date | string | null
    data_gabarito?: Date | string | null
    data_resultado?: Date | string | null
    link_edital?: string | null
    link_pagina?: string | null
    orgao: string
    fase?: $Enums.Fase
    cotas?: ConcursoCreatecotasInput | string[]
    versoes_prova?: ConcursoCreateversoes_provaInput | string[]
    criado_em?: Date | string
    atualizado_em?: Date | string
    cargos?: CargoUncheckedCreateNestedManyWithoutConcursoInput
  }

  export type ConcursoCreateOrConnectWithoutBancaInput = {
    where: ConcursoWhereUniqueInput
    create: XOR<ConcursoCreateWithoutBancaInput, ConcursoUncheckedCreateWithoutBancaInput>
  }

  export type ConcursoCreateManyBancaInputEnvelope = {
    data: ConcursoCreateManyBancaInput | ConcursoCreateManyBancaInput[]
    skipDuplicates?: boolean
  }

  export type ConcursoUpsertWithWhereUniqueWithoutBancaInput = {
    where: ConcursoWhereUniqueInput
    update: XOR<ConcursoUpdateWithoutBancaInput, ConcursoUncheckedUpdateWithoutBancaInput>
    create: XOR<ConcursoCreateWithoutBancaInput, ConcursoUncheckedCreateWithoutBancaInput>
  }

  export type ConcursoUpdateWithWhereUniqueWithoutBancaInput = {
    where: ConcursoWhereUniqueInput
    data: XOR<ConcursoUpdateWithoutBancaInput, ConcursoUncheckedUpdateWithoutBancaInput>
  }

  export type ConcursoUpdateManyWithWhereWithoutBancaInput = {
    where: ConcursoScalarWhereInput
    data: XOR<ConcursoUpdateManyMutationInput, ConcursoUncheckedUpdateManyWithoutBancaInput>
  }

  export type ConcursoScalarWhereInput = {
    AND?: ConcursoScalarWhereInput | ConcursoScalarWhereInput[]
    OR?: ConcursoScalarWhereInput[]
    NOT?: ConcursoScalarWhereInput | ConcursoScalarWhereInput[]
    id?: StringFilter<"Concurso"> | string
    nome?: StringFilter<"Concurso"> | string
    data_publicacao?: DateTimeNullableFilter<"Concurso"> | Date | string | null
    data_inscricao?: DateTimeNullableFilter<"Concurso"> | Date | string | null
    data_prova?: DateTimeNullableFilter<"Concurso"> | Date | string | null
    data_gabarito?: DateTimeNullableFilter<"Concurso"> | Date | string | null
    data_resultado?: DateTimeNullableFilter<"Concurso"> | Date | string | null
    link_edital?: StringNullableFilter<"Concurso"> | string | null
    link_pagina?: StringNullableFilter<"Concurso"> | string | null
    orgao?: StringFilter<"Concurso"> | string
    fase?: EnumFaseFilter<"Concurso"> | $Enums.Fase
    banca_id?: StringFilter<"Concurso"> | string
    cotas?: StringNullableListFilter<"Concurso">
    versoes_prova?: StringNullableListFilter<"Concurso">
    criado_em?: DateTimeFilter<"Concurso"> | Date | string
    atualizado_em?: DateTimeFilter<"Concurso"> | Date | string
  }

  export type CargoCreateManyConcursoInput = {
    id?: string
    nome: string
    total_vagas?: number
    vagas_cotas: JsonNullValueInput | InputJsonValue
    estado: string
    cidade: string
    regiao: string
    materias?: CargoCreatemateriasInput | InputJsonValue[]
    criado_em?: Date | string
  }

  export type CargoUpdateWithoutConcursoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    total_vagas?: IntFieldUpdateOperationsInput | number
    vagas_cotas?: JsonNullValueInput | InputJsonValue
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    regiao?: StringFieldUpdateOperationsInput | string
    materias?: CargoUpdatemateriasInput | InputJsonValue[]
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    registros?: RegistroUpdateManyWithoutCargoNestedInput
  }

  export type CargoUncheckedUpdateWithoutConcursoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    total_vagas?: IntFieldUpdateOperationsInput | number
    vagas_cotas?: JsonNullValueInput | InputJsonValue
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    regiao?: StringFieldUpdateOperationsInput | string
    materias?: CargoUpdatemateriasInput | InputJsonValue[]
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    registros?: RegistroUncheckedUpdateManyWithoutCargoNestedInput
  }

  export type CargoUncheckedUpdateManyWithoutConcursoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    total_vagas?: IntFieldUpdateOperationsInput | number
    vagas_cotas?: JsonNullValueInput | InputJsonValue
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    regiao?: StringFieldUpdateOperationsInput | string
    materias?: CargoUpdatemateriasInput | InputJsonValue[]
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroCreateManyCargoInput = {
    id?: string
    usuario_id: string
    cota: string
    respostas?: RegistroCreaterespostasInput | string[]
    inscricao_id: string
    participacao?: $Enums.Participacao
    versao_prova: string
    criado_em?: Date | string
    atualizado_em?: Date | string
  }

  export type RegistroUpdateWithoutCargoInput = {
    id?: StringFieldUpdateOperationsInput | string
    cota?: StringFieldUpdateOperationsInput | string
    respostas?: RegistroUpdaterespostasInput | string[]
    inscricao_id?: StringFieldUpdateOperationsInput | string
    participacao?: EnumParticipacaoFieldUpdateOperationsInput | $Enums.Participacao
    versao_prova?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutRegistrosNestedInput
  }

  export type RegistroUncheckedUpdateWithoutCargoInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario_id?: StringFieldUpdateOperationsInput | string
    cota?: StringFieldUpdateOperationsInput | string
    respostas?: RegistroUpdaterespostasInput | string[]
    inscricao_id?: StringFieldUpdateOperationsInput | string
    participacao?: EnumParticipacaoFieldUpdateOperationsInput | $Enums.Participacao
    versao_prova?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroUncheckedUpdateManyWithoutCargoInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario_id?: StringFieldUpdateOperationsInput | string
    cota?: StringFieldUpdateOperationsInput | string
    respostas?: RegistroUpdaterespostasInput | string[]
    inscricao_id?: StringFieldUpdateOperationsInput | string
    participacao?: EnumParticipacaoFieldUpdateOperationsInput | $Enums.Participacao
    versao_prova?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroCreateManyUsuarioInput = {
    id?: string
    cota: string
    respostas?: RegistroCreaterespostasInput | string[]
    inscricao_id: string
    participacao?: $Enums.Participacao
    versao_prova: string
    cargo_id: string
    criado_em?: Date | string
    atualizado_em?: Date | string
  }

  export type RegistroUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    cota?: StringFieldUpdateOperationsInput | string
    respostas?: RegistroUpdaterespostasInput | string[]
    inscricao_id?: StringFieldUpdateOperationsInput | string
    participacao?: EnumParticipacaoFieldUpdateOperationsInput | $Enums.Participacao
    versao_prova?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    cargo?: CargoUpdateOneRequiredWithoutRegistrosNestedInput
  }

  export type RegistroUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    cota?: StringFieldUpdateOperationsInput | string
    respostas?: RegistroUpdaterespostasInput | string[]
    inscricao_id?: StringFieldUpdateOperationsInput | string
    participacao?: EnumParticipacaoFieldUpdateOperationsInput | $Enums.Participacao
    versao_prova?: StringFieldUpdateOperationsInput | string
    cargo_id?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    cota?: StringFieldUpdateOperationsInput | string
    respostas?: RegistroUpdaterespostasInput | string[]
    inscricao_id?: StringFieldUpdateOperationsInput | string
    participacao?: EnumParticipacaoFieldUpdateOperationsInput | $Enums.Participacao
    versao_prova?: StringFieldUpdateOperationsInput | string
    cargo_id?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConcursoCreateManyBancaInput = {
    id?: string
    nome: string
    data_publicacao?: Date | string | null
    data_inscricao?: Date | string | null
    data_prova?: Date | string | null
    data_gabarito?: Date | string | null
    data_resultado?: Date | string | null
    link_edital?: string | null
    link_pagina?: string | null
    orgao: string
    fase?: $Enums.Fase
    cotas?: ConcursoCreatecotasInput | string[]
    versoes_prova?: ConcursoCreateversoes_provaInput | string[]
    criado_em?: Date | string
    atualizado_em?: Date | string
  }

  export type ConcursoUpdateWithoutBancaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    data_publicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_inscricao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_prova?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_gabarito?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_resultado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    link_edital?: NullableStringFieldUpdateOperationsInput | string | null
    link_pagina?: NullableStringFieldUpdateOperationsInput | string | null
    orgao?: StringFieldUpdateOperationsInput | string
    fase?: EnumFaseFieldUpdateOperationsInput | $Enums.Fase
    cotas?: ConcursoUpdatecotasInput | string[]
    versoes_prova?: ConcursoUpdateversoes_provaInput | string[]
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    cargos?: CargoUpdateManyWithoutConcursoNestedInput
  }

  export type ConcursoUncheckedUpdateWithoutBancaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    data_publicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_inscricao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_prova?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_gabarito?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_resultado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    link_edital?: NullableStringFieldUpdateOperationsInput | string | null
    link_pagina?: NullableStringFieldUpdateOperationsInput | string | null
    orgao?: StringFieldUpdateOperationsInput | string
    fase?: EnumFaseFieldUpdateOperationsInput | $Enums.Fase
    cotas?: ConcursoUpdatecotasInput | string[]
    versoes_prova?: ConcursoUpdateversoes_provaInput | string[]
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    cargos?: CargoUncheckedUpdateManyWithoutConcursoNestedInput
  }

  export type ConcursoUncheckedUpdateManyWithoutBancaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    data_publicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_inscricao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_prova?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_gabarito?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_resultado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    link_edital?: NullableStringFieldUpdateOperationsInput | string | null
    link_pagina?: NullableStringFieldUpdateOperationsInput | string | null
    orgao?: StringFieldUpdateOperationsInput | string
    fase?: EnumFaseFieldUpdateOperationsInput | $Enums.Fase
    cotas?: ConcursoUpdatecotasInput | string[]
    versoes_prova?: ConcursoUpdateversoes_provaInput | string[]
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
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