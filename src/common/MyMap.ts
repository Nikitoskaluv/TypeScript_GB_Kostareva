

export class MyMap<K extends number | string | symbol = number, V = any>{
    data: Record<K, V> = {} as Record<K, V>

    set(key: K, value: V): void {
        this.data[key] = value;
    }
    has(key: K): boolean {
        return Boolean(this.data[key])
    }
    get(key: K): V | undefined {
        return this.data[key];
    }
    remove(key: K): boolean {
        if (this.has(key)) {
            delete this.data[key];
            return true;
        }
        return false;
    }
    clear(): void {
        this.data = {} as Record<K, V>;
    }
    getAll(): Record<K, V> {
        return this.data
    }

    setAll(arr: Array<Record<K, V>>): void {
        arr.forEach((el) => {
            let key: keyof typeof el;
            for (key in el) {
                this.data[key] = el[key];
            }
        })

    }
}
