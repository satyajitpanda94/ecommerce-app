const currencyFormatter= new Intl.NumberFormat('en-IN',{
    currency: "USD",
    style: "currency"
})
export default function formatCurrency(price) {
  return currencyFormatter.format(price);
}
