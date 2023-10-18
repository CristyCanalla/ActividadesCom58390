import { mayorDeEdad, titleCase } from "../ProfileCard";

describe('funciones dentro del componente ProfileCard', ()=>{

  describe('titleCase', () =>{
      test('debe retornar un string', ()=>{
        const result = titleCase('Un valor');
        expect(typeof result).toBe ('string');
      });

      test('debe retornar el string transformado', ()=>{
        expect(titleCase('harry potter y la piedra filosofal')).toBe('Harry Potter Y La Piedra Filosofal');
      });
      
      test('debe devolver un string vacio si recibe un string vacio', ()=>{
      expect(titleCase('')).toBe('');
      });

  });

  describe('mayorDeEdad', ()=>{
    test('debe retornar un boolean',() => {
        expect(typeof mayorDeEdad(19)).toBe('boolean');
  });

  test('si es mayor de edad devuelve true',() => {
    expect(mayorDeEdad(30)).toBeTruthy();
   });

   test('si la edad es 18 debe devolver true',() => {
    expect(mayorDeEdad(18)).toBeTruthy();
    });

    test('si la edad es menor a 18 debe devolver false',() => {
    expect(mayorDeEdad(9)).toBeFalsy();
    });

    test('si la edad es negativa nos devuelve un null',() => {
    expect(mayorDeEdad(-19)).toBeNull();
    });

 });
})