/*
 * @Descripttion: 
 * @Company: HJ
 * @version: v1.0
 * @Author: HJ
 * @Date: 2022-06-04 06:29:47
 * @LastEditors: HJ
 * @LastEditTime: 2022-06-04 06:42:34
 */
export const learn01 = () => {
  console.log(1)
  // 基础类型
  let str: string = 'string';
  let num: number = 12
  let obj: object = { x: 1 }
  let un: undefined = undefined
  let nul: null = null
  let bol: boolean = false
  let sym: symbol = Symbol('sym')
  let big: bigint = 100n

  // 定义数组
  let arrNumber: number[] = [1, 2]
  let arrString: string[] = ['12']
  let arrObj: object[] = [{ x: 1 }]

  let arrNumber1: Array<number> = [12]

  // 联合类型
  let arrUnio: (number | string)[] = [1, '1']

  // 函数
  function fn01(x: number, y: number): number {
    return x + y
  }

  console.log(fn01(1, 2));

  let fn02:(x: number, y: number) => number = function (x: number, y: number): number {
    return x + y
  }
  console.log(fn02(1, 2));

  


}