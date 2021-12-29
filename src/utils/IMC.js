export class IMC {
  static calcImc(height, weight) {
    let newImc
    let isAbleToCalcImc = height && weight
    if (isAbleToCalcImc) {
      let heightAsFloat = parseFloat(height.replace(',', '.'))
      let weightAsFloat = parseFloat(weight.replace(',', '.'))
      newImc = (weightAsFloat / heightAsFloat ** 2).toFixed(2)
      return newImc
    }
  }

  static imcClassification(newImc) {
    if (newImc < 18.5) {
      return 'Abaixo do Peso'
    } else if (newImc >= 18.5 && newImc < 25) {
      return 'Peso Normal'
    } else if (newImc >= 25 && newImc < 30) {
      return 'Sobrepeso'
    } else if (newImc >= 30 && newImc < 35) {
      return 'Obesidade Grau I'
    } else if (newImc >= 35 && newImc < 40) {
      return 'Obesidade Grau II'
    } else {
      return 'Obesidade Grau II ou Mórbida'
    }
  }
}
