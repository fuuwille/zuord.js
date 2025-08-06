import { ZuordType as Type } from '@zuord/type';

export namespace Only {
    export type ResolveRequired<T> = [T] extends [Type.Plain] ? { 
      [K in keyof T as {} extends Pick<T, K> ? K : never]?: Only.ResolveRequired<Exclude<T[K], undefined>>;
    } : T;
}