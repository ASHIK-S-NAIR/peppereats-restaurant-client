// import React,{useState, useEffect} from "react";
// import LunchImage from "../assets/images/menu/1.jpg";
// import DinnerImage from "../assets/images/menu/2.jpg";
// import DrinksImage from "../assets/images/menu/3.jpg";
// import DessertsImage from "../assets/images/menu/4.jpg";

// const Menu = () => {
//     const [menuCategory, setMenuCategory] = useState('lunch');
//     const [menu, setMenu] = useState([]);

//   const menuItems = [
//     {
//       name: "Lunch item",
//       description: "lunch item description",
//       price: 40,
//       image: { LunchImage },
//       category: "lunch",
//     },
//     {
//       name: "Lunch item",
//       description: "lunch item description",
//       price: 40,
//       image: { LunchImage },
//       category: "lunch",
//     },
//     {
//       name: "Lunch item",
//       description: "lunch item description",
//       price: 40,
//       image: { LunchImage },
//       category: "lunch",
//     },
//     {
//       name: "Lunch item",
//       description: "lunch item description",
//       price: 40,
//       image: { LunchImage },
//       category: "lunch",
//     },
//     {
//       name: "Lunch item",
//       description: "lunch item description",
//       price: 40,
//       image: { LunchImage },
//       category: "lunch",
//     },
//     {
//       name: "Lunch item",
//       description: "lunch item description",
//       price: 40,
//       image: { LunchImage },
//       category: "lunch",
//     },
//     {
//       name: "Dinner item",
//       description: "Dinner item description",
//       price: 30,
//       image: { DinnerImage },
//       category: "dinner",
//     },
//     {
//       name: "Dinner item",
//       description: "Dinner item description",
//       price: 30,
//       image: { DinnerImage },
//       category: "dinner",
//     },
//     {
//       name: "Dinner item",
//       description: "Dinner item description",
//       price: 30,
//       image: { DinnerImage },
//       category: "dinner",
//     },
//     {
//       name: "Dinner item",
//       description: "Dinner item description",
//       price: 30,
//       image: { DinnerImage },
//       category: "dinner",
//     },
//     {
//       name: "Drinks item",
//       description: "Drinks item description",
//       price: 20,
//       image: { DrinksImage },
//       category: "drinks",
//     },
//     {
//       name: "Drinks item",
//       description: "Drinks item description",
//       price: 20,
//       image: { DrinksImage },
//       category: "drinks",
//     },
//     {
//       name: "Desserts item",
//       description: "Desserts item description",
//       price: 10,
//       image: { DessertsImage },
//       category: "desserts",
//     },
//     {
//       name: "Desserts item",
//       description: "Desserts item description",
//       price: 10,
//       image: { DessertsImage },
//       category: "desserts",
//     },
//   ];

//   const fetchMenu = async () => {
//     const tempMenu = menuItems.filter(menuItem => menuItem.category === menuCategory)
//     return setMenu(tempMenu);
//   }

//   useEffect(() => {
//     fetchMenu();
//   }, [])
//   return (
//     <section className="menu-section sec-padding" id="our-menu">
//       <div className="container">
//         <div className="row">
//           <div className="section-title">
//             <h2 data-title="order-now" data-aos="fade-up">
//               Our menu
//             </h2>
//           </div>
//         </div>
//         <div className="row">
//           <div className="menu-tabs" data-aos="fade-up">
//             <button
//               type="button"
//               {/* className={`menu-tab-item active ${menuCategory === 'lunch'}`} */}
//               data-target="#lunch"
//               value='lunch'
//               onClick={(e) => setMenuCategory(e.target.value)}
//             >
//               lunch
//             </button>
//             <button
//               type="button"
//               className="menu-tab-item"
//               data-target="#dinner"
//               value='dinner'
//               onClick={(e) => setMenuCategory(e.target.value)}
//             >
//               dinner``
//             </button>
//             <button
//               type="button"
//               className="menu-tab-item"
//               data-target="#drinks"`
//               value='drinks'
//               onClick={(e) => setMenuCategory(e.target.value)}
//             >
//               drinks
//             </button>
//             <button
//               type="button"
//               className="menu-tab-item"
//               data-target="#desserts"
//               value='dessert'
//               onClick={(e) => setMenuCategory(e.target.value)}
//             >
//               desserts
//             </button>
//           </div>
//         </div>
//         {/* <div className="row menu-tab-content active" id="lunch">
//                 <div className="menu-item" data-aos="fade-up-right">
//                     <div className="menu-item-title">
//                         <img src="./img/menu/1.jpg" alt="menu item thumbnail">
//                         <h3>lunch item</h3>
//                     </div>
//                     <div className="menu-item-price">
//                         $40.00
//                     </div>
//                 </div>
//                 <div className="menu-item" data-aos="fade-up-left">
//                     <div className="menu-item-title">
//                         <img src="./img/menu/2.jpg" alt="menu item thumbnail">
//                         <h3>lunch item</h3>
//                     </div>
//                     <div className="menu-item-price">
//                         $40.00
//                     </div>
//                 </div>
//                 <div className="menu-item" data-aos="fade-up-right">
//                     <div className="menu-item-title">
//                         <img src="./img/menu/3.jpg" alt="menu item thumbnail">
//                         <h3>lunch item</h3>
//                     </div>
//                     <div className="menu-item-price">
//                         $40.00
//                     </div>
//                 </div>
//                 <div className="menu-item" data-aos="fade-up-left">
//                     <div className="menu-item-title">
//                         <img src="./img/menu/4.jpg" alt="menu item thumbnail">
//                         <h3>lunch item</h3>
//                     </div>
//                     <div className="menu-item-price">
//                         $40.00
//                     </div>
//                 </div>
//                 <div className="menu-item" data-aos="fade-up-right">
//                     <div className="menu-item-title">
//                         <img src="./img/menu/5.jpg" alt="menu item thumbnail">
//                         <h3>lunch item</h3>
//                     </div>
//                     <div className="menu-item-price">
//                         $40.00
//                     </div>
//                 </div>
//                 <div className="menu-item" data-aos="fade-up-left">
//                     <div className="menu-item-title">
//                         <img src="./img/menu/6.jpg" alt="menu item thumbnail">
//                         <h3>lunch item</h3>
//                     </div>
//                     <div className="menu-item-price">
//                         $40.00
//                     </div>
//                 </div>
//                 <div className="menu-item" data-aos="fade-up-right">
//                     <div className="menu-item-title">
//                         <img src="./img/menu/7.jpg" alt="menu item thumbnail">
//                         <h3>lunch item</h3>
//                     </div>
//                     <div className="menu-item-price">
//                         $40.00
//                     </div>
//                 </div>
//                 <div className="menu-item" data-aos="fade-up-left">
//                     <div className="menu-item-title">
//                         <img src="./img/menu/8.jpg" alt="menu item thumbnail">
//                         <h3>lunch item</h3>
//                     </div>
//                     <div className="menu-item-price">
//                         $40.00
//                     </div>
//                 </div>
//             </div>
//             <div className="row menu-tab-content" id="dinner">
//                 <div className="menu-item" data-aos="fade-up-right">
//                     <div className="menu-item-title">
//                         <img src="./img/menu/1.jpg" alt="menu item thumbnail">
//                         <h3>dinner item</h3>
//                     </div>
//                     <div className="menu-item-price">
//                         $30.00
//                     </div>
//                 </div>
//                 <div className="menu-item" data-aos="fade-up-left">
//                     <div className="menu-item-title">
//                         <img src="./img/menu/2.jpg" alt="menu item thumbnail">
//                         <h3>dinner item</h3>
//                     </div>
//                     <div className="menu-item-price">
//                         $30.00
//                     </div>
//                 </div>
//                 <div className="menu-item" data-aos="fade-up-right">
//                     <div className="menu-item-title">
//                         <img src="./img/menu/3.jpg" alt="menu item thumbnail">
//                         <h3>dinner item</h3>
//                     </div>
//                     <div className="menu-item-price">
//                         $30.00
//                     </div>
//                 </div>
//                 <div className="menu-item" data-aos="fade-up-left">
//                     <div className="menu-item-title">
//                         <img src="./img/menu/4.jpg" alt="menu item thumbnail">
//                         <h3>dinner item</h3>
//                     </div>
//                     <div className="menu-item-price">
//                         $30.00
//                     </div>
//                 </div>
//             </div>
//             <div className="row menu-tab-content" id="drinks">
//                 <div className="menu-item" data-aos="fade-up-right">
//                     <div className="menu-item-title">
//                         <img src="./img/menu/1.jpg" alt="menu item thumbnail">
//                         <h3>drink item</h3>
//                     </div>
//                     <div className="menu-item-price">
//                         $20.00
//                     </div>
//                 </div>
//                 <div className="menu-item" data-aos="fade-up-left">
//                     <div className="menu-item-title">
//                         <img src="./img/menu/2.jpg" alt="menu item thumbnail">
//                         <h3>drink item</h3>
//                     </div>
//                     <div className="menu-item-price">
//                         $20.00
//                     </div>
//                 </div>
//             </div>
//             <div className="row menu-tab-content" id="desserts">
//                 <div className="menu-item" data-aos="fade-up-right">
//                     <div className="menu-item-title">
//                         <img src="./img/menu/1.jpg" alt="menu item thumbnail">
//                         <h3>dessert item</h3>
//                     </div>
//                     <div className="menu-item-price">
//                         $10.00
//                     </div>
//                 </div>
//                 <div className="menu-item" data-aos="fade-up-left">
//                     <div className="menu-item-title">
//                         <img src="./img/menu/2.jpg" alt="menu item thumbnail">
//                         <h3>dessert item</h3>
//                     </div>
//                     <div className="menu-item-price">
//                         $10.00
//                     </div>
//                 </div>
//             </div> */}
//       </div>
//     </section>
//   );
// };

// export default Menu;
