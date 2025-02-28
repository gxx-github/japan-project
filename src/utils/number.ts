/**
 * @description: 将数字转换成千分制
 * @param  {*} 需要转换的数字 例如1000
 * @return {*} 转换格式后的数据 1,000
 */
export function formatThousand(number: any) {
  if (!number && number !== 0) {
    return "";
  } else {
    let str = typeof number === "string" ? number : number.toString();
    let arr = str.split(".");

    const positive = arr[0]
      .split("")
      .reverse()
      .reduce((prev: any, next: any, index: any) => {
        return (index % 3 ? next : next + ",") + prev;
      });
    return arr.length >= 2 ? positive + "." + arr[1] : positive;
  }
}

/**
 * @description: 格式化数字小数位精度
 */
export function formatDecimalLen(val: number, precision: number = 2) {
  if (!(val + "")) {
    return "0";
  }
  let tsmNumStr = String(val);
  if (tsmNumStr.indexOf(".") != -1) {
    let tsmNumArr = tsmNumStr.split(".");
    if (tsmNumArr[1].length > precision) {
      let smallPointNum = tsmNumArr[1].slice(0, precision);
      let showNum = `${tsmNumArr[0]}.${smallPointNum}`;
      return `${formatThousand(Number(showNum))}`;
    } else {
      return `${formatThousand(Number(tsmNumStr))}`;
    }
  } else {
    return `${formatThousand(val)}`;
  }
}
export const formatAmount = (amount: string,len:number) => {
  const z = amount.split(".");
  const decimal = len || 4;
  if (z[1] && z[1].length > decimal) {
    // 拼接后的字符串去除末位0之后再返回
    return Number(z[0] + "." + z[1].slice(0, decimal)).toString();
  }
  return amount;
};
/**
 * @description: Hash和Address前5后6位，中间...格式
 * @param  {*} 需要转换的数字 例如0x339fff8a0330281f1154caffd16af84108416de6
 * @return {*} 转换格式后的数据 0x339...416de6
 */
export function formatEllipsis(value: string) {
  if (!value) {
    return value;
  } else {
    return `${value.substring(0, 6)}...${value.substring(value.length - 4)}`;
  }
}

/**
 * 服务端返回的字符串值，小数超过2个，只截取2个，如果没有小数，或者小数不足2个，补齐
 */
export function decimal2(val: string) {
  if (!val) {
    return "";
  }
  if (val.indexOf(".") !== -1) {
    if (val.split(".")[1].length >= 2) {
      return `${formatThousand(val.split(".")[0])}.${val
        .split(".")[1]
        .slice(0, 2)}`;
    } else {
      return `${formatThousand(val)}0`;
    }
  } else {
    return `${formatThousand(val)}.00`;
  }
}
