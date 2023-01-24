export const formatRupiah = (number : number) => (
    new Intl.NumberFormat('id-ID').format(number)
)

export const floatFormat = (number : number, afterComma : number) => (
    Number(number).toFixed(afterComma)
)