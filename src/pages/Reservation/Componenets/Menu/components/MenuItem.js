import React from 'react'

const MenuItem = ({image, name, price}) => {
  return (
    <div className="menu-item" data-aos="fade-up-right">
                    <div className="menu-item-title">
                        <img src="./img/menu/1.jpg" alt="menu item thumbnail" />
                        <h3>lunch item</h3>
                    </div>
                    <div className="menu-item-price">
                        $40.00
                    </div>
                </div>
  )
}

export default MenuItem