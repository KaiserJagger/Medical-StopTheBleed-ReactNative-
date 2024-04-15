import _ from 'lodash';

const cartCalculator = (props) => {
  const getCartRaw = () => {
    const items = props.items;
    let raw = 0;
    _.each(items, (item) => {
      raw += item.price;
    });
    return (parseFloat(raw).toFixed(2));//
  };
  const getCartRawCreditsApplied = () => {
    const items = props.items;
    let raw = 0;
    _.each(items, (item) => {
      raw += item.price;
    });
    return (parseFloat(raw).toFixed(2) - parseFloat(props.user.appliedCredit)).toFixed(2);
  };
  const getCartTax = () => {
    const raw = getCartRawCreditsApplied();
    const tax = 0.06;
    return parseFloat(raw * tax).toFixed(2);
  };
  const getCartShipping = () => {
    const items = props.items;
    const count = items.length;
    const something = Math.ceil(count / 10);
    const rate = 3.99;
    return parseFloat(rate * something).toFixed(2);
  };
  const getCartTotal = () => {
    const raw = parseFloat(getCartRawCreditsApplied());
    const tax = parseFloat(getCartTax());
    const shipping = parseFloat(getCartShipping());
    return parseFloat(raw + tax + shipping).toFixed(2);
  };
  return { getCartRawCreditsApplied, getCartRaw, getCartTax, getCartShipping, getCartTotal };
};

export default cartCalculator;
