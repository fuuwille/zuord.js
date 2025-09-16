import { $ZuordTrait } from "..";
import { ArrayType } from "@zuord/type";

export type Base<TSource, TBase> = true extends (TSource extends any ? $ZuordTrait.Is.Base<TSource, TBase> : never) ? true : false;

export type Any<TSources, TBase> = TSources extends [infer TSource, ...infer TSourceRest] ? (
    [Base<TSource, TBase>] extends [true] ? true : Any<TSourceRest, TBase>
) : false;

export type Every<TSources, TBase> = TSources extends [infer TSource, ...infer TSourceRest] ? (
    [Base<TSource, TBase>] extends [true] ? (TSourceRest extends ArrayType.Empty ? true : Every<TSourceRest, TBase>) : false
) : false;

export type Some<TSource, TBases> = TBases extends [infer TBase, ...infer TBaseRest] ? (
    [Base<TSource, TBase>] extends [true] ? true : Some<TSource, TBaseRest>
) : false;

export type Each<TSource, TBases> = TBases extends [infer TBase, ...infer TBaseRest] ? (
    [Base<TSource, TBase>] extends [true] ? (TBaseRest extends ArrayType.Empty ? true : Each<TSource, TBaseRest>) : false
) : false;

export type AnySome<TSources, TBases> = TSources extends [infer TSource, ...infer TSourceRest] ? (
    [Some<TSource, TBases>] extends [true] ? true : AnySome<TSourceRest, TBases>
) : false;

export type AnyEach<TSources, TBases> = TSources extends [infer TSource, ...infer TSourceRest] ? (
    [Each<TSource, TBases>] extends [true] ? true : AnyEach<TSourceRest, TBases>
) : false;

export type EverySome<TSources, TBases> = TSources extends [infer TSource, ...infer TSourceRest] ? (
    [Some<TSource, TBases>] extends [true] ? (TSourceRest extends ArrayType.Empty ? true : EverySome<TSourceRest, TBases>) : false
) : false;

export type EveryEach<TSources, TBases> = TSources extends [infer TSource, ...infer TSourceRest] ? (
    [Each<TSource, TBases>] extends [true] ? (TSourceRest extends ArrayType.Empty ? true : EveryEach<TSourceRest, TBases>) : false
) : false;