export declare class MyMap<K extends number | string | symbol = number, V = any> {
    data: Record<K, V>;
    set(key: K, value: V): void;
    has(key: K): boolean;
    get(key: K): V | undefined;
    remove(key: K): boolean;
    clear(): void;
    getAll(): Record<K, V>;
    setAll(arr: Array<Record<K, V>>): void;
}
