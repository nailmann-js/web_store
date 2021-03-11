import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: "Холодильники" },
            { id: 2, name: "Cмартфоны" },
            { id: 3, name: "Ноутбуки" },
            { id: 4, name: "Телевизоры" }
        ];
        this._brands = [
            { id: 1, name: "samsung" },
            { id: 2, name: 'apple' },
            { id: 3, name: "Lenovo" },
            { id: 4, name: 'Asus' },
        ];
        this._devices = [
            { id: 1, name: 'iphone', price: 25000, rating: "5", img: 'https://img.mvideo.ru/Pdb/30052890b.jpg' },
            { id: 2, name: 'iphone', price: 25000, rating: "5", img: 'https://img.mvideo.ru/Pdb/30052890b.jpg' },
            { id: 3, name: 'iphone', price: 26000, rating: "5", img: 'https://img.mvideo.ru/Pdb/30052890b.jpg' },
            { id: 4, name: 'iphone', price: 25555, rating: "5", img: 'https://img.mvideo.ru/Pdb/30052890b.jpg' },
            { id: 5, name: 'iphone', price: 25000, rating: "5", img: 'https://img.mvideo.ru/Pdb/30052890b.jpg' },
            { id: 6, name: 'iphone', price: 26000, rating: "5", img: 'https://img.mvideo.ru/Pdb/30052890b.jpg' },
            { id: 7, name: 'iphone', price: 25555, rating: "5", img: 'https://img.mvideo.ru/Pdb/30052890b.jpg' }
        ];
        this._selectedType = {};
        this._selectedBrand = {};
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    setSelectedType(type) {
        this._selectedType = type;
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }

    get types() {
        return this._types;
    }

    get devices() {
        return this._devices;
    }

    get brands() {
        return this._brands;
    }

    get selectedType() {
        return this._selectedType;
    }

    get selectedBrand() {
        return this._selectedBrand;
    }
}