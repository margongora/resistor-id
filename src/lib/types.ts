export type Color = {
  digit: number | null
  name: string
  multiplier: number | null,
  tolerance: number | null,
  temp_coeff: number | null
}

export type Resistor = {
  value: string,
  tolerance: number
}