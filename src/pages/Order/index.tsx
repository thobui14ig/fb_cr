/* eslint-disable tailwindcss/no-custom-classname */
import timeAgo from 'utils/time'
import './index.scss'
import { Button } from 'antd'

function OrderPage() {
  return (
    <div className="latest-order">
      <div className={`latest-order-item new`}>
        <span className="name item-m3">
          Thobui<span className={`is-new'}`}>({timeAgo(new Date())})</span>
        </span>
        <span className="item-m3">GroupId: 1</span>
        <span className="item-m3">Nội dung: abcd</span>
        <div className="press-order">
          <Button type="primary">Nhận ngay</Button>
          <Button type="primary">Xem</Button>
        </div>
      </div>
    </div>
  )
}

export default OrderPage
