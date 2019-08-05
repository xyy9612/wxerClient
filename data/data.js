/**
 * 
 * 直供专区
 * 
 */
//直供
const supplyList = [
  {
    "id": "1",
    "img": "../../images/img/car1.png",
    "bigimg": "../../images/img/details.png",
    "title": "儿童滑行车两轮平衡车小孩踏步车",
    "subtitle": "稳固安全环保",
    "price": "0.00",
    "exprice": "100"
  },
  {
    "id": "2",
    "img": "../../images/img/car2.png",
    "title": "儿童滑行车两轮平衡车小孩踏步车",
    "price": "0.00",
    "exprice": "100"
  },
  {
    "id": "3",
    "img": "../../images/img/car3.png",
    "title": "儿童滑行车两轮平衡车小孩踏步车",
    "price": "0.00",
    "exprice": "100"
  },
  {
    "id": "4",
    "img": "../../images/img/car4.png",
    "title": "儿童滑行车两轮平衡车小孩踏步车",
    "price": "0.00",
    "exprice": "100"
  },
  {
    "id": "4",
    "img": "../../images/img/car4.png",
    "title": "儿童滑行车两轮平衡车小孩踏步车",
    "price": "0.00",
    "exprice": "100"
  }, {
    "id": "4",
    "img": "../../images/img/car4.png",
    "title": "儿童滑行车两轮平衡车小孩踏步车",
    "price": "0.00",
    "exprice": "100"
  }, {
    "id": "4",
    "img": "../../images/img/car4.png",
    "title": "儿童滑行车两轮平衡车小孩踏步车",
    "price": "0.00",
    "exprice": "100"
  }
]
// 成交记录
const recordList = [{
  "id": '1564733860'
  },
  {
    "id": '1564733860'
  },
  {
    "id": '1564733860'
  },
  {
    "id": '1564733860'
  },
  {
    "id": '1564733860'
  }

]
/**
 * 购物车 + 我的订单
 */
const shoppingData = [{
    id: 1,
    image: "../../images/img/car1.png",
    title: "儿童滑行车两轮平衡车小孩踏步车踏步车踏步车踏步车",
    color: '白色',
    age: '5-6岁',
    size: 'S',
    order: '11977240',
    num: 1,
    price: 180,
    selected: false,
    type: 1
  },
  {
    id: 2,
    image: "../../images/img/car1.png",
    title: "儿童滑行车两轮平衡车小孩踏步车踏步车踏步车踏步车",
    color: '白色',
    size: 'S',
    age: '5-6岁',
    order: '11977240',
    num: 1,
    price: 10,
    selected: false,
    type: 2
  },
  {
    id: 3,
    image: "../../images/img/car1.png",
    title: "儿童滑行车两轮平衡车小孩踏步车踏步车踏步车踏步车",
    color: '白色',
    size: 'S',
    age: '5-6岁',
    order: '11977240',
    num: 1,
    price: 40,
    selected: false,
    type: 2
  },
  {
    id: 4,
    image: "../../images/img/car1.png",
    title: "儿童滑行车两轮平衡车小孩踏步车踏步车踏步车踏步车",
    color: '白色',
    size: 'S',
    age: '5-6岁',
    order: '11977240',
    num: 1,
    price: 40,
    selected: false,
    type: 4
  },
  {
    id: 5,
    image: "../../images/img/car1.png",
    title: "儿童滑行车两轮平衡车小孩踏步车踏步车踏步车踏步车",
    color: '白色',
    size: 'S',
    age: '5-6岁',
    order: '11977240',
    num: 1,
    price: 40,
    selected: false,
    type: 5
  }
]

/**
 *  我的 功能入口
 */
const my_entrance = [{
    img: '../../images/img/dfk.png',
    funtext: '待付款'
  },
  {
    img: '../../images/img/dfh.png',
    funtext: '待发货'
  },
  {
    img: '../../images/img/dsh.png',
    funtext: '待收货'
  },
  {
    img: '../../images/img/dpj.png',
    funtext: '待评价'
  },
  {
    img: '../../images/img/thwq.png',
    funtext: '退货维权'
  },
]

module.exports = {
  supplyList: supplyList,
  recordList: recordList,
  shoppingData: shoppingData,
  my_entrance: my_entrance
}