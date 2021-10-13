export type FormValidationHandler<T> = () => Promise<Error | null | T>

export type FormValidationBuilder<T> = (input: T) => FormValidationHandler<T>
