# TL Code Generator

## Requirements

- High-level generated interface for creating and interacting with TL objects
  (constructors, methods) based on classes.
- Inheritance check support using the `instanceof` operator.
- Efficient TypeScript support.
- Supported in `TLWriter` and `TLReader`.

## Design

```ascii-art
TLObject
 -> Constructor
  -> Type<Predicate>
   -> High-Level TL Constructor Class
 -> Method
   -> High-Level TL Method Class
```

### `TLObject`

This is the base abstract class for all high-level classes, which should be both
implemented and extended by the high-level classes. It has methods to serialize
(write) and deserialize (read) the contents of the high-level classes
(constructor ID, parameters).

The abstractions it enforces are:

- A protected getter to get the constructor ID of the extending class.
- Another protected getter to get the current parameters (their values, their
  types).

These getters are internal, identified by a symbol, and used in the
(de)serialization operations.

### `Constructor` & `Method`

These are empty classes extending `TLObject` so that it is clear to know if a
high-level class is a constructor or a method.

### `Type<Predicate>`

> `TypeUpdate`, `TypeError`, etc.

These are empty classes extending `Constructor` and the parents of the
high-level constructor classes. They allow comparing the parents of the
high-level constructor classes.

> Note: The presence of the getters in `Constructor`, `Method`, and
> `Type<Predicate` won’t make any sense, and they also can’t be ignored. Hence,
> a specific symbol is returned to tell the (de)serializer to error.

### `High-Level TL Constructor Class` & `High-Level TL Method Class`

> `UpdateNewMessage`, `MessagesSendMessage`, etc.

The high-level TL object interfaces with easy-to-use and straightforward APIs.
