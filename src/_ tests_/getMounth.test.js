import { getMonth } from "../getMounth";

describe("Проверка месяца",() => {
    it("3 = Март", () => expect(getMonth(3)).toBe('март'));//успешное выполнение функции
    it("0 = число не может быть меньше 1", () => expect(getMonth(0)).toBe('число не может быть меньше 1'));//Угловой тест-кейс
    it("13 = число не может быть больше 12", () => expect(getMonth(13)).toBe('число не может быть больше 12'));//Угловой тест-кейс
    it("1 = март", () => expect(getMonth(1)).toBe('март'));//не успешное выполнение функции
    it("2 = январь", () => expect(getMonth(2)).toBe('январь'));//не успешное выполнение функции
    it("1 = январь", () => expect(getMonth(1)).toBe('январь'));//unit-тест
    it("2 = февраль", () => expect(getMonth(2)).toBe('февраль'));//unit-тест
    it("3 = март", () => expect(getMonth(3)).toBe('март'));//unit-тест
    it("4 = апрель", () => expect(getMonth(4)).toBe('апрель'));//unit-тест
    it("5 = май", () => expect(getMonth(5)).toBe('май'));//unit-тест
    it("6 = июнь", () => expect(getMonth(6)).toBe('июнь'));//unit-тест
    it("7 = июль", () => expect(getMonth(7)).toBe('июль'));//unit-тест
    it("8 = август", () => expect(getMonth(8)).toBe('август'));//unit-тест
    it("9 = сентябрь", () => expect(getMonth(9)).toBe('сентябрь'));//unit-тест
    it("10 = октябрь", () => expect(getMonth(10)).toBe('октябрь'));//unit-тест
    it("11 = ноябрь", () => expect(getMonth(11)).toBe('ноябрь'));//unit-тест
    it("12 = декабрь", () => expect(getMonth(12)).toBe('декабрь'));//unit-тест
});