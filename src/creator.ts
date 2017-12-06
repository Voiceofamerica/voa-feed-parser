// const log = console.log

// interface IParser<TInput, TOutput>  {
//   parse: IParseFunction<TInput, TOutput>
// }

// type IParseFunction<TInput, TOutput> = (input: TInput) => TOutput

// class NumberParser implements IParser<string, number> {
//   parse(input: string): number {
//     return parseInt(input)
//   }
// }

// interface ParameterlessConstructor<T> {
//   new (): T
// }

// class Creator<T> {
//   constructor(private ctor: ParameterlessConstructor<T>) {}
//   getNew() {
//     return new this.ctor()
//   }
// }

// import { IArticle } from '@voiceofamerica/voa-core-shared'
// import { IRssArticle } from './src/rss-interfaces/irssarticle'
// function adaptor(source: IRssArticle): IArticle {
//   for (let prop in source) {

//   }

//   const article: IArticle = {
//     id: source.id
//   }
//    return article
// }

// var creator = new Creator(NumberParser)

// var parser = creator.getNew()
// log(parseInt('0'))
