/*
 * @Descripttion: 
 * @Company: HJ
 * @version: v1.0
 * @Author: HJ
 * @Date: 2022-06-04 23:02:12
 * @LastEditors: HJ
 * @LastEditTime: 2022-06-05 00:47:30
 */
export interface ITdoItem {
  id: number,
  name: string,
  done: boolean
}
export type TActive = 'All' | 'Active' | 'Completed'