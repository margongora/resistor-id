export type Color = {
  digit: number | null
  name: string
  multiplier: number | null,
  tolerance: number | null,
  temp_coeff: number | null
}

export const availableColors: Color[] = [
  {
    digit: 0,
    name: 'Black',
    multiplier: 1,
    tolerance: null,
    temp_coeff: 250
  }, {
    digit: 1,
    name: 'Brown',
    multiplier: 10,
    tolerance: 1,
    temp_coeff: 100
  }, {
    digit: 2,
    name: 'Red',
    multiplier: 100,
    tolerance: 2,
    temp_coeff: 50
  }, {
    digit: 3,
    name: 'Orange',
    multiplier: 1000,
    tolerance: null,
    temp_coeff: 15
  }, {
    digit: 4,
    name: 'Yellow',
    multiplier: 10000,
    tolerance: null,
    temp_coeff: 25
  }, {
    digit: 5,
    name: 'Green',
    multiplier: 100000,
    tolerance: 0.5,
    temp_coeff: 20
  }, {
    digit: 6,
    name: 'Blue',
    multiplier: 1000000,
    tolerance: 0.25,
    temp_coeff: 10
  }, {
    digit: 7,
    name: 'Violet',
    multiplier: 10000000,
    tolerance: 0.1,
    temp_coeff: 5
  }, {
    digit: 8,
    name: 'Gray',
    multiplier: 100000000,
    tolerance: null,
    temp_coeff: 1
  }, {
    digit: 9,
    name: 'White',
    multiplier: 1000000000,
    tolerance: null,
    temp_coeff: null
  }, {
    digit: null,
    name: 'Gold',
    multiplier: 0.1,
    tolerance: 5,
    temp_coeff: null
  }, {
    digit: null,
    name: 'Silver',
    multiplier: 0.01,
    tolerance: 10,
    temp_coeff: null
  }
]
