export class MtkrutoError extends Error {
}

export class ConnectionError extends MtkrutoError {
}

export class AccessError extends MtkrutoError {
}

export class InputError extends MtkrutoError {
}

export class TransportError extends MtkrutoError {
  constructor(public readonly code: number) {
    super(`Transport error: ${code}`);
  }
}
