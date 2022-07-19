import {
  HomePage,
  LoginPage,
  BuyTicketPage,
  BuyItemPage,
  CartPage,
  TicketsPage,
  NotFound,
  ItemPage,
  FinanceManagements,
} from "../pages";

// Auth routes
const authRoutes = [
  { path: "/login", component: LoginPage },
  { path: "/register", component: LoginPage },
];

// User routes
const userRoutes = [
  { path: "/", component: HomePage, title: "Trang chủ" },
  { path: "/tickets", component: BuyTicketPage, title: "Mua vé" },
  { path: "/items", component: BuyItemPage, title: "Mua đồ bơi" },
  { path: "/cart", component: CartPage, title: "Giỏ hàng" },
  { path: "*", component: NotFound, title: "404" },
];

// Admin routes
const adminRoutes = [
  { path: "/admin/tickets", component: TicketsPage, title: "Bán vé" },
  { path: "/admin/items", component: ItemPage, title: "Đồ bơi" },
  {
    path: "/admin/finance-managements",
    component: FinanceManagements,
    title: "Quản lý thu chi",
  },
  { path: "*", component: NotFound, title: "404" },
];

export { authRoutes, userRoutes, adminRoutes };
