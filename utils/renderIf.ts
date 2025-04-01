'use strict';

const isFunction = (input: any) => typeof input === 'function';


export default (predicate: any) => (elemOrThunk: () => any ) =>
    predicate ? (isFunction(elemOrThunk) ? elemOrThunk() : elemOrThunk) : null;