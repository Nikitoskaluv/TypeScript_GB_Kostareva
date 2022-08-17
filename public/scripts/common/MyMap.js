export class MyMap {
    constructor() {
        this.data = {};
    }
    set(key, value) {
        this.data[key] = value;
    }
    has(key) {
        return Boolean(this.data[key]);
    }
    get(key) {
        return this.data[key];
    }
    remove(key) {
        if (this.has(key)) {
            delete this.data[key];
            return true;
        }
        return false;
    }
    clear() {
        this.data = {};
    }
    getAll() {
        return this.data;
    }
    setAll(arr) {
        arr.forEach((el) => {
            const key = +Object.getOwnPropertyNames(el);
            this.data[key] = el[key];
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXlNYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbW9uL015TWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sT0FBTyxLQUFLO0lBQWxCO1FBQ0ksU0FBSSxHQUFpQixFQUFrQixDQUFBO0lBK0IzQyxDQUFDO0lBN0JHLEdBQUcsQ0FBQyxHQUFNLEVBQUUsS0FBUTtRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBQ0QsR0FBRyxDQUFDLEdBQU07UUFDTixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQUNELEdBQUcsQ0FBQyxHQUFNO1FBQ04sT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxNQUFNLENBQUMsR0FBTTtRQUNULElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QixPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUNELEtBQUs7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQWtCLENBQUM7SUFDbkMsQ0FBQztJQUNELE1BQU07UUFDRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUE7SUFDcEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUF3QjtRQUMzQixHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDZixNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUM1QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgY2xhc3MgTXlNYXA8SyBleHRlbmRzIG51bWJlciB8IHN0cmluZyB8IHN5bWJvbCA9IG51bWJlciwgViA9IGFueT57XG4gICAgZGF0YTogUmVjb3JkPEssIFY+ID0ge30gYXMgUmVjb3JkPEssIFY+XG5cbiAgICBzZXQoa2V5OiBLLCB2YWx1ZTogVik6IHZvaWQge1xuICAgICAgICB0aGlzLmRhdGFba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgICBoYXMoa2V5OiBLKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuZGF0YVtrZXldKVxuICAgIH1cbiAgICBnZXQoa2V5OiBLKTogViB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFba2V5XTtcbiAgICB9XG4gICAgcmVtb3ZlKGtleTogSyk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuZGF0YVtrZXldO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kYXRhID0ge30gYXMgUmVjb3JkPEssIFY+O1xuICAgIH1cbiAgICBnZXRBbGwoKTogUmVjb3JkPEssIFY+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVxuICAgIH1cbiAgICBcbiAgICBzZXRBbGwoYXJyOiBBcnJheTxSZWNvcmQ8SywgVj4+KTogdm9pZCB7XG4gICAgICAgIGFyci5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gK09iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGVsKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVtrZXldID0gZWxba2V5XVxuICAgICAgICB9KVxuICAgIH1cbn0iXX0=